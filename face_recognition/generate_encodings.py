import face_recognition
import os
import json

dataset_path = "dataset"

known_encodings = []
known_names = []

print("[INFO] Generating encodings...")

for file in os.listdir(dataset_path):

    if file.endswith(".jpg"):

        path = os.path.join(dataset_path, file)

        #remove index (_0, _1)
        name = "_".join(file.split("_")[:2])

        image = face_recognition.load_image_file(path)
        encodings = face_recognition.face_encodings(image)

        if len(encodings) > 0:
            known_encodings.append(encodings[0])
            known_names.append(name)

            print("Encoded:", file)
        else:
            print("No face found:", file)

data = {"encodings": [enc.tolist() for enc in known_encodings], "names": known_names}

with open("encodings.json", "w") as f:
    json.dump(data, f)

print("Encodings updated")
