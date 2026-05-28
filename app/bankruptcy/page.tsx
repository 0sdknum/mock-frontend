import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function BankruptcyPage() {
  return (
    <div className="flex flex-col min-h-full">
      <Header />
      <main className="flex-1">
        {/* ── HERO ── */}
        <section className="relative overflow-hidden bg-[var(--bg-muted)]">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-[-80px] right-[-80px] w-[420px] h-[420px] bg-[#1a3c72]/8 rounded-full blur-[80px]" />
            <div className="absolute bottom-[-60px] left-[-60px] w-[300px] h-[300px] bg-[#ff5c28]/6 rounded-full blur-[80px]" />
          </div>
          <div className="relative max-w-6xl mx-auto px-4 sm:px-6 py-24 md:py-36">
            <div className="inline-flex items-center gap-2 bg-[var(--bg-card)] border border-[#1a3c72]/10 rounded-full px-4 py-1.5 text-xs text-[var(--brand-t)] font-semibold mb-8 shadow-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-[#2563eb] dark:bg-[#1a3c72]" />
              Банкротство физических лиц
            </div>
            <div className="max-w-2xl">
              <h1 className="text-4xl md:text-[56px] font-black text-[var(--ink)] leading-[1.08] tracking-tight mb-5">
                Законный способ<br />
                <span className="text-[#ff5c28]">урегулировать долги</span>
              </h1>
              <p className="text-[var(--ink-2)] leading-relaxed mb-8 text-lg">
                Банкротство физического лица — официальная процедура, которая
                позволяет законно урегулировать долги перед банками, МФО,
                налоговой и другими кредиторами.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link
                  href="/test"
                  className="inline-flex items-center justify-center gap-2 bg-[#ff5c28] text-white font-bold px-6 py-3.5 rounded-2xl hover:bg-[#e84e1f] active:scale-[0.97] transition-all text-sm shadow-lg shadow-orange-200 dark:shadow-none"
                >
                  Проверить мою ситуацию
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </Link>
                <a
                  href="#scenarios"
                  className="inline-flex items-center justify-center border-2 border-[#1a3c72]/20 text-[var(--brand-t)] font-semibold px-6 py-3.5 rounded-2xl hover:bg-[var(--bg-card)] hover:border-[#1a3c72]/40 transition-all text-sm"
                >
                  Посмотреть сценарии
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ── WHEN IT APPLIES ── */}
        <section className="py-20 bg-[var(--bg)]">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="mb-12">
              <p className="text-xs font-bold text-[var(--brand-t)] uppercase tracking-widest mb-3">
                Когда подходит
              </p>
              <h2 className="text-3xl font-black text-[var(--ink)] mb-2">
                Признаки, что пора действовать
              </h2>
              <p className="text-[var(--ink-2)]">
                Банкротство может подойти, если есть хотя бы несколько из этих признаков
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                { icon: "📉", text: "Накопились просрочки по кредитам или займам" },
                { icon: "💸", text: "Нет возможности выплачивать долги" },
                { icon: "📌", text: "Удерживается большая часть дохода" },
                { icon: "⚖️", text: "Имеются исполнительные производства" },
                { icon: "📈", text: "Долги растут из-за процентов и штрафов" },
                { icon: "📞", text: "Кредиторы или коллекторы требуют оплату" },
              ].map((item) => (
                <div
                  key={item.text}
                  className="flex items-start gap-4 bg-[var(--bg-card)] rounded-2xl p-5 border-2 border-[var(--border)] hover:border-[#1a3c72]/20 hover:shadow-lg transition-all"
                >
                  <span className="text-2xl flex-shrink-0">{item.icon}</span>
                  <p className="text-sm text-[var(--ink-2)] leading-relaxed">{item.text}</p>
                </div>
              ))}
            </div>
            <div className="mt-6 bg-blue-50 border border-blue-100 dark:bg-blue-900/20 dark:border-blue-800/40 rounded-2xl p-5 flex items-start gap-3">
              <span className="text-xl flex-shrink-0">📌</span>
              <p className="text-sm text-blue-800 dark:text-blue-300">
                Банкротство может проводиться через суд или во внесудебном
                порядке через МФЦ — в зависимости от суммы долгов и вашей ситуации.
              </p>
            </div>
          </div>
        </section>

        {/* ── FORMATS ── */}
        <section className="py-20 bg-[var(--bg-subtle)]">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="mb-12">
              <p className="text-xs font-bold text-[var(--brand-t)] uppercase tracking-widest mb-3">Формат</p>
              <h2 className="text-3xl font-black text-[var(--ink)]">Выберите формат прохождения</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Self */}
              <div className="bg-[var(--bg-card)] rounded-3xl p-8 border-2 border-[var(--border)] hover:border-[#1a3c72]/20 hover:shadow-xl transition-all">
                <div className="inline-flex items-center gap-2 bg-emerald-50 dark:bg-emerald-900/20 text-emerald-700 dark:text-emerald-400 text-xs font-bold px-3 py-1.5 rounded-full mb-6">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                  Самостоятельно
                </div>
                <h3 className="text-xl font-black text-[var(--ink)] mb-3">Цифровая система</h3>
                <p className="text-[var(--ink-2)] text-sm mb-6 leading-relaxed">
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
                    <li key={item} className="flex items-center gap-2.5 text-sm text-[var(--ink-2)]">
                      <svg className="w-4 h-4 text-emerald-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="flex items-center justify-between mb-5">
                  <div>
                    <p className="text-3xl font-black text-[var(--ink)]">20 000 ₽</p>
                    <p className="text-xs text-[var(--ink-3)] mt-0.5">+ обязательные судебные расходы</p>
                  </div>
                </div>
                <Link
                  href="/test"
                  className="block w-full text-center bg-gradient-to-r from-[#3b7fe8] to-[#1d52c8] dark:from-[#1a3c72] dark:to-[#0e2a5a] text-white font-bold py-3.5 rounded-2xl hover:opacity-90 active:scale-[0.98] transition-all text-sm"
                >
                  Начать самостоятельно
                </Link>
              </div>

              {/* Supported */}
              <div className="bg-gradient-to-br from-[#3b7fe8] to-[#1d52c8] dark:from-[#1a3c72] dark:to-[#0e2a5a] rounded-3xl p-8 text-white relative overflow-hidden border-2 border-transparent">
                <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2" />
                <div className="inline-flex items-center gap-2 bg-white/15 text-white text-xs font-bold px-3 py-1.5 rounded-full mb-6">
                  <span>⭐</span> Чаще выбирают
                </div>
                <h3 className="text-xl font-black mb-3">С юридическим сопровождением</h3>
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
                    <li key={item} className="flex items-center gap-2.5 text-sm text-blue-100">
                      <svg className="w-4 h-4 text-blue-300 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
                <Link
                  href="/test"
                  className="block w-full text-center bg-[#ff5c28] text-white font-bold py-3.5 rounded-2xl hover:bg-[#e84e1f] active:scale-[0.98] transition-all text-sm shadow-lg shadow-orange-900/30"
                >
                  Получить сопровождение
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* ── SCENARIOS ── */}
        <section id="scenarios" className="py-20 bg-[var(--bg)]">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="mb-12">
              <p className="text-xs font-bold text-[var(--brand-t)] uppercase tracking-widest mb-3">Сценарии</p>
              <h2 className="text-3xl font-black text-[var(--ink)] mb-2">Какой вариант вам подойдёт</h2>
              <p className="text-[var(--ink-2)]">
                Система автоматически определяет подходящий сценарий по вашим ответам
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {[
                {
                  label: "А",
                  color: "bg-blue-500",
                  bg: "bg-blue-50 dark:bg-blue-900/20 border-blue-100 dark:border-blue-800/40",
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
                  bg: "bg-violet-50 dark:bg-violet-900/20 border-violet-100 dark:border-violet-800/40",
                  title: "Судебное банкротство",
                  when: [
                    "Значительный размер задолженности",
                    "Имеются активные взыскания",
                  ],
                  note: "Формируется заявление в арбитражный суд",
                },
                {
                  label: "В",
                  color: "bg-[#ff5c28]",
                  bg: "bg-orange-50 dark:bg-orange-900/20 border-orange-100 dark:border-orange-800/40",
                  title: "При наличии имущества",
                  when: [
                    "У заявителя есть имущество",
                    "Были сделки за последние 3 года",
                  ],
                  note: "Формируется расширенный комплект документов",
                },
              ].map((s) => (
                <div key={s.label} className={`rounded-3xl p-6 border-2 ${s.bg} hover:shadow-lg transition-all`}>
                  <div className={`w-10 h-10 rounded-xl ${s.color} flex items-center justify-center text-white font-black text-base mb-5`}>
                    {s.label}
                  </div>
                  <h3 className="font-black text-[var(--ink)] mb-4">{s.title}</h3>
                  <p className="text-xs font-bold text-[var(--ink-3)] uppercase tracking-wide mb-2">Когда применяется</p>
                  <ul className="space-y-2 mb-5">
                    {s.when.map((w) => (
                      <li key={w} className="flex items-start gap-2 text-sm text-[var(--ink-2)]">
                        <span className="text-[var(--ink-3)] mt-0.5 flex-shrink-0">•</span> {w}
                      </li>
                    ))}
                  </ul>
                  <div className="bg-[var(--bg-card)/70] dark:bg-white/5 rounded-xl p-3 text-xs text-[var(--ink-2)] border border-[var(--border)] dark:border-white/10">
                    📌 {s.note}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── STEPS ── */}
        <section className="py-20 bg-[var(--bg-subtle)]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6">
            <div className="text-center mb-12">
              <p className="text-xs font-bold text-[var(--brand-t)] uppercase tracking-widest mb-3">Процесс</p>
              <h2 className="text-3xl font-black text-[var(--ink)]">Как это работает</h2>
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
                  className="flex gap-5 bg-[var(--bg-card)] rounded-2xl p-6 border-2 border-[var(--border)] hover:border-[#1a3c72]/20 hover:shadow-md transition-all"
                >
                  <div className="flex-shrink-0 w-11 h-11 rounded-2xl bg-[var(--bg-muted)] flex items-center justify-center">
                    <span className="text-[var(--brand-t)] font-black text-sm">{item.step}</span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-3 mb-1.5 flex-wrap">
                      <h3 className="font-bold text-[var(--ink)]">{item.title}</h3>
                      {item.badge && (
                        <span className="text-xs bg-[var(--bg-muted)] text-[var(--brand-t)] font-bold px-2.5 py-0.5 rounded-full">
                          {item.badge}
                        </span>
                      )}
                    </div>
                    <p className="text-sm text-[var(--ink-2)] leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── MANDATORY COSTS ── */}
        <section className="py-20 bg-[var(--bg)]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6">
            <div className="bg-amber-50 border-2 border-amber-200 dark:bg-amber-900/20 dark:border-amber-800/40 rounded-3xl p-8">
              <div className="flex items-start gap-3 mb-6">
                <span className="text-2xl">⚠️</span>
                <div>
                  <h2 className="text-xl font-black text-amber-900 dark:text-amber-200">Обязательные расходы по закону</h2>
                  <p className="text-amber-700 dark:text-amber-300 text-sm mt-1">
                    Вне зависимости от выбранного формата — определены Федеральным законом
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                {[
                  { amount: "25 000 ₽", label: "Вознаграждение арбитражного управляющего" },
                  { amount: "15 000 ₽", label: "Публикации в реестрах" },
                ].map((item) => (
                  <div key={item.label} className="bg-[var(--bg-card)] rounded-2xl p-5 border border-amber-100 dark:border-amber-800/40">
                    <p className="text-3xl font-black text-[var(--ink)] mb-1">{item.amount}</p>
                    <p className="text-sm text-[var(--ink-2)]">{item.label}</p>
                  </div>
                ))}
              </div>
              <div className="flex flex-col gap-1.5">
                {[
                  "Госпошлина для физических лиц не требуется",
                  "Платежи регулируются законодательством",
                  "Без скрытых комиссий",
                ].map((t) => (
                  <div key={t} className="flex items-center gap-2 text-sm text-amber-800 dark:text-amber-300">
                    <svg className="w-4 h-4 text-emerald-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                    {t}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── WHEN LAWYER NEEDED ── */}
        <section className="py-20 bg-[var(--bg-subtle)]">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="mb-12">
              <p className="text-xs font-bold text-[var(--brand-t)] uppercase tracking-widest mb-3">Риски</p>
              <h2 className="text-3xl font-black text-[var(--ink)] mb-2">Когда особенно важно сопровождение</h2>
              <p className="text-[var(--ink-2)]">В этих ситуациях риски выше — не рекомендуется проходить самостоятельно</p>
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
                <div key={item} className="flex items-start gap-3 bg-[var(--bg-card)] rounded-2xl p-5 border-2 border-[var(--border)] hover:border-amber-200 hover:shadow-md transition-all">
                  <span className="text-lg flex-shrink-0">⚠️</span>
                  <p className="text-sm text-[var(--ink-2)] leading-relaxed">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="py-20 bg-[var(--bg-muted)]">
          <div className="max-w-2xl mx-auto px-4 sm:px-6 text-center">
            <h2 className="text-3xl font-black text-[var(--ink)] mb-4">
              Начните с бесплатного анализа
            </h2>
            <p className="text-[var(--ink-2)] mb-8">
              Проверьте свою ситуацию за 3 минуты — это ни к чему не обязывает
            </p>
            <Link
              href="/test"
              className="inline-flex items-center gap-2 bg-[#ff5c28] text-white font-bold px-8 py-4 rounded-2xl hover:bg-[#e84e1f] active:scale-[0.97] transition-all shadow-lg shadow-orange-200 dark:shadow-none"
            >
              Пройти анализ ситуации
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
