"use client";

import Link from "next/link";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "../contexts/AuthContext";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { MOCK_CASES, type Case, type CaseStatus } from "../lib/mockCases";

const STATUS_CONFIG: Record<CaseStatus, { label: string; color: string; dot: string }> = {
  active: { label: "В процессе", color: "bg-blue-50 text-blue-700 border-blue-200 dark:bg-blue-900/25 dark:text-blue-300 dark:border-blue-800/50", dot: "bg-blue-500" },
  waiting_docs: { label: "Нужны документы", color: "bg-amber-50 text-amber-700 border-amber-200 dark:bg-amber-900/25 dark:text-amber-300 dark:border-amber-800/50", dot: "bg-amber-500" },
  in_court: { label: "В суде", color: "bg-purple-50 text-purple-700 border-purple-200 dark:bg-purple-900/25 dark:text-purple-300 dark:border-purple-800/50", dot: "bg-purple-500" },
  completed: { label: "Завершено", color: "bg-emerald-50 text-emerald-700 border-emerald-200 dark:bg-emerald-900/25 dark:text-emerald-300 dark:border-emerald-800/50", dot: "bg-emerald-500" },
  paused: { label: "Приостановлено", color: "bg-[var(--bg-muted)] text-[var(--ink-2)] border-[var(--border)]", dot: "bg-[var(--ink-3)]" },
};

const TYPE_ICON: Record<Case["type"], string> = {
  bankruptcy: "⚡",
  divorce: "💔",
  alimony: "👶",
  paternity: "👨",
  property: "🏡",
};

function CaseCard({ c }: { c: Case }) {
  const st = STATUS_CONFIG[c.status];
  const requiredDocs = c.documents.filter((d) => d.status === "required").length;
  return (
    <Link
      href={`/cabinet/case/${c.id}`}
      className="group block bg-[var(--bg-card)] rounded-2xl border-2 border-[var(--border)] hover:border-[#1a3c72]/20 hover:shadow-xl transition-all p-5"
    >
      <div className="flex items-start justify-between mb-3">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-[var(--bg-muted)] flex items-center justify-center text-xl">
            {TYPE_ICON[c.type]}
          </div>
          <div>
            <h3 className="font-bold text-[var(--ink)] text-sm leading-snug group-hover:text-[var(--brand-t)] transition-colors">{c.title}</h3>
            <p className="text-xs text-[var(--ink-3)] mt-0.5">№ {c.caseNumber}</p>
          </div>
        </div>
        <span className={`flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-bold border ${st.color}`}>
          <span className={`w-1.5 h-1.5 rounded-full ${st.dot} flex-shrink-0`} />
          {st.label}
        </span>
      </div>

      {/* Next action */}
      {c.status !== "completed" && (
        <div className="flex items-start gap-2 bg-[var(--bg-muted)] rounded-xl px-3 py-2.5 mb-3">
          <svg className="w-4 h-4 text-[var(--brand-t)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 16h-1v-4h-1m1-4h.01M12 2a10 10 0 100 20 10 10 0 000-20z" />
          </svg>
          <p className="text-xs text-[var(--brand-t)] leading-relaxed">{c.nextAction}</p>
        </div>
      )}

      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3 text-xs text-[var(--ink-3)]">
          <span className="flex items-center gap-1">
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            {c.documents.length} докум.
          </span>
          {requiredDocs > 0 && (
            <span className="flex items-center gap-1 text-[#ff5c28] font-bold">
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01M12 4a8 8 0 100 16 8 8 0 000-16z" />
              </svg>
              Нужно {requiredDocs} докум.
            </span>
          )}
        </div>
        <span className="text-xs text-[var(--ink-3)]">{c.updatedAt}</span>
      </div>
    </Link>
  );
}

export default function CabinetPage() {
  const { user, hydrating, openAuthModal } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (user === null) {
      // Not loaded yet — we check localStorage manually via context, wait a tick
    }
  }, [user, router]);

  const active = MOCK_CASES.filter((c) => c.status !== "completed");
  const done = MOCK_CASES.filter((c) => c.status === "completed");
  const totalDocs = MOCK_CASES.reduce((s, c) => s + c.documents.filter((d) => d.status === "required").length, 0);

  if (hydrating) {
    return (
      <div className="flex flex-col min-h-full">
        <Header />
        <main className="flex-1 flex items-center justify-center">
          <div className="w-6 h-6 border-2 border-[var(--border)] border-t-[#1a3c72] rounded-full animate-spin" />
        </main>
      </div>
    );
  }

  if (!user) {
    return (
      <div className="flex flex-col min-h-full">
        <Header />
        <main className="flex-1 flex items-center justify-center py-24 px-4 bg-[var(--bg-subtle)]">
          <div className="text-center max-w-sm">
            <div className="w-16 h-16 rounded-2xl bg-[var(--bg-muted)] flex items-center justify-center text-3xl mx-auto mb-4">🔒</div>
            <h2 className="text-2xl font-black text-[var(--ink)] mb-2">Требуется вход</h2>
            <p className="text-[var(--ink-2)] text-sm mb-6">Войдите в аккаунт, чтобы открыть личный кабинет</p>
            <button
              onClick={() => openAuthModal("login")}
              className="bg-[#ff5c28] text-white font-bold px-6 py-3 rounded-xl hover:bg-[#e84e1f] transition-colors shadow-lg shadow-orange-200 dark:shadow-none"
            >
              Войти в кабинет
            </button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-full bg-[var(--bg-subtle)]">
      <Header />
      <main className="flex-1">

        {/* Top bar */}
        <div className="bg-[var(--bg-card)] border-b-2 border-[var(--border)]">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 py-6">
            <div className="flex items-start justify-between gap-4 flex-wrap">
              <div>
                <p className="text-sm text-[var(--ink-2)] mb-0.5">Добро пожаловать,</p>
                <h1 className="text-2xl font-black text-[var(--ink)]">{user.name}</h1>
              </div>
              <Link
                href="/test"
                className="flex items-center gap-2 bg-[#ff5c28] text-white text-sm font-bold px-4 py-2.5 rounded-xl hover:bg-[#e84e1f] transition-all shadow-md shadow-orange-200 dark:shadow-none"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                </svg>
                Новое дело
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-6">
              {[
                { label: "Активных дел", value: active.length, icon: "⚡", warn: false },
                { label: "Завершено", value: done.length, icon: "✅", warn: false },
                { label: "Документов", value: MOCK_CASES.reduce((s, c) => s + c.documents.length, 0), icon: "📄", warn: false },
                { label: "Нужны документы", value: totalDocs, icon: "⚠️", warn: totalDocs > 0 },
              ].map((stat) => (
                <div key={stat.label} className={`rounded-2xl px-4 py-3 border-2 ${stat.warn ? "bg-amber-50 dark:bg-amber-900/20 border-amber-200 dark:border-amber-800/40" : "bg-[var(--bg-muted)] border-[#1a3c72]/10"}`}>
                  <p className="text-lg font-black text-[var(--ink)]">{stat.value}</p>
                  <p className={`text-xs mt-0.5 font-medium ${stat.warn ? "text-amber-600" : "text-[var(--brand-t)]"}`}>{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

            {/* Cases list */}
            <div className="lg:col-span-2 space-y-6">

              {active.length > 0 && (
                <div>
                  <h2 className="text-xs font-bold text-[var(--brand-t)] uppercase tracking-widest mb-3">Активные дела</h2>
                  <div className="space-y-3">
                    {active.map((c) => <CaseCard key={c.id} c={c} />)}
                  </div>
                </div>
              )}

              {done.length > 0 && (
                <div>
                  <h2 className="text-xs font-bold text-[var(--ink-3)] uppercase tracking-widest mb-3">Завершённые дела</h2>
                  <div className="space-y-3">
                    {done.map((c) => <CaseCard key={c.id} c={c} />)}
                  </div>
                </div>
              )}
            </div>

            {/* Sidebar */}
            <div className="space-y-4">

              {/* Notifications */}
              <div className="bg-[var(--bg-card)] rounded-2xl border-2 border-[var(--border)] p-5">
                <h3 className="text-sm font-black text-[var(--ink)] mb-4">Уведомления</h3>
                <div className="space-y-3">
                  {[
                    { icon: "📅", text: "Заседание 10 июня в 10:00", sub: "Банкротство — Арбитражный суд", color: "text-[var(--brand-t)] bg-[var(--bg-muted)]" },
                    { icon: "📎", text: "Загрузите выписку ЕГРП", sub: "Требуется до 1 июня", color: "text-[#ff5c28] bg-orange-50 dark:bg-orange-900/20" },
                    { icon: "📎", text: "Загрузите документы на квартиру", sub: "Расторжение брака", color: "text-[#ff5c28] bg-orange-50 dark:bg-orange-900/20" },
                  ].map((n, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <div className={`w-8 h-8 rounded-xl flex items-center justify-center text-base flex-shrink-0 ${n.color}`}>
                        {n.icon}
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-[var(--ink)] leading-snug">{n.text}</p>
                        <p className="text-xs text-[var(--ink-3)] mt-0.5">{n.sub}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Lawyers */}
              <div className="bg-[var(--bg-card)] rounded-2xl border-2 border-[var(--border)] p-5">
                <h3 className="text-sm font-black text-[var(--ink)] mb-4">Ваши юристы</h3>
                <div className="space-y-3">
                  {MOCK_CASES.filter((c) => c.status !== "completed").map((c) => (
                    <Link key={c.id} href={`/cabinet/case/${c.id}`} className="flex items-center gap-3 hover:bg-[var(--bg-muted)] -mx-2 px-2 py-1.5 rounded-xl transition-colors">
                      <div className="w-9 h-9 rounded-full bg-[#2563eb] dark:bg-[#1a3c72] flex items-center justify-center flex-shrink-0">
                        <span className="text-white text-xs font-bold">{c.lawyer.initials}</span>
                      </div>
                      <div className="min-w-0">
                        <p className="text-sm font-semibold text-[var(--ink)] truncate">{c.lawyer.name}</p>
                        <p className="text-xs text-[var(--ink-3)] truncate">{c.title}</p>
                      </div>
                      <svg className="w-4 h-4 text-[var(--ink-3)] flex-shrink-0 ml-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                      </svg>
                    </Link>
                  ))}
                </div>
              </div>

            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
