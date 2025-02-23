"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { useEffect } from "react";
import { getAuth, onAuthStateChanged, sendEmailVerification} from "firebase/auth";

export default function VerifyEmailPage() {
  const { toast } = useToast();

  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user && user.emailVerified) {
        // Se o email já foi verificado, redirecione para a aplicação
        window.location.href = "/";
      }
    });

    return () => unsubscribe(); // Limpar o listener ao desmontar o componente
  }, []);

  const handleResendEmail = async () => {
    try {
      const auth = getAuth();
      const user = auth.currentUser;
  
      if (user) {
        // Enviar email de verificação
        await sendEmailVerification(user);
  
        toast({
          title: "Email reenviado",
          description: "Um novo email de verificação foi enviado.",
        });
      } else {
        toast({
          title: "Erro",
          description: "Nenhum usuário logado.",
          variant: "destructive",
        });
      }
    } catch (error) {
      console.error("Erro ao reenviar email de verificação:", error);
      toast({
        title: "Erro",
        description: "Não foi possível reenviar o email de verificação.",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-2xl font-bold mb-4">Verifique seu Email</h1>
      <p className="mb-4 text-center">
        Um email de verificação foi enviado para o seu endereço de email.
        Por favor, verifique sua caixa de entrada e clique no link para confirmar seu email.
      </p>
      <Button onClick={handleResendEmail} className="mb-4">
        Reenviar Email de Verificação
      </Button>
      <Link href="/" passHref>
        <Button variant="outline">Voltar para a Página Inicial</Button>
      </Link>
    </div>
  );
}