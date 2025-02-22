// lib/firebase.ts
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Configuração do Firebase
const firebaseConfig = {
  apiKey: "AIzaSyA_0MK3So6JXL8ITkueUt2uhtz7YiITx2c",
  authDomain: "calculadora-modular-5db4b.firebaseapp.com",
  projectId: "calculadora-modular-5db4b",
  storageBucket: "calculadora-modular-5db4b.firebasestorage.app",
  messagingSenderId: "598750836493",
  appId: "1:598750836493:web:150ea4f3b140265aa82244",
  measurementId: "G-VP3RBZ0GX2"
};

// Inicializa o Firebase
const app = initializeApp(firebaseConfig);

// Exporta os serviços do Firebase que você deseja usar
export const auth = getAuth(app);
export const db = getFirestore(app);