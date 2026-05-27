import Link from "next/link";
import Header from "./components/Header";
import Footer from "./components/Footer";

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-full">
      <Header />
      <main className="flex-1">

        {/* HERO */}
        <section className="bg-gradient-to-br from-[#0f3460] via-[#1a4f8a] to-[#0f3460] text-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 py-20 md:py-28">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 bg-white/10 rounded-full px-4 py-1.5 text-sm mb-6">
                <span className="w-2 h-2 rounded-full bg-green-400"></span>
                Цифровая юридическая платформа
              </div>
              <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-5">
                Банкротство без<br />
                <span className="text-blue-300">лишних сложностей</span>
              </h1>
              <p className="text-lg text-blue-100 leading-relaxed mb-8">
                Помогаем пройти процедуру банкротства спокойно, понятно и без лишних действий.
                Разбиваем процесс на простые шаги и помогаем собрать все документы правильно.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link
                  href="/test"
                  className="bg-white text-[#0f3460] font-semibold px-6 py-3.5 rounded-xl hover:bg-blue-50 transition-colors text-center"
                >
                  Проверить мою ситуацию →
                </Link>
                <Link
                  href="/bankruptcy"
                  className="border border-white/30 text-white font-medium px-6 py-3.5 rounded-xl hover:bg-white/10 transition-colors text-center"
                >
                  Узнать о процедуре
                </Link>
              </div>
              <p className="text-sm text-blue-200 mt-3">
                Это ни к чему не обязывает · Занимает 3 минуты
              </p>
            </div>
          </div>
        </section>

        {/* ПРЕИМУЩЕСТВА */}
        <section className="py-16 bg-slate-50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <h2 className="text-2xl md:text-3xl font-bold text-center text-slate-900 mb-3">
              Вы не остаётесь с этим один на один
            </h2>
            <p className="text-slate-500 text-center mb-10">Понятная система на каждом этапе</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {[
                { icon: "💬", title: "Понятный язык", text: "Всё объясняется простым языком без юридических терминов" },
                { icon: "🗺️", title: "Чёткий маршрут", text: "Каждый шаг заранее понятен — вы знаете, что будет дальше" },
                { icon: "📄", title: "Авто-заполнение", text: "Документы формируются автоматически на основе ваших данных" },
                { icon: "🎯", title: "Полный контроль", text: "Вы контролируете процесс и понимаете, что происходит" },
                { icon: "📦", title: "Готовый пакет", text: "На выходе — готовый комплект документов для суда" },
                { icon: "🔒", title: "Без скрытых платежей", text: "Только обязательные расходы, установленные законом" },
              ].map((item) => (
                <div key={item.title} className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm">
                  <div className="text-3xl mb-3">{item.icon}</div>
                  <h3 className="font-semibold text-slate-900 mb-1.5">{item.title}</h3>
                  <p className="text-sm text-slate-500 leading-relaxed">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* АНАЛИЗ СИТУАЦИИ */}
        <section className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-block bg-amber-50 text-amber-700 text-sm font-medium px-3 py-1 rounded-full mb-4">
                  📌 Важно на старте
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
                  Начните с оценки вашей ситуации
                </h2>
                <p className="text-slate-600 leading-relaxed mb-6">
                  Перед подачей документов важно понять: подходит ли вам процедура банкротства и какие
                  есть риски. Это помогает избежать отказа суда и лишних расходов.
                </p>
                <div className="bg-slate-50 rounded-xl p-5 mb-6 space-y-2">
                  <p className="text-sm font-semibold text-slate-700 mb-3">Вы получите:</p>
                  {[
                    "Предварительную оценку вероятности прохождения",
                    "Понятное правовое заключение",
                    "Рекомендации по дальнейшим шагам",
                  ].map((item) => (
                    <div key={item} className="flex items-start gap-2 text-sm text-slate-600">
                      <span className="text-green-500 mt-0.5">✓</span>
                      {item}
                    </div>
                  ))}
                </div>
                <Link
                  href="/test"
                  className="inline-block bg-[#0f3460] text-white font-semibold px-6 py-3.5 rounded-xl hover:bg-[#1a4f8a] transition-colors"
                >
                  Пройти анализ → бесплатно
                </Link>
                <p className="text-xs text-slate-400 mt-2">Это ни к чему не обязывает</p>
              </div>

              <div className="bg-gradient-to-br from-slate-50 to-blue-50 rounded-2xl p-8 border border-slate-100">
                <p className="text-sm font-semibold text-slate-600 mb-5">Проверьте ситуацию за 3 минуты</p>
                <div className="space-y-4">
                  {[
                    { label: "Долги и просрочки", pct: 33 },
                    { label: "Приставы и взыскания", pct: 66 },
                    { label: "Доход и имущество", pct: 100 },
                  ].map((step, i) => (
                    <div key={step.label}>
                      <div className="flex justify-between text-sm mb-1.5">
                        <span className="text-slate-700 font-medium">{i + 1}. {step.label}</span>
                        <span className="text-slate-400">~1 мин</span>
                      </div>
                      <div className="h-2 bg-slate-200 rounded-full overflow-hidden">
                        <div className="h-full bg-[#0f3460] rounded-full" style={{ width: `${step.pct}%` }} />
                      </div>
                    </div>
                  ))}
                  <div className="pt-2 border-t border-slate-200">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-slate-600">📄 Формируется юридический отчёт</span>
                      <span className="text-xs bg-green-100 text-green-700 font-medium px-2 py-0.5 rounded-full">Бесплатно</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ВЫБОР ФОРМАТА */}
        <section className="py-16 bg-slate-50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <h2 className="text-2xl md:text-3xl font-bold text-center text-slate-900 mb-3">
              Начните процесс так, как вам комфортно
            </h2>
            <p className="text-slate-500 text-center mb-10">Два пути — одна цель</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              <div className="bg-white rounded-2xl p-7 border-2 border-slate-100 hover:border-green-200 transition-colors">
                <div className="w-10 h-10 rounded-xl bg-green-50 flex items-center justify-center mb-4 text-xl">🟢</div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">Самостоятельно</h3>
                <p className="text-sm text-slate-500 mb-4">Подходит, если вы хотите контролировать процесс и двигаться в своём темпе.</p>
                <ul className="space-y-2 mb-6">
                  {["Пошаговая система действий", "Готовые шаблоны документов", "Подсказки на каждом этапе", "Автоматическое заполнение", "Готовый пакет для суда"].map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm text-slate-600">
                      <span className="text-green-500">✓</span> {item}
                    </li>
                  ))}
                </ul>
                <div className="border-t border-slate-100 pt-4">
                  <p className="text-lg font-bold text-slate-900 mb-3">20 000 ₽</p>
                  <Link href="/test" className="block w-full bg-green-600 text-white text-center font-medium py-3 rounded-xl hover:bg-green-700 transition-colors text-sm">
                    Начать с анализа
                  </Link>
                </div>
              </div>

              <div className="bg-[#0f3460] rounded-2xl p-7 text-white relative overflow-hidden">
                <div className="absolute top-4 right-4 bg-yellow-400 text-yellow-900 text-xs font-bold px-2.5 py-1 rounded-full">
                  ⭐ Чаще выбирают
                </div>
                <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center mb-4 text-xl">🔵</div>
                <h3 className="text-xl font-bold mb-2">С сопровождением</h3>
                <p className="text-sm text-blue-200 mb-4">Подходит, если вы хотите снизить участие и риски.</p>
                <ul className="space-y-2 mb-6">
                  {["Анализ ситуации", "Подготовка документов", "Подача в суд", "Сопровождение до завершения", "Взаимодействие с судом и управляющим"].map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm text-blue-100">
                      <span className="text-blue-300">✓</span> {item}
                    </li>
                  ))}
                </ul>
                <div className="border-t border-white/20 pt-4">
                  <p className="text-sm text-blue-200 mb-3">Стоимость — по результатам анализа</p>
                  <Link href="/test" className="block w-full bg-white text-[#0f3460] text-center font-semibold py-3 rounded-xl hover:bg-blue-50 transition-colors text-sm">
                    Получить сопровождение
                  </Link>
                </div>
              </div>
            </div>
            <p className="text-center text-sm text-slate-400 mt-4">
              💡 Вы можете начать самостоятельно и в любой момент перейти на сопровождение
            </p>
          </div>
        </section>

        {/* РАСХОДЫ */}
        <section className="py-14 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6">
            <div className="bg-amber-50 border border-amber-200 rounded-2xl p-8">
              <h2 className="text-xl font-bold text-amber-900 mb-4">⚠️ Важно знать о расходах</h2>
              <p className="text-amber-800 mb-5">
                Процедура банкротства включает обязательные расходы, установленные законом:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-5">
                {[
                  { amount: "25 000 ₽", label: "Вознаграждение арбитражного управляющего" },
                  { amount: "15 000 ₽", label: "Публикации в реестрах" },
                ].map((item) => (
                  <div key={item.label} className="bg-white rounded-xl p-4 border border-amber-100">
                    <p className="text-2xl font-bold text-slate-900 mb-1">{item.amount}</p>
                    <p className="text-sm text-slate-600">{item.label}</p>
                  </div>
                ))}
              </div>
              <div className="space-y-1 text-sm text-amber-800">
                <p>✅ Госпошлина для физических лиц не требуется</p>
                <p>✅ Размеры платежей регулируются законодательством</p>
                <p>✅ Мы не добавляем скрытых комиссий</p>
              </div>
            </div>
          </div>
        </section>

        {/* ОТЗЫВЫ */}
        <section className="py-16 bg-slate-50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <h2 className="text-2xl font-bold text-center text-slate-900 mb-10">Реальные результаты</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {[
                {
                  text: "Долг 1 250 000 ₽. После анализа выбрал сопровождение. Через 4 месяца долги списали.",
                  name: "Андрей", age: "44 года", result: "Списано 1 250 000 ₽",
                },
                {
                  text: "Боялась ошибок. Прошла анализ, поняла ситуацию и прошла процедуру спокойно.",
                  name: "Екатерина", age: "37 лет", result: "Процедура завершена",
                },
              ].map((review) => (
                <div key={review.name} className="bg-white rounded-2xl p-7 border border-slate-100 shadow-sm">
                  <div className="flex gap-1 mb-4">{[...Array(5)].map((_, i) => <span key={i} className="text-yellow-400">★</span>)}</div>
                  <p className="text-slate-700 leading-relaxed mb-5 text-sm">&quot;{review.text}&quot;</p>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-semibold text-slate-900">{review.name}</p>
                      <p className="text-sm text-slate-400">{review.age}</p>
                    </div>
                    <span className="text-xs bg-green-100 text-green-700 font-medium px-3 py-1 rounded-full">{review.result}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ФИНАЛЬНЫЙ CTA */}
        <section className="py-16 bg-gradient-to-br from-[#0f3460] to-[#1a4f8a]">
          <div className="max-w-2xl mx-auto px-4 sm:px-6 text-center">
            <h2 className="text-3xl font-bold text-white mb-3">Получите бесплатную консультацию</h2>
            <p className="text-blue-200 mb-8">Мы разберём вашу ситуацию и подскажем возможные варианты решения</p>
            <div className="bg-white/10 backdrop-blur rounded-2xl p-6 mb-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-4">
                <input type="tel" placeholder="📱 Ваш телефон"
                  className="bg-white rounded-xl px-4 py-3 text-slate-900 placeholder-slate-400 text-sm w-full focus:outline-none" />
                <input type="text" placeholder="💰 Сумма долга"
                  className="bg-white rounded-xl px-4 py-3 text-slate-900 placeholder-slate-400 text-sm w-full focus:outline-none" />
              </div>
              <button className="w-full bg-white text-[#0f3460] font-semibold py-3.5 rounded-xl hover:bg-blue-50 transition-colors">
                Получить консультацию
              </button>
            </div>
            <p className="text-blue-200 text-sm">Это бесплатно и ни к чему не обязывает</p>
          </div>
        </section>

        {/* ВСЕ НАПРАВЛЕНИЯ */}
        <section className="py-14 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <h2 className="text-2xl font-bold text-slate-900 mb-2">Все направления</h2>
            <p className="text-slate-500 mb-8">Помогаем с широким спектром юридических вопросов</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {[
                {
                  icon: "⚖️", title: "Банкротство", href: "/bankruptcy",
                  desc: "Физических лиц через суд или МФЦ. Полное сопровождение или самостоятельно.",
                  badge: "Основной продукт",
                },
                {
                  icon: "👨‍👩‍👧", title: "Семейные дела", href: "/family",
                  desc: "Развод, алименты, определение места жительства ребёнка, отцовство.",
                  badge: null,
                },
                {
                  icon: "📋", title: "Гражданские споры", href: "#",
                  desc: "Взыскание долгов, потребительские споры, базовые юридические документы.",
                  badge: "Скоро",
                },
              ].map((service) => (
                <Link key={service.title} href={service.href}
                  className="group border border-slate-100 rounded-2xl p-6 hover:border-[#0f3460]/30 hover:shadow-md transition-all block">
                  <div className="text-3xl mb-3">{service.icon}</div>
                  <div className="flex items-center gap-2 mb-2">
                    <h3 className="font-semibold text-slate-900 group-hover:text-[#0f3460] transition-colors">{service.title}</h3>
                    {service.badge && (
                      <span className="text-xs bg-blue-50 text-blue-600 px-2 py-0.5 rounded-full">{service.badge}</span>
                    )}
                  </div>
                  <p className="text-sm text-slate-500 leading-relaxed">{service.desc}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
}
