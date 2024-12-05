import type { Metadata } from "next";
import "@/styles/index.css";
import Header from "@/components/header";
import Footer from "@/components/footer";

export const metadata: Metadata = {
  title: "Compound Interest Calculator",
  description:
    "You can calculate the future value of your investment with compound interest.",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className="flex flex-col">
        <Header />
        <main className="grow p-4">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
