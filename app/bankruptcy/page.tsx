import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function BankruptcyPage() {
  return (
    <div className="flex flex-col min-h-full">
      <Header />
      <main className="flex-1">
        {/* ── HERO ── */}
        <section className="relative overflow-hidden bg-[#06101e]">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-0 left-1/4 w-[500px] h-[350px] bg-[#0f3460]/40 rounded-full blur-[120px]" />
          </div>
          <div className="relative max-w-6xl mx-auto px-4 sm:px-6 py-24 md:py-36">
            <div className="inline-flex items-center gap-2 bg-white/8 border border-white/10 rounded-full px-4 py-1.5 text-xs text-slate-300 mb-8">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
              Банкротство физических лиц
            </div>
            <div className="max-w-2xl">
              <h1 className="text-4xl md:text-5xl font-bold text-white leading-[1.1] tracking-tight mb-5">
                Законный способ
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-blue-500">
                  урегулировать долги
                </span>
              </h1>
              <p className="text-slate-400 leading-relaxed mb-8 text-lg">
                Банкротство физического лица — официальная процедура, которая
                позволяет законно урегулировать долги перед банками, МФО,
                налоговой и другими кредиторами.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link
                  href="/test"
                  className="inline-flex items-center justify-center gap-2 bg-white text-[#0f3460] font-semibold px-6 py-3.5 rounded-2xl hover:bg-blue-50 active:scale-[0.97] transition-all text-sm"
                >
                  Проверить мою ситуацию
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 7l5 5m0 0l-5 5m5-5H6"
                    />
                  </svg>
                </Link>
                <a
                  href="#scenarios"
                  className="inline-flex items-center justify-center border border-white/10 text-slate-300 font-medium px-6 py-3.5 rounded-2xl hover:bg-white/5 hover:text-white transition-all text-sm"
                >
                  Посмотреть сценарии
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ── WHEN IT APPLIES ── */}
        <section className="py-20 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="mb-12">
              <p className="text-xs font-semibold text-[#0f3460] uppercase tracking-widest mb-3">
                Когда подходит
              </p>
              <h2 className="text-3xl font-bold text-slate-900 mb-2">
                Признаки, что пора действовать
              </h2>
              <p className="text-slate-500">
                Банкротство может подойти, если есть хотя бы несколько из этих
                признаков
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                {
                  icon: "📉",
                  text: "Накопились просрочки по кредитам или займам",
                },
                { icon: "💸", text: "Нет возможности выплачивать долги" },
                { icon: "📌", text: "Удерживается большая часть дохода" },
                { icon: "⚖️", text: "Имеются исполнительные производства" },
                { icon: "📈", text: "Долги растут из-за процентов и штрафов" },
                { icon: "📞", text: "Кредиторы или коллекторы требуют оплату" },
              ].map((item) => (
                <div
                  key={item.text}
                  className="flex items-start gap-4 bg-slate-50 rounded-2xl p-5 border border-slate-100"
                >
                  <span className="text-2xl flex-shrink-0">{item.icon}</span>
                  <p className="text-sm text-slate-700 leading-relaxed">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
            <div className="mt-6 bg-blue-50 border border-blue-100 rounded-2xl p-5 flex items-start gap-3">
              <span className="text-xl flex-shrink-0">📌</span>
              <p className="text-sm text-blue-800">
                Банкротство может проводиться через суд или во внесудебном
                порядке через МФЦ — в зависимости от суммы долгов и вашей
                ситуации.
              </p>
            </div>
          </div>
        </section>

        {/* ── FORMATS ── */}
        <section className="py-20 bg-slate-50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="mb-12">
              <p className="text-xs font-semibold text-[#0f3460] uppercase tracking-widest mb-3">
                Формат
              </p>
              <h2 className="text-3xl font-bold text-slate-900">
                Выберите формат прохождения
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Self */}
              <div className="bg-white rounded-3xl p-8 border border-slate-100">
                <div className="inline-flex items-center gap-2 bg-emerald-50 text-emerald-700 text-xs font-semibold px-3 py-1.5 rounded-full mb-6">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                  Самостоятельно
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">
                  Цифровая система
                </h3>
                <p className="text-slate-500 text-sm mb-6 leading-relaxed">
                  Пошаговые инструкции, автоматически сформированные документы и
                  полный контроль над процессом.
                </p>
                <ul className="space-y-2.5 mb-8">
                  {[
                    "Заполнение анкеты",
                    "Анализ долговой нагрузки",
                    "Автоматическое формирование заявлений",
                    "Подготовка списка кредиторов",
                    "Инструкция по подаче",
                  ].map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-2.5 text-sm text-slate-600"
                    >
                      <svg
                        className="w-4 h-4 text-emerald-500 flex-shrink-0"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2.5}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="flex items-center justify-between mb-5">
                  <div>
                    <p className="text-3xl font-bold text-slate-900">
                      20 000 ₽
                    </p>
                    <p className="text-xs text-slate-400 mt-0.5">
                      + обязательные судебные расходы
                    </p>
                  </div>
                </div>
                <Link
                  href="/test"
                  className="block w-full text-center bg-slate-900 text-white font-semibold py-3.5 rounded-2xl hover:bg-slate-800 active:scale-[0.98] transition-all text-sm"
                >
                  Начать самостоятельно
                </Link>
              </div>

              {/* Supported */}
              <div className="bg-[#0f3460] rounded-3xl p-8 text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-48 h-48 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2" />
                <div className="inline-flex items-center gap-2 bg-white/10 text-white text-xs font-semibold px-3 py-1.5 rounded-full mb-6">
                  <span>⭐</span> Чаще выбирают
                </div>
                <h3 className="text-xl font-bold mb-3">
                  С юридическим сопровождением
                </h3>
                <p className="text-blue-200 text-sm mb-6 leading-relaxed">
                  Юрист ведёт процедуру — вы минимально вовлечены. Подходит,
                  если важно снизить риски.
                </p>
                <ul className="space-y-2.5 mb-8">
                  {[
                    "Анализ ситуации и рисков",
                    "Подготовка всех документов",
                    "Подача в суд",
                    "Сопровождение до завершения",
                    "Взаимодействие с управляющим",
                    "Защита при спорных ситуациях",
                  ].map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-2.5 text-sm text-blue-100"
                    >
                      <svg
                        className="w-4 h-4 text-blue-300 flex-shrink-0"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2.5}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
                <Link
                  href="/test"
                  className="block w-full text-center bg-white text-[#0f3460] font-semibold py-3.5 rounded-2xl hover:bg-blue-50 active:scale-[0.98] transition-all text-sm"
                >
                  Получить сопровождение
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* ── SCENARIOS ── */}
        <section id="scenarios" className="py-20 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="mb-12">
              <p className="text-xs font-semibold text-[#0f3460] uppercase tracking-widest mb-3">
                Сценарии
              </p>
              <h2 className="text-3xl font-bold text-slate-900 mb-2">
                Какой вариант вам подойдёт
              </h2>
              <p className="text-slate-500">
                Система автоматически определяет подходящий сценарий по вашим
                ответам
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {[
                {
                  label: "А",
                  color: "bg-blue-500",
                  bg: "bg-blue-50 border-blue-100",
                  title: "Внесудебное через МФЦ",
                  when: [
                    "Размер долгов соответствует условиям",
                    "Есть завершённые исполнительные производства",
                  ],
                  note: "Формируется заявление для подачи через МФЦ",
                },
                {
                  label: "Б",
                  color: "bg-violet-500",
                  bg: "bg-violet-50 border-violet-100",
                  title: "Судебное банкротство",
                  when: [
                    "Значительный размер задолженности",
                    "Имеются активные взыскания",
                  ],
                  note: "Формируется заявление в арбитражный суд",
                },
                {
                  label: "В",
                  color: "bg-orange-500",
                  bg: "bg-orange-50 border-orange-100",
                  title: "При наличии имущества",
                  when: [
                    "У заявителя есть имущество",
                    "Были сделки за последние 3 года",
                  ],
                  note: "Формируется расширенный комплект документов",
                },
              ].map((s) => (
                <div key={s.label} className={`rounded-3xl p-6 border ${s.bg}`}>
                  <div
                    className={`w-10 h-10 rounded-xl ${s.color} flex items-center justify-center text-white font-bold text-base mb-5`}
                  >
                    {s.label}
                  </div>
                  <h3 className="font-bold text-slate-900 mb-4">{s.title}</h3>
                  <p className="text-xs font-semibold text-slate-400 uppercase tracking-wide mb-2">
                    Когда применяется
                  </p>
                  <ul className="space-y-2 mb-5">
                    {s.when.map((w) => (
                      <li
                        key={w}
                        className="flex items-start gap-2 text-sm text-slate-600"
                      >
                        <span className="text-slate-300 mt-0.5 flex-shrink-0">
                          •
                        </span>{" "}
                        {w}
                      </li>
                    ))}
                  </ul>
                  <div className="bg-white/60 rounded-xl p-3 text-xs text-slate-500 border border-white">
                    📌 {s.note}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── STEPS ── */}
        <section className="py-20 bg-slate-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6">
            <div className="text-center mb-12">
              <p className="text-xs font-semibold text-[#0f3460] uppercase tracking-widest mb-3">
                Процесс
              </p>
              <h2 className="text-3xl font-bold text-slate-900">
                Как это работает
              </h2>
            </div>
            <div className="space-y-3">
              {[
                {
                  step: "01",
                  title: "Анализ ситуации",
                  desc: "Пройдите бесплатный тест за 3 минуты. Получите предварительную оценку вероятности процедуры.",
                  badge: null,
                },
                {
                  step: "02",
                  title: "Правовое заключение",
                  desc: "Индивидуальный анализ от юриста. Юридически точная оценка рисков и рекомендации.",
                  badge: "10 000 ₽",
                },
                {
                  step: "03",
                  title: "Подготовка документов",
                  desc: "Внесите данные о долгах и кредиторах. Система автоматически формирует все заявления.",
                  badge: null,
                },
                {
                  step: "04",
                  title: "Готовый пакет",
                  desc: "Скачайте ZIP-архив: заявление, список кредиторов, инструкция по подаче.",
                  badge: null,
                },
              ].map((item) => (
                <div
                  key={item.step}
                  className="flex gap-5 bg-white rounded-2xl p-6 border border-slate-100"
                >
                  <div className="flex-shrink-0 w-11 h-11 rounded-2xl bg-[#0f3460]/8 flex items-center justify-center">
                    <span className="text-[#0f3460] font-bold text-sm">
                      {item.step}
                    </span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-3 mb-1.5 flex-wrap">
                      <h3 className="font-semibold text-slate-900">
                        {item.title}
                      </h3>
                      {item.badge && (
                        <span className="text-xs bg-[#0f3460]/8 text-[#0f3460] font-semibold px-2.5 py-0.5 rounded-full">
                          {item.badge}
                        </span>
                      )}
                    </div>
                    <p className="text-sm text-slate-500 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── MANDATORY COSTS ── */}
        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6">
            <div className="bg-amber-50 border border-amber-200 rounded-3xl p-8">
              <div className="flex items-start gap-3 mb-6">
                <span className="text-2xl">⚠️</span>
                <div>
                  <h2 className="text-xl font-bold text-amber-900">
                    Обязательные расходы по закону
                  </h2>
                  <p className="text-amber-700 text-sm mt-1">
                    Вне зависимости от выбранного формата — определены
                    Федеральным законом
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                {[
                  {
                    amount: "25 000 ₽",
                    label: "Вознаграждение арбитражного управляющего",
                  },
                  { amount: "15 000 ₽", label: "Публикации в реестрах" },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="bg-white rounded-2xl p-5 border border-amber-100"
                  >
                    <p className="text-3xl font-bold text-slate-900 mb-1">
                      {item.amount}
                    </p>
                    <p className="text-sm text-slate-600">{item.label}</p>
                  </div>
                ))}
              </div>
              <div className="flex flex-col gap-1.5">
                {[
                  "Госпошлина для физических лиц не требуется",
                  "Платежи регулируются законодательством",
                  "Без скрытых комиссий",
                ].map((t) => (
                  <div
                    key={t}
                    className="flex items-center gap-2 text-sm text-amber-800"
                  >
                    <svg
                      className="w-4 h-4 text-emerald-500 flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2.5}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    {t}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── WHEN LAWYER NEEDED ── */}
        <section className="py-20 bg-slate-50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="mb-12">
              <p className="text-xs font-semibold text-[#0f3460] uppercase tracking-widest mb-3">
                Риски
              </p>
              <h2 className="text-3xl font-bold text-slate-900 mb-2">
                Когда особенно важно сопровождение
              </h2>
              <p className="text-slate-500">
                В этих ситуациях риски выше — не рекомендуется проходить
                самостоятельно
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                "Есть имущество, которое может затронуть процедура",
                "Имеются сделки с имуществом за последние 3 года",
                "Долги связаны с бизнесом или ИП",
                "Кредиторы уже подали в суд",
                "Есть совместное имущество супругов",
                "Имеются риски оспаривания сделок",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-start gap-3 bg-white rounded-2xl p-5 border border-slate-100"
                >
                  <span className="text-lg flex-shrink-0">⚠️</span>
                  <p className="text-sm text-slate-700 leading-relaxed">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="py-20 bg-[#06101e]">
          <div className="max-w-2xl mx-auto px-4 sm:px-6 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Начните с бесплатного анализа
            </h2>
            <p className="text-slate-400 mb-8">
              Проверьте свою ситуацию за 3 минуты — это ни к чему не обязывает
            </p>
            <Link
              href="/test"
              className="inline-flex items-center gap-2 bg-white text-[#0f3460] font-semibold px-8 py-4 rounded-2xl hover:bg-blue-50 active:scale-[0.97] transition-all"
            >
              Пройти анализ ситуации
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 7l5 5m0 0l-5 5m5-5H6"
                />
              </svg>
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
