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
  description: "Kalpak Goshikwar is a versatile developer with expertise in frontend and backend development. With a focus on using Next.js and Tailwind CSS, Kalpak crafts dynamic web applications and intuitive user interfaces, bringing a seamless and engaging user experience to life."
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={
          poppins.className +
          " px-4 md:px-10 lg:px-20 py-10 pb-28 md:pb-10 lg:grid grid-cols-1 lg:grid-cols-3 grid-row-1 gap-4 min-h-[100dvh] lg:h-[100dvh] bg-black "
        }
      >
        <div className="bg"></div>
        <ProfileCard />
        <div className="lg:col-span-2 space-y-4 flex flex-col flex-nowrap">
          <Navbar />
          <div className="bg-base-300 rounded-xl flex-1 relative">
            <div
              className="lg:absolute top-0 left-0 h-full w-full overflow-y-scroll p-4 scrollbar scrollbar-thumb-blue-600 scrollbar-thumb-rounded"
              id="sc"
            >
              {children}
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
