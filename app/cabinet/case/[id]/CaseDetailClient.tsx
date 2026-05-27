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
  approved: { label: "Принят", color: "text-emerald-600 bg-emerald-50 border-emerald-100" },
  pending: { label: "На проверке", color: "text-amber-600 bg-amber-50 border-amber-100" },
  required: { label: "Требуется", color: "text-red-500 bg-red-50 border-red-100" },
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
          <div className="w-6 h-6 border-2 border-slate-200 border-t-[#0f3460] rounded-full animate-spin" />
        </main>
      </div>
    );
  }

  if (!user) {
    return (
      <div className="flex flex-col min-h-full">
        <Header />
        <main className="flex-1 flex items-center justify-center py-24 px-4">
          <div className="text-center max-w-sm">
            <div className="w-16 h-16 rounded-2xl bg-slate-100 flex items-center justify-center text-3xl mx-auto mb-4">🔒</div>
            <h2 className="text-xl font-bold text-slate-900 mb-2">Требуется вход</h2>
            <button onClick={() => openAuthModal("login")} className="bg-[#0f3460] text-white font-semibold px-6 py-3 rounded-xl">
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
        <main className="flex-1 flex items-center justify-center py-24">
          <div className="text-center">
            <p className="text-slate-500 mb-4">Дело не найдено</p>
            <Link href="/cabinet" className="text-[#0f3460] font-medium hover:underline">← Вернуться в кабинет</Link>
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
    <div className="flex flex-col min-h-full bg-slate-50">
      <Header />
      <main className="flex-1">

        {/* Breadcrumb + title */}
        <div className="bg-white border-b border-slate-100">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 py-5">
            <div className="flex items-center gap-2 text-sm text-slate-400 mb-3">
              <Link href="/cabinet" className="hover:text-slate-700 transition-colors">Личный кабинет</Link>
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
              <span className="text-slate-600">{caseData.title}</span>
            </div>

            <div className="flex items-start gap-4 flex-wrap justify-between">
              <div>
                <h1 className="text-xl font-bold text-slate-900 mb-1">{caseData.title}</h1>
                <p className="text-sm text-slate-400">Дело № {caseData.caseNumber} · Открыто {caseData.createdAt}</p>
              </div>
              <div className="flex items-center gap-2.5 bg-slate-50 border border-slate-100 rounded-xl px-3 py-2">
                <div className="w-7 h-7 rounded-full bg-[#0f3460] flex items-center justify-center flex-shrink-0">
                  <span className="text-white text-xs font-bold">{caseData.lawyer.initials}</span>
                </div>
                <div>
                  <p className="text-xs font-semibold text-slate-700">{caseData.lawyer.name}</p>
                  <p className="text-xs text-slate-400">{caseData.lawyer.title}</p>
                </div>
              </div>
            </div>

            {/* Tabs */}
            <div className="flex gap-1 mt-5 border-b border-slate-100 -mb-px">
              {([
                { key: "timeline", label: "Прогресс", icon: "📋" },
                { key: "docs", label: `Документы${requiredDocs > 0 ? ` (${requiredDocs} ⚠)` : ""}`, icon: "📎" },
                { key: "chat", label: "Чат с юристом", icon: "💬" },
              ] as const).map((t) => (
                <button
                  key={t.key}
                  onClick={() => setTab(t.key)}
                  className={`flex items-center gap-1.5 px-4 py-2.5 text-sm font-medium border-b-2 transition-all ${
                    tab === t.key
                      ? "border-[#0f3460] text-[#0f3460]"
                      : "border-transparent text-slate-500 hover:text-slate-800"
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
              <div className="bg-white rounded-2xl border border-slate-100 p-6">
                <h2 className="text-base font-semibold text-slate-900 mb-6">Ход дела</h2>
                <div className="relative">
                  <div className="absolute left-4 top-0 bottom-0 w-px bg-slate-100" />
                  <div className="space-y-0">
                    {caseData.steps.map((step) => (
                      <div key={step.id} className="relative flex items-start gap-4 pb-6 last:pb-0">
                        <div className={`relative z-10 w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 border-2 ${
                          step.status === "done"
                            ? "bg-emerald-500 border-emerald-500"
                            : step.status === "current"
                            ? "bg-[#0f3460] border-[#0f3460]"
                            : "bg-white border-slate-200"
                        }`}>
                          {step.status === "done" ? (
                            <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                            </svg>
                          ) : step.status === "current" ? (
                            <div className="w-2 h-2 rounded-full bg-white" />
                          ) : (
                            <div className="w-2 h-2 rounded-full bg-slate-300" />
                          )}
                        </div>
                        <div className="pt-1 flex-1">
                          <p className={`text-sm font-semibold leading-snug ${
                            step.status === "upcoming" ? "text-slate-400" : "text-slate-900"
                          }`}>{step.label}</p>
                          {step.date && (
                            <p className={`text-xs mt-0.5 ${step.status === "current" ? "text-[#0f3460] font-medium" : "text-slate-400"}`}>{step.date}</p>
                          )}
                          {step.status === "current" && (
                            <span className="inline-flex items-center gap-1 mt-1.5 px-2 py-0.5 bg-blue-50 text-blue-600 rounded-full text-xs font-semibold">
                              <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" />
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
                <div className="mt-4 bg-amber-50 border border-amber-100 rounded-2xl p-5">
                  <div className="flex items-start gap-3">
                    <span className="text-xl">⚡</span>
                    <div>
                      <p className="text-sm font-semibold text-amber-900 mb-1">Следующее действие</p>
                      <p className="text-sm text-amber-800">{caseData.nextAction}</p>
                      <button
                        onClick={() => setTab("docs")}
                        className="mt-3 text-xs font-semibold text-amber-700 underline underline-offset-2"
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
                <div className="bg-amber-50 border border-amber-100 rounded-2xl p-4 flex items-start gap-3">
                  <span className="text-xl">⚠️</span>
                  <div>
                    <p className="text-sm font-semibold text-amber-900">Нужно загрузить {requiredDocs} документа</p>
                    <p className="text-sm text-amber-700 mt-0.5">Юрист ждёт их для продолжения работы по делу.</p>
                  </div>
                </div>
              )}
              <div className="bg-white rounded-2xl border border-slate-100 overflow-hidden">
                <div className="px-5 py-4 border-b border-slate-100 flex items-center justify-between">
                  <h2 className="text-sm font-semibold text-slate-900">Все документы</h2>
                  <label className="flex items-center gap-1.5 text-xs font-semibold text-[#0f3460] cursor-pointer hover:underline">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                    </svg>
                    Загрузить файл
                    <input type="file" className="hidden" />
                  </label>
                </div>
                <div className="divide-y divide-slate-100">
                  {caseData.documents.map((doc) => {
                    const st = DOC_STATUS[doc.status];
                    return (
                      <div key={doc.id} className={`flex items-center gap-3 px-5 py-3.5 ${doc.status === "required" ? "bg-red-50/50" : "hover:bg-slate-50"} transition-colors`}>
                        <span className="text-2xl">{DOC_ICON[doc.type]}</span>
                        <div className="flex-1 min-w-0">
                          <p className="text-sm font-medium text-slate-800 truncate">{doc.name}</p>
                          {doc.size ? (
                            <p className="text-xs text-slate-400 mt-0.5">{doc.size} · {doc.uploadedAt}</p>
                          ) : (
                            <p className="text-xs text-red-400 mt-0.5">Ещё не загружен</p>
                          )}
                        </div>
                        <span className={`flex-shrink-0 px-2.5 py-1 rounded-full text-xs font-semibold border ${st.color}`}>
                          {st.label}
                        </span>
                        {doc.status !== "required" ? (
                          <button className="text-xs text-slate-400 hover:text-[#0f3460] flex-shrink-0 transition-colors">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                            </svg>
                          </button>
                        ) : (
                          <label className="flex items-center gap-1 text-xs text-[#0f3460] font-semibold cursor-pointer flex-shrink-0 hover:underline">
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
              <div className="bg-white rounded-2xl border border-slate-100 overflow-hidden flex flex-col" style={{ height: "560px" }}>
                <div className="flex items-center gap-3 px-5 py-4 border-b border-slate-100">
                  <div className="w-9 h-9 rounded-full bg-[#0f3460] flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-xs font-bold">{caseData.lawyer.initials}</span>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-slate-900">{caseData.lawyer.name}</p>
                    <div className="flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                      <p className="text-xs text-slate-400">Онлайн · обычно отвечает за несколько часов</p>
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
                            <div className="flex-1 h-px bg-slate-100" />
                            <span className="text-xs text-slate-400 flex-shrink-0">{msg.date}</span>
                            <div className="flex-1 h-px bg-slate-100" />
                          </div>
                        )}
                        <div className={`flex items-end gap-2 ${isUser ? "flex-row-reverse" : ""}`}>
                          {!isUser && (
                            <div className="w-7 h-7 rounded-full bg-[#0f3460] flex items-center justify-center flex-shrink-0 mb-1">
                              <span className="text-white text-xs font-bold">{caseData.lawyer.initials}</span>
                            </div>
                          )}
                          <div className={`max-w-[78%] rounded-2xl px-4 py-2.5 ${
                            isUser ? "bg-[#0f3460] text-white rounded-br-sm" : "bg-slate-100 text-slate-800 rounded-bl-sm"
                          }`}>
                            <p className="text-sm leading-relaxed">{msg.text}</p>
                            <p className={`text-xs mt-1 ${isUser ? "text-white/60 text-right" : "text-slate-400"}`}>{msg.time}</p>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                  {sending && (
                    <div className="flex items-end gap-2">
                      <div className="w-7 h-7 rounded-full bg-[#0f3460] flex items-center justify-center flex-shrink-0">
                        <span className="text-white text-xs font-bold">{caseData.lawyer.initials}</span>
                      </div>
                      <div className="bg-slate-100 rounded-2xl rounded-bl-sm px-4 py-3">
                        <div className="flex gap-1 items-center">
                          <div className="w-1.5 h-1.5 rounded-full bg-slate-400 animate-bounce" style={{ animationDelay: "0ms" }} />
                          <div className="w-1.5 h-1.5 rounded-full bg-slate-400 animate-bounce" style={{ animationDelay: "150ms" }} />
                          <div className="w-1.5 h-1.5 rounded-full bg-slate-400 animate-bounce" style={{ animationDelay: "300ms" }} />
                        </div>
                      </div>
                    </div>
                  )}
                  <div ref={messagesEndRef} />
                </div>

                <div className="border-t border-slate-100 px-4 py-3">
                  {caseData.status === "completed" ? (
                    <p className="text-sm text-center text-slate-400 py-2">Дело завершено. Чат недоступен.</p>
                  ) : (
                    <form onSubmit={handleSend} className="flex items-end gap-2">
                      <div className="flex-1 bg-slate-50 border border-slate-200 rounded-2xl px-4 py-2.5 focus-within:border-[#0f3460]/40 focus-within:ring-2 focus-within:ring-[#0f3460]/10 transition-all">
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
                          className="w-full bg-transparent text-sm text-slate-900 placeholder:text-slate-400 resize-none focus:outline-none leading-relaxed"
                          style={{ maxHeight: "100px" }}
                        />
                      </div>
                      <button
                        type="submit"
                        disabled={!input.trim() || sending}
                        className="w-10 h-10 flex items-center justify-center rounded-xl bg-[#0f3460] text-white hover:bg-[#1a4f8a] active:scale-95 transition-all disabled:opacity-40 disabled:cursor-not-allowed flex-shrink-0"
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
