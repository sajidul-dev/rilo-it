import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import ClientSideToastContainer from "@/components/Shared/ToastContainer/ToastContainer";
import AuthProvider from "@/context/AuthProvider";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "RILO IT & Software LTD.",
  description: "Rilo It is a wellknown IT company in CTG",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased `}
      >
        <AuthProvider>
          <ClientSideToastContainer />
          {/* <Navbar /> */}
          {children}
          {/* <Footer /> */}
        </AuthProvider>
      </body>
    </html>
  );
}
