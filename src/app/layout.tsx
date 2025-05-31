import type { Metadata } from "next";
import "./globals.css";
import ProfileCard from "@/components/ProfileCard";
import Navbar from "@/components/Navbar";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Kalpak Goshikwar",
  description:
    "Kalpak Goshikwar is a versatile developer with expertise in frontend and backend development. With a focus on using Next.js and Tailwind CSS, Kalpak crafts dynamic web applications and intuitive user interfaces, bringing a seamless and engaging user experience to life.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.className} text-base-font`}>{children}</body>
    </html>
  );
}
