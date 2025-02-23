import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword, sendEmailVerification } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA_0MK3So6JXL8ITkueUt2uhtz7YiITx2c",
  authDomain: "calculadora-modular-5db4b.firebaseapp.com",
  projectId: "calculadora-modular-5db4b",
  storageBucket: "calculadora-modular-5db4b.firebasestorage.app",
  messagingSenderId: "598750836493",
  appId: "1:598750836493:web:150ea4f3b140265aa82244",
  measurementId: "G-VP3RBZ0GX2"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export const db = getFirestore(app);

// Função para cadastrar usuário com email e senha
export const signUpWithEmail = async (email: string, password: string) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;

    // Enviar email de verificação
    await sendEmailVerification(user);

    console.log("Usuário cadastrado:", user.email);
    return user;
  } catch (error) {
    console.error("Erro ao cadastrar usuário:", error);
    throw error;
  }
};

// Função para fazer login com email e senha
export const signInWithEmail = async (email: string, password: string) => {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;

    // Verificar se o email foi confirmado
    if (!user.emailVerified) {
      throw new Error("Por favor, verifique seu email antes de fazer login.");
    }

    console.log("Usuário logado com sucesso!", user);
    return user;
  } catch (error) {
    console.error("Erro ao logar usuário:", error);
    throw error;
  }
};