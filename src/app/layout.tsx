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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppins.className + " px-4 md:px-20 py-10 grid grid-cols-1 lg:grid-cols-3 grid-row-1 gap-4 h-[100dvh] bg-black"}>
        <ProfileCard />
        <div className="lg:col-span-2 space-y-4 flex flex-col flex-nowrap">
          <Navbar />
          <div className="bg-base-300 rounded-xl flex-1 relative">
            <div className="absolute top-0 left-0 h-full w-full overflow-y-scroll p-4">
              {children}
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
