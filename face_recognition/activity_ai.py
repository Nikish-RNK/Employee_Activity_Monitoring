import cv2
import base64
import numpy as np
from flask import Flask, request, jsonify
from flask_cors import CORS
import face_recognition

app = Flask(__name__)
CORS(app)


@app.route("/analyze", methods=["POST"])
def analyze():
    try:
        data = request.get_json()
        image_data = data.get("image")

        if not image_data:
            return jsonify({"status": "no_image", "box": None})

        # decode image
        image_bytes = base64.b64decode(image_data.split(",")[1])
        np_arr = np.frombuffer(image_bytes, np.uint8)
        frame = cv2.imdecode(np_arr, cv2.IMREAD_COLOR)

        rgb = cv2.cvtColor(frame, cv2.COLOR_BGR2RGB)

        face_locations = face_recognition.face_locations(rgb)

        if len(face_locations) == 0:
            return jsonify({"status": "no_face", "box": None})

        top, right, bottom, left = face_locations[0]

        center = (left + right) / 2
        frame_width = frame.shape[1]
        ratio = center / frame_width

        if ratio < 0.3 or ratio > 0.7:
            return jsonify(
                {
                    "status": "distracted",
                    "box": {"top": top, "right": right, "bottom": bottom, "left": left},
                }
            )

        return jsonify(
            {
                "status": "attentive",
                "box": {"top": top, "right": right, "bottom": bottom, "left": left},
            }
        )

    except Exception as e:
        print("ERROR:", e)
        return jsonify({"status": "error", "box": None})


if __name__ == "__main__":
    print("AI Server running at http://localhost:5002")
    app.run(host="0.0.0.0", port=5002, debug=True)
