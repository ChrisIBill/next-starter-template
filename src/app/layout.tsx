import type { Metadata, Viewport } from "next";
import { Lato } from "next/font/google";
import "./globals.css";
import { Providers } from "@/app/components/providers";
import GoogleAnalytics from "./google-analytics";
import logger from "@/lib/pino";
import BackgroundComponent from "./components/background";

const font = Lato({ weight: "400", subsets: ["latin"] });

export const viewport: Viewport = {
  themeColor: "dark",
};

export const metadata: Metadata = {
  generator: "Next.JS",
  authors: { name: "Your Name Here" },
  creator: "Your Name Here",
  publisher: "Your Name Here",
  robots: {
    index: true,
    follow: true,
    nocache: false,
  },
  keywords: "",
  metadataBase: new URL(""),
  alternates: {
    canonical: "/",
  },
  title: {
    template: "%s | Next.js",
    default: "Starter Template",
  },
  description: "Next.JS Starter Template",
};

const LayoutLog = logger.child({ module: "Layout" });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  LayoutLog.debug({ message: "render layout" });
  return (
    <html
      lang="en"
      id="root"
      className={font + " bg-transparent overflow-visible"}
      suppressHydrationWarning
    >
      <body>
        <BackgroundComponent>
          <div
            id="background-layer-light"
            className="background-layer transition-colors before:bg-gradient-to-b dark:before:from-default-200 dark:before:to-default-300 before:from-default-800 before:to-default-700 before:opacity-0 dark:before:opacity-100"
          >
            <div
              id="background-layer-dark"
              className="background-layer transition-colors before:bg-gradient-to-b before:from-default-200 before:to-default-300 dark:before:from-default-800 dark:before:to-default-700 dark:before:opacity-0 before:opacity-100"
            >
              {process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS ? (
                <GoogleAnalytics
                  ga_id={process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}
                />
              ) : null}
              <Providers className="absolute z-10 min-h-screen flex flex-col justify-between opacity-100 visible overflow-visible">
                {children}
              </Providers>
            </div>
          </div>
        </BackgroundComponent>
      </body>
    </html>
  );
}
//bg-gradient-to-b from-default-200 to-default-300 dark:from-default-800 dark:to-default-700
//light:before:from-default-800 light:before:to-default-700
