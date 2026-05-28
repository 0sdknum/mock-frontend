"use client";

import { useState } from "react";
import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";

type Answer = {
  label: string;
  points: number;
};

type Question = {
  id: string;
  text: string;
  hint?: string;
  answers: Answer[];
};

type Screen = {
  title: string;
  icon: string;
  questions: Question[];
};

const screens: Screen[] = [
  {
    title: "Долги",
    icon: "💳",
    questions: [
      {
        id: "debt_amount",
        text: "Сколько вы должны?",
        hint: "Кредиты, займы, ипотека, налоги, штрафы, ЖКХ — всё вместе",
        answers: [
          { label: "До 500 000 ₽", points: 1 },
          { label: "500 000 – 1 000 000 ₽", points: 2 },
          { label: "Более 1 000 000 ₽", points: 3 },
        ],
      },
      {
        id: "overdue",
        text: "Есть ли просрочки по платежам?",
        hint: "По всем обязательствам: кредиты, займы, ЖКХ, налоги",
        answers: [
          { label: "Нет просрочек", points: 0 },
          { label: "До 3 месяцев", points: 2 },
          { label: "Более 3 месяцев", points: 3 },
        ],
      },
    ],
  },
  {
    title: "Приставы",
    icon: "🏛️",
    questions: [
      {
        id: "bailiffs",
        text: "Есть ли исполнительные производства?",
        answers: [
          { label: "Нет", points: 0 },
          { label: "Есть", points: 3 },
          { label: "Не знаю", points: 1 },
        ],
      },
      {
        id: "withdrawals",
        text: "Есть ли списания со счетов?",
        answers: [
          { label: "Нет", points: 0 },
          { label: "Иногда", points: 2 },
          { label: "Да, регулярно", points: 3 },
        ],
      },
    ],
  },
  {
    title: "Доход",
    icon: "💼",
    questions: [
      {
        id: "income",
        text: "Есть ли официальный доход?",
        answers: [
          { label: "Да, стабильный", points: 0 },
          { label: "Да, нестабильный", points: 1 },
          { label: "Нет", points: 3 },
        ],
      },
      {
        id: "debt_load",
        text: "Какую часть дохода занимают платежи по долгам?",
        hint: "Учитывается только официальный доход",
        answers: [
          { label: "До 30%", points: 0 },
          { label: "30–50%", points: 2 },
          { label: "Более 50%", points: 3 },
        ],
      },
    ],
  },
  {
    title: "Имущество",
    icon: "🏠",
    questions: [
      {
        id: "property",
        text: "Есть ли у вас имущество?",
        hint: "Единственное жильё (не в залоге) не учитывается",
        answers: [
          { label: "Нет / только единственное жильё", points: 0 },
          { label: "Есть — готов к возможной потере", points: 2 },
          { label: "Есть — потеря критична", points: 1 },
        ],
      },
    ],
  },
  {
    title: "Сделки",
    icon: "📋",
    questions: [
      {
        id: "transactions",
        text: "Были ли сделки с имуществом за последние 3 года?",
        hint: "Продажа, дарение, обмен квартиры, авто, долей и т.д.",
        answers: [
          { label: "Нет сделок", points: 0 },
          { label: "Да, на рыночных условиях", points: 1 },
          { label: "Да, с родственниками или ниже рынка", points: 3 },
        ],
      },
      {
        id: "transfers",
        text: "Были ли крупные переводы (более 300 тыс.) или дарения?",
        answers: [
          { label: "Нет", points: 0 },
          { label: "Да", points: 2 },
          { label: "Не знаю", points: 1 },
        ],
      },
    ],
  },
  {
    title: "Семья",
    icon: "👨‍👩‍👧",
    questions: [
      {
        id: "children",
        text: "Есть ли у вас дети?",
        answers: [
          { label: "Нет", points: 0 },
          { label: "1 ребёнок", points: 1 },
          { label: "2 и более детей", points: 2 },
        ],
      },
      {
        id: "dependants",
        text: "Есть ли нетрудоспособные родственники на содержании?",
        answers: [
          { label: "Нет", points: 0 },
          { label: "Частично", points: 1 },
          { label: "Да", points: 2 },
        ],
      },
    ],
  },
];

function getResult(score: number) {
  if (score <= 12) {
    return {
      level: "low",
      color: "green",
      emoji: "🟢",
      label: "Низкая вероятность",
      pct: "до 50%",
      desc: "Ситуация стабильная. Банкротство маловероятно или преждевременно.",
      advice: "Рекомендуем проконсультироваться, чтобы убедиться в правильности оценки.",
    };
  }
  if (score <= 25) {
    return {
      level: "medium",
      color: "yellow",
      emoji: "🟡",
      label: "Средняя вероятность",
      pct: "50–80%",
      desc: "Есть признаки финансовой несостоятельности. Рекомендуется провести индивидуальный анализ.",
      advice: "Индивидуальный анализ поможет точнее оценить ситуацию и риски.",
    };
  }
  return {
    level: "high",
    color: "red",
    emoji: "🔴",
    label: "Высокая вероятность",
    pct: "80–95%",
    desc: "Признаки неплатёжеспособности выражены. Процедура банкротства может быть применима.",
    advice: "Рекомендуем получить индивидуальное правовое заключение до подачи документов.",
  };
}

const MAX_SCORE = 40;

export default function TestPage() {
  const [currentScreen, setCurrentScreen] = useState(0);
  const [answers, setAnswers] = useState<Record<string, number>>({});
  const [selectedLabels, setSelectedLabels] = useState<Record<string, string>>({});
  const [done, setDone] = useState(false);

  const screen = screens[currentScreen];

  const screenAnswered = screen.questions.every((q) => q.id in answers);

  const totalScore = Object.values(answers).reduce((a, b) => a + b, 0);
  const result = getResult(totalScore);
  const pctScore = Math.round((totalScore / MAX_SCORE) * 100);

  function handleAnswer(questionId: string, points: number) {
    setAnswers((prev) => ({ ...prev, [questionId]: points }));
  }

  function handleNext() {
    if (currentScreen < screens.length - 1) {
      setCurrentScreen((s) => s + 1);
    } else {
      setDone(true);
    }
  }

  function handleBack() {
    if (currentScreen > 0) setCurrentScreen((s) => s - 1);
  }

  function handleReset() {
    setAnswers({});
    setSelectedLabels({});
    setCurrentScreen(0);
    setDone(false);
  }

  const progress = ((currentScreen + (done ? 1 : 0)) / screens.length) * 100;

  // --- RESULT SCREEN ---
  if (done) {
    return (
      <div className="flex flex-col min-h-full">
        <Header />
        <main className="flex-1 bg-[var(--bg-subtle)]">
          <div className="max-w-2xl mx-auto px-4 sm:px-6 py-12">
            {/* Result card */}
            <div className="bg-[var(--bg-card)] rounded-3xl border-2 border-[var(--border)] shadow-sm overflow-hidden mb-6">
              <div className={`px-8 py-6 ${
                result.level === "low" ? "bg-green-50 border-b-2 border-green-100 dark:bg-green-900/20 dark:border-green-800/40" :
                result.level === "medium" ? "bg-amber-50 border-b-2 border-amber-100 dark:bg-amber-900/20 dark:border-amber-800/40" : "bg-red-50 border-b-2 border-red-100 dark:bg-red-900/20 dark:border-red-800/40"
              }`}>
                <p className="text-sm font-medium text-[var(--ink-2)] mb-1">Ваш предварительный результат готов</p>
                <h1 className="text-2xl font-black text-[var(--ink)] mb-1">
                  {result.emoji} {result.label}
                </h1>
                <p className="text-lg font-bold text-[var(--ink-2)]">Вероятность прохождения: {result.pct}</p>
              </div>

              <div className="px-8 py-6">
                {/* Score bar */}
                <div className="mb-6">
                  <div className="flex justify-between text-sm text-[var(--ink-2)] mb-2">
                    <span>Ваш балл: {totalScore} из {MAX_SCORE}</span>
                    <span>{pctScore}%</span>
                  </div>
                  <div className="h-3 bg-[var(--bg-muted)] rounded-full overflow-hidden">
                    <div
                      className={`h-full rounded-full transition-all ${
                        result.level === "low" ? "bg-green-500" :
                        result.level === "medium" ? "bg-amber-500" : "bg-red-500"
                      }`}
                      style={{ width: `${pctScore}%` }}
                    />
                  </div>
                </div>

                <p className="text-[var(--ink-2)] mb-3">{result.desc}</p>
                <div className="bg-[var(--bg-muted)] rounded-xl p-4 text-sm text-[var(--ink-2)] mb-4">
                  <p className="font-bold text-[var(--brand-t)] mb-1">⚖️ Важно учитывать:</p>
                  <p>Это предварительная автоматическая оценка. Для юридически точного вывода требуется индивидуальный анализ с учётом всех факторов дела.</p>
                </div>
                <p className="text-sm text-[var(--ink-2)]">{result.advice}</p>
              </div>
            </div>

            {/* What next */}
            <h2 className="text-lg font-black text-[var(--ink)] mb-4">Что дальше</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
              <div className="bg-[var(--bg-card)] rounded-2xl p-6 border-2 border-[var(--border)] hover:border-[#1a3c72]/20 hover:shadow-lg transition-all">
                <div className="text-2xl mb-2">🟢</div>
                <h3 className="font-bold text-[var(--ink)] mb-1">Самостоятельно</h3>
                <p className="text-sm text-[var(--ink-2)] mb-4">Пошаговая система с инструкциями и шаблонами документов</p>
                <Link href="/bankruptcy"
                  className="block text-center bg-[#1a3c72] text-white text-sm font-bold py-2.5 rounded-xl hover:bg-[#0f2d5e] transition-colors">
                  Продолжить самостоятельно
                </Link>
              </div>
              <div className="bg-[#1a3c72] rounded-2xl p-6 text-white">
                <div className="text-2xl mb-2">🔵</div>
                <h3 className="font-bold mb-1">С сопровождением</h3>
                <p className="text-sm text-blue-200 mb-4">Юрист ведёт процедуру полностью за вас</p>
                <Link href="/"
                  className="block text-center bg-[#ff5c28] text-white text-sm font-bold py-2.5 rounded-xl hover:bg-[#e84e1f] transition-colors">
                  Получить сопровождение
                </Link>
              </div>
            </div>

            {/* Premium analysis */}
            <div className="bg-[var(--bg-card)] rounded-3xl border-2 border-[#1a3c72] p-7 mb-6">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="font-black text-[var(--ink)] text-lg">💎 Индивидуальное правовое заключение</h3>
                  <p className="text-sm text-[var(--ink-2)] mt-1">Полная юридическая оценка вашей ситуации</p>
                </div>
                <div className="text-right">
                  <p className="text-2xl font-black text-[var(--ink)]">10 000 ₽</p>
                  <p className="text-xs text-[var(--ink-3)]">Готово за 24 часа</p>
                </div>
              </div>
              <ul className="space-y-2 mb-5">
                {[
                  "Анализ рисков отказа суда",
                  "Оценка перспектив процедуры",
                  "Разбор структуры долгов",
                  "Юридическое заключение в PDF",
                  "Рекомендации по дальнейшим действиям",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm text-[var(--ink-2)]">
                    <svg className="w-4 h-4 text-emerald-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
              <div className="bg-red-50 border border-red-100 dark:bg-red-900/20 dark:border-red-800/40 rounded-xl p-3 mb-4 text-sm text-red-700 dark:text-red-400">
                ⚠️ Без предварительного анализа существует риск подачи документов с ошибками, отказа в процедуре и дополнительных расходов.
              </div>
              <button className="w-full bg-[#ff5c28] text-white font-bold py-3.5 rounded-xl hover:bg-[#e84e1f] transition-colors shadow-lg shadow-orange-200 dark:shadow-none">
                Получить анализ за 10 000 ₽
              </button>
              <p className="text-xs text-[var(--ink-3)] text-center mt-2">Результат в течение 24 часов · формат PDF</p>
            </div>

            <button onClick={handleReset} className="w-full text-sm text-[var(--ink-3)] hover:text-[var(--ink-2)] py-2 transition-colors">
              ← Пройти тест заново
            </button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  // --- TEST SCREEN ---
  return (
    <div className="flex flex-col min-h-full">
      <Header />
      <main className="flex-1 bg-[var(--bg-subtle)]">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 py-10">

          {/* Progress */}
          <div className="mb-8">
            <div className="flex items-center justify-between text-sm text-[var(--ink-2)] mb-2">
              <span>Шаг {currentScreen + 1} из {screens.length}</span>
              <span className="font-semibold text-[var(--brand-t)]">{Math.round(progress)}% завершено</span>
            </div>
            <div className="h-2 bg-[var(--bg-muted)] rounded-full overflow-hidden">
              <div
                className="h-full bg-[#1a3c72] rounded-full transition-all duration-500"
                style={{ width: `${progress}%` }}
              />
            </div>
            {/* Step indicators */}
            <div className="flex gap-1 mt-3">
              {screens.map((s, i) => (
                <button
                  key={s.title}
                  onClick={() => i < currentScreen && setCurrentScreen(i)}
                  className={`flex-1 h-1.5 rounded-full transition-colors ${
                    i < currentScreen ? "bg-[#1a3c72] cursor-pointer" :
                    i === currentScreen ? "bg-[#ff5c28]" : "bg-[var(--border)] cursor-default"
                  }`}
                  title={s.title}
                />
              ))}
            </div>
          </div>

          {/* Screen card */}
          <div className="bg-[var(--bg-card)] rounded-3xl border-2 border-[var(--border)] shadow-sm overflow-hidden">
            <div className="bg-[var(--bg-muted)] border-b-2 border-[var(--border)] px-7 py-5 flex items-center gap-3">
              <span className="text-3xl">{screen.icon}</span>
              <div>
                <p className="text-xs text-[#ff5c28] uppercase tracking-wide font-bold">
                  Экран {currentScreen + 1}
                </p>
                <h2 className="text-xl font-black text-[var(--ink)]">{screen.title}</h2>
              </div>
            </div>

            <div className="px-7 py-6 space-y-8">
              {screen.questions.map((question) => (
                <div key={question.id}>
                  <h3 className="font-bold text-[var(--ink)] mb-1">{question.text}</h3>
                  {question.hint && (
                    <p className="text-sm text-[var(--ink-3)] mb-3">{question.hint}</p>
                  )}
                  <div className="space-y-2">
                    {question.answers.map((answer) => {
                      const isSelected = selectedLabels[question.id] === answer.label;
                      return (
                        <button
                          key={answer.label}
                          onClick={() => {
                            handleAnswer(question.id, answer.points);
                            setSelectedLabels((prev) => ({
                              ...prev,
                              [question.id]: answer.label,
                            }));
                          }}
                          className={`w-full text-left px-4 py-3.5 rounded-xl border-2 text-sm font-medium transition-all ${
                            isSelected
                              ? "border-[#1a3c72] bg-[var(--bg-muted)] text-[var(--brand-t)]"
                              : "border-[var(--border)] text-[var(--ink-2)] hover:border-[var(--ink-3)] hover:bg-[var(--bg-subtle)]"
                          }`}
                        >
                          <span className={`inline-flex w-5 h-5 rounded-full border-2 mr-3 items-center justify-center flex-shrink-0 align-middle ${
                            isSelected ? "border-[#1a3c72] bg-[#1a3c72]" : "border-[var(--border)]"
                          }`}>
                            {isSelected && <span className="w-2 h-2 rounded-full bg-white inline-block" />}
                          </span>
                          {answer.label}
                        </button>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>

            <div className="px-7 pb-7 flex gap-3">
              {currentScreen > 0 && (
                <button
                  onClick={handleBack}
                  className="px-5 py-3 rounded-xl border-2 border-[var(--border)] text-[var(--ink-2)] text-sm font-medium hover:bg-[var(--bg-subtle)] transition-colors"
                >
                  ← Назад
                </button>
              )}
              <button
                onClick={handleNext}
                disabled={!screenAnswered}
                className={`flex-1 py-3.5 rounded-xl text-sm font-bold transition-all ${
                  screenAnswered
                    ? "bg-[#ff5c28] text-white hover:bg-[#e84e1f] shadow-lg shadow-orange-200 dark:shadow-none"
                    : "bg-[var(--bg-muted)] text-[var(--ink-3)] cursor-not-allowed"
                }`}
              >
                {currentScreen < screens.length - 1 ? "Далее →" : "Получить результат"}
              </button>
            </div>
          </div>

          <p className="text-center text-xs text-[var(--ink-3)] mt-4">
            Это ни к чему не обязывает · Результат формируется автоматически
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
}
