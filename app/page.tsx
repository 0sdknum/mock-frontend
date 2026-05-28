import Link from "next/link";
import Header from "./components/Header";
import Footer from "./components/Footer";

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-full">
      <Header />
      <main className="flex-1">

        {/* ── HERO ── */}
        <section className="bg-[var(--bg-muted)] relative overflow-hidden">
          {/* Decorative blobs */}
          <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-blue-200/40 dark:bg-blue-400/10 blur-3xl pointer-events-none" />
          <div className="absolute -bottom-12 left-1/4 w-64 h-64 rounded-full bg-orange-200/30 dark:bg-orange-400/5 blur-3xl pointer-events-none" />

          <div className="relative max-w-6xl mx-auto px-4 sm:px-6 py-20 md:py-28">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 bg-[var(--bg-card)] border border-[var(--border)] rounded-full px-4 py-1.5 text-xs font-semibold text-[var(--ink-2)] mb-6 shadow-sm">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                Более 2 300 дел завершено
              </div>
              <h1 className="text-5xl md:text-[64px] font-black text-[var(--ink)] leading-[1.05] tracking-tight mb-6">
                Юридические<br />
                вопросы — <span className="text-[#ff5c28]">просто</span>
              </h1>
              <p className="text-xl text-[var(--ink-2)] leading-relaxed mb-10 max-w-xl">
                Банкротство, развод, алименты. Проводим через любую процедуру
                от анализа до результата — понятно и по шагам.
              </p>

              <div className="flex flex-col sm:flex-row gap-3 mb-14">
                <Link href="/test"
                  className="inline-flex items-center justify-center gap-2 bg-[#ff5c28] text-white font-bold px-8 py-4 rounded-2xl hover:bg-[#e84e1f] active:scale-[0.97] transition-all text-base shadow-lg shadow-orange-200 dark:shadow-none">
                  Проверить мою ситуацию
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </Link>
                <Link href="/bankruptcy"
                  className="inline-flex items-center justify-center gap-2 bg-[var(--bg-card)] border border-[var(--border)] text-[var(--ink-2)] font-semibold px-8 py-4 rounded-2xl hover:bg-[var(--bg-subtle)] transition-all text-base shadow-sm">
                  О банкротстве
                </Link>
              </div>

              {/* Stats */}
              <div className="flex flex-wrap gap-8">
                {[
                  { value: "2 300+", label: "дел завершено" },
                  { value: "98%", label: "списание долгов" },
                  { value: "6–8 мес", label: "средний срок" },
                  { value: "от 20 000 ₽", label: "полное ведение" },
                ].map((s) => (
                  <div key={s.label}>
                    <p className="text-2xl font-black text-[var(--brand-t)]">{s.value}</p>
                    <p className="text-sm text-[var(--ink-3)] mt-0.5">{s.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── HOW IT WORKS ── */}
        <section className="py-20 bg-[var(--bg)]">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="text-center mb-14">
              <p className="text-xs font-bold text-[var(--brand-t)] uppercase tracking-widest mb-3">Как это работает</p>
              <h2 className="text-4xl font-black text-[var(--ink)] tracking-tight">Три шага до результата</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {[
                { step: "01", icon: "🧭", title: "Анализ ситуации", desc: "Пройдите 10-минутный тест — система определит процедуру и стоимость.", href: "/test", cta: "Начать →" },
                { step: "02", icon: "📂", title: "Сбор документов", desc: "Получите чек-лист, шаблоны заявлений и пошаговые инструкции.", href: null, cta: null },
                { step: "03", icon: "⚖️", title: "Результат", desc: "Юрист ведёт дело до конца. Прогресс — в личном кабинете.", href: null, cta: null },
              ].map((item, i) => (
                <div key={item.step} className="relative bg-[var(--bg-card)] rounded-3xl p-7 border-2 border-[var(--border)] hover:border-[#1a3c72]/20 hover:shadow-xl transition-all group">
                  <div className="w-12 h-12 rounded-2xl bg-[var(--bg-muted)] flex items-center justify-center text-2xl mb-5">
                    {item.icon}
                  </div>
                  <span className="absolute top-7 right-7 text-xs font-black text-[var(--border)] tracking-widest">{item.step}</span>
                  <h3 className="font-black text-[var(--ink)] text-lg mb-2">{item.title}</h3>
                  <p className="text-sm text-[var(--ink-2)] leading-relaxed mb-4">{item.desc}</p>
                  {item.cta && item.href && (
                    <Link href={item.href} className="text-sm font-bold text-[#ff5c28] hover:underline">{item.cta}</Link>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── SERVICES ── */}
        <section className="py-20 bg-[var(--bg-subtle)]">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="mb-12">
              <p className="text-xs font-bold text-[var(--brand-t)] uppercase tracking-widest mb-3">Услуги</p>
              <h2 className="text-4xl font-black text-[var(--ink)] tracking-tight">Чем можем помочь</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {[
                {
                  icon: "⚡",
                  tag: "Популярно",
                  title: "Банкротство физлица",
                  desc: "Полное списание долгов через суд или МФЦ. Ведём от анализа до завершения.",
                  price: "от 20 000 ₽",
                  href: "/bankruptcy",
                  accent: true,
                },
                {
                  icon: "💔",
                  tag: "Семейное право",
                  title: "Расторжение брака",
                  desc: "Развод через суд, раздел имущества, алименты на детей и супруга.",
                  price: "от 35 000 ₽",
                  href: "/family",
                  accent: false,
                },
                {
                  icon: "👶",
                  tag: "Семейное право",
                  title: "Алименты и дети",
                  desc: "Взыскание алиментов, установление отцовства, место жительства ребёнка.",
                  price: "от 10 000 ₽",
                  href: "/family",
                  accent: false,
                },
              ].map((s) => (
                <Link key={s.title} href={s.href}
                  className={`group rounded-3xl p-7 flex flex-col hover:shadow-2xl transition-all duration-200 ${
                    s.accent ? "bg-gradient-to-br from-[#3b7fe8] to-[#1d52c8] dark:from-[#1a3c72] dark:to-[#0e2a5a] text-white" : "bg-[var(--bg-card)] border-2 border-[var(--border)] hover:border-[#1a3c72]/20"
                  }`}>
                  <div className="flex items-center justify-between mb-6">
                    <div className={`w-12 h-12 rounded-2xl flex items-center justify-center text-2xl ${s.accent ? "bg-white/10" : "bg-[var(--bg-muted)]"}`}>
                      {s.icon}
                    </div>
                    <span className={`text-xs font-bold px-3 py-1 rounded-full ${
                      s.accent ? "bg-white/10 text-blue-200" : "bg-[var(--bg-muted)] text-[var(--brand-t)]"
                    }`}>{s.tag}</span>
                  </div>
                  <h3 className={`font-black text-lg mb-2 ${s.accent ? "text-white" : "text-[var(--ink)]"}`}>{s.title}</h3>
                  <p className={`text-sm leading-relaxed flex-1 mb-6 ${s.accent ? "text-blue-200" : "text-[var(--ink-2)]"}`}>{s.desc}</p>
                  <div className="flex items-center justify-between">
                    <span className={`text-sm font-black ${s.accent ? "text-orange-300" : "text-[#ff5c28]"}`}>{s.price}</span>
                    <svg className={`w-5 h-5 group-hover:translate-x-1 transition-transform ${s.accent ? "text-blue-300" : "text-[var(--ink-3)]"}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ── CABINET PROMO ── */}
        <section className="py-20 bg-[var(--bg)]">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="bg-gradient-to-br from-[#3b7fe8] to-[#1d52c8] dark:from-[#1a3c72] dark:to-[#0e2a5a] rounded-[2rem] overflow-hidden">
              <div className="grid grid-cols-1 md:grid-cols-2">
                <div className="p-10 md:p-14">
                  <p className="text-xs font-bold text-blue-300 uppercase tracking-widest mb-4">Личный кабинет</p>
                  <h2 className="text-3xl md:text-4xl font-black text-white mb-4 leading-tight tracking-tight">
                    Всё дело —<br />как на ладони
                  </h2>
                  <p className="text-blue-200 leading-relaxed mb-8 text-sm">
                    Статус в реальном времени, документы в одном месте, прямой чат с юристом. Никаких звонков вхолостую.
                  </p>
                  <ul className="space-y-3 mb-8">
                    {[
                      "Прогресс по этапам дела",
                      "Загрузка и хранение документов",
                      "Чат с юристом без ожидания",
                      "Уведомления о заседаниях",
                    ].map((item) => (
                      <li key={item} className="flex items-center gap-3 text-sm text-blue-100">
                        <div className="w-5 h-5 rounded-full bg-[#ff5c28] flex items-center justify-center flex-shrink-0">
                          <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        {item}
                      </li>
                    ))}
                  </ul>
                  <Link href="/cabinet"
                    className="inline-flex items-center gap-2 bg-[#ff5c28] text-white font-bold px-6 py-3.5 rounded-2xl hover:bg-[#e84e1f] transition-all shadow-lg shadow-orange-900/30 text-sm">
                    Открыть кабинет
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </Link>
                </div>

                {/* Mock chat preview */}
                <div className="hidden md:flex items-center justify-center p-10">
                  <div className="bg-white/15 border border-white/25 rounded-2xl p-5 w-full max-w-xs backdrop-blur-sm">
                    <div className="flex items-center gap-2.5 mb-4 pb-4 border-b border-white/20">
                      <div className="w-8 h-8 rounded-full bg-[#ff5c28] flex items-center justify-center flex-shrink-0">
                        <span className="text-white text-xs font-bold">АП</span>
                      </div>
                      <div>
                        <p className="text-xs font-bold text-white">Алексей Петров</p>
                        <div className="flex items-center gap-1">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                          <p className="text-xs text-blue-100">Онлайн</p>
                        </div>
                      </div>
                    </div>
                    <div className="space-y-2 mb-3">
                      <div className="bg-white/20 rounded-2xl rounded-tl-sm px-3 py-2">
                        <p className="text-xs text-white/90">Заявление подано. Дело А40-112345/2026</p>
                        <p className="text-xs text-white/50 mt-1">10:32</p>
                      </div>
                      <div className="bg-[#ff5c28] rounded-2xl rounded-tr-sm px-3 py-2 ml-8">
                        <p className="text-xs text-white">Нужно присутствовать?</p>
                        <p className="text-xs text-orange-200 mt-1 text-right">11:05</p>
                      </div>
                      <div className="bg-white/20 rounded-2xl rounded-tl-sm px-3 py-2">
                        <p className="text-xs text-white/90">Да, я буду рядом. Беспокоиться не о чём.</p>
                        <p className="text-xs text-white/50 mt-1">11:18</p>
                      </div>
                    </div>
                    <div className="bg-white/15 border border-white/25 rounded-xl px-3 py-2 flex items-center gap-2">
                      <p className="text-xs text-white/60 flex-1">Написать юристу...</p>
                      <div className="w-6 h-6 rounded-lg bg-[#ff5c28] flex items-center justify-center">
                        <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── WHY US ── */}
        <section className="py-20 bg-[var(--bg-subtle)]">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="text-center mb-14">
              <p className="text-xs font-bold text-[var(--brand-t)] uppercase tracking-widest mb-3">Преимущества</p>
              <h2 className="text-4xl font-black text-[var(--ink)] tracking-tight">Без лишней воды</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {[
                { icon: "⚡", title: "Автоматизация документов", desc: "Заполните анкету — система сгенерирует все заявления. Никакой ручной работы." },
                { icon: "🔍", title: "Прозрачность на каждом шаге", desc: "Видите статус дела, следующий шаг и сроки. Всегда в курсе что происходит." },
                { icon: "💬", title: "Прямой доступ к юристу", desc: "Чат, звонок или встреча — юрист отвечает в рабочее время без очереди." },
                { icon: "🛡️", title: "Фиксированная стоимость", desc: "Цена известна заранее. Никаких скрытых платежей в процессе." },
                { icon: "📱", title: "Всё онлайн", desc: "Подписывайте документы и следите за делом с телефона или ноутбука." },
                { icon: "✅", title: "Результат гарантирован", desc: "Если не завершили по нашей вине — возвращаем деньги без споров." },
              ].map((item) => (
                <div key={item.title} className="bg-[var(--bg-card)] rounded-2xl p-6 border-2 border-[var(--border)] hover:border-[#1a3c72]/20 hover:shadow-lg transition-all">
                  <div className="w-11 h-11 rounded-2xl bg-[var(--bg-muted)] flex items-center justify-center text-xl mb-4">
                    {item.icon}
                  </div>
                  <h3 className="font-black text-[var(--ink)] mb-1.5">{item.title}</h3>
                  <p className="text-sm text-[var(--ink-2)] leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── REVIEWS ── */}
        <section className="py-20 bg-[var(--bg)]">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="text-center mb-14">
              <p className="text-xs font-bold text-[var(--brand-t)] uppercase tracking-widest mb-3">Отзывы</p>
              <h2 className="text-4xl font-black text-[var(--ink)] tracking-tight">Что говорят клиенты</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {[
                { name: "Алексей К.", city: "Москва", text: "За 7 месяцев списали 2,4 млн долгов. Всё понятно с первого дня — никаких сюрпризов.", stars: 5 },
                { name: "Марина В.", city: "Санкт-Петербург", text: "После развода юрист помог взыскать алименты и добиться справедливого раздела квартиры.", stars: 5 },
                { name: "Сергей Л.", city: "Екатеринбург", text: "Думал, банкротство — долго и страшно. Оказалось намного проще. Рекомендую.", stars: 5 },
              ].map((r) => (
                <div key={r.name} className="bg-[var(--bg-subtle)] rounded-3xl p-7 border-2 border-[var(--border)]">
                  <div className="flex gap-0.5 mb-4">
                    {Array.from({ length: r.stars }).map((_, i) => (
                      <svg key={i} className="w-4 h-4 text-[#ff5c28]" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-sm text-[var(--ink-2)] leading-relaxed mb-5 font-medium">"{r.text}"</p>
                  <div className="flex items-center gap-2.5">
                    <div className="w-9 h-9 rounded-full bg-[#2563eb] dark:bg-[#1a3c72] flex items-center justify-center text-xs font-black text-white">
                      {r.name[0]}
                    </div>
                    <div>
                      <p className="text-xs font-bold text-[var(--ink)]">{r.name}</p>
                      <p className="text-xs text-[var(--ink-3)]">{r.city}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA ── */}
        <section id="contacts" className="py-20 bg-[var(--bg-muted)]">
          <div className="max-w-2xl mx-auto px-4 sm:px-6 text-center">
            <h2 className="text-4xl md:text-5xl font-black text-[var(--ink)] tracking-tight mb-4">Готовы начать?</h2>
            <p className="text-[var(--ink-2)] mb-10 leading-relaxed text-lg">
              Пройдите бесплатный тест — за 10 минут поймёте, что вам подходит.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link href="/test"
                className="inline-flex items-center justify-center gap-2 bg-[#ff5c28] text-white font-bold px-8 py-4 rounded-2xl hover:bg-[#e84e1f] active:scale-[0.97] transition-all shadow-lg shadow-orange-200 dark:shadow-none text-base">
                Бесплатный анализ
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
              <a href="tel:+78000000000"
                className="inline-flex items-center justify-center gap-2 bg-[var(--bg-card)] border-2 border-[var(--border)] text-[var(--ink-2)] font-semibold px-8 py-4 rounded-2xl hover:bg-[var(--bg-subtle)] transition-all text-base">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.948V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                8 (800) 000-00-00
              </a>
            </div>
            <p className="text-sm text-[var(--ink-3)] mt-6">Первая консультация бесплатно · Без скрытых условий</p>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
}
