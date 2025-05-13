"use client";
import { Analytics } from "@vercel/analytics/react";
import { ThemeProvider } from "next-themes";
import { Inter } from "next/font/google";
import "./globals.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const inter = Inter({ subsets: ["latin"] });

export const themes = [
  {
    name: "Rose",
    value: "rose",
    class: "text-rose-500",
    hoverClass: "hover:!bg-rose-800/20",
  },
  {
    name: "Red",
    value: "red",
    class: "text-red-500",
    hoverClass: "hover:!bg-red-800/20",
  },
  {
    name: "Orange",
    value: "orange",
    class: "text-orange-500",
    hoverClass: "hover:!bg-orange-800/20",
  },
  {
    name: "Amber",
    value: "amber",
    class: "text-amber-500",
    hoverClass: "hover:!bg-amber-800/20",
  },
  {
    name: "Yellow",
    value: "yellow",
    class: "text-yellow-500",
    hoverClass: "hover:!bg-yellow-800/20",
  },
  {
    name: "Green",
    value: "green",
    class: "text-green-500",
    hoverClass: "hover:!bg-green-800/20",
  },
  {
    name: "Teal",
    value: "teal",
    class: "text-teal-500",
    hoverClass: "hover:!bg-teal-800/20",
  },
  {
    name: "Cyan",
    value: "cyan",
    class: "text-cyan-500",
    hoverClass: "hover:!bg-cyan-800/20",
  },
  {
    name: "Blue",
    value: "blue",
    class: "text-blue-500",
    hoverClass: "hover:!bg-blue-800/20",
  },
  {
    name: "Indigo",
    value: "indigo",
    class: "text-indigo-500",
    hoverClass: "hover:!bg-indigo-800/20",
  },
  {
    name: "Violet",
    value: "violet",
    class: "text-violet-500",
    hoverClass: "hover:!bg-violet-800/20",
  },
  {
    name: "Zinc",
    value: "zinc",
    class: "text-gray-400",
    hoverClass: "hover:!bg-zinc-800/20",
  },
];
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const queryClient = new QueryClient();

  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} antialiased`}>
        <title>Portfolio</title>
        <QueryClientProvider client={queryClient}>
          <ThemeProvider
            themes={themes.map((theme) => theme.value)}
            value={{
              rose: "rose",
              red: "red",
              orange: "orange",
              amber: "amber",
              yellow: "yellow",
              green: "green",
              teal: "teal",
              cyan: "cyan",
              blue: "blue",
              indigo: "indigo",
              violet: "violet",
              zinc: "zinc",
            }}
            attribute="class"
            defaultTheme="blue"
            enableSystem
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider>
          <Analytics />
        </QueryClientProvider>
      </body>
    </html>
  );
}
