import type { Metadata } from "next";
import "./globals.css";
import { IBM_Plex_Mono, Poppins } from "next/font/google";

const poppins = Poppins({
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  variable: "--font-poppins",
});

const IBMMono = IBM_Plex_Mono({
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  variable: "--font-ibm-mono",
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
      <body
        className={`${poppins.className} ${IBMMono.variable} text-base-font`}
      >
        {children}
      </body>
    </html>
  );
}
