import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects | Kalpak Goshikwar",
  description:
    "Explore the variety of projects made by me through out the journey.",
};

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
