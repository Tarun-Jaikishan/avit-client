"use client";

import Loading from "@/components/common/Loading";
import { createContext, useState } from "react";

export const loadingContext = createContext();

export default function LoadingProvider({ children }) {
  const [loading, setLoading] = useState(false);

  return (
    <loadingContext.Provider value={{ setLoading }}>
      {children}

      {/* Loading */}
      {loading && <Loading />}
    </loadingContext.Provider>
  );
}
