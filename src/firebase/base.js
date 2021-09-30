import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
const firebaseConfig = {
    apiKey: "AIzaSyBGSNIPDjxkvq5OHDM0f8Vd-IXFhZbfARM",
    authDomain: "fir-react-upload-12b85.firebaseapp.com",
    projectId: "fir-react-upload-12b85",
    storageBucket: "fir-react-upload-12b85.appspot.com",
    messagingSenderId: "162438226825",
    appId: "1:162438226825:web:07e441c6de979fce84f758",
    measurementId: "G-17ZCNJLL7F"
};

export const app = initializeApp(firebaseConfig);
const db = getFirestore(app);