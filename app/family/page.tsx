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
        <section className="relative overflow-hidden bg-[#06101e]">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-0 right-1/4 w-[500px] h-[350px] bg-rose-900/20 rounded-full blur-[120px]" />
            <div className="absolute bottom-0 left-1/4 w-[400px] h-[250px] bg-[#0f3460]/30 rounded-full blur-[100px]" />
          </div>
          <div className="relative max-w-6xl mx-auto px-4 sm:px-6 py-24 md:py-36">
            <div className="inline-flex items-center gap-2 bg-white/8 border border-white/10 rounded-full px-4 py-1.5 text-xs text-slate-300 mb-8">
              <span className="w-1.5 h-1.5 rounded-full bg-rose-400" />
              Семейные дела
            </div>
            <div className="max-w-2xl">
              <h1 className="text-4xl md:text-5xl font-bold text-white leading-[1.1] tracking-tight mb-5">
                Юридическая помощь<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-300 to-rose-500">в семейных вопросах</span>
              </h1>
              <p className="text-slate-400 leading-relaxed mb-8 text-lg">
                Развод, алименты, место жительства ребёнка, отцовство —
                готовим документы автоматически и сопровождаем в суде.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link href="/test"
                  className="inline-flex items-center justify-center gap-2 bg-white text-[#0f3460] font-semibold px-6 py-3.5 rounded-2xl hover:bg-slate-50 active:scale-[0.97] transition-all text-sm">
                  Начать с анализа
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </Link>
                <a href="#services"
                  className="inline-flex items-center justify-center border border-white/10 text-slate-300 font-medium px-6 py-3.5 rounded-2xl hover:bg-white/5 hover:text-white transition-all text-sm">
                  Все услуги
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ── HOW IT WORKS ── */}
        <section className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { step: "1", icon: "📋", title: "Заполните анкету", desc: "Укажите данные заявителя, второй стороны и обстоятельства дела" },
                { step: "2", icon: "⚙️", title: "Система подберёт сценарий", desc: "Автоматически определит нужный шаблон заявления и комплект документов" },
                { step: "3", icon: "📦", title: "Получите документы", desc: "Готовый пакет: заявление, инструкция по подаче, чек-лист документов" },
              ].map((item) => (
                <div key={item.step} className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-slate-100 flex items-center justify-center text-2xl flex-shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-slate-400 uppercase tracking-wide mb-1">Шаг {item.step}</p>
                    <h3 className="font-semibold text-slate-900 mb-1">{item.title}</h3>
                    <p className="text-sm text-slate-500 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── SERVICES ── */}
        <section id="services" className="py-20 bg-slate-50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="mb-12">
              <p className="text-xs font-semibold text-[#0f3460] uppercase tracking-widest mb-3">Услуги</p>
              <h2 className="text-3xl font-bold text-slate-900 mb-2">Все услуги по семейным делам</h2>
              <p className="text-slate-500">Для каждой ситуации — пошаговая система и готовые документы</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {services.map((service) => (
                <div key={service.title} className="bg-white rounded-3xl p-7 border border-slate-100 hover:shadow-lg transition-all group">
                  <div className="flex items-start gap-3 mb-5">
                    <div className="w-12 h-12 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center text-2xl flex-shrink-0">
                      {service.icon}
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-900 group-hover:text-[#0f3460] transition-colors">{service.title}</h3>
                      <p className="text-sm font-semibold text-[#0f3460] mt-0.5">{service.price}</p>
                    </div>
                  </div>
                  <p className="text-sm text-slate-500 leading-relaxed mb-5">{service.desc}</p>

                  <div className="grid grid-cols-2 gap-5 mb-6">
                    <div>
                      <p className="text-xs font-semibold text-slate-400 uppercase tracking-wide mb-2">Когда применяется</p>
                      <ul className="space-y-1.5">
                        {service.when.map((w) => (
                          <li key={w} className="flex items-start gap-1.5 text-xs text-slate-600">
                            <span className="text-slate-300 mt-0.5 flex-shrink-0">•</span> {w}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-slate-400 uppercase tracking-wide mb-2">Сценарии</p>
                      <ul className="space-y-1.5">
                        {service.scenarios.map((s) => (
                          <li key={s} className="flex items-start gap-1.5 text-xs text-slate-600">
                            <span className="text-[#0f3460] mt-0.5 flex-shrink-0">→</span> {s}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="flex gap-2 pt-5 border-t border-slate-100">
                    <Link href="/test"
                      className="flex-1 text-center bg-[#0f3460] text-white text-xs font-semibold py-2.5 rounded-xl hover:bg-[#1a4f8a] transition-colors">
                      Самостоятельно
                    </Link>
                    <button className="flex-1 text-center border border-slate-200 text-slate-600 text-xs font-medium py-2.5 rounded-xl hover:bg-slate-50 hover:border-slate-300 transition-colors">
                      С сопровождением
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── FORMAT CHOICE ── */}
        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6">
            <div className="text-center mb-12">
              <p className="text-xs font-semibold text-[#0f3460] uppercase tracking-widest mb-3">Формат</p>
              <h2 className="text-3xl font-bold text-slate-900">Как выбрать формат</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="border border-slate-100 rounded-3xl p-7">
                <div className="inline-flex items-center gap-2 bg-emerald-50 text-emerald-700 text-xs font-semibold px-3 py-1.5 rounded-full mb-5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                  Самостоятельно
                </div>
                <p className="text-sm text-slate-500 mb-5 leading-relaxed">
                  Подходит для стандартных ситуаций без сложных споров.
                </p>
                <ul className="space-y-2.5">
                  {[
                    "Оба согласны на развод",
                    "Нет спора о детях или имуществе",
                    "Стандартный официальный доход",
                    "Нет конфликта между сторонами",
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-2.5 text-sm text-slate-600">
                      <svg className="w-4 h-4 text-emerald-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-slate-900 rounded-3xl p-7 text-white">
                <div className="inline-flex items-center gap-2 bg-white/10 text-white text-xs font-semibold px-3 py-1.5 rounded-full mb-5">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                  С сопровождением
                </div>
                <p className="text-sm text-slate-400 mb-5 leading-relaxed">
                  Рекомендуется при сложных или спорных ситуациях.
                </p>
                <ul className="space-y-2.5">
                  {[
                    "Есть спор о детях",
                    "Требуется раздел имущества",
                    "Второй родитель скрывает доход",
                    "Планируется переезд ребёнка",
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-2.5 text-sm text-slate-300">
                      <span className="text-amber-400 flex-shrink-0">⚠️</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <p className="text-center text-sm text-slate-400 mt-6">
              💡 Вы можете начать самостоятельно и подключить юриста на любом этапе
            </p>
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="py-20 bg-[#06101e]">
          <div className="max-w-2xl mx-auto px-4 sm:px-6 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Нужна консультация?</h2>
            <p className="text-slate-400 mb-8">Объясним без сложных терминов и честно скажем, что вам подходит</p>
            <Link href="/#contacts"
              className="inline-flex items-center gap-2 bg-white text-slate-900 font-semibold px-8 py-4 rounded-2xl hover:bg-slate-100 active:scale-[0.97] transition-all">
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
