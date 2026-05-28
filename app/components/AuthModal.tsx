"use client";

import { useState, useEffect } from "react";
import { useAuth } from "../contexts/AuthContext";
import { useRouter } from "next/navigation";

export default function AuthModal() {
  const { authModalOpen, authModalMode, closeAuthModal, login, register } = useAuth();
  const router = useRouter();

  const [mode, setMode] = useState<"login" | "register">(authModalMode);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    setMode(authModalMode);
    setError("");
  }, [authModalMode, authModalOpen]);

  useEffect(() => {
    if (authModalOpen) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => { document.body.style.overflow = ""; };
  }, [authModalOpen]);

  if (!authModalOpen) return null;

  function reset() {
    setName(""); setEmail(""); setPassword(""); setError("");
  }

  function switchMode(m: "login" | "register") {
    setMode(m);
    reset();
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    setLoading(true);
    const result = mode === "login"
      ? await login(email, password)
      : await register(name, email, password);
    setLoading(false);
    if (!result.ok) {
      setError(result.error ?? "Ошибка");
    } else {
      closeAuthModal();
      reset();
      router.push("/cabinet");
    }
  }

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4"
      onClick={(e) => { if (e.target === e.currentTarget) closeAuthModal(); }}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-slate-950/70 dark:bg-slate-950/80 backdrop-blur-sm" />

      {/* Panel */}
      <div className="relative w-full max-w-md bg-[var(--bg-card)] rounded-2xl shadow-2xl overflow-hidden border border-[var(--border)]">

        {/* Close */}
        <button
          onClick={closeAuthModal}
          className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full text-[var(--ink-3)] hover:text-[var(--ink-2)] hover:bg-[var(--bg-subtle)] transition-colors z-10"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Header */}
        <div className="px-8 pt-8 pb-0">
          <div className="flex items-center gap-2.5 mb-6">
            <div className="w-9 h-9 rounded-xl bg-[#1a3c72] flex items-center justify-center flex-shrink-0">
              <span className="text-white font-bold text-sm">Д</span>
            </div>
            <span className="font-bold text-lg text-[var(--brand-t)] tracking-tight">ДОКСИ</span>
          </div>

          <h2 className="text-2xl font-black text-[var(--ink)] mb-1">
            {mode === "login" ? "Добро пожаловать" : "Создать аккаунт"}
          </h2>
          <p className="text-sm text-[var(--ink-2)] mb-6">
            {mode === "login"
              ? "Войдите, чтобы перейти в личный кабинет"
              : "Зарегистрируйтесь, чтобы отслеживать дела"}
          </p>

          {/* Mode tabs */}
          <div className="flex bg-[var(--bg-subtle)] rounded-xl p-1 mb-6">
            {(["login", "register"] as const).map((m) => (
              <button
                key={m}
                onClick={() => switchMode(m)}
                className={`flex-1 py-2 text-sm font-semibold rounded-lg transition-all ${
                  mode === m
                    ? "bg-[var(--bg-card)] text-[var(--ink)] shadow-sm"
                    : "text-[var(--ink-2)] hover:text-[var(--ink)]"
                }`}
              >
                {m === "login" ? "Войти" : "Регистрация"}
              </button>
            ))}
          </div>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="px-8 pb-8 flex flex-col gap-4">
          {mode === "register" && (
            <div>
              <label className="block text-xs font-bold text-[var(--ink-2)] uppercase tracking-wide mb-1.5">Ваше имя</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Иван Иванов"
                required
                className="w-full px-4 py-3 rounded-xl border border-[var(--border)] bg-[var(--bg-subtle)] text-sm text-[var(--ink)] placeholder:text-[var(--ink-3)] focus:outline-none focus:ring-2 focus:ring-[#1a3c72]/30 focus:border-[#1a3c72] transition-all"
              />
            </div>
          )}
          <div>
            <label className="block text-xs font-bold text-[var(--ink-2)] uppercase tracking-wide mb-1.5">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
              required
              className="w-full px-4 py-3 rounded-xl border border-[var(--border)] bg-[var(--bg-subtle)] text-sm text-[var(--ink)] placeholder:text-[var(--ink-3)] focus:outline-none focus:ring-2 focus:ring-[#1a3c72]/30 focus:border-[#1a3c72] transition-all"
            />
          </div>
          <div>
            <label className="block text-xs font-bold text-[var(--ink-2)] uppercase tracking-wide mb-1.5">Пароль</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              required
              minLength={6}
              className="w-full px-4 py-3 rounded-xl border border-[var(--border)] bg-[var(--bg-subtle)] text-sm text-[var(--ink)] placeholder:text-[var(--ink-3)] focus:outline-none focus:ring-2 focus:ring-[#1a3c72]/30 focus:border-[#1a3c72] transition-all"
            />
          </div>

          {error && (
            <div className="flex items-center gap-2 px-4 py-3 bg-red-50 dark:bg-red-900/25 border border-red-100 dark:border-red-800/50 rounded-xl text-sm text-red-600 dark:text-red-400">
              <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01M12 4a8 8 0 100 16 8 8 0 000-16z" />
              </svg>
              {error}
            </div>
          )}

          {mode === "login" && (
            <div className="bg-[var(--bg-subtle)] border border-[var(--border)] rounded-xl px-4 py-3 text-xs text-[var(--ink-2)]">
              <span className="font-bold text-[var(--ink)]">Тестовый вход:</span> user@doxy.ru / password123
            </div>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-[#ff5c28] text-white font-bold py-3.5 rounded-xl hover:bg-[#e84e1f] active:scale-[0.98] transition-all disabled:opacity-60 disabled:cursor-not-allowed text-sm mt-1 shadow-lg shadow-orange-200 dark:shadow-none/50"
          >
            {loading
              ? "Подождите..."
              : mode === "login" ? "Войти в кабинет" : "Создать аккаунт"}
          </button>
        </form>
      </div>
    </div>
  );
}
