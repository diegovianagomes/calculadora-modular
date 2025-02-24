"use client";

import { signOut } from "firebase/auth";
import { auth } from "@/lib/firebase";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export function LogoutButton() {
  const [loading, setLoading] = useState(false);

  const handleLogout = async () => {
    setLoading(true);
    try {
      await signOut(auth);
      console.log("Usuário deslogado com sucesso!");
    } catch (error) {
      console.error("Erro ao fazer logout:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Button onClick={handleLogout} disabled={loading} className=" pb-0 pt-0 pl-0 pr-0 text-right justify-end items-center gap-2 bg-transparent text-purple-600 hover:underline hover:bg-transparent hover:text-purple-800">
      {loading ? "Saindo..." : "Sair"}
    </Button>
  );
}