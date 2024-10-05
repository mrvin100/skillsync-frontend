import NextAuth, {
  DefaultSession,
  NextAuthOptions,
  User as NextAuthUser,
} from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

interface User extends NextAuthUser {
  firstName: string;
  lastName: string;
  role: "client" | "worker" | "admin";
  accessToken: string;
}

interface Session {
  user: User;
  accessToken: string;
  expires: string;
}

declare module "next-auth" {
  interface Session extends DefaultSession {
    user: User;
    accessToken: string;
  }
  interface User {
    firstName: string;
    lastName: string;
    role: "client" | "worker" | "admin";
    accessToken: string;
  }
}

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          return null;
        }

        // call authentication api
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/auth/login`,
          {
            method: "POST",
            body: JSON.stringify(credentials),
            headers: { "Content-Type": "application/json" },
          }
        );
        const user = await res.json();
        if (res.ok && user) {
          return user;
        } else {
          return null;
        }
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.email = user.email;
        token.firstName = user.firstName;
        token.lastName = user.lastName;
        token.role = user.role;
        token.accessToken = user.accessToken;
      }
      return token;
    },
    async session({ session, token }): Promise<Session> {
      return {
        ...session,
        user: {
          id: token.id,
          email: token.email,
          firstName: token.fisrtName,
          lastName: token.lastName,
          role: token.role,
        } as User,
        accessToken: token.accessToken,
        expires: session.expires
      } as Session;
    },
  },
  pages: {
    signIn: "/sign-in",
  },
  session: {
    strategy: "jwt",
  },
  secret: process.env.NEXTAUTH_SECRET,
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
