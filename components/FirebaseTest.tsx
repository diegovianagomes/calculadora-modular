"use client";

import { useEffect } from "react";
import { auth } from "@/lib/firebase";

export function FirebaseTest() {
  useEffect(() => {
    console.log("Firebase inicializado:", auth);
  }, []);

  return <div>Firebase está conectado!</div>;
}