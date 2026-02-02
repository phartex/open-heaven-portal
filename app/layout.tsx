// app/layout.tsx
import "./globals.css"; // Tailwind base styles
import { ReactNode } from "react";
import Providers from "./providers"; // React Query + Toastify wrapper

export const metadata = {
  title: "Open Heavens",
  description: "Daily Open Heavens Devotional",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        {/* Wrap your app in Providers */}
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
