"use client";

import { useSession } from "next-auth/react";

interface AuthWrapperProps {
  children: React.ReactNode;
}

export default function AuthWrapper({ children }: AuthWrapperProps) {
  const { data: session, status } = useSession();

  if (status === "loading") {
    return <div>Loading ...</div>;
  }

  if (!session) {
    return <div>Please sign in to access this page.</div>;
  }

  return <>{children}</>;
}
