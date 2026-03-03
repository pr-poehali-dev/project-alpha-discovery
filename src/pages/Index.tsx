import { useState } from "react";
import { Header } from "@/components/Header";
import { TeamsRanking } from "@/components/TeamsRanking";
import { LiveMatches } from "@/components/LiveMatches";
import { HltvAwards } from "@/components/HltvAwards";
import Icon from "@/components/ui/icon";

export default function Index() {
  const [activeTab, setActiveTab] = useState<"ranking" | "matches" | "awards">("ranking");

  return (
    <main className="min-h-screen bg-[#0a0a0a]">
      <Header />

      <section className="flex flex-col items-center justify-center px-4 pt-10 pb-6 text-center">
        <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-[#1a1a2e] py-2 text-sm px-3">
          <span className="rounded-full bg-violet-500/20 px-2 py-0.5 text-xs font-medium text-violet-400">2026</span>
          <span className="text-gray-300">Counter-Strike 2 World Ranking</span>
        </div>

        <h1 className="mb-3 max-w-3xl text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-white text-balance">
          Рейтинг команд и матчи CS2
        </h1>
        <p className="mb-8 max-w-xl text-gray-400 text-sm">
          Топ-50 лучших команд мира с рейтингом игроков HLTV 3.0 и прямые трансляции матчей
        </p>
      </section>

      <div className="max-w-4xl mx-auto px-4 pb-12">
        <div className="flex gap-1 mb-6 bg-[#111122] rounded-xl p-1 max-w-xl mx-auto">
          <button
            className={`flex-1 flex items-center justify-center gap-2 px-3 py-2.5 rounded-lg text-sm font-medium transition-all ${
              activeTab === "ranking"
                ? "bg-violet-500/20 text-violet-400 border border-violet-500/30"
                : "text-gray-400 hover:text-white border border-transparent"
            }`}
            onClick={() => setActiveTab("ranking")}
          >
            <Icon name="Trophy" size={16} />
            Топ-50
          </button>
          <button
            className={`flex-1 flex items-center justify-center gap-2 px-3 py-2.5 rounded-lg text-sm font-medium transition-all ${
              activeTab === "matches"
                ? "bg-violet-500/20 text-violet-400 border border-violet-500/30"
                : "text-gray-400 hover:text-white border border-transparent"
            }`}
            onClick={() => setActiveTab("matches")}
          >
            <Icon name="Radio" size={16} />
            Live
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
            </span>
          </button>
          <button
            className={`flex-1 flex items-center justify-center gap-2 px-3 py-2.5 rounded-lg text-sm font-medium transition-all ${
              activeTab === "awards"
                ? "bg-yellow-500/20 text-yellow-400 border border-yellow-500/30"
                : "text-gray-400 hover:text-white border border-transparent"
            }`}
            onClick={() => setActiveTab("awards")}
          >
            <Icon name="Award" size={16} />
            Awards
          </button>
        </div>

        {activeTab === "ranking" && <TeamsRanking />}
        {activeTab === "matches" && <LiveMatches />}
        {activeTab === "awards" && <HltvAwards />}
      </div>

      <footer className="py-8 text-center text-sm text-gray-500 border-t border-gray-800/50">
        CS Stats 2026 — Рейтинги и статистика Counter-Strike 2
      </footer>
    </main>
  );
}