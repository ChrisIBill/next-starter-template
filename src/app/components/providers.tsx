"use client";

import { NextUIProvider } from "@nextui-org/react";
import { ThemeProvider } from "next-themes";
import { useRouter } from "next/navigation";
import { IconContext } from "react-icons";
import RootStyleRegistry from "@/lib/emotion";

export function Providers({
  children,
  className,
}: {
  children: React.ReactNode;
  className: string;
}) {
  const router = useRouter();

  return (
    <NextUIProvider className={className} navigate={router.push}>
      <ThemeProvider defaultTheme="dark">
        <IconContext.Provider value={{ className: "text-black" }}>
          <RootStyleRegistry>{children}</RootStyleRegistry>
        </IconContext.Provider>
      </ThemeProvider>
    </NextUIProvider>
  );
}
