import { useState } from "react";
import Icon from "@/components/ui/icon";

interface Player {
  name: string;
  rating: number;
  country: string;
}

interface Team {
  rank: number;
  name: string;
  country: string;
  points: number;
  logo: string;
  players: Player[];
}

const teamsData: Team[] = [
  { rank: 1, name: "Natus Vincere", country: "🇺🇦", points: 1821, logo: "⚡", players: [
    { name: "s1mple", rating: 1.42, country: "🇺🇦" }, { name: "b1t", rating: 1.21, country: "🇺🇦" }, { name: "iM", rating: 1.18, country: "🇰🇿" }, { name: "w0nderful", rating: 1.15, country: "🇺🇦" }, { name: "Aleksib", rating: 1.04, country: "🇫🇮" }
  ]},
  { rank: 2, name: "Team Spirit", country: "🇷🇺", points: 1756, logo: "🐉", players: [
    { name: "donk", rating: 1.38, country: "🇷🇺" }, { name: "zont1x", rating: 1.22, country: "🇷🇺" }, { name: "magixx", rating: 1.16, country: "🇷🇺" }, { name: "chopper", rating: 1.08, country: "🇷🇺" }, { name: "sh1ro", rating: 1.25, country: "🇷🇺" }
  ]},
  { rank: 3, name: "FaZe Clan", country: "🇪🇺", points: 1698, logo: "🔴", players: [
    { name: "ropz", rating: 1.24, country: "🇪🇪" }, { name: "rain", rating: 1.12, country: "🇳🇴" }, { name: "frozen", rating: 1.19, country: "🇸🇰" }, { name: "broky", rating: 1.17, country: "🇱🇻" }, { name: "karrigan", rating: 0.98, country: "🇩🇰" }
  ]},
  { rank: 4, name: "G2 Esports", country: "🇪🇺", points: 1645, logo: "🦊", players: [
    { name: "NiKo", rating: 1.28, country: "🇧🇦" }, { name: "huNter-", rating: 1.14, country: "🇧🇦" }, { name: "m0NESY", rating: 1.35, country: "🇷🇺" }, { name: "nexa", rating: 1.06, country: "🇷🇸" }, { name: "HooXi", rating: 0.95, country: "🇩🇰" }
  ]},
  { rank: 5, name: "Vitality", country: "🇫🇷", points: 1612, logo: "🐝", players: [
    { name: "ZywOo", rating: 1.36, country: "🇫🇷" }, { name: "apEX", rating: 1.02, country: "🇫🇷" }, { name: "flameZ", rating: 1.18, country: "🇮🇱" }, { name: "Spinx", rating: 1.15, country: "🇮🇱" }, { name: "mezii", rating: 1.08, country: "🇬🇧" }
  ]},
  { rank: 6, name: "MOUZ", country: "🇪🇺", points: 1589, logo: "🖱️", players: [
    { name: "torzsi", rating: 1.22, country: "🇭🇺" }, { name: "xertioN", rating: 1.16, country: "🇧🇪" }, { name: "Jimpphat", rating: 1.14, country: "🇫🇮" }, { name: "Brollan", rating: 1.20, country: "🇸🇪" }, { name: "siuhy", rating: 1.01, country: "🇵🇱" }
  ]},
  { rank: 7, name: "Cloud9", country: "🇺🇸", points: 1534, logo: "☁️", players: [
    { name: "HObbit", rating: 1.15, country: "🇰🇿" }, { name: "Ax1Le", rating: 1.20, country: "🇷🇺" }, { name: "electroNic", rating: 1.12, country: "🇷🇺" }, { name: "Perfecto", rating: 1.10, country: "🇺🇦" }, { name: "buster", rating: 1.08, country: "🇰🇿" }
  ]},
  { rank: 8, name: "Heroic", country: "🇩🇰", points: 1498, logo: "🛡️", players: [
    { name: "stavn", rating: 1.19, country: "🇩🇰" }, { name: "TeSeS", rating: 1.10, country: "🇩🇰" }, { name: "sjuush", rating: 1.07, country: "🇩🇰" }, { name: "jabbi", rating: 1.15, country: "🇩🇰" }, { name: "cadiaN", rating: 1.06, country: "🇩🇰" }
  ]},
  { rank: 9, name: "Liquid", country: "🇺🇸", points: 1467, logo: "💧", players: [
    { name: "NAF", rating: 1.14, country: "🇨🇦" }, { name: "EliGE", rating: 1.16, country: "🇺🇸" }, { name: "oSee", rating: 1.11, country: "🇺🇸" }, { name: "nitr0", rating: 1.02, country: "🇺🇸" }, { name: "YEKINDAR", rating: 1.13, country: "🇱🇻" }
  ]},
  { rank: 10, name: "ENCE", country: "🇫🇮", points: 1445, logo: "🦅", players: [
    { name: "dycha", rating: 1.12, country: "🇵🇱" }, { name: "goofy", rating: 1.09, country: "🇫🇮" }, { name: "NertZ", rating: 1.14, country: "🇮🇱" }, { name: "SunPayus", rating: 1.18, country: "🇪🇸" }, { name: "Gla1ve", rating: 1.01, country: "🇩🇰" }
  ]},
  { rank: 11, name: "Complexity", country: "🇺🇸", points: 1423, logo: "⭐", players: [
    { name: "EliGE", rating: 1.13, country: "🇺🇸" }, { name: "floppy", rating: 1.08, country: "🇺🇸" }, { name: "Grim", rating: 1.10, country: "🇺🇸" }, { name: "hallzerk", rating: 1.15, country: "🇳🇴" }, { name: "JT", rating: 0.99, country: "🇨🇦" }
  ]},
  { rank: 12, name: "BIG", country: "🇩🇪", points: 1401, logo: "🅱️", players: [
    { name: "tabseN", rating: 1.11, country: "🇩🇪" }, { name: "syrsoN", rating: 1.14, country: "🇩🇪" }, { name: "rigoN", rating: 1.06, country: "🇩🇪" }, { name: "prosus", rating: 1.09, country: "🇩🇪" }, { name: "Krimbo", rating: 1.12, country: "🇩🇪" }
  ]},
  { rank: 13, name: "Eternal Fire", country: "🇹🇷", points: 1389, logo: "🔥", players: [
    { name: "woxic", rating: 1.20, country: "🇹🇷" }, { name: "XANTARES", rating: 1.18, country: "🇹🇷" }, { name: "Calyx", rating: 1.08, country: "🇹🇷" }, { name: "imorr", rating: 1.05, country: "🇹🇷" }, { name: "MAJ3R", rating: 1.00, country: "🇹🇷" }
  ]},
  { rank: 14, name: "Astralis", country: "🇩🇰", points: 1367, logo: "✦", players: [
    { name: "device", rating: 1.17, country: "🇩🇰" }, { name: "blameF", rating: 1.10, country: "🇩🇰" }, { name: "Buzz", rating: 1.06, country: "🇩🇰" }, { name: "br0", rating: 1.04, country: "🇩🇰" }, { name: "Staehr", rating: 1.09, country: "🇩🇰" }
  ]},
  { rank: 15, name: "Falcons", country: "🇸🇦", points: 1345, logo: "🦅", players: [
    { name: "Magisk", rating: 1.12, country: "🇩🇰" }, { name: "dupreeh", rating: 1.06, country: "🇩🇰" }, { name: "Bubzkji", rating: 1.09, country: "🇩🇰" }, { name: "k0nfig", rating: 1.11, country: "🇩🇰" }, { name: "Farlig", rating: 1.08, country: "🇩🇰" }
  ]},
  { rank: 16, name: "paiN Gaming", country: "🇧🇷", points: 1328, logo: "💀", players: [
    { name: "arT", rating: 1.10, country: "🇧🇷" }, { name: "yuurih", rating: 1.14, country: "🇧🇷" }, { name: "KSCERATO", rating: 1.18, country: "🇧🇷" }, { name: "chelo", rating: 1.05, country: "🇧🇷" }, { name: "biguzera", rating: 1.08, country: "🇧🇷" }
  ]},
  { rank: 17, name: "Virtus.pro", country: "🇷🇺", points: 1312, logo: "🐻", players: [
    { name: "Jame", rating: 1.13, country: "🇷🇺" }, { name: "n0rb3r7", rating: 1.10, country: "🇷🇺" }, { name: "fame", rating: 1.08, country: "🇷🇺" }, { name: "FL1T", rating: 1.06, country: "🇷🇺" }, { name: "Jerry", rating: 0.99, country: "🇷🇺" }
  ]},
  { rank: 18, name: "TheMongolz", country: "🇲🇳", points: 1298, logo: "🏹", players: [
    { name: "bLitz", rating: 1.16, country: "🇲🇳" }, { name: "Techno", rating: 1.12, country: "🇲🇳" }, { name: "mzinho", rating: 1.09, country: "🇲🇳" }, { name: "senzu", rating: 1.05, country: "🇲🇳" }, { name: "910", rating: 1.02, country: "🇲🇳" }
  ]},
  { rank: 19, name: "3DMAX", country: "🇫🇷", points: 1276, logo: "🎯", players: [
    { name: "Djoko", rating: 1.10, country: "🇫🇷" }, { name: "Ex3rcice", rating: 1.07, country: "🇫🇷" }, { name: "Lucky", rating: 1.05, country: "🇫🇷" }, { name: "Graviti", rating: 1.08, country: "🇫🇷" }, { name: "bodyy", rating: 1.02, country: "🇫🇷" }
  ]},
  { rank: 20, name: "SAW", country: "🇵🇹", points: 1258, logo: "🪚", players: [
    { name: "MUTiRiS", rating: 1.11, country: "🇵🇹" }, { name: "arrozdoce", rating: 1.08, country: "🇵🇹" }, { name: "roman", rating: 1.06, country: "🇵🇹" }, { name: "story", rating: 1.04, country: "🇵🇹" }, { name: "ewjerkz", rating: 1.12, country: "🇩🇰" }
  ]},
  { rank: 21, name: "GamerLegion", country: "🇪🇺", points: 1241, logo: "⚔️", players: [
    { name: "iM", rating: 1.14, country: "🇰🇿" }, { name: "keoz", rating: 1.08, country: "🇱🇺" }, { name: "acoR", rating: 1.06, country: "🇩🇰" }, { name: "isak", rating: 1.10, country: "🇸🇪" }, { name: "Snax", rating: 1.03, country: "🇵🇱" }
  ]},
  { rank: 22, name: "9z Team", country: "🇦🇷", points: 1224, logo: "9️⃣", players: [
    { name: "max", rating: 1.10, country: "🇦🇷" }, { name: "dgt", rating: 1.07, country: "🇦🇷" }, { name: "Luken", rating: 1.05, country: "🇦🇷" }, { name: "dav1d", rating: 1.03, country: "🇦🇷" }, { name: "buda", rating: 1.01, country: "🇦🇷" }
  ]},
  { rank: 23, name: "Lynn Vision", country: "🇨🇳", points: 1209, logo: "🐲", players: [
    { name: "Starry", rating: 1.12, country: "🇨🇳" }, { name: "z4kr", rating: 1.08, country: "🇨🇳" }, { name: "Westmelon", rating: 1.06, country: "🇨🇳" }, { name: "aflame", rating: 1.04, country: "🇨🇳" }, { name: "EmiliaQAQ", rating: 1.02, country: "🇨🇳" }
  ]},
  { rank: 24, name: "Imperial", country: "🇧🇷", points: 1195, logo: "👑", players: [
    { name: "FalleN", rating: 1.08, country: "🇧🇷" }, { name: "fer", rating: 1.05, country: "🇧🇷" }, { name: "boltz", rating: 1.07, country: "🇧🇷" }, { name: "VINI", rating: 1.10, country: "🇧🇷" }, { name: "decenty", rating: 1.06, country: "🇧🇷" }
  ]},
  { rank: 25, name: "Apeks", country: "🇳🇴", points: 1182, logo: "🔺", players: [
    { name: "jkaem", rating: 1.09, country: "🇳🇴" }, { name: "nawwk", rating: 1.11, country: "🇸🇪" }, { name: "STYKO", rating: 1.04, country: "🇸🇰" }, { name: "sense", rating: 1.06, country: "🇳🇴" }, { name: "CacaNito", rating: 1.03, country: "🇪🇸" }
  ]},
  { rank: 26, name: "FURIA", country: "🇧🇷", points: 1168, logo: "🐆", players: [
    { name: "FalleN", rating: 1.10, country: "🇧🇷" }, { name: "yuurih", rating: 1.12, country: "🇧🇷" }, { name: "KSCERATO", rating: 1.16, country: "🇧🇷" }, { name: "molodoy", rating: 1.05, country: "🇧🇷" }, { name: "skullz", rating: 1.04, country: "🇧🇷" }
  ]},
  { rank: 27, name: "Monte", country: "🇺🇦", points: 1155, logo: "🏔️", players: [
    { name: "DemQQ", rating: 1.10, country: "🇺🇦" }, { name: "NEKIZ", rating: 1.06, country: "🇺🇦" }, { name: "Woro2k", rating: 1.08, country: "🇺🇦" }, { name: "Krad", rating: 1.04, country: "🇷🇺" }, { name: "sdy", rating: 1.03, country: "🇺🇦" }
  ]},
  { rank: 28, name: "Ninjas in Pyjamas", country: "🇸🇪", points: 1142, logo: "🥷", players: [
    { name: "REZ", rating: 1.10, country: "🇸🇪" }, { name: "hampus", rating: 1.04, country: "🇸🇪" }, { name: "Brollan", rating: 1.14, country: "🇸🇪" }, { name: "headtr1ck", rating: 1.08, country: "🇷🇺" }, { name: "Plopski", rating: 1.02, country: "🇸🇪" }
  ]},
  { rank: 29, name: "MIBR", country: "🇧🇷", points: 1129, logo: "🇧🇷", players: [
    { name: "exit", rating: 1.08, country: "🇧🇷" }, { name: "brnz4n", rating: 1.06, country: "🇧🇷" }, { name: "insani", rating: 1.04, country: "🇧🇷" }, { name: "drop", rating: 1.07, country: "🇧🇷" }, { name: "saffee", rating: 1.10, country: "🇧🇷" }
  ]},
  { rank: 30, name: "Fnatic", country: "🇸🇪", points: 1116, logo: "🟠", players: [
    { name: "KRIMZ", rating: 1.06, country: "🇸🇪" }, { name: "afro", rating: 1.10, country: "🇸🇪" }, { name: "FASHR", rating: 1.08, country: "🇸🇪" }, { name: "bodyy", rating: 1.04, country: "🇫🇷" }, { name: "nicoodoz", rating: 1.07, country: "🇩🇰" }
  ]},
  { rank: 31, name: "OG", country: "🇪🇺", points: 1103, logo: "🌀", players: [
    { name: "FlameZ", rating: 1.12, country: "🇮🇱" }, { name: "nexa", rating: 1.06, country: "🇷🇸" }, { name: "ISSAA", rating: 1.04, country: "🇯🇴" }, { name: "niko", rating: 1.08, country: "🇩🇰" }, { name: "degster", rating: 1.10, country: "🇷🇺" }
  ]},
  { rank: 32, name: "Permitta", country: "🇵🇱", points: 1092, logo: "🎯", players: [
    { name: "mhL", rating: 1.08, country: "🇵🇱" }, { name: "Goofy", rating: 1.05, country: "🇵🇱" }, { name: "mASKED", rating: 1.04, country: "🇵🇱" }, { name: "reatz", rating: 1.06, country: "🇵🇱" }, { name: "Kwertzz", rating: 1.03, country: "🇵🇱" }
  ]},
  { rank: 33, name: "ECSTATIC", country: "🇩🇰", points: 1079, logo: "⚡", players: [
    { name: "Nodios", rating: 1.08, country: "🇩🇰" }, { name: "Queenix", rating: 1.05, country: "🇩🇰" }, { name: "Zyphon", rating: 1.06, country: "🇩🇰" }, { name: "kraghen", rating: 1.04, country: "🇩🇰" }, { name: "maNkz", rating: 1.02, country: "🇩🇰" }
  ]},
  { rank: 34, name: "BetBoom Team", country: "🇷🇺", points: 1067, logo: "💥", players: [
    { name: "nafany", rating: 1.06, country: "🇷🇺" }, { name: "KaiR0N-", rating: 1.08, country: "🇷🇺" }, { name: "zorte", rating: 1.05, country: "🇷🇺" }, { name: "Forester", rating: 1.04, country: "🇷🇺" }, { name: "danistzz", rating: 1.02, country: "🇷🇺" }
  ]},
  { rank: 35, name: "Aurora", country: "🇷🇺", points: 1054, logo: "🌌", players: [
    { name: "Senzu", rating: 1.07, country: "🇷🇺" }, { name: "NickelBack", rating: 1.05, country: "🇷🇺" }, { name: "lollipop21k", rating: 1.08, country: "🇷🇺" }, { name: "Dsjm", rating: 1.03, country: "🇷🇺" }, { name: "Polt", rating: 1.01, country: "🇷🇺" }
  ]},
  { rank: 36, name: "TYLOO", country: "🇨🇳", points: 1042, logo: "🐯", players: [
    { name: "somebody", rating: 1.08, country: "🇨🇳" }, { name: "SLOWLY", rating: 1.05, country: "🇨🇳" }, { name: "ChildKing", rating: 1.06, country: "🇨🇳" }, { name: "NiKo", rating: 1.04, country: "🇨🇳" }, { name: "DANK1NG", rating: 1.03, country: "🇨🇳" }
  ]},
  { rank: 37, name: "Rare Atom", country: "🇨🇳", points: 1030, logo: "⚛️", players: [
    { name: "ChildKing", rating: 1.07, country: "🇨🇳" }, { name: "kaze", rating: 1.05, country: "🇨🇳" }, { name: "Moseyuh", rating: 1.04, country: "🇨🇳" }, { name: "JamYoung", rating: 1.03, country: "🇨🇳" }, { name: "Attacker", rating: 1.06, country: "🇨🇳" }
  ]},
  { rank: 38, name: "KOI", country: "🇪🇸", points: 1019, logo: "🐟", players: [
    { name: "deko", rating: 1.08, country: "🇪🇸" }, { name: "just", rating: 1.05, country: "🇪🇸" }, { name: "mopoz", rating: 1.04, country: "🇪🇸" }, { name: "stadodo", rating: 1.06, country: "🇪🇸" }, { name: "adamS", rating: 1.02, country: "🇪🇸" }
  ]},
  { rank: 39, name: "Wildcard", country: "🇦🇺", points: 1008, logo: "🃏", players: [
    { name: "INS", rating: 1.10, country: "🇦🇺" }, { name: "Liazz", rating: 1.06, country: "🇦🇺" }, { name: "aliStair", rating: 1.04, country: "🇦🇺" }, { name: "dexter", rating: 1.02, country: "🇦🇺" }, { name: "sico", rating: 1.08, country: "🇦🇺" }
  ]},
  { rank: 40, name: "Nouns", country: "🇺🇸", points: 997, logo: "⌐◨-◨", players: [
    { name: "cJ", rating: 1.07, country: "🇺🇸" }, { name: "Bwills", rating: 1.05, country: "🇺🇸" }, { name: "jeorg1e", rating: 1.04, country: "🇺🇸" }, { name: "susp", rating: 1.06, country: "🇺🇸" }, { name: "viz", rating: 1.03, country: "🇺🇸" }
  ]},
  { rank: 41, name: "Rebels Gaming", country: "🇪🇸", points: 987, logo: "✊", players: [
    { name: "alex", rating: 1.06, country: "🇬🇧" }, { name: "stadodo", rating: 1.04, country: "🇪🇸" }, { name: "SunPayus", rating: 1.10, country: "🇪🇸" }, { name: "DeathZz", rating: 1.03, country: "🇫🇷" }, { name: "KRIMZ", rating: 1.05, country: "🇸🇪" }
  ]},
  { rank: 42, name: "Legacy", country: "🇧🇷", points: 976, logo: "🏛️", players: [
    { name: "coldzera", rating: 1.08, country: "🇧🇷" }, { name: "b4rtiN", rating: 1.05, country: "🇧🇷" }, { name: "dumau", rating: 1.07, country: "🇧🇷" }, { name: "nqz", rating: 1.04, country: "🇧🇷" }, { name: "latto", rating: 1.02, country: "🇧🇷" }
  ]},
  { rank: 43, name: "BOSS", country: "🇰🇿", points: 965, logo: "👔", players: [
    { name: "Qikert", rating: 1.09, country: "🇰🇿" }, { name: "SANJI", rating: 1.05, country: "🇰🇿" }, { name: "buster", rating: 1.06, country: "🇰🇿" }, { name: "Jame", rating: 1.07, country: "🇷🇺" }, { name: "AdreN", rating: 1.01, country: "🇰🇿" }
  ]},
  { rank: 44, name: "Grayhound", country: "🇦🇺", points: 954, logo: "🐕", players: [
    { name: "Vexite", rating: 1.08, country: "🇦🇺" }, { name: "HaZR", rating: 1.05, country: "🇦🇺" }, { name: "SaVage", rating: 1.04, country: "🇦🇺" }, { name: "DickStacy", rating: 1.06, country: "🇦🇺" }, { name: "Hatz", rating: 1.02, country: "🇦🇺" }
  ]},
  { rank: 45, name: "M80", country: "🇺🇸", points: 943, logo: "Ⓜ️", players: [
    { name: "malbsMd", rating: 1.07, country: "🇺🇸" }, { name: "swisher", rating: 1.05, country: "🇺🇸" }, { name: "Infinite", rating: 1.04, country: "🇺🇸" }, { name: "MarkE", rating: 1.06, country: "🇺🇸" }, { name: "Jonji", rating: 1.03, country: "🇺🇸" }
  ]},
  { rank: 46, name: "Passion UA", country: "🇺🇦", points: 932, logo: "💛", players: [
    { name: "juanflatroo", rating: 1.06, country: "🇺🇦" }, { name: "def", rating: 1.04, country: "🇺🇦" }, { name: "Jeorge", rating: 1.05, country: "🇺🇦" }, { name: "nota", rating: 1.03, country: "🇺🇦" }, { name: "Turko", rating: 1.02, country: "🇺🇦" }
  ]},
  { rank: 47, name: "Sangal", country: "🇹🇷", points: 921, logo: "🦁", players: [
    { name: "ScrunK", rating: 1.07, country: "🇹🇷" }, { name: "Zesta", rating: 1.05, country: "🇹🇷" }, { name: "XELLOW", rating: 1.04, country: "🇹🇷" }, { name: "lingz", rating: 1.03, country: "🇹🇷" }, { name: "Muj", rating: 1.02, country: "🇹🇷" }
  ]},
  { rank: 48, name: "Into the Breach", country: "🇬🇧", points: 910, logo: "🌊", players: [
    { name: "Thomas", rating: 1.07, country: "🇬🇧" }, { name: "Keoz", rating: 1.08, country: "🇱🇺" }, { name: "rallen", rating: 1.04, country: "🇵🇱" }, { name: "CRUC1AL", rating: 1.05, country: "🇳🇱" }, { name: "Aaron", rating: 1.03, country: "🇬🇧" }
  ]},
  { rank: 49, name: "FORZE", country: "🇷🇺", points: 899, logo: "💪", players: [
    { name: "Jerry", rating: 1.06, country: "🇷🇺" }, { name: "r3salt", rating: 1.05, country: "🇷🇺" }, { name: "shalfey", rating: 1.07, country: "🇷🇺" }, { name: "Norwi", rating: 1.03, country: "🇷🇺" }, { name: "KENSI", rating: 1.04, country: "🇷🇺" }
  ]},
  { rank: 50, name: "Metizport", country: "🇸🇪", points: 889, logo: "🔩", players: [
    { name: "Jackinho", rating: 1.06, country: "🇸🇪" }, { name: "adamb", rating: 1.04, country: "🇸🇪" }, { name: "PlesseN", rating: 1.05, country: "🇸🇪" }, { name: "hype", rating: 1.03, country: "🇸🇪" }, { name: "Foxed", rating: 1.02, country: "🇸🇪" }
  ]},
];

function getRatingColor(rating: number) {
  if (rating >= 1.30) return "text-green-400";
  if (rating >= 1.15) return "text-emerald-400";
  if (rating >= 1.05) return "text-yellow-400";
  return "text-gray-400";
}

function getRankBadge(rank: number) {
  if (rank === 1) return "bg-yellow-500/20 text-yellow-400 border border-yellow-500/30";
  if (rank === 2) return "bg-gray-400/20 text-gray-300 border border-gray-400/30";
  if (rank === 3) return "bg-amber-600/20 text-amber-500 border border-amber-600/30";
  if (rank <= 10) return "bg-violet-500/15 text-violet-400 border border-violet-500/20";
  return "bg-[#1a1a2e] text-gray-400 border border-gray-700/50";
}

export function TeamsRanking() {
  const [expandedTeam, setExpandedTeam] = useState<number | null>(null);

  return (
    <div className="space-y-1">
      <div className="hidden md:grid grid-cols-[60px_1fr_100px_120px_40px] gap-4 px-4 py-2 text-xs font-medium uppercase tracking-wider text-gray-500">
        <span>Ранг</span>
        <span>Команда</span>
        <span>Регион</span>
        <span className="text-right">Очки</span>
        <span></span>
      </div>

      {teamsData.map((team) => (
        <div key={team.rank}>
          <div
            className={`grid grid-cols-[60px_1fr_100px_120px_40px] gap-4 items-center px-4 py-3 rounded-lg cursor-pointer transition-all duration-200 ${
              expandedTeam === team.rank
                ? "bg-violet-500/10 border border-violet-500/20"
                : "hover:bg-[#111122] border border-transparent"
            }`}
            onClick={() => setExpandedTeam(expandedTeam === team.rank ? null : team.rank)}
          >
            <span className={`inline-flex items-center justify-center w-8 h-8 rounded-md text-sm font-bold ${getRankBadge(team.rank)}`}>
              {team.rank}
            </span>
            <div className="flex items-center gap-3">
              <span className="text-2xl">{team.logo}</span>
              <span className="font-semibold text-white">{team.name}</span>
              <span className="text-sm">{team.country}</span>
            </div>
            <span className="text-sm text-gray-400">{team.country}</span>
            <span className="text-right font-mono font-semibold text-violet-400">{team.points}</span>
            <Icon
              name={expandedTeam === team.rank ? "ChevronUp" : "ChevronDown"}
              size={16}
              className="text-gray-500"
            />
          </div>

          {expandedTeam === team.rank && (
            <div className="mx-4 mb-2 rounded-lg bg-[#0d0d1a] border border-gray-800/50 overflow-hidden">
              <div className="grid grid-cols-[1fr_80px_80px] gap-4 px-4 py-2 text-xs font-medium uppercase tracking-wider text-gray-500 border-b border-gray-800/50">
                <span>Игрок</span>
                <span>Страна</span>
                <span className="text-right">HLTV 3.0</span>
              </div>
              {team.players.map((player, idx) => (
                <div
                  key={idx}
                  className="grid grid-cols-[1fr_80px_80px] gap-4 items-center px-4 py-2.5 hover:bg-white/[0.02] transition-colors"
                >
                  <div className="flex items-center gap-2">
                    <Icon name="User" size={14} className="text-gray-600" />
                    <span className="text-sm text-white font-medium">{player.name}</span>
                  </div>
                  <span className="text-sm">{player.country}</span>
                  <span className={`text-right text-sm font-mono font-bold ${getRatingColor(player.rating)}`}>
                    {player.rating.toFixed(2)}
                  </span>
                </div>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default TeamsRanking;