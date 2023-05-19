import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyCEQ9HW6A5HBEuMJ4VH-SGE6SwLYgwDdPQ",
  authDomain: "countdown-9be06.firebaseapp.com",
  projectId: "countdown-9be06",
  storageBucket: "countdown-9be06.appspot.com",
  messagingSenderId: "629669067251",
  appId: "1:629669067251:web:4ff7feb1d867af5ef2ba86",
  measurementId: "G-PTTT7P8LG1"
};


const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);