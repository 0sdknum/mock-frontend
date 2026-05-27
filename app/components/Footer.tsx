import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#06101e] text-slate-400">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-14">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">

          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-8 h-8 rounded-xl bg-white/10 flex items-center justify-center">
                <span className="text-white font-bold text-sm">Д</span>
              </div>
              <span className="font-bold text-base text-white tracking-tight">ДОКСИ</span>
            </div>
            <p className="text-sm text-slate-500 leading-relaxed max-w-[220px]">
              Цифровая юридическая платформа для физических лиц.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-4">Услуги</h4>
            <ul className="space-y-2.5 text-sm">
              <li><Link href="/bankruptcy" className="hover:text-white transition-colors">Банкротство</Link></li>
              <li><Link href="/family" className="hover:text-white transition-colors">Семейные дела</Link></li>
              <li><Link href="/test" className="hover:text-white transition-colors">Проверить ситуацию</Link></li>
            </ul>
          </div>

          {/* Info */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-4">Информация</h4>
            <ul className="space-y-2.5 text-sm">
              <li><Link href="#" className="hover:text-white transition-colors">Политика конфиденциальности</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Пользовательское соглашение</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Обработка данных</Link></li>
            </ul>
          </div>

          {/* Contacts */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-4">Контакты</h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a href="mailto:hello@doxy.ru" className="hover:text-white transition-colors">hello@doxy.ru</a>
              </li>
              <li>
                <a href="tel:+78000000000" className="hover:text-white transition-colors">8 (800) 000-00-00</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/5 mt-10 pt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs text-slate-600">
          <p>© 2025 ДОКСИ. Все права защищены.</p>
          <p>Информация носит ознакомительный характер и не является публичной офертой.</p>
        </div>
      </div>
    </footer>
  );
}
