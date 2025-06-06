import type { Metadata } from "next";
import "./globals.css";
import { siteConfig } from "@/config/site";
import { MenuProvider } from "@/providers/menu-provider";
import Body from "@/components/layout-body";
import { Montserrat } from 'next/font/google';
import { SidebarDialogProvider } from "@/lib/sidebar-dialog-context"
import { Providers } from "@/providers/session-provider";

const montserrat = Montserrat({
  subsets: ['latin'],      // or ['latin', 'cyrillic', etc.]
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],  // Load specific weights
  variable: '--font-montserrat', // Optional: for Tailwind integration
  display: 'swap',
});

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
    <html lang="en" className={montserrat.variable}>
      <MenuProvider>
        <Body>
          <Providers>
            <SidebarDialogProvider>
              {children}
            </SidebarDialogProvider>
          </Providers>
        </Body>
      </MenuProvider>
    </html>
  );
}