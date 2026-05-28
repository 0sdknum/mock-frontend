"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useState, useRef, useEffect } from "react";
import { useAuth } from "../contexts/AuthContext";
import { useTheme, type Theme } from "../contexts/ThemeContext";

const navLinks = [
  { href: "/", label: "Главная" },
  { href: "/bankruptcy", label: "Банкротство" },
  { href: "/family", label: "Семейные дела" },
  { href: "/test", label: "Проверить ситуацию" },
];

function SunIcon() {
  return (
    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <circle cx="12" cy="12" r="5" strokeWidth={2} />
      <path strokeLinecap="round" strokeWidth={2} d="M12 2v2M12 20v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M2 12h2M20 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
    </svg>
  );
}

function MoonIcon() {
  return (
    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" />
    </svg>
  );
}

function SystemIcon() {
  return (
    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <rect x="2" y="3" width="20" height="14" rx="2" strokeWidth={2} />
      <path strokeLinecap="round" strokeWidth={2} d="M8 21h8M12 17v4" />
    </svg>
  );
}

function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const options: { key: Theme; icon: React.ReactNode; label: string }[] = [
    { key: "light", icon: <SunIcon />, label: "Светлая" },
    { key: "dark",  icon: <MoonIcon />, label: "Тёмная" },
    { key: "system", icon: <SystemIcon />, label: "Системная" },
  ];
  return (
    <div className="flex items-center bg-slate-100 dark:bg-[#1a3054] rounded-xl p-0.5 gap-0.5">
      {options.map((o) => (
        <button
          key={o.key}
          onClick={() => setTheme(o.key)}
          title={o.label}
          className={`w-7 h-7 flex items-center justify-center rounded-lg transition-all ${
            theme === o.key
              ? "bg-white dark:bg-[#2a4a80] text-[#1a3c72] dark:text-[#5b8fd9] shadow-sm"
              : "text-slate-400 dark:text-[#3a5478] hover:text-slate-600 dark:hover:text-[#7a9bc0]"
          }`}
        >
          {o.icon}
        </button>
      ))}
    </div>
  );
}

export default function Header() {
  const pathname = usePathname();
  const router = useRouter();
  const { user, logout, openAuthModal } = useAuth();
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handler(e: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  function handleLogout() {
    logout();
    setDropdownOpen(false);
    router.push("/");
  }

  return (
    <header className="sticky top-0 z-50 bg-[var(--bg-card)] border-b border-[var(--border)] shadow-sm transition-colors">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between h-16">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5 flex-shrink-0">
          <div className="w-8 h-8 rounded-xl bg-[#1a3c72] flex items-center justify-center">
            <span className="text-white font-bold text-sm">Д</span>
          </div>
          <span className="font-bold text-[17px] text-[#1a3c72] dark:text-[#5b8fd9] tracking-tight">ДОКСИ</span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-0.5">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`px-3.5 py-2 rounded-lg text-sm font-medium transition-all ${
                pathname === link.href
                  ? "text-[#1a3c72] dark:text-[#5b8fd9] bg-[var(--bg-muted)]"
                  : "text-[var(--ink-2)] hover:text-[var(--ink)] hover:bg-[var(--bg-subtle)]"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Right side */}
        <div className="hidden md:flex items-center gap-2">
          <ThemeToggle />

          {user ? (
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className="flex items-center gap-2.5 pl-2 pr-3 py-1.5 rounded-xl hover:bg-[var(--bg-subtle)] transition-colors"
              >
                <div className="w-8 h-8 rounded-full bg-[#1a3c72] flex items-center justify-center flex-shrink-0">
                  <span className="text-white text-xs font-bold">{user.initials}</span>
                </div>
                <span className="text-sm font-semibold text-[var(--ink)]">{user.name.split(" ")[0]}</span>
                <svg className={`w-4 h-4 text-[var(--ink-3)] transition-transform ${dropdownOpen ? "rotate-180" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {dropdownOpen && (
                <div className="absolute right-0 top-full mt-2 w-52 bg-[var(--bg-card)] rounded-2xl shadow-xl border border-[var(--border)] py-2 overflow-hidden">
                  <div className="px-4 py-2.5 border-b border-[var(--border)] mb-1">
                    <p className="text-xs font-semibold text-[var(--ink)]">{user.name}</p>
                    <p className="text-xs text-[var(--ink-3)] truncate">{user.email}</p>
                  </div>
                  <Link href="/cabinet" onClick={() => setDropdownOpen(false)}
                    className="flex items-center gap-2.5 px-4 py-2.5 text-sm text-[var(--ink-2)] hover:bg-[var(--bg-subtle)] transition-colors">
                    <svg className="w-4 h-4 text-[var(--ink-3)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                    </svg>
                    Личный кабинет
                  </Link>
                  <div className="border-t border-[var(--border)] mt-1 pt-1">
                    <button onClick={handleLogout}
                      className="flex items-center gap-2.5 w-full px-4 py-2.5 text-sm text-red-500 hover:bg-red-50 dark:hover:bg-red-900/20 transition-colors">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                      </svg>
                      Выйти
                    </button>
                  </div>
                </div>
              )}
            </div>
          ) : (
            <>
              <button onClick={() => openAuthModal("login")}
                className="px-4 py-2 text-sm font-medium text-[var(--ink-2)] hover:text-[var(--ink)] hover:bg-[var(--bg-subtle)] rounded-lg transition-colors">
                Войти
              </button>
              <button onClick={() => openAuthModal("register")}
                className="bg-[#ff5c28] text-white text-sm font-bold px-5 py-2.5 rounded-xl hover:bg-[#e84e1f] active:scale-[0.97] transition-all shadow-sm shadow-orange-200 dark:shadow-none">
                Начать →
              </button>
            </>
          )}
        </div>

        {/* Mobile: theme + burger */}
        <div className="md:hidden flex items-center gap-2">
          <ThemeToggle />
          <button className="p-2 rounded-lg text-[var(--ink-2)] hover:bg-[var(--bg-subtle)] transition-colors"
            onClick={() => setMenuOpen(!menuOpen)} aria-label="Меню">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {menuOpen
                ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              }
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden border-t border-[var(--border)] bg-[var(--bg-card)] px-4 py-3 flex flex-col gap-1">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} onClick={() => setMenuOpen(false)}
              className={`px-3 py-2.5 rounded-xl text-sm font-medium transition-colors ${
                pathname === link.href
                  ? "bg-[var(--bg-muted)] text-[#1a3c72] dark:text-[#5b8fd9]"
                  : "text-[var(--ink-2)] hover:bg-[var(--bg-subtle)]"
              }`}>
              {link.label}
            </Link>
          ))}
          <div className="flex gap-2 mt-2 pt-2 border-t border-[var(--border)]">
            {user ? (
              <>
                <Link href="/cabinet" onClick={() => setMenuOpen(false)}
                  className="flex-1 text-center bg-[var(--bg-subtle)] text-[var(--ink)] text-sm font-semibold px-4 py-2.5 rounded-xl">
                  Кабинет
                </Link>
                <button onClick={() => { handleLogout(); setMenuOpen(false); }}
                  className="flex-1 text-center border border-red-200 dark:border-red-800/50 text-red-500 text-sm font-medium px-4 py-2.5 rounded-xl">
                  Выйти
                </button>
              </>
            ) : (
              <>
                <button onClick={() => { openAuthModal("login"); setMenuOpen(false); }}
                  className="flex-1 text-center border border-[var(--border)] text-[var(--ink-2)] text-sm font-medium px-4 py-2.5 rounded-xl">
                  Войти
                </button>
                <button onClick={() => { openAuthModal("register"); setMenuOpen(false); }}
                  className="flex-1 text-center bg-[#ff5c28] text-white text-sm font-bold px-4 py-2.5 rounded-xl">
                  Начать
                </button>
              </>
            )}
          </div>
        </div>
      )}
    </header>
  );
}
