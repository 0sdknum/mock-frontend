import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";

const services = [
  {
    icon: "💔",
    title: "Расторжение брака",
    desc: "Развод через суд при наличии детей, имущественного спора или нежелании второго супруга.",
    price: "от 35 000 ₽",
    when: ["Есть общие несовершеннолетние дети", "Второй супруг против развода", "Второй супруг уклоняется от ЗАГС"],
    scenarios: ["Дети есть, спора нет", "Дети + алименты + супруг против", "Нет детей, супруг против"],
  },
  {
    icon: "👶",
    title: "Алименты на ребёнка",
    desc: "Взыскание алиментов в процентах от дохода или в твёрдой денежной сумме.",
    price: "от 25 000 ₽",
    when: ["Ребёнок живёт с одним родителем", "Второй родитель не содержит ребёнка", "Нет добровольного соглашения"],
    scenarios: ["% от дохода", "Фиксированная сумма", "Неизвестно место работы"],
  },
  {
    icon: "👩",
    title: "Алименты на супруга",
    desc: "Содержание нетрудоспособного, ухаживающего за ребёнком или нуждающегося после развода супруга.",
    price: "от 25 000 ₽",
    when: ["Нетрудоспособность или болезнь", "Уход за ребёнком до 3 лет", "Нуждаемость после развода"],
    scenarios: ["Нетрудоспособный супруг", "Уход за ребёнком", "После развода"],
  },
  {
    icon: "🏡",
    title: "Место жительства ребёнка",
    desc: "Оформление соглашения о проживании ребёнка при раздельном проживании родителей.",
    price: "от 25 000 ₽",
    when: ["Родители живут раздельно", "Есть согласие о месте проживания", "Нужно официально зафиксировать"],
    scenarios: ["Базовое соглашение", "С графиком общения", "С переездом ребёнка"],
  },
  {
    icon: "👨",
    title: "Установление / оспаривание отцовства",
    desc: "Юридическое подтверждение или оспаривание биологического родства отца и ребёнка.",
    price: "от 10 000 ₽",
    when: ["Отец не указан в свидетельстве", "Требуется взыскание алиментов", "Сомнения в биологическом родстве"],
    scenarios: ["Установление отцовства", "Оспаривание отцовства", "С ДНК-экспертизой"],
  },
  {
    icon: "📝",
    title: "Перемена имени / фамилии",
    desc: "Изменение персональных данных через ЗАГС по личному желанию или после развода.",
    price: "по запросу",
    when: ["Личное желание", "Возврат добрачной фамилии", "После расторжения брака"],
    scenarios: ["Стандартная смена", "После развода", "Сложный случай (отказ ЗАГС)"],
  },
  {
    icon: "🤝",
    title: "Соглашение об алиментах",
    desc: "Добровольный документ о порядке и размере выплат без суда. Заверяется у нотариуса.",
    price: "по запросу",
    when: ["Родители договорились без суда", "Нужно зафиксировать размер выплат", "Важно избежать суда"],
    scenarios: ["% от дохода", "Фиксированная сумма", "Смешанный формат"],
  },
  {
    icon: "👨‍👩‍👧",
    title: "Соглашение о детях",
    desc: "Документ о проживании, порядке общения и воспитании ребёнка при разводе без спора.",
    price: "по запросу",
    when: ["Родители разводятся мирно", "Нет спора о ребёнке", "Нужно зафиксировать договорённости"],
    scenarios: ["Базовое соглашение", "С графиком общения", "С поочерёдным проживанием"],
  },
];

export default function FamilyPage() {
  return (
    <div className="flex flex-col min-h-full">
      <Header />
      <main className="flex-1">

        {/* ── HERO ── */}
        <section className="relative overflow-hidden bg-[var(--bg-muted)]">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-[-80px] right-[-60px] w-[380px] h-[380px] bg-[#ff5c28]/6 rounded-full blur-[80px]" />
            <div className="absolute bottom-[-60px] left-[-60px] w-[300px] h-[300px] bg-[#1a3c72]/8 rounded-full blur-[80px]" />
          </div>
          <div className="relative max-w-6xl mx-auto px-4 sm:px-6 py-24 md:py-36">
            <div className="inline-flex items-center gap-2 bg-[var(--bg-card)] border border-[#1a3c72]/10 rounded-full px-4 py-1.5 text-xs text-[var(--brand-t)] font-semibold mb-8 shadow-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-[#ff5c28]" />
              Семейные дела
            </div>
            <div className="max-w-2xl">
              <h1 className="text-4xl md:text-[56px] font-black text-[var(--ink)] leading-[1.08] tracking-tight mb-5">
                Юридическая помощь<br />
                <span className="text-[#ff5c28]">в семейных вопросах</span>
              </h1>
              <p className="text-[var(--ink-2)] leading-relaxed mb-8 text-lg">
                Развод, алименты, место жительства ребёнка, отцовство —
                готовим документы автоматически и сопровождаем в суде.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link href="/test"
                  className="inline-flex items-center justify-center gap-2 bg-[#ff5c28] text-white font-bold px-6 py-3.5 rounded-2xl hover:bg-[#e84e1f] active:scale-[0.97] transition-all text-sm shadow-lg shadow-orange-200 dark:shadow-none">
                  Начать с анализа
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </Link>
                <a href="#services"
                  className="inline-flex items-center justify-center border-2 border-[#1a3c72]/20 text-[var(--brand-t)] font-semibold px-6 py-3.5 rounded-2xl hover:bg-[var(--bg-card)] hover:border-[#1a3c72]/40 transition-all text-sm">
                  Все услуги
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ── HOW IT WORKS ── */}
        <section className="py-16 bg-[var(--bg)]">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { step: "1", icon: "📋", title: "Заполните анкету", desc: "Укажите данные заявителя, второй стороны и обстоятельства дела" },
                { step: "2", icon: "⚙️", title: "Система подберёт сценарий", desc: "Автоматически определит нужный шаблон заявления и комплект документов" },
                { step: "3", icon: "📦", title: "Получите документы", desc: "Готовый пакет: заявление, инструкция по подаче, чек-лист документов" },
              ].map((item) => (
                <div key={item.step} className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-[var(--bg-muted)] flex items-center justify-center text-2xl flex-shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-xs font-bold text-[#ff5c28] uppercase tracking-wide mb-1">Шаг {item.step}</p>
                    <h3 className="font-bold text-[var(--ink)] mb-1">{item.title}</h3>
                    <p className="text-sm text-[var(--ink-2)] leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── SERVICES ── */}
        <section id="services" className="py-20 bg-[var(--bg-subtle)]">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="mb-12">
              <p className="text-xs font-bold text-[var(--brand-t)] uppercase tracking-widest mb-3">Услуги</p>
              <h2 className="text-3xl font-black text-[var(--ink)] mb-2">Все услуги по семейным делам</h2>
              <p className="text-[var(--ink-2)]">Для каждой ситуации — пошаговая система и готовые документы</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {services.map((service) => (
                <div key={service.title} className="bg-[var(--bg-card)] rounded-3xl p-7 border-2 border-[var(--border)] hover:border-[#1a3c72]/20 hover:shadow-xl transition-all group">
                  <div className="flex items-start gap-3 mb-5">
                    <div className="w-12 h-12 rounded-2xl bg-[var(--bg-muted)] flex items-center justify-center text-2xl flex-shrink-0">
                      {service.icon}
                    </div>
                    <div>
                      <h3 className="font-black text-[var(--ink)] group-hover:text-[var(--brand-t)] transition-colors">{service.title}</h3>
                      <p className="text-sm font-bold text-[#ff5c28] mt-0.5">{service.price}</p>
                    </div>
                  </div>
                  <p className="text-sm text-[var(--ink-2)] leading-relaxed mb-5">{service.desc}</p>

                  <div className="grid grid-cols-2 gap-5 mb-6">
                    <div>
                      <p className="text-xs font-bold text-[var(--ink-3)] uppercase tracking-wide mb-2">Когда применяется</p>
                      <ul className="space-y-1.5">
                        {service.when.map((w) => (
                          <li key={w} className="flex items-start gap-1.5 text-xs text-[var(--ink-2)]">
                            <span className="text-[var(--ink-3)] mt-0.5 flex-shrink-0">•</span> {w}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <p className="text-xs font-bold text-[var(--ink-3)] uppercase tracking-wide mb-2">Сценарии</p>
                      <ul className="space-y-1.5">
                        {service.scenarios.map((s) => (
                          <li key={s} className="flex items-start gap-1.5 text-xs text-[var(--ink-2)]">
                            <span className="text-[#ff5c28] mt-0.5 flex-shrink-0">→</span> {s}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="flex gap-2 pt-5 border-t border-[var(--border)]">
                    <Link href="/test"
                      className="flex-1 text-center bg-[#1a3c72] text-white text-xs font-bold py-2.5 rounded-xl hover:bg-[#0f2d5e] transition-colors">
                      Самостоятельно
                    </Link>
                    <button className="flex-1 text-center border-2 border-[#ff5c28] text-[#ff5c28] text-xs font-bold py-2.5 rounded-xl hover:bg-orange-50 dark:hover:bg-orange-900/20 transition-colors">
                      С сопровождением
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── FORMAT CHOICE ── */}
        <section className="py-20 bg-[var(--bg)]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6">
            <div className="text-center mb-12">
              <p className="text-xs font-bold text-[var(--brand-t)] uppercase tracking-widest mb-3">Формат</p>
              <h2 className="text-3xl font-black text-[var(--ink)]">Как выбрать формат</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="border-2 border-[var(--border)] rounded-3xl p-7 hover:border-[#1a3c72]/20 hover:shadow-lg transition-all">
                <div className="inline-flex items-center gap-2 bg-emerald-50 dark:bg-emerald-900/20 text-emerald-700 dark:text-emerald-400 text-xs font-bold px-3 py-1.5 rounded-full mb-5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                  Самостоятельно
                </div>
                <p className="text-sm text-[var(--ink-2)] mb-5 leading-relaxed">
                  Подходит для стандартных ситуаций без сложных споров.
                </p>
                <ul className="space-y-2.5">
                  {[
                    "Оба согласны на развод",
                    "Нет спора о детях или имуществе",
                    "Стандартный официальный доход",
                    "Нет конфликта между сторонами",
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-2.5 text-sm text-[var(--ink-2)]">
                      <svg className="w-4 h-4 text-emerald-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-[#1a3c72] rounded-3xl p-7 text-white">
                <div className="inline-flex items-center gap-2 bg-white/15 text-white text-xs font-bold px-3 py-1.5 rounded-full mb-5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#ff5c28]" />
                  С сопровождением
                </div>
                <p className="text-sm text-blue-200 mb-5 leading-relaxed">
                  Рекомендуется при сложных или спорных ситуациях.
                </p>
                <ul className="space-y-2.5">
                  {[
                    "Есть спор о детях",
                    "Требуется раздел имущества",
                    "Второй родитель скрывает доход",
                    "Планируется переезд ребёнка",
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-2.5 text-sm text-blue-100">
                      <span className="text-[#ff5c28] flex-shrink-0">⚠️</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <p className="text-center text-sm text-[var(--ink-3)] mt-6">
              💡 Вы можете начать самостоятельно и подключить юриста на любом этапе
            </p>
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="py-20 bg-[var(--bg-muted)]">
          <div className="max-w-2xl mx-auto px-4 sm:px-6 text-center">
            <h2 className="text-3xl font-black text-[var(--ink)] mb-4">Нужна консультация?</h2>
            <p className="text-[var(--ink-2)] mb-8">Объясним без сложных терминов и честно скажем, что вам подходит</p>
            <Link href="/#contacts"
              className="inline-flex items-center gap-2 bg-[#ff5c28] text-white font-bold px-8 py-4 rounded-2xl hover:bg-[#e84e1f] active:scale-[0.97] transition-all shadow-lg shadow-orange-200 dark:shadow-none">
              Получить консультацию бесплатно
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
}
