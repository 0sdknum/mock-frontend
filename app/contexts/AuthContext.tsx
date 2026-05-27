"use client";

import { createContext, useContext, useState, useEffect, ReactNode } from "react";

export type User = {
  id: string;
  name: string;
  email: string;
  initials: string;
};

type AuthContextType = {
  user: User | null;
  hydrating: boolean;
  login: (email: string, password: string) => Promise<{ ok: boolean; error?: string }>;
  register: (name: string, email: string, password: string) => Promise<{ ok: boolean; error?: string }>;
  logout: () => void;
  openAuthModal: (mode?: "login" | "register") => void;
  closeAuthModal: () => void;
  authModalOpen: boolean;
  authModalMode: "login" | "register";
};

const AuthContext = createContext<AuthContextType | null>(null);

// Mock seeded users
const SEED_USERS = [
  { id: "u1", name: "Андрей Смирнов", email: "user@doxy.ru", password: "password123", initials: "АС" },
  { id: "u2", name: "Мария Иванова", email: "maria@doxy.ru", password: "password123", initials: "МИ" },
];

function getInitials(name: string): string {
  return name
    .split(" ")
    .slice(0, 2)
    .map((w) => w[0]?.toUpperCase() ?? "")
    .join("");
}

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [hydrating, setHydrating] = useState(true);
  const [authModalOpen, setAuthModalOpen] = useState(false);
  const [authModalMode, setAuthModalMode] = useState<"login" | "register">("login");

  useEffect(() => {
    try {
      const stored = localStorage.getItem("doxy_user");
      if (stored) setUser(JSON.parse(stored));
    } catch {}
    setHydrating(false);
  }, []);

  function persist(u: User) {
    setUser(u);
    localStorage.setItem("doxy_user", JSON.stringify(u));
  }

  async function login(email: string, password: string) {
    await new Promise((r) => setTimeout(r, 400));
    const stored = JSON.parse(localStorage.getItem("doxy_accounts") ?? "[]") as typeof SEED_USERS;
    const all = [...SEED_USERS, ...stored];
    const found = all.find((u) => u.email.toLowerCase() === email.toLowerCase() && u.password === password);
    if (!found) return { ok: false, error: "Неверный email или пароль" };
    persist({ id: found.id, name: found.name, email: found.email, initials: found.initials });
    return { ok: true };
  }

  async function register(name: string, email: string, password: string) {
    await new Promise((r) => setTimeout(r, 400));
    const stored = JSON.parse(localStorage.getItem("doxy_accounts") ?? "[]") as typeof SEED_USERS;
    const all = [...SEED_USERS, ...stored];
    if (all.find((u) => u.email.toLowerCase() === email.toLowerCase())) {
      return { ok: false, error: "Этот email уже зарегистрирован" };
    }
    const newUser = {
      id: `u_${Date.now()}`,
      name,
      email,
      password,
      initials: getInitials(name),
    };
    localStorage.setItem("doxy_accounts", JSON.stringify([...stored, newUser]));
    persist({ id: newUser.id, name: newUser.name, email: newUser.email, initials: newUser.initials });
    return { ok: true };
  }

  function logout() {
    setUser(null);
    localStorage.removeItem("doxy_user");
  }

  function openAuthModal(mode: "login" | "register" = "login") {
    setAuthModalMode(mode);
    setAuthModalOpen(true);
  }

  function closeAuthModal() {
    setAuthModalOpen(false);
  }

  return (
    <AuthContext.Provider value={{ user, hydrating, login, register, logout, openAuthModal, closeAuthModal, authModalOpen, authModalMode }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used within AuthProvider");
  return ctx;
}
