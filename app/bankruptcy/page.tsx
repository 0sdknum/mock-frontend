import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function BankruptcyPage() {
  return (
    <div className="flex flex-col min-h-full">
      <Header />
      <main className="flex-1">

        {/* Hero */}
        <section className="bg-gradient-to-br from-[#0f3460] to-[#1a4f8a] text-white py-16 md:py-20">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="max-w-2xl">
              <p className="text-blue-200 text-sm mb-3">⚖️ Банкротство физических лиц</p>
              <h1 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">
                Законный способ урегулировать долги
              </h1>
              <p className="text-blue-100 leading-relaxed mb-6">
                Банкротство физического лица — официальная процедура, которая позволяет законно
                урегулировать долги перед банками, МФО, налоговой и другими кредиторами.
              </p>
              <Link href="/test"
                className="inline-block bg-white text-[#0f3460] font-semibold px-6 py-3.5 rounded-xl hover:bg-blue-50 transition-colors">
                Проверить мою ситуацию →
              </Link>
            </div>
          </div>
        </section>

        {/* Когда применяется */}
        <section className="py-14 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <h2 className="text-2xl font-bold text-slate-900 mb-2">Когда подходит процедура</h2>
            <p className="text-slate-500 mb-8">Банкротство может подойти, если у вас есть хотя бы несколько из этих признаков</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                "Накопились просрочки по кредитам или займам",
                "Нет возможности выплачивать долги",
                "Удерживается большая часть дохода",
                "Имеются исполнительные производства",
                "Долги продолжают расти из-за процентов и штрафов",
                "Кредиторы или коллекторы требуют оплату",
              ].map((item) => (
                <div key={item} className="flex items-start gap-3 bg-slate-50 rounded-xl p-4">
                  <span className="text-[#0f3460] mt-0.5 text-lg">→</span>
                  <p className="text-sm text-slate-700 leading-relaxed">{item}</p>
                </div>
              ))}
            </div>
            <div className="mt-6 bg-blue-50 border border-blue-100 rounded-xl p-5 text-sm text-blue-800">
              📌 Банкротство может проводиться через суд или во внесудебном порядке (через МФЦ) — в зависимости от суммы долгов и вашей ситуации.
            </div>
          </div>
        </section>

        {/* Форматы */}
        <section className="py-14 bg-slate-50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <h2 className="text-2xl font-bold text-slate-900 mb-8">Выбор формата прохождения</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

              {/* Self */}
              <div className="bg-white rounded-2xl p-7 border border-slate-100 shadow-sm">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-2xl">🟢</span>
                  <h3 className="text-xl font-bold text-slate-900">Самостоятельное прохождение</h3>
                </div>
                <p className="text-slate-600 text-sm mb-5 leading-relaxed">
                  Вы получаете пошаговую систему действий и проходите процедуру в понятном цифровом формате.
                </p>
                <h4 className="text-sm font-semibold text-slate-700 mb-3">Что включено:</h4>
                <ul className="space-y-2 mb-6">
                  {[
                    "Заполнение анкеты",
                    "Анализ долговой нагрузки",
                    "Автоматическое формирование заявлений",
                    "Подготовка списка кредиторов",
                    "Загрузка документов",
                    "Инструкция по подаче",
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm text-slate-600">
                      <span className="text-green-500">✓</span> {item}
                    </li>
                  ))}
                </ul>
                <div className="bg-green-50 rounded-xl p-3 mb-4 text-sm text-green-800">
                  📁 На выходе — готовый комплект документов для запуска процедуры банкротства
                </div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-2xl font-bold text-slate-900">20 000 ₽</span>
                  <span className="text-xs text-slate-400">+ обязательные судебные расходы</span>
                </div>
                <Link href="/test"
                  className="block w-full text-center bg-green-600 text-white font-medium py-3 rounded-xl hover:bg-green-700 transition-colors text-sm">
                  Начать самостоятельно
                </Link>
              </div>

              {/* Supported */}
              <div className="bg-[#0f3460] rounded-2xl p-7 text-white relative">
                <div className="absolute top-4 right-4 bg-yellow-400 text-yellow-900 text-xs font-bold px-2.5 py-1 rounded-full">
                  ⭐ Чаще выбирают
                </div>
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-2xl">🔵</span>
                  <h3 className="text-xl font-bold">С сопровождением</h3>
                </div>
                <p className="text-blue-200 text-sm mb-5 leading-relaxed">
                  Юрист ведёт процедуру, вы минимально вовлечены. Подходит, если важно снизить риски.
                </p>
                <h4 className="text-sm font-semibold text-blue-200 mb-3">Что включено:</h4>
                <ul className="space-y-2 mb-6">
                  {[
                    "Анализ ситуации",
                    "Подготовка документов",
                    "Подача в суд",
                    "Сопровождение до завершения",
                    "Взаимодействие с судом и управляющим",
                    "Защита при сложных ситуациях",
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm text-blue-100">
                      <span className="text-blue-300">✓</span> {item}
                    </li>
                  ))}
                </ul>
                <div className="bg-white/10 rounded-xl p-3 mb-5 text-sm text-blue-100">
                  Подходит при наличии имущества, сделок или нестандартной ситуации
                </div>
                <Link href="/test"
                  className="block w-full text-center bg-white text-[#0f3460] font-semibold py-3 rounded-xl hover:bg-blue-50 transition-colors text-sm">
                  Получить сопровождение
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Сценарии */}
        <section className="py-14 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <h2 className="text-2xl font-bold text-slate-900 mb-2">Какой вариант банкротства вам подойдёт</h2>
            <p className="text-slate-500 mb-8">Система автоматически определяет подходящий сценарий</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {[
                {
                  code: "А",
                  title: "Внесудебное через МФЦ",
                  when: [
                    "Размер долгов соответствует условиям",
                    "Есть завершённые исполнительные производства",
                  ],
                  note: "Формируется заявление для подачи через МФЦ",
                  color: "blue",
                },
                {
                  code: "Б",
                  title: "Судебное банкротство",
                  when: [
                    "Значительный размер задолженности",
                    "Имеются активные взыскания",
                  ],
                  note: "Формируется заявление в арбитражный суд",
                  color: "purple",
                },
                {
                  code: "В",
                  title: "При наличии имущества",
                  when: [
                    "У заявителя есть имущество",
                    "Были сделки с имуществом за последние 3 года",
                  ],
                  note: "Формируется расширенный комплект документов",
                  color: "orange",
                },
              ].map((scenario) => (
                <div key={scenario.code} className="border border-slate-100 rounded-2xl p-6">
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center text-white font-bold text-lg mb-4 ${
                    scenario.color === "blue" ? "bg-blue-500" :
                    scenario.color === "purple" ? "bg-purple-500" : "bg-orange-500"
                  }`}>
                    {scenario.code}
                  </div>
                  <h3 className="font-bold text-slate-900 mb-3">{scenario.title}</h3>
                  <p className="text-xs text-slate-400 font-medium uppercase tracking-wide mb-2">Когда применяется:</p>
                  <ul className="space-y-1.5 mb-4">
                    {scenario.when.map((w) => (
                      <li key={w} className="flex items-start gap-2 text-sm text-slate-600">
                        <span className="text-slate-400 mt-0.5">•</span> {w}
                      </li>
                    ))}
                  </ul>
                  <div className="bg-slate-50 rounded-lg p-3 text-xs text-slate-500">
                    📌 {scenario.note}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Шаги */}
        <section className="py-14 bg-slate-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6">
            <h2 className="text-2xl font-bold text-slate-900 mb-8 text-center">Как это работает</h2>
            <div className="space-y-4">
              {[
                {
                  step: "01",
                  title: "Анализ ситуации",
                  desc: "Пройдите бесплатный тест за 3 минуты. Получите предварительную оценку вероятности процедуры.",
                  cta: null,
                },
                {
                  step: "02",
                  title: "Правовое заключение",
                  desc: "Индивидуальный анализ вашей ситуации от юриста. Юридически точная оценка рисков и рекомендации.",
                  cta: "10 000 ₽",
                },
                {
                  step: "03",
                  title: "Заполнение анкеты",
                  desc: "Внесите данные о долгах, кредиторах, имуществе. Система автоматически формирует документы.",
                  cta: null,
                },
                {
                  step: "04",
                  title: "Готовый пакет документов",
                  desc: "Скачайте ZIP-архив со всеми документами: заявление, список кредиторов, инструкция по подаче.",
                  cta: null,
                },
              ].map((item, i) => (
                <div key={item.step} className="flex gap-5 bg-white rounded-2xl p-6 border border-slate-100 shadow-sm">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-[#0f3460]/10 flex items-center justify-center">
                    <span className="text-[#0f3460] font-bold text-sm">{item.step}</span>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-1">
                      <h3 className="font-semibold text-slate-900">{item.title}</h3>
                      {item.cta && (
                        <span className="text-xs bg-[#0f3460]/10 text-[#0f3460] font-medium px-2.5 py-0.5 rounded-full">
                          {item.cta}
                        </span>
                      )}
                    </div>
                    <p className="text-sm text-slate-500 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Обязательные расходы */}
        <section className="py-14 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6">
            <div className="bg-amber-50 border border-amber-200 rounded-2xl p-8">
              <h2 className="text-xl font-bold text-amber-900 mb-1">⚠️ Обязательные расходы по закону</h2>
              <p className="text-amber-700 text-sm mb-6">Вне зависимости от выбранного формата:</p>
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
                <p>✅ Платежи регулируются законодательством</p>
                <p>✅ Без скрытых комиссий</p>
              </div>
            </div>
          </div>
        </section>

        {/* Когда нужен юрист */}
        <section className="py-14 bg-slate-50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <h2 className="text-2xl font-bold text-slate-900 mb-3">Когда особенно важно сопровождение</h2>
            <p className="text-slate-500 mb-8">В этих ситуациях риски выше — рекомендуется не проходить самостоятельно</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                "Есть имущество, которое может затронуть процедура",
                "Имеются сделки с имуществом за последние 3 года",
                "Долги связаны с бизнесом или ИП",
                "Кредиторы уже подали в суд",
                "Есть совместное имущество супругов",
                "Имеются риски оспаривания сделок",
              ].map((item) => (
                <div key={item} className="flex items-start gap-3 bg-white rounded-xl p-4 border border-slate-100">
                  <span className="text-red-400 mt-0.5">⚠️</span>
                  <p className="text-sm text-slate-700 leading-relaxed">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-gradient-to-br from-[#0f3460] to-[#1a4f8a]">
          <div className="max-w-2xl mx-auto px-4 sm:px-6 text-center">
            <h2 className="text-2xl font-bold text-white mb-3">Начните с бесплатного анализа</h2>
            <p className="text-blue-200 mb-6">Проверьте свою ситуацию за 3 минуты — это ни к чему не обязывает</p>
            <Link href="/test"
              className="inline-block bg-white text-[#0f3460] font-semibold px-8 py-3.5 rounded-xl hover:bg-blue-50 transition-colors">
              Пройти анализ ситуации →
            </Link>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
}
