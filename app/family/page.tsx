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
    scenarios: ["Дети есть, спора нет", "Дети есть + алименты + супруг против", "Нет детей, супруг против"],
  },
  {
    icon: "👶",
    title: "Алименты на ребёнка",
    desc: "Взыскание алиментов в процентах от дохода или в твёрдой денежной сумме.",
    price: "от 25 000 ₽",
    when: ["Ребёнок живёт с одним родителем", "Второй родитель не участвует в содержании", "Нет добровольного соглашения"],
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

        {/* Hero */}
        <section className="bg-gradient-to-br from-slate-800 to-slate-700 text-white py-16">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="max-w-2xl">
              <p className="text-slate-300 text-sm mb-3">👨‍👩‍👧 Семейные дела</p>
              <h1 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">
                Юридическая помощь<br />в семейных вопросах
              </h1>
              <p className="text-slate-300 leading-relaxed mb-6">
                Развод, алименты, определение места жительства ребёнка, отцовство —
                готовим документы автоматически и сопровождаем в суде.
              </p>
              <div className="flex gap-3">
                <Link href="/test"
                  className="bg-white text-slate-800 font-semibold px-5 py-3 rounded-xl hover:bg-slate-100 transition-colors text-sm">
                  Начать с анализа
                </Link>
                <a href="#services"
                  className="border border-white/30 text-white font-medium px-5 py-3 rounded-xl hover:bg-white/10 transition-colors text-sm">
                  Посмотреть услуги
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Как это работает */}
        <section className="py-12 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { step: "1", icon: "📋", title: "Заполните анкету", desc: "Укажите данные заявителя, второй стороны и обстоятельства дела" },
                { step: "2", icon: "⚙️", title: "Система подберёт сценарий", desc: "Автоматически определит нужный шаблон заявления и комплект документов" },
                { step: "3", icon: "📦", title: "Скачайте ZIP-архив", desc: "Готовый пакет: заявление, инструкция по подаче, чек-лист документов" },
              ].map((item) => (
                <div key={item.step} className="text-center">
                  <div className="w-14 h-14 rounded-2xl bg-slate-100 flex items-center justify-center text-2xl mx-auto mb-4">
                    {item.icon}
                  </div>
                  <h3 className="font-semibold text-slate-900 mb-1">{item.title}</h3>
                  <p className="text-sm text-slate-500 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services grid */}
        <section id="services" className="py-14 bg-slate-50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <h2 className="text-2xl font-bold text-slate-900 mb-2">Все услуги по семейным делам</h2>
            <p className="text-slate-500 mb-8">Для каждой ситуации — пошаговая система и готовые документы</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {services.map((service) => (
                <div key={service.title} className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <span className="text-3xl">{service.icon}</span>
                      <div>
                        <h3 className="font-bold text-slate-900">{service.title}</h3>
                        <p className="text-sm font-semibold text-[#0f3460]">{service.price}</p>
                      </div>
                    </div>
                  </div>
                  <p className="text-sm text-slate-600 leading-relaxed mb-4">{service.desc}</p>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <p className="text-xs font-semibold text-slate-400 uppercase tracking-wide mb-2">Когда применяется</p>
                      <ul className="space-y-1">
                        {service.when.map((w) => (
                          <li key={w} className="flex items-start gap-1.5 text-xs text-slate-600">
                            <span className="text-slate-300 mt-0.5">•</span> {w}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-slate-400 uppercase tracking-wide mb-2">Сценарии</p>
                      <ul className="space-y-1">
                        {service.scenarios.map((s) => (
                          <li key={s} className="flex items-start gap-1.5 text-xs text-slate-600">
                            <span className="text-[#0f3460] mt-0.5">→</span> {s}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="mt-4 pt-4 border-t border-slate-100 flex gap-2">
                    <Link href="/test"
                      className="flex-1 text-center bg-[#0f3460] text-white text-xs font-medium py-2.5 rounded-lg hover:bg-[#1a4f8a] transition-colors">
                      Самостоятельно
                    </Link>
                    <button className="flex-1 text-center border border-[#0f3460]/20 text-[#0f3460] text-xs font-medium py-2.5 rounded-lg hover:bg-[#0f3460]/5 transition-colors">
                      С сопровождением
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Самостоятельно vs Сопровождение */}
        <section className="py-14 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6">
            <h2 className="text-2xl font-bold text-slate-900 mb-8 text-center">Как выбрать формат</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="border border-slate-100 rounded-2xl p-6">
                <h3 className="font-bold text-slate-900 mb-3 flex items-center gap-2">
                  <span className="text-xl">🟢</span> Самостоятельно
                </h3>
                <p className="text-sm text-slate-500 mb-4 leading-relaxed">
                  Подходит для стандартных ситуаций без сложных споров.
                </p>
                <ul className="space-y-2">
                  {[
                    "Оба согласны на развод",
                    "Нет спора о детях или имуществе",
                    "Стандартный официальный доход",
                    "Нет конфликта между сторонами",
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm text-slate-600">
                      <span className="text-green-500">✓</span> {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6">
                <h3 className="font-bold text-slate-900 mb-3 flex items-center gap-2">
                  <span className="text-xl">🔵</span> С сопровождением
                </h3>
                <p className="text-sm text-slate-500 mb-4 leading-relaxed">
                  Рекомендуется при сложных или спорных ситуациях.
                </p>
                <ul className="space-y-2">
                  {[
                    "Есть спор о детях",
                    "Требуется раздел имущества",
                    "Второй родитель скрывает доход",
                    "Планируется переезд ребёнка",
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm text-slate-600">
                      <span className="text-amber-500">⚠️</span> {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <p className="text-center text-sm text-slate-400 mt-4">
              💡 Вы можете начать самостоятельно и подключить юриста на любом этапе
            </p>
          </div>
        </section>

        {/* CTA */}
        <section className="py-14 bg-gradient-to-br from-slate-800 to-slate-700">
          <div className="max-w-2xl mx-auto px-4 sm:px-6 text-center">
            <h2 className="text-2xl font-bold text-white mb-3">Нужна консультация?</h2>
            <p className="text-slate-300 mb-6">Объясним без сложных терминов и честно скажем, что вам подходит</p>
            <Link href="/#contacts"
              className="inline-block bg-white text-slate-800 font-semibold px-8 py-3.5 rounded-xl hover:bg-slate-100 transition-colors">
              Получить консультацию бесплатно
            </Link>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
}
