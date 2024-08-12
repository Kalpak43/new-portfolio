import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Resume | Kalpak Goshikwar",
  description:
    "Get to know about my technical expertise and my experience in tech world.",
};

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
