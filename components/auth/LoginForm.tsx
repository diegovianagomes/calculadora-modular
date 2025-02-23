"use client";

import { useState } from "react";
import { signInWithEmail } from "@/lib/firebase";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleLogin = async () => {
    setLoading(true);
    setError("");
    try {
      await signInWithEmail(email, password);
      alert("Login realizado com sucesso!");
    } catch (err: any) {
      setError(err.message || "Erro ao fazer login.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-4">
      <h2 className="text-lg font-semibold text-purple-700">Login</h2>
      {error && <p className="text-purple-300">{error}</p>}
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
      <Button onClick={handleLogin} disabled={loading} className="pixel-border w-full bg-gradient-to-r from-pink-400 to-purple-400 font-sans text-lg hover:from-pink-500 hover:to-purple-500">
        {loading ? "Carregando..." : "Entrar"}
      </Button>
    </div>
  );
}