import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCrieMqymhi-qqFkAdcxk2EsrHrcJE3ra8",
  authDomain: "productos-bautista-frias.firebaseapp.com",
  projectId: "productos-bautista-frias",
  storageBucket: "productos-bautista-frias.appspot.com",
  messagingSenderId: "254097546002",
  appId: "1:254097546002:web:76829f767e1152baa731cb",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
