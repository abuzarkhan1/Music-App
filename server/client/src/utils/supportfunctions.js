import { deleteObject, ref } from "firebase/storage";
import { storage } from "../config/firebase.config";

export const filters = [
  { id: 2, name: "Jasp", value: "jasp" },
  { id: 3, name: "Rock", value: "rock" },
  { id: 4, name: "Hip-Pop", value: "hip-pop" },
  { id: 5, name: "Rythem", value: "Rythem" },
];

export const filterByLanguage = [
  { id: 1, name: "Urdu", value: "urdu" },
  { id: 2, name: "English", value: "english" },
  { id: 3, name: "Pashto", value: "pashto" },
  { id: 4, name: "Arabic", value: "arabic" },
  { id: 5, name: "Hindi", value: "hindi" },
];

export const deleteAnObject = (referenceUrl) => {
  const deleteRef = ref(storage, referenceUrl);
  deleteObject(deleteRef)
    .then(() => {
      return true;
    })
    .catch((error) => {
      return false;
    });
};
