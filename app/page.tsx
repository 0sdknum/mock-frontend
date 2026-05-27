import Link from "next/link";
import Header from "./components/Header";
import Footer from "./components/Footer";

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-full">
      <Header />
      <main className="flex-1">
        {/* ── HERO ── */}
        <section className="relative max-h-185 h-full overflow-hidden bg-[#06101e]">
          {/* Background glow */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-0 left-1/3 w-[600px] h-[400px] bg-[#0f3460]/40 rounded-full blur-[120px]" />
            <div className="absolute bottom-0 right-1/4 w-[400px] h-[300px] bg-[#1a4f8a]/30 rounded-full blur-[100px]" />
          </div>

          <div className="relative max-w-6xl mx-auto px-4 sm:px-6 py-24 md:py-32">
            <div className="inline-flex items-center gap-2 bg-white/8 border border-white/10 rounded-full px-4 py-1.5 text-xs text-slate-300 mb-8">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
              Цифровая юридическая платформа · Россия
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white leading-[1.1] tracking-tight mb-6 max-w-3xl">
              Юридические вопросы —<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-blue-500">
                понятно и по шагам
              </span>
            </h1>
            <p className="text-lg text-slate-400 leading-relaxed mb-10 max-w-xl">
              Банкротство, развод, алименты — проводим через любую процедуру от
              анализа ситуации до результата.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 mb-16">
              <Link
                href="/test"
                className="inline-flex items-center justify-center gap-2 bg-white text-[#0f3460] font-semibold px-6 py-3.5 rounded-2xl hover:bg-blue-50 active:scale-[0.97] transition-all text-sm"
              >
                Бесплатный анализ ситуации
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
              <Link
                href="/bankruptcy"
                className="inline-flex items-center justify-center gap-2 border border-white/10 text-slate-300 font-medium px-6 py-3.5 rounded-2xl hover:bg-white/5 hover:text-white transition-all text-sm"
              >
                О процедуре банкротства
              </Link>
            </div>

            {/* Stats row */}
            <div className="flex flex-wrap gap-8">
              {[
                { value: "2 300+", label: "дел завершено" },
                { value: "98%", label: "списание долгов" },
                { value: "6–8 мес", label: "средний срок" },
                { value: "от 20 000 ₽", label: "полное сопровождение" },
              ].map((s) => (
                <div key={s.label}>
                  <p className="text-2xl font-bold text-white">{s.value}</p>
                  <p className="text-xs text-slate-500 mt-0.5">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── HOW IT WORKS ── */}
        <section className="py-20 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="text-center mb-14">
              <p className="text-xs font-semibold text-[#0f3460] uppercase tracking-widest mb-3">
                Как это работает
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
                Три шага до результата
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative">
              {/* Connecting line */}
              <div className="hidden md:block absolute top-8 left-1/3 right-1/3 h-px bg-gradient-to-r from-slate-200 via-[#0f3460]/30 to-slate-200" />
              {[
                {
                  step: "01",
                  icon: "🧭",
                  title: "Анализ ситуации",
                  desc: "Пройдите 10-минутный тест — система автоматически определит оптимальную процедуру и её стоимость.",
                  action: "Начать →",
                  href: "/test",
                },
                {
                  step: "02",
                  icon: "📂",
                  title: "Сбор документов",
                  desc: "Получите пошаговый чек-лист, шаблоны заявлений и инструкции по каждому документу.",
                  action: null,
                  href: null,
                },
                {
                  step: "03",
                  icon: "⚖️",
                  title: "Сопровождение",
                  desc: "Юрист ведёт дело от подачи до решения. Вы отслеживаете прогресс в личном кабинете.",
                  action: null,
                  href: null,
                },
              ].map((item) => (
                <div
                  key={item.step}
                  className="relative bg-slate-50 rounded-3xl p-7 border border-slate-100"
                >
                  <span className="text-xs font-bold text-slate-300 tracking-widest">
                    {item.step}
                  </span>
                  <div className="w-12 h-12 rounded-2xl bg-white border border-slate-100 flex items-center justify-center text-2xl mt-3 mb-4 shadow-sm">
                    {item.icon}
                  </div>
                  <h3 className="font-bold text-slate-900 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-slate-500 leading-relaxed mb-4">
                    {item.desc}
                  </p>
                  {item.action && item.href && (
                    <Link
                      href={item.href}
                      className="text-sm font-semibold text-[#0f3460] hover:underline"
                    >
                      {item.action}
                    </Link>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── SERVICES ── */}
        <section className="py-20 bg-slate-50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="flex items-end justify-between mb-10 flex-wrap gap-4">
              <div>
                <p className="text-xs font-semibold text-[#0f3460] uppercase tracking-widest mb-3">
                  Услуги
                </p>
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
                  Чем можем помочь
                </h2>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {[
                {
                  icon: "⚡",
                  tag: "Популярно",
                  tagColor: "bg-blue-50 text-blue-600",
                  title: "Банкротство физлица",
                  desc: "Полное списание долгов через суд или МФЦ. Оцениваем ситуацию, готовим документы, ведём дело.",
                  price: "от 20 000 ₽",
                  href: "/bankruptcy",
                  dark: true,
                },
                {
                  icon: "💔",
                  tag: "Семейное право",
                  tagColor: "bg-rose-50 text-rose-600",
                  title: "Расторжение брака",
                  desc: "Развод через суд при наличии детей, имущественного спора или нежелании второго супруга.",
                  price: "от 35 000 ₽",
                  href: "/family",
                  dark: false,
                },
                {
                  icon: "👶",
                  tag: "Семейное право",
                  tagColor: "bg-rose-50 text-rose-600",
                  title: "Алименты и дети",
                  desc: "Взыскание алиментов, определение места жительства ребёнка, установление отцовства.",
                  price: "от 10 000 ₽",
                  href: "/family",
                  dark: false,
                },
              ].map((s) => (
                <Link
                  key={s.title}
                  href={s.href}
                  className={`group rounded-3xl p-7 flex flex-col hover:shadow-xl transition-all ${
                    s.dark
                      ? "bg-[#0f3460] text-white"
                      : "bg-white border border-slate-100 hover:border-slate-200"
                  }`}
                >
                  <div className="flex items-center justify-between mb-5">
                    <span className={`text-3xl`}>{s.icon}</span>
                    <span
                      className={`text-xs font-semibold px-2.5 py-1 rounded-full ${s.tagColor}`}
                    >
                      {s.tag}
                    </span>
                  </div>
                  <h3
                    className={`font-bold text-lg mb-2 ${s.dark ? "text-white" : "text-slate-900"}`}
                  >
                    {s.title}
                  </h3>
                  <p
                    className={`text-sm leading-relaxed flex-1 mb-5 ${s.dark ? "text-blue-200" : "text-slate-500"}`}
                  >
                    {s.desc}
                  </p>
                  <div className="flex items-center justify-between">
                    <span
                      className={`text-sm font-bold ${s.dark ? "text-blue-300" : "text-[#0f3460]"}`}
                    >
                      {s.price}
                    </span>
                    <svg
                      className={`w-5 h-5 group-hover:translate-x-1 transition-transform ${s.dark ? "text-blue-300" : "text-slate-400"}`}
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
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ── CABINET PROMO ── */}
        <section className="py-20 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="bg-gradient-to-br from-slate-900 to-[#0f3460] rounded-3xl overflow-hidden">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
                <div className="p-10 md:p-14">
                  <p className="text-xs font-semibold text-blue-300 uppercase tracking-widest mb-4">
                    Личный кабинет
                  </p>
                  <h2 className="text-3xl font-bold text-white mb-4 leading-tight">
                    Всё дело — как на ладони
                  </h2>
                  <p className="text-slate-400 leading-relaxed mb-8 text-sm">
                    Статус дела в реальном времени, все документы в одном месте
                    и прямой чат с вашим юристом. Никаких звонков вхолостую.
                  </p>
                  <ul className="space-y-2.5 mb-8">
                    {[
                      "Прогресс по этапам дела",
                      "Загрузка и хранение документов",
                      "Чат с юристом без ожидания",
                      "Уведомления о заседаниях",
                    ].map((item) => (
                      <li
                        key={item}
                        className="flex items-center gap-2.5 text-sm text-slate-300"
                      >
                        <svg
                          className="w-4 h-4 text-emerald-400 flex-shrink-0"
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
                    href="/cabinet"
                    className="inline-flex items-center gap-2 bg-white text-[#0f3460] font-semibold px-5 py-3 rounded-xl hover:bg-blue-50 transition-colors text-sm"
                  >
                    Открыть кабинет
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

                {/* Mock UI preview */}
                <div className="relative hidden md:flex items-center justify-center p-8">
                  <div className="bg-white/8 border border-white/10 rounded-2xl p-5 w-full max-w-xs backdrop-blur-sm">
                    <div className="flex items-center gap-2 mb-4">
                      <div className="w-7 h-7 rounded-full bg-[#0f3460] flex items-center justify-center">
                        <span className="text-white text-xs font-bold">АП</span>
                      </div>
                      <div>
                        <p className="text-xs font-semibold text-white">
                          Алексей Петров
                        </p>
                        <div className="flex items-center gap-1">
                          <span className="w-1 h-1 rounded-full bg-emerald-400" />
                          <p className="text-xs text-slate-400">Онлайн</p>
                        </div>
                      </div>
                    </div>
                    <div className="space-y-2 mb-3">
                      <div className="bg-white/10 rounded-2xl rounded-tl-sm px-3 py-2">
                        <p className="text-xs text-slate-300">
                          Заявление подано в суд. Номер дела: А40-112345/2025
                        </p>
                        <p className="text-xs text-slate-500 mt-1">10:32</p>
                      </div>
                      <div className="bg-[#0f3460] rounded-2xl rounded-tr-sm px-3 py-2 ml-8">
                        <p className="text-xs text-white">
                          Нужно ли присутствовать?
                        </p>
                        <p className="text-xs text-blue-300 mt-1 text-right">
                          11:05
                        </p>
                      </div>
                      <div className="bg-white/10 rounded-2xl rounded-tl-sm px-3 py-2">
                        <p className="text-xs text-slate-300">
                          Да, ваше присутствие обязательно. Я буду рядом.
                        </p>
                        <p className="text-xs text-slate-500 mt-1">11:18</p>
                      </div>
                    </div>
                    <div className="bg-white/5 border border-white/10 rounded-xl px-3 py-2 flex items-center gap-2">
                      <p className="text-xs text-slate-500 flex-1">
                        Написать юристу...
                      </p>
                      <div className="w-6 h-6 rounded-lg bg-[#0f3460] flex items-center justify-center">
                        <svg
                          className="w-3 h-3 text-white"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                          />
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
        <section className="py-20 bg-slate-50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="text-center mb-14">
              <p className="text-xs font-semibold text-[#0f3460] uppercase tracking-widest mb-3">
                Почему ДОКСИ
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
                Без лишней воды
              </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {[
                {
                  icon: "⚡",
                  title: "Автоматизация документов",
                  desc: "Заполните анкету — система сгенерирует все заявления. Никакой ручной работы и ошибок.",
                },
                {
                  icon: "🔍",
                  title: "Прозрачность на каждом шаге",
                  desc: "Видите статус дела, следующий шаг и ожидаемые сроки. Всегда в курсе что происходит.",
                },
                {
                  icon: "💬",
                  title: "Прямой доступ к юристу",
                  desc: "Чат, звонок или встреча — юрист отвечает в рабочее время, без ожидания очереди.",
                },
                {
                  icon: "🛡️",
                  title: "Фиксированная стоимость",
                  desc: "Цена известна заранее. Никаких скрытых платежей и неожиданных счетов в процессе.",
                },
                {
                  icon: "📱",
                  title: "Всё онлайн",
                  desc: "Подписывайте документы, загружайте файлы и следите за делом с телефона или ноутбука.",
                },
                {
                  icon: "✅",
                  title: "Результат гарантирован",
                  desc: "Если процедура не завершена по нашей вине — возвращаем деньги. Без споров.",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="bg-white rounded-2xl p-6 border border-slate-100 hover:shadow-md transition-shadow"
                >
                  <div className="w-11 h-11 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center text-xl mb-4">
                    {item.icon}
                  </div>
                  <h3 className="font-bold text-slate-900 mb-1.5">
                    {item.title}
                  </h3>
                  <p className="text-sm text-slate-500 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── REVIEWS ── */}
        <section className="py-20 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="text-center mb-14">
              <p className="text-xs font-semibold text-[#0f3460] uppercase tracking-widest mb-3">
                Отзывы
              </p>
              <h2 className="text-3xl font-bold text-slate-900">
                Что говорят клиенты
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {[
                {
                  name: "Алексей К.",
                  city: "Москва",
                  text: "За 7 месяцев списали 2,4 млн долгов. Всё было понятно с первого дня — никаких сюрпризов и лишних нервов.",
                  stars: 5,
                },
                {
                  name: "Марина В.",
                  city: "Санкт-Петербург",
                  text: "После развода юрист помог взыскать алименты и добиться справедливого раздела квартиры. Очень профессионально.",
                  stars: 5,
                },
                {
                  name: "Сергей Л.",
                  city: "Екатеринбург",
                  text: "Думал, что банкротство — это долго и страшно. Оказалось всё намного проще. Рекомендую всем, кто боится начать.",
                  stars: 5,
                },
              ].map((r) => (
                <div
                  key={r.name}
                  className="bg-slate-50 rounded-2xl p-6 border border-slate-100"
                >
                  <div className="flex gap-0.5 mb-4">
                    {Array.from({ length: r.stars }).map((_, i) => (
                      <svg
                        key={i}
                        className="w-4 h-4 text-amber-400"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-sm text-slate-700 leading-relaxed mb-5">
                    "{r.text}"
                  </p>
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-[#0f3460]/10 flex items-center justify-center text-xs font-bold text-[#0f3460]">
                      {r.name[0]}
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-slate-900">
                        {r.name}
                      </p>
                      <p className="text-xs text-slate-400">{r.city}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA ── */}
        <section id="contacts" className="py-20 bg-slate-50">
          <div className="max-w-2xl mx-auto px-4 sm:px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Готовы начать?
            </h2>
            <p className="text-slate-500 mb-8 leading-relaxed">
              Пройдите бесплатный тест — за 10 минут поймёте, какая процедура
              вам подходит и сколько это стоит.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link
                href="/test"
                className="inline-flex items-center justify-center gap-2 bg-[#0f3460] text-white font-semibold px-8 py-4 rounded-2xl hover:bg-[#1a4f8a] active:scale-[0.97] transition-all"
              >
                Бесплатный анализ
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
                href="tel:+78000000000"
                className="inline-flex items-center justify-center gap-2 border border-slate-200 text-slate-700 font-medium px-8 py-4 rounded-2xl hover:bg-slate-100 transition-colors"
              >
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
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.948V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                8 (800) 000-00-00
              </a>
            </div>
            <p className="text-xs text-slate-400 mt-6">
              Первая консультация — бесплатно. Без скрытых условий.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
