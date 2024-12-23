import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "GetSetDeploy - Dashboard",
  description: "Our Focalboard Dashboard",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
