import cv2
import base64
import numpy as np
import json
from flask import Flask, request, jsonify
from flask_cors import CORS
import face_recognition

app = Flask(__name__)
CORS(app)


def load_encodings():
    try:
        with open("encodings.json", "r") as f:
            data = json.load(f)
        return data.get("encodings", []), data.get("names", [])
    except Exception as e:
        print("ENCODING ERROR:", e)
        return [], []


@app.route("/api/face-recognize", methods=["POST"])
def recognize():
    try:
        data = request.get_json(silent=True) or {}
        image_data = data.get("image")

        if not image_data:
            return jsonify({"results": []})

        if "," in image_data:
            image_data = image_data.split(",")[1]
        else:
            return jsonify({"results": []})

        image_bytes = base64.b64decode(image_data)
        np_arr = np.frombuffer(image_bytes, np.uint8)
        frame = cv2.imdecode(np_arr, cv2.IMREAD_COLOR)

        if frame is None:
            return jsonify({"results": []})

        rgb = cv2.cvtColor(frame, cv2.COLOR_BGR2RGB)

        face_locations = face_recognition.face_locations(rgb)
        encodings = face_recognition.face_encodings(rgb, face_locations)

        known_encodings, known_names = load_encodings()

        results = []

        for (top, right, bottom, left), face_encoding in zip(face_locations, encodings):
            name = "Unknown"

            if known_encodings:
                matches = face_recognition.compare_faces(
                    known_encodings, face_encoding, tolerance=0.5
                )
                distances = face_recognition.face_distance(
                    known_encodings, face_encoding
                )

                if len(distances) > 0:
                    best_idx = int(np.argmin(distances))
                    if matches[best_idx]:
                        name = known_names[best_idx]

            results.append(
                {
                    "name": name,
                    "box": {
                        "top": int(top),
                        "right": int(right),
                        "bottom": int(bottom),
                        "left": int(left),
                    },
                }
            )

        return jsonify({"results": results})

    except Exception as e:
        import traceback

        print("PYTHON CRASH:")
        traceback.print_exc()
        return jsonify({"results": []})


@app.route("/ping")
def ping():
    return "OK"


if __name__ == "__main__":
    print("Python running at http://127.0.0.1:5001")
    app.run(host="0.0.0.0", port=5001, debug=False)
