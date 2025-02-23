"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { signUpWithEmail } from "@/lib/firebase";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";

export function SignUpForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSignUp = async () => {
    setLoading(true);
    try {
      await signUpWithEmail(email, password);
      toast.success(
        "Cadastro realizado com sucesso! Verifique seu email para confirmar o cadastro."
      );
      router.push("/verify-email");
    } catch (err: any) {
      if (err.code === "auth/email-already-in-use") {
        toast.error("Este email já está em uso. Tente outro ou faça login.");
      } else {
        toast.error(err.message || "Erro ao cadastrar usuário.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-4">
      <h2 className="text-lg font-semibold text-purple-700">Cadastro</h2>
      <Input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="bg-purple-100 text-purple-700 placeholder:text-purple-500 focus:placeholder:text-purple-700 focus:border-purple-700 focus:ring-purple-700"
      />
      <Input
        type="password"
        placeholder="Senha"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="bg-purple-100 text-purple-700 placeholder:text-purple-500 focus:placeholder:text-purple-700 focus:border-purple-700 focus:ring-purple-700"
      />
      <Button
        onClick={handleSignUp}
        disabled={loading}
        className="pixel-border w-full bg-gradient-to-r from-pink-400 to-purple-400 font-sans text-lg hover:from-pink-500 hover:to-purple-500"
      >
        {loading ? "Carregando..." : "Cadastrar"}
      </Button>
    </div>
  );
}