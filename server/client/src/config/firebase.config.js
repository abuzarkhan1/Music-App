import { getApp, getApps, initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
const firebaseConfig = {
  apiKey: "AIzaSyBR9TQtUxjxfz6oWchVMIdch3NRGLybZZo",
  authDomain: "project-musicap.firebaseapp.com",
  projectId: "project-musicap",
  storageBucket: "project-musicap.appspot.com",
  messagingSenderId: "341234405561",
  appId: "1:341234405561:web:38ad63a8d83e8c2e7b0b68"
};

const app = getApps.length > 0 ? getApp() : console.log(firebaseConfig); initializeApp(firebaseConfig);
const storage = getStorage(app);

export { app, storage };
