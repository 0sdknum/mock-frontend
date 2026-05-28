"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { useAuth } from "../../../contexts/AuthContext";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import { getCase, type CaseMessage, type CaseDocument } from "../../../lib/mockCases";

const DOC_ICON: Record<string, string> = {
  pdf: "📄",
  docx: "📝",
  jpg: "🖼️",
  xlsx: "📊",
};

const DOC_STATUS: Record<CaseDocument["status"], { label: string; color: string }> = {
  approved: { label: "Принят", color: "text-emerald-600 bg-emerald-50 border-emerald-200 dark:text-emerald-400 dark:bg-emerald-900/25 dark:border-emerald-800/50" },
  pending: { label: "На проверке", color: "text-amber-600 bg-amber-50 border-amber-200 dark:text-amber-400 dark:bg-amber-900/25 dark:border-amber-800/50" },
  required: { label: "Требуется", color: "text-[#ff5c28] bg-orange-50 dark:bg-orange-900/20 border-orange-200 dark:border-orange-800/40" },
};

export default function CaseDetailClient({ id }: { id: string }) {
  const { user, hydrating, openAuthModal } = useAuth();

  const caseData = getCase(id);

  const [messages, setMessages] = useState<CaseMessage[]>(caseData?.messages ?? []);
  const [input, setInput] = useState("");
  const [sending, setSending] = useState(false);
  const [tab, setTab] = useState<"timeline" | "docs" | "chat">("timeline");
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, tab]);

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
            <h2 className="text-xl font-black text-[var(--ink)] mb-2">Требуется вход</h2>
            <button onClick={() => openAuthModal("login")} className="bg-[#ff5c28] text-white font-bold px-6 py-3 rounded-xl hover:bg-[#e84e1f] transition-colors shadow-lg shadow-orange-200 dark:shadow-none">
              Войти
            </button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  if (!caseData) {
    return (
      <div className="flex flex-col min-h-full">
        <Header />
        <main className="flex-1 flex items-center justify-center py-24 bg-[var(--bg-subtle)]">
          <div className="text-center">
            <p className="text-[var(--ink-2)] mb-4">Дело не найдено</p>
            <Link href="/cabinet" className="text-[var(--brand-t)] font-bold hover:underline">← Вернуться в кабинет</Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  async function handleSend(e: React.FormEvent) {
    e.preventDefault();
    if (!input.trim()) return;
    setSending(true);
    const newMsg: CaseMessage = {
      id: `m_${Date.now()}`,
      from: "user",
      text: input.trim(),
      time: new Date().toLocaleTimeString("ru", { hour: "2-digit", minute: "2-digit" }),
      date: new Date().toLocaleDateString("ru", { day: "numeric", month: "long", year: "numeric" }),
    };
    setMessages((prev) => [...prev, newMsg]);
    setInput("");
    await new Promise((r) => setTimeout(r, 1200));
    const reply: CaseMessage = {
      id: `m_${Date.now()}_r`,
      from: "lawyer",
      text: "Спасибо за сообщение! Я отвечу в ближайшее время. Обычно отвечаю в течение нескольких часов в рабочее время.",
      time: new Date().toLocaleTimeString("ru", { hour: "2-digit", minute: "2-digit" }),
      date: new Date().toLocaleDateString("ru", { day: "numeric", month: "long", year: "numeric" }),
    };
    setMessages((prev) => [...prev, reply]);
    setSending(false);
  }

  const requiredDocs = caseData.documents.filter((d) => d.status === "required").length;

  return (
    <div className="flex flex-col min-h-full bg-[var(--bg-subtle)]">
      <Header />
      <main className="flex-1">

        {/* Breadcrumb + title */}
        <div className="bg-[var(--bg-card)] border-b-2 border-[var(--border)]">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 py-5">
            <div className="flex items-center gap-2 text-sm text-[var(--ink-3)] mb-3">
              <Link href="/cabinet" className="hover:text-[var(--brand-t)] transition-colors font-medium">Личный кабинет</Link>
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
              <span className="text-[var(--ink-2)]">{caseData.title}</span>
            </div>

            <div className="flex items-start gap-4 flex-wrap justify-between">
              <div>
                <h1 className="text-xl font-black text-[var(--ink)] mb-1">{caseData.title}</h1>
                <p className="text-sm text-[var(--ink-3)]">Дело № {caseData.caseNumber} · Открыто {caseData.createdAt}</p>
              </div>
              <div className="flex items-center gap-2.5 bg-[var(--bg-muted)] border-2 border-[#1a3c72]/10 rounded-xl px-3 py-2">
                <div className="w-7 h-7 rounded-full bg-[#2563eb] dark:bg-[#1a3c72] flex items-center justify-center flex-shrink-0">
                  <span className="text-white text-xs font-bold">{caseData.lawyer.initials}</span>
                </div>
                <div>
                  <p className="text-xs font-bold text-[var(--brand-t)]">{caseData.lawyer.name}</p>
                  <p className="text-xs text-[var(--ink-3)]">{caseData.lawyer.title}</p>
                </div>
              </div>
            </div>

            {/* Tabs */}
            <div className="flex gap-1 mt-5 border-b-2 border-[var(--border)] -mb-px">
              {([
                { key: "timeline", label: "Прогресс", icon: "📋" },
                { key: "docs", label: `Документы${requiredDocs > 0 ? ` (${requiredDocs} ⚠)` : ""}`, icon: "📎" },
                { key: "chat", label: "Чат с юристом", icon: "💬" },
              ] as const).map((t) => (
                <button
                  key={t.key}
                  onClick={() => setTab(t.key)}
                  className={`flex items-center gap-1.5 px-4 py-2.5 text-sm font-bold border-b-2 transition-all ${
                    tab === t.key
                      ? "border-[#ff5c28] text-[#ff5c28]"
                      : "border-transparent text-[var(--ink-3)] hover:text-[var(--ink-2)]"
                  }`}
                >
                  <span>{t.icon}</span>
                  {t.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-6">

          {/* ── TIMELINE TAB ── */}
          {tab === "timeline" && (
            <div className="max-w-2xl">
              <div className="bg-[var(--bg-card)] rounded-2xl border-2 border-[var(--border)] p-6">
                <h2 className="text-base font-black text-[var(--ink)] mb-6">Ход дела</h2>
                <div className="relative">
                  <div className="absolute left-4 top-0 bottom-0 w-px bg-[var(--border)]" />
                  <div className="space-y-0">
                    {caseData.steps.map((step) => (
                      <div key={step.id} className="relative flex items-start gap-4 pb-6 last:pb-0">
                        <div className={`relative z-10 w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 border-2 ${
                          step.status === "done"
                            ? "bg-emerald-500 border-emerald-500"
                            : step.status === "current"
                            ? "bg-[#ff5c28] border-[#ff5c28]"
                            : "bg-[var(--bg-card)] border-[var(--border)]"
                        }`}>
                          {step.status === "done" ? (
                            <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                            </svg>
                          ) : step.status === "current" ? (
                            <div className="w-2 h-2 rounded-full bg-white" />
                          ) : (
                            <div className="w-2 h-2 rounded-full bg-[var(--ink-3)]" />
                          )}
                        </div>
                        <div className="pt-1 flex-1">
                          <p className={`text-sm font-semibold leading-snug ${
                            step.status === "upcoming" ? "text-[var(--ink-3)]" : "text-[var(--ink)]"
                          }`}>{step.label}</p>
                          {step.date && (
                            <p className={`text-xs mt-0.5 ${step.status === "current" ? "text-[#ff5c28] font-bold" : "text-[var(--ink-3)]"}`}>{step.date}</p>
                          )}
                          {step.status === "current" && (
                            <span className="inline-flex items-center gap-1 mt-1.5 px-2 py-0.5 bg-orange-50 dark:bg-orange-900/20 text-[#ff5c28] rounded-full text-xs font-bold">
                              <span className="w-1.5 h-1.5 rounded-full bg-[#ff5c28] animate-pulse" />
                              Текущий этап
                            </span>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {caseData.status !== "completed" && (
                <div className="mt-4 bg-orange-50 border-2 border-orange-200 dark:bg-orange-900/20 dark:border-orange-800/40 rounded-2xl p-5">
                  <div className="flex items-start gap-3">
                    <span className="text-xl">⚡</span>
                    <div>
                      <p className="text-sm font-black text-[var(--ink)] mb-1">Следующее действие</p>
                      <p className="text-sm text-[var(--ink-2)]">{caseData.nextAction}</p>
                      <button
                        onClick={() => setTab("docs")}
                        className="mt-3 text-xs font-bold text-[#ff5c28] underline underline-offset-2"
                      >
                        Перейти к документам →
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}

          {/* ── DOCS TAB ── */}
          {tab === "docs" && (
            <div className="max-w-2xl space-y-4">
              {requiredDocs > 0 && (
                <div className="bg-orange-50 border-2 border-orange-200 dark:bg-orange-900/20 dark:border-orange-800/40 rounded-2xl p-4 flex items-start gap-3">
                  <span className="text-xl">⚠️</span>
                  <div>
                    <p className="text-sm font-black text-[var(--ink)]">Нужно загрузить {requiredDocs} документа</p>
                    <p className="text-sm text-[var(--ink-2)] mt-0.5">Юрист ждёт их для продолжения работы по делу.</p>
                  </div>
                </div>
              )}
              <div className="bg-[var(--bg-card)] rounded-2xl border-2 border-[var(--border)] overflow-hidden">
                <div className="px-5 py-4 border-b-2 border-[var(--border)] flex items-center justify-between">
                  <h2 className="text-sm font-black text-[var(--ink)]">Все документы</h2>
                  <label className="flex items-center gap-1.5 text-xs font-bold text-[#ff5c28] cursor-pointer hover:underline">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                    </svg>
                    Загрузить файл
                    <input type="file" className="hidden" />
                  </label>
                </div>
                <div className="divide-y divide-[var(--border)]">
                  {caseData.documents.map((doc) => {
                    const st = DOC_STATUS[doc.status];
                    return (
                      <div key={doc.id} className={`flex items-center gap-3 px-5 py-3.5 ${doc.status === "required" ? "bg-orange-50/50 dark:bg-orange-900/10" : "hover:bg-[var(--bg-muted)]/40"} transition-colors`}>
                        <span className="text-2xl">{DOC_ICON[doc.type]}</span>
                        <div className="flex-1 min-w-0">
                          <p className="text-sm font-medium text-[var(--ink)] truncate">{doc.name}</p>
                          {doc.size ? (
                            <p className="text-xs text-[var(--ink-3)] mt-0.5">{doc.size} · {doc.uploadedAt}</p>
                          ) : (
                            <p className="text-xs text-[#ff5c28] mt-0.5 font-medium">Ещё не загружен</p>
                          )}
                        </div>
                        <span className={`flex-shrink-0 px-2.5 py-1 rounded-full text-xs font-bold border ${st.color}`}>
                          {st.label}
                        </span>
                        {doc.status !== "required" ? (
                          <button className="text-xs text-[var(--ink-3)] hover:text-[var(--brand-t)] flex-shrink-0 transition-colors">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                            </svg>
                          </button>
                        ) : (
                          <label className="flex items-center gap-1 text-xs text-[#ff5c28] font-bold cursor-pointer flex-shrink-0 hover:underline">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
                            </svg>
                            Загрузить
                            <input type="file" className="hidden" />
                          </label>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          )}

          {/* ── CHAT TAB ── */}
          {tab === "chat" && (
            <div className="max-w-2xl">
              <div className="bg-[var(--bg-card)] rounded-2xl border-2 border-[var(--border)] overflow-hidden flex flex-col" style={{ height: "560px" }}>
                <div className="flex items-center gap-3 px-5 py-4 border-b-2 border-[var(--border)] bg-[var(--bg-muted)]">
                  <div className="w-9 h-9 rounded-full bg-[#2563eb] dark:bg-[#1a3c72] flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-xs font-bold">{caseData.lawyer.initials}</span>
                  </div>
                  <div>
                    <p className="text-sm font-black text-[var(--ink)]">{caseData.lawyer.name}</p>
                    <div className="flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                      <p className="text-xs text-[var(--ink-2)]">Онлайн · обычно отвечает за несколько часов</p>
                    </div>
                  </div>
                </div>

                <div className="flex-1 overflow-y-auto px-5 py-4 space-y-4">
                  {messages.map((msg, i) => {
                    const isUser = msg.from === "user";
                    const prevDate = i > 0 ? messages[i - 1].date : null;
                    const showDate = msg.date !== prevDate;
                    return (
                      <div key={msg.id}>
                        {showDate && (
                          <div className="flex items-center gap-3 my-2">
                            <div className="flex-1 h-px bg-[var(--border)]" />
                            <span className="text-xs text-[var(--ink-3)] flex-shrink-0">{msg.date}</span>
                            <div className="flex-1 h-px bg-[var(--border)]" />
                          </div>
                        )}
                        <div className={`flex items-end gap-2 ${isUser ? "flex-row-reverse" : ""}`}>
                          {!isUser && (
                            <div className="w-7 h-7 rounded-full bg-[#2563eb] dark:bg-[#1a3c72] flex items-center justify-center flex-shrink-0 mb-1">
                              <span className="text-white text-xs font-bold">{caseData.lawyer.initials}</span>
                            </div>
                          )}
                          <div className={`max-w-[78%] rounded-2xl px-4 py-2.5 ${
                            isUser ? "bg-[#2563eb] dark:bg-[#1a3c72] text-white rounded-br-sm" : "bg-[var(--bg-muted)] text-[var(--ink)] rounded-bl-sm"
                          }`}>
                            <p className="text-sm leading-relaxed">{msg.text}</p>
                            <p className={`text-xs mt-1 ${isUser ? "text-white/60 text-right" : "text-[var(--ink-3)]"}`}>{msg.time}</p>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                  {sending && (
                    <div className="flex items-end gap-2">
                      <div className="w-7 h-7 rounded-full bg-[#2563eb] dark:bg-[#1a3c72] flex items-center justify-center flex-shrink-0">
                        <span className="text-white text-xs font-bold">{caseData.lawyer.initials}</span>
                      </div>
                      <div className="bg-[var(--bg-muted)] rounded-2xl rounded-bl-sm px-4 py-3">
                        <div className="flex gap-1 items-center">
                          <div className="w-1.5 h-1.5 rounded-full bg-[var(--ink-3)] animate-bounce" style={{ animationDelay: "0ms" }} />
                          <div className="w-1.5 h-1.5 rounded-full bg-[var(--ink-3)] animate-bounce" style={{ animationDelay: "150ms" }} />
                          <div className="w-1.5 h-1.5 rounded-full bg-[var(--ink-3)] animate-bounce" style={{ animationDelay: "300ms" }} />
                        </div>
                      </div>
                    </div>
                  )}
                  <div ref={messagesEndRef} />
                </div>

                <div className="border-t-2 border-[var(--border)] px-4 py-3">
                  {caseData.status === "completed" ? (
                    <p className="text-sm text-center text-[var(--ink-3)] py-2">Дело завершено. Чат недоступен.</p>
                  ) : (
                    <form onSubmit={handleSend} className="flex items-end gap-2">
                      <div className="flex-1 bg-[var(--bg-subtle)] border-2 border-[var(--border)] rounded-2xl px-4 py-2.5 focus-within:border-[#1a3c72]/40 focus-within:ring-2 focus-within:ring-[#1a3c72]/10 transition-all">
                        <textarea
                          value={input}
                          onChange={(e) => setInput(e.target.value)}
                          onKeyDown={(e) => {
                            if (e.key === "Enter" && !e.shiftKey) {
                              e.preventDefault();
                              handleSend(e as unknown as React.FormEvent);
                            }
                          }}
                          placeholder="Напишите сообщение юристу..."
                          rows={1}
                          className="w-full bg-transparent text-sm text-[var(--ink)] placeholder:text-[var(--ink-3)] resize-none focus:outline-none leading-relaxed"
                          style={{ maxHeight: "100px" }}
                        />
                      </div>
                      <button
                        type="submit"
                        disabled={!input.trim() || sending}
                        className="w-10 h-10 flex items-center justify-center rounded-xl bg-[#ff5c28] text-white hover:bg-[#e84e1f] active:scale-95 transition-all disabled:opacity-40 disabled:cursor-not-allowed flex-shrink-0 shadow-md shadow-orange-200 dark:shadow-none"
                      >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                        </svg>
                      </button>
                    </form>
                  )}
                </div>
              </div>
            </div>
          )}

        </div>
      </main>
      <Footer />
    </div>
  );
}
