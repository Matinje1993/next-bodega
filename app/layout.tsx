import type { Metadata } from "next";
import "./globals.css";
import { siteConfig } from "@/config/site";
import { MenuProvider } from "@/providers/menu-provider";
import Body from "@/components/layout-body";

export const metadata: Metadata = {
  title: siteConfig.name,
  description: siteConfig.description,
  icons: [
    {
      url: "/logo.png",
      href: "/logo.png",
    },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <MenuProvider>
        <Body>{children}</Body>
      </MenuProvider>
    </html>
  );
}