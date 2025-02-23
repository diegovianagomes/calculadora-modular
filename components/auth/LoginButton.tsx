"use client";
import { useState } from "react";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { auth, googleProvider } from "@/lib/firebase";
import { Button } from "@/components/ui/button";
import { IconBrandGoogle } from "@tabler/icons-react";

export default function LoginButton() {
    const [ loading, setLoading ] = useState(false);

    const handleLogin = async () => {
        setLoading(true);

        try {
            await signInWithPopup(auth, googleProvider);
            console.log("Usuário logado com sucesso!");
        } catch (error) {
            console.error("Erro ao logar com Google:", error);
        } finally {
            setLoading(false);
        }
    }

    return (
        <button onClick={handleLogin} disabled={loading} className="flex items-center gap-2 text-purple-600">
            <IconBrandGoogle size={18} />
            {loading ? "Carregando..." : "Entrar com Google"}
        </button>
    )
}
    


