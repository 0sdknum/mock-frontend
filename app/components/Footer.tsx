import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[var(--bg-card)] border-t border-[var(--border)] dark:bg-[#06101e] dark:border-transparent text-[var(--ink-3)]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-14">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-[#3b7fe8] to-[#1d52c8] dark:bg-white/10 flex items-center justify-center">
                <span className="text-white font-bold text-sm">Д</span>
              </div>
              <span className="font-bold text-base text-[var(--ink)] dark:text-white tracking-tight">
                ДОКСИ
              </span>
            </div>
            <p className="text-sm text-[var(--ink-2)] leading-relaxed max-w-[220px]">
              Цифровая юридическая платформа для физических лиц.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-[var(--ink)] dark:text-white font-semibold text-sm mb-4">Услуги</h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link
                  href="/bankruptcy"
                  className="hover:text-[var(--ink)] dark:hover:text-white transition-colors"
                >
                  Банкротство
                </Link>
              </li>
              <li>
                <Link
                  href="/family"
                  className="hover:text-[var(--ink)] dark:hover:text-white transition-colors"
                >
                  Семейные дела
                </Link>
              </li>
              <li>
                <Link
                  href="/test"
                  className="hover:text-[var(--ink)] dark:hover:text-white transition-colors"
                >
                  Проверить ситуацию
                </Link>
              </li>
            </ul>
          </div>

          {/* Info */}
          <div>
            <h4 className="text-[var(--ink)] dark:text-white font-semibold text-sm mb-4">
              Информация
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="#" className="hover:text-[var(--ink)] dark:hover:text-white transition-colors">
                  Политика конфиденциальности
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-[var(--ink)] dark:hover:text-white transition-colors">
                  Пользовательское соглашение
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-[var(--ink)] dark:hover:text-white transition-colors">
                  Обработка данных
                </Link>
              </li>
            </ul>
          </div>

          {/* Contacts */}
          <div>
            <h4 className="text-[var(--ink)] dark:text-white font-semibold text-sm mb-4">Контакты</h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a
                  href="mailto:hello@doxy.ru"
                  className="hover:text-[var(--ink)] dark:hover:text-white transition-colors"
                >
                  hello@doxy.ru
                </a>
              </li>
              <li>
                <a
                  href="tel:+78000000000"
                  className="hover:text-[var(--ink)] dark:hover:text-white transition-colors"
                >
                  8 (800) 000-00-00
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-[var(--border)] dark:border-white/5 mt-10 pt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs text-[var(--ink-2)]">
          <p>© {new Date().getFullYear()} ДОКСИ. Все права защищены.</p>
          <p>
            Информация носит ознакомительный характер и не является публичной
            офертой.
          </p>
        </div>
      </div>
    </footer>
  );
}
