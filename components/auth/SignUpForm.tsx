"use client";
import { useRouter } from "next/navigation";

import { useState } from "react";
import { signUpWithEmail } from "@/lib/firebase";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function SignUpForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const router = useRouter()
  

  const handleSignUp = async () => {
    setLoading(true);
    setError("");
    try {
      await signUpWithEmail(email, password);
      alert(
        "Cadastro realizado com sucesso! Verifique seu email para confirmar o cadastro."
      );
      router.push("/verify-email");
    } catch (err: any) { 
      if (err.code === "auth/email-already-in-use") {
        setError("Este email já está em uso. Tente outro ou faça login.");
      } else {
        setError(err.message || "Erro ao cadastrar usuário.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-4">
      <h2 className="text-lg font-semibold">Cadastro</h2>
      {error && <p className="text-red-500">{error}</p>}
      <Input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <Input
        type="password"
        placeholder="Senha"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <Button onClick={handleSignUp} disabled={loading}>
        {loading ? "Carregando..." : "Cadastrar"}
      </Button>
    </div>
  );
}