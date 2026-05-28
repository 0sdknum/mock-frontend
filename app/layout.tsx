import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import { AuthProvider } from "./contexts/AuthContext";
import { ThemeProvider } from "./contexts/ThemeContext";
import AuthModal from "./components/AuthModal";

const geist = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ДОКСИ — цифровая юридическая платформа",
  description:
    "Помогаем пройти процедуру банкротства спокойно, понятно и без лишних действий",
};

/** Prevent flash of wrong theme before React hydrates */
const antiFlashScript = `
(function(){
  var t=localStorage.getItem('doxy_theme')||'system';
  var d=window.matchMedia('(prefers-color-scheme: dark)').matches;
  if(t==='dark'||(t==='system'&&d))document.documentElement.classList.add('dark');
})();
`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" className={`${geist.variable} h-full antialiased`} suppressHydrationWarning>
      <head>
        {/* eslint-disable-next-line @next/next/no-sync-scripts */}
        <script dangerouslySetInnerHTML={{ __html: antiFlashScript }} />
      </head>
      <body className="min-h-full flex flex-col">
        <ThemeProvider>
          <AuthProvider>
            {children}
            <AuthModal />
          </AuthProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
