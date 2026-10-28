import type { Metadata } from "next";
import "./globals.css";
import DashboardShell from "@/components/dashboard-shell";
const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : "http://localhost:3000");
const shareImage = {
  url: "/social/ethena-explained-og.png",
  width: 1200,
  height: 630,
  type: "image/png",
  alt: "Ethena Explained: A plain-English dashboard for Ethena’s dollars and yield.",
};
export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Ethena Explained",
  description:
    "Understand Ethena, USDe supply, sUSDe yield, backing, and risks with a simple independent dashboard and clear data sources.",
  applicationName: "Ethena Explained",
  openGraph: {
    title: "Ethena Explained",
    description: "A plain-English dashboard for Ethena’s dollars and yield.",
    type: "website",
    siteName: "Ethena Explained",
    url: "/",
    images: [shareImage],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ethena Explained",
    description: "A plain-English dashboard for Ethena’s dollars and yield.",
    images: [shareImage],
  },
};
export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <DashboardShell>{children}</DashboardShell>
      </body>
    </html>
  );
}
