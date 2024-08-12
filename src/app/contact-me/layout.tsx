import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact | Kalpak Goshikwar",
  description:
    "Get in touch with me for collaborations, opportunities, or just to say hello!",
};

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
