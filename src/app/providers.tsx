"use client";
import "@/lib/amplify";
import React from "react";

type ProvidersProps = {
  children: React.ReactNode;
};

export default function Providers({ children }: ProvidersProps) {
  return <>{children}</>;
}
