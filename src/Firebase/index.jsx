import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDu9roM1q92Rfvu87eoa-Qnes_6EuajPVc",
  authDomain: "colegio-e6fc3.firebaseapp.com",
  projectId: "colegio-e6fc3",
  storageBucket: "colegio-e6fc3.appspot.com",
  messagingSenderId: "544729660535",
  appId: "1:544729660535:web:dbbae2fb3c9f5823619a72"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app)
export {db}