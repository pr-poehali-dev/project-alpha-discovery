import Icon from "@/components/ui/icon";

interface LiveMatch {
  id: number;
  status: "live" | "upcoming" | "finished";
  tournament: string;
  tournamentLogo: string;
  bestOf: number;
  team1: { name: string; logo: string; score: number; country: string };
  team2: { name: string; logo: string; score: number; country: string };
  map?: string;
  startTime?: string;
  viewers?: number;
}

const liveMatches: LiveMatch[] = [
  {
    id: 1,
    status: "live",
    tournament: "BLAST Premier Spring Finals 2026",
    tournamentLogo: "🏆",
    bestOf: 3,
    team1: { name: "Natus Vincere", logo: "⚡", score: 1, country: "🇺🇦" },
    team2: { name: "G2 Esports", logo: "🦊", score: 1, country: "🇪🇺" },
    map: "Inferno",
    viewers: 284000,
  },
  {
    id: 2,
    status: "live",
    tournament: "IEM Katowice 2026",
    tournamentLogo: "🎮",
    bestOf: 3,
    team1: { name: "FaZe Clan", logo: "🔴", score: 2, country: "🇪🇺" },
    team2: { name: "Vitality", logo: "🐝", score: 1, country: "🇫🇷" },
    map: "Anubis",
    viewers: 198000,
  },
  {
    id: 3,
    status: "live",
    tournament: "ESL Pro League S23",
    tournamentLogo: "⭐",
    bestOf: 3,
    team1: { name: "Team Spirit", logo: "🐉", score: 0, country: "🇷🇺" },
    team2: { name: "MOUZ", logo: "🖱️", score: 1, country: "🇪🇺" },
    map: "Mirage",
    viewers: 156000,
  },
  {
    id: 4,
    status: "live",
    tournament: "BLAST Premier Spring Finals 2026",
    tournamentLogo: "🏆",
    bestOf: 3,
    team1: { name: "Cloud9", logo: "☁️", score: 1, country: "🇺🇸" },
    team2: { name: "Heroic", logo: "🛡️", score: 0, country: "🇩🇰" },
    map: "Nuke",
    viewers: 89000,
  },
  {
    id: 5,
    status: "upcoming",
    tournament: "IEM Katowice 2026",
    tournamentLogo: "🎮",
    bestOf: 3,
    team1: { name: "Eternal Fire", logo: "🔥", score: 0, country: "🇹🇷" },
    team2: { name: "Astralis", logo: "✦", score: 0, country: "🇩🇰" },
    startTime: "16:00",
  },
  {
    id: 6,
    status: "upcoming",
    tournament: "ESL Pro League S23",
    tournamentLogo: "⭐",
    bestOf: 3,
    team1: { name: "Liquid", logo: "💧", score: 0, country: "🇺🇸" },
    team2: { name: "ENCE", logo: "🦅", score: 0, country: "🇫🇮" },
    startTime: "17:30",
  },
  {
    id: 7,
    status: "upcoming",
    tournament: "BLAST Premier Spring Finals 2026",
    tournamentLogo: "🏆",
    bestOf: 3,
    team1: { name: "BIG", logo: "🅱️", score: 0, country: "🇩🇪" },
    team2: { name: "Falcons", logo: "🦅", score: 0, country: "🇸🇦" },
    startTime: "19:00",
  },
  {
    id: 8,
    status: "upcoming",
    tournament: "IEM Katowice 2026",
    tournamentLogo: "🎮",
    bestOf: 5,
    team1: { name: "Virtus.pro", logo: "🐻", score: 0, country: "🇷🇺" },
    team2: { name: "TheMongolz", logo: "🏹", score: 0, country: "🇲🇳" },
    startTime: "20:00",
  },
  {
    id: 9,
    status: "upcoming",
    tournament: "ESL Pro League S23",
    tournamentLogo: "⭐",
    bestOf: 3,
    team1: { name: "paiN Gaming", logo: "💀", score: 0, country: "🇧🇷" },
    team2: { name: "3DMAX", logo: "🎯", score: 0, country: "🇫🇷" },
    startTime: "21:30",
  },
];

function formatViewers(n: number) {
  if (n >= 1000) return (n / 1000).toFixed(1) + "K";
  return String(n);
}

export function LiveMatches() {
  const live = liveMatches.filter((m) => m.status === "live");
  const upcoming = liveMatches.filter((m) => m.status === "upcoming");

  return (
    <div className="space-y-8">
      {live.length > 0 && (
        <div>
          <div className="flex items-center gap-2 mb-4">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
            </span>
            <h3 className="text-lg font-semibold text-white">Сейчас в эфире</h3>
            <span className="text-sm text-gray-500">({live.length})</span>
          </div>

          <div className="grid gap-3">
            {live.map((match) => (
              <div
                key={match.id}
                className="rounded-xl bg-gradient-to-r from-red-500/5 via-[#111122] to-red-500/5 border border-red-500/20 p-4 hover:border-red-500/40 transition-all cursor-pointer"
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <span>{match.tournamentLogo}</span>
                    <span className="text-xs text-gray-400">{match.tournament}</span>
                    <span className="text-xs text-gray-600">BO{match.bestOf}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    {match.viewers && (
                      <div className="flex items-center gap-1 text-xs text-red-400">
                        <Icon name="Eye" size={12} />
                        <span>{formatViewers(match.viewers)}</span>
                      </div>
                    )}
                    <span className="px-2 py-0.5 rounded-full bg-red-500/20 text-red-400 text-xs font-medium uppercase tracking-wider">
                      Live
                    </span>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3 flex-1">
                    <span className="text-2xl">{match.team1.logo}</span>
                    <div>
                      <div className="font-semibold text-white">{match.team1.name}</div>
                      <div className="text-xs text-gray-500">{match.team1.country}</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 px-6">
                    <span className={`text-2xl font-bold font-mono ${match.team1.score > match.team2.score ? "text-green-400" : "text-white"}`}>
                      {match.team1.score}
                    </span>
                    <div className="flex flex-col items-center">
                      <span className="text-gray-600 text-xs">vs</span>
                      {match.map && <span className="text-[10px] text-violet-400 mt-0.5">{match.map}</span>}
                    </div>
                    <span className={`text-2xl font-bold font-mono ${match.team2.score > match.team1.score ? "text-green-400" : "text-white"}`}>
                      {match.team2.score}
                    </span>
                  </div>

                  <div className="flex items-center gap-3 flex-1 justify-end">
                    <div className="text-right">
                      <div className="font-semibold text-white">{match.team2.name}</div>
                      <div className="text-xs text-gray-500">{match.team2.country}</div>
                    </div>
                    <span className="text-2xl">{match.team2.logo}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {upcoming.length > 0 && (
        <div>
          <div className="flex items-center gap-2 mb-4">
            <Icon name="Clock" size={16} className="text-gray-500" />
            <h3 className="text-lg font-semibold text-white">Скоро начнутся</h3>
            <span className="text-sm text-gray-500">({upcoming.length})</span>
          </div>

          <div className="grid gap-3">
            {upcoming.map((match) => (
              <div
                key={match.id}
                className="rounded-xl bg-[#111122] border border-gray-800/50 p-4 hover:border-violet-500/30 transition-all cursor-pointer"
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <span>{match.tournamentLogo}</span>
                    <span className="text-xs text-gray-400">{match.tournament}</span>
                    <span className="text-xs text-gray-600">BO{match.bestOf}</span>
                  </div>
                  {match.startTime && (
                    <span className="px-2 py-0.5 rounded-full bg-violet-500/15 text-violet-400 text-xs font-medium">
                      {match.startTime}
                    </span>
                  )}
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3 flex-1">
                    <span className="text-2xl">{match.team1.logo}</span>
                    <div>
                      <div className="font-semibold text-white">{match.team1.name}</div>
                      <div className="text-xs text-gray-500">{match.team1.country}</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 px-6">
                    <span className="text-gray-600 text-sm font-medium">vs</span>
                  </div>

                  <div className="flex items-center gap-3 flex-1 justify-end">
                    <div className="text-right">
                      <div className="font-semibold text-white">{match.team2.name}</div>
                      <div className="text-xs text-gray-500">{match.team2.country}</div>
                    </div>
                    <span className="text-2xl">{match.team2.logo}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default LiveMatches;