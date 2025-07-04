"use client";
import React, { createContext, useContext, ReactNode } from "react";
import type { Villa } from "../types/Villa.tsx";

type VillaContextType = Villa[] | null;

const VillaContext = createContext<VillaContextType>(null);

interface VillaProviderProps {
  data: Villa[];
  children: ReactNode;
}

export function VillaDataProvider({ data, children }: VillaProviderProps) {
  return <VillaContext.Provider value={data}>{children}</VillaContext.Provider>;
}

export function useVillas() {
  const context = useContext(VillaContext);
  if (context === null) {
    throw new Error("contxt is null");
  }
  return context;
}
