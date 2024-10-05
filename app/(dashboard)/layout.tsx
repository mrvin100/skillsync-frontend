import AuthWrapper from "@/components/auth/AuthWrapper";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      Dashboard navbar
      <AuthWrapper>{children}</AuthWrapper>
    </div>
  );
}
