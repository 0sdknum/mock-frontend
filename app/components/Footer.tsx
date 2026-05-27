import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 mt-auto">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center">
                <span className="text-white font-bold text-sm">Д</span>
              </div>
              <span className="font-bold text-lg text-white tracking-tight">
                ДОКСИ
              </span>
            </div>
            <p className="text-sm text-slate-400 leading-relaxed">
              Цифровая юридическая платформа. Помогаем пройти процедуру
              банкротства спокойно и понятно.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-3">Услуги</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/bankruptcy"
                  className="hover:text-white transition-colors"
                >
                  Банкротство
                </Link>
              </li>
              <li>
                <Link
                  href="/family"
                  className="hover:text-white transition-colors"
                >
                  Семейные дела
                </Link>
              </li>
              <li>
                <Link
                  href="/test"
                  className="hover:text-white transition-colors"
                >
                  Проверить ситуацию
                </Link>
              </li>
            </ul>
          </div>

          {/* Info */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-3">
              Информация
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  Политика конфиденциальности
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  Пользовательское соглашение
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  Согласие на обработку данных
                </Link>
              </li>
            </ul>
          </div>

          {/* Contacts */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-3">Контакты</h4>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center gap-2">
                <span>📧</span>
                <span>hello@doxy.ru</span>
              </li>
              <li className="flex items-center gap-2">
                <span>📞</span>
                <span>8 (800) 000-00-00</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-8 pt-6 text-xs text-slate-500">
          <p>
            Информация носит ознакомительный характер и не является публичной
            офертой.
          </p>
          <p className="mt-1">
            © {new Date().getFullYear()} ДОКСИ. Все права защищены.
          </p>
        </div>
      </div>
    </footer>
  );
}
