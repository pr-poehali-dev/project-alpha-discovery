import Icon from "@/components/ui/icon";

export function Header() {
  return (
    <header className="flex items-center justify-between px-8 py-4 border-b border-gray-800/50">
      <div className="flex items-center gap-2">
        <CSLogo />
        <span className="text-lg font-bold text-white">
          CS<span className="text-violet-400">Stats</span>
        </span>
      </div>

      <nav className="hidden md:flex items-center gap-6">
        <a href="#" className="text-sm text-white font-medium transition-colors flex items-center gap-1.5">
          <Icon name="Trophy" size={14} />
          Рейтинг
        </a>
        <a href="#" className="text-sm text-gray-400 hover:text-white transition-colors flex items-center gap-1.5">
          <Icon name="Radio" size={14} />
          Матчи
        </a>
        <a href="#" className="text-sm text-gray-400 hover:text-white transition-colors flex items-center gap-1.5">
          <Icon name="Calendar" size={14} />
          Турниры
        </a>
        <a href="#" className="text-sm text-gray-400 hover:text-white transition-colors flex items-center gap-1.5">
          <Icon name="BarChart3" size={14} />
          Статистика
        </a>
      </nav>

      <div className="flex items-center gap-3">
        <div className="hidden sm:flex items-center gap-2 rounded-full bg-[#1a1a2e] px-3 py-1.5">
          <Icon name="Search" size={14} className="text-gray-500" />
          <span className="text-xs text-gray-500">Поиск...</span>
        </div>
      </div>
    </header>
  );
}

function CSLogo() {
  return (
    <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-violet-500 to-violet-700 flex items-center justify-center">
      <Icon name="Crosshair" size={16} className="text-white" />
    </div>
  );
}

export default Header;