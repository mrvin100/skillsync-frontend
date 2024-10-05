import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useEffect } from "react";

interface User {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  role: "client" | "worker" | "admin";
}

interface Session {
  user: User;
  accessToken: string;
}

export const useAuth = (requiredRole?: "client" | "worker" | "admin") => {
  const { data: session, status } = useSession() as {
    data: Session | null;
    status: "loading" | "authenticated" | "unauthenticated";
  };
  const router = useRouter();

  useEffect(() => {
    if (status === "loading") return;
    if (!session) router.push("/login");
    if (requiredRole && session?.user?.role !== requiredRole) {
      router.push("/unauthorized");
    }
  }, [session, status, requiredRole, router]);

  return { session, status };
};
