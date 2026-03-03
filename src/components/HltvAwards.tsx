import Icon from "@/components/ui/icon";

interface AwardCategory {
  id: string;
  title: string;
  icon: string;
  winner: {
    name: string;
    team: string;
    teamLogo: string;
    country: string;
    stat?: string;
    statLabel?: string;
  };
  nominees: { name: string; team: string; country: string }[];
}

const awards: AwardCategory[] = [
  {
    id: "mvp",
    title: "MVP года",
    icon: "🏅",
    winner: {
      name: "donk",
      team: "Team Spirit",
      teamLogo: "🐉",
      country: "🇷🇺",
      stat: "1.38",
      statLabel: "Rating 3.0",
    },
    nominees: [
      { name: "s1mple", team: "NAVI", country: "🇺🇦" },
      { name: "m0NESY", team: "G2", country: "🇷🇺" },
      { name: "ZywOo", team: "Vitality", country: "🇫🇷" },
    ],
  },
  {
    id: "best-player",
    title: "Лучший игрок",
    icon: "👑",
    winner: {
      name: "s1mple",
      team: "Natus Vincere",
      teamLogo: "⚡",
      country: "🇺🇦",
      stat: "1.42",
      statLabel: "Rating 3.0",
    },
    nominees: [
      { name: "donk", team: "Spirit", country: "🇷🇺" },
      { name: "ZywOo", team: "Vitality", country: "🇫🇷" },
      { name: "m0NESY", team: "G2", country: "🇷🇺" },
    ],
  },
  {
    id: "best-awper",
    title: "Лучший AWP-ер",
    icon: "🎯",
    winner: {
      name: "sh1ro",
      team: "Team Spirit",
      teamLogo: "🐉",
      country: "🇷🇺",
      stat: "72.4%",
      statLabel: "AWP Kill Rate",
    },
    nominees: [
      { name: "m0NESY", team: "G2", country: "🇷🇺" },
      { name: "broky", team: "FaZe", country: "🇱🇻" },
      { name: "device", team: "Astralis", country: "🇩🇰" },
    ],
  },
  {
    id: "best-entry",
    title: "Лучший Entry-фраггер",
    icon: "⚔️",
    winner: {
      name: "rain",
      team: "FaZe Clan",
      teamLogo: "🔴",
      country: "🇳🇴",
      stat: "68.1%",
      statLabel: "Entry Success",
    },
    nominees: [
      { name: "flameZ", team: "Vitality", country: "🇮🇱" },
      { name: "b1t", team: "NAVI", country: "🇺🇦" },
      { name: "xertioN", team: "MOUZ", country: "🇧🇪" },
    ],
  },
  {
    id: "best-igl",
    title: "Лучший IGL",
    icon: "🧠",
    winner: {
      name: "Aleksib",
      team: "Natus Vincere",
      teamLogo: "⚡",
      country: "🇫🇮",
      stat: "67%",
      statLabel: "Win Rate",
    },
    nominees: [
      { name: "chopper", team: "Spirit", country: "🇷🇺" },
      { name: "karrigan", team: "FaZe", country: "🇩🇰" },
      { name: "apEX", team: "Vitality", country: "🇫🇷" },
    ],
  },
  {
    id: "best-clutcher",
    title: "Лучший клатчер",
    icon: "🔥",
    winner: {
      name: "NiKo",
      team: "G2 Esports",
      teamLogo: "🦊",
      country: "🇧🇦",
      stat: "71.3%",
      statLabel: "Clutch Win Rate",
    },
    nominees: [
      { name: "ropz", team: "FaZe", country: "🇪🇪" },
      { name: "s1mple", team: "NAVI", country: "🇺🇦" },
      { name: "frozen", team: "FaZe", country: "🇸🇰" },
    ],
  },
  {
    id: "best-pistol",
    title: "Лучший пистолетчик",
    icon: "🔫",
    winner: {
      name: "frozen",
      team: "FaZe Clan",
      teamLogo: "🔴",
      country: "🇸🇰",
      stat: "63.8%",
      statLabel: "Pistol HS%",
    },
    nominees: [
      { name: "NiKo", team: "G2", country: "🇧🇦" },
      { name: "ropz", team: "FaZe", country: "🇪🇪" },
      { name: "donk", team: "Spirit", country: "🇷🇺" },
    ],
  },
  {
    id: "best-team",
    title: "Команда года",
    icon: "🏆",
    winner: {
      name: "Natus Vincere",
      team: "",
      teamLogo: "⚡",
      country: "🇺🇦",
      stat: "1821",
      statLabel: "World Points",
    },
    nominees: [
      { name: "Team Spirit", team: "", country: "🇷🇺" },
      { name: "FaZe Clan", team: "", country: "🇪🇺" },
      { name: "G2 Esports", team: "", country: "🇪🇺" },
    ],
  },
  {
    id: "rookie",
    title: "Открытие года",
    icon: "🌟",
    winner: {
      name: "w0nderful",
      team: "Natus Vincere",
      teamLogo: "⚡",
      country: "🇺🇦",
      stat: "1.15",
      statLabel: "Rating 3.0",
    },
    nominees: [
      { name: "Jimpphat", team: "MOUZ", country: "🇫🇮" },
      { name: "zont1x", team: "Spirit", country: "🇷🇺" },
      { name: "Spinx", team: "Vitality", country: "🇮🇱" },
    ],
  },
  {
    id: "best-coach",
    title: "Лучший тренер",
    icon: "📋",
    winner: {
      name: "B1ad3",
      team: "Natus Vincere",
      teamLogo: "⚡",
      country: "🇺🇦",
      stat: "3",
      statLabel: "Трофея",
    },
    nominees: [
      { name: "Hunden", team: "Spirit", country: "🇩🇰" },
      { name: "RobbaN", team: "FaZe", country: "🇸🇪" },
      { name: "zonic", team: "Vitality", country: "🇩🇰" },
    ],
  },
];

export function HltvAwards() {
  return (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <div className="inline-flex items-center gap-2 rounded-full bg-yellow-500/10 border border-yellow-500/20 px-4 py-2 mb-4">
          <span className="text-xl">🏆</span>
          <span className="text-yellow-400 font-semibold text-sm">HLTV Awards 2026</span>
        </div>
        <p className="text-gray-500 text-sm">Лучшие игроки и команды по итогам сезона</p>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        {awards.map((award) => (
          <div
            key={award.id}
            className="rounded-xl bg-[#111122] border border-gray-800/50 overflow-hidden hover:border-yellow-500/20 transition-all group"
          >
            <div className="px-4 pt-4 pb-3 flex items-center gap-2 border-b border-gray-800/30">
              <span className="text-lg">{award.icon}</span>
              <h3 className="text-sm font-semibold text-white">{award.title}</h3>
            </div>

            <div className="p-4">
              <div className="flex items-center gap-3 mb-3 p-3 rounded-lg bg-gradient-to-r from-yellow-500/10 to-transparent border border-yellow-500/15">
                <span className="text-2xl">{award.winner.teamLogo}</span>
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-white">{award.winner.name}</span>
                    <span>{award.winner.country}</span>
                  </div>
                  {award.winner.team && (
                    <span className="text-xs text-gray-400">{award.winner.team}</span>
                  )}
                </div>
                {award.winner.stat && (
                  <div className="text-right">
                    <div className="text-lg font-bold font-mono text-yellow-400">{award.winner.stat}</div>
                    <div className="text-[10px] text-gray-500">{award.winner.statLabel}</div>
                  </div>
                )}
              </div>

              <div className="space-y-1.5">
                {award.nominees.map((nominee, idx) => (
                  <div key={idx} className="flex items-center gap-2 px-3 py-1.5 rounded-md hover:bg-white/[0.02] transition-colors">
                    <span className="text-xs text-gray-600 w-4">{idx + 2}</span>
                    <Icon name="User" size={12} className="text-gray-600" />
                    <span className="text-sm text-gray-300">{nominee.name}</span>
                    <span className="text-xs">{nominee.country}</span>
                    {nominee.team && (
                      <span className="text-xs text-gray-600 ml-auto">{nominee.team}</span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HltvAwards;