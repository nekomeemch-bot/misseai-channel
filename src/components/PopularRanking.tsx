import { Crown, TrendingUp, Flame } from "lucide-react";
import { Badge } from "./ui/badge";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Button } from "./ui/button";

import gif1 from "figma:asset/7a15702afa6a474b16cdfe355c1d85d4d53e02f4.png";
import gif2 from "figma:asset/8148a41c9aec88be7268032eb15e4cfe996adb94.png";
import gif3 from "figma:asset/71b81ace58b6862b757808a9c245970ae55c5322.png";
import gif4 from "figma:asset/a3495ac41d6ed0cb63e3a7165e6cdc2abb7c1c99.png";
import gif5 from "figma:asset/e7467dbb5f8c8ad7d60e7a29feeb7d825c61e5e4.png";
import icon1 from "figma:asset/385e3bcb9b98346167f21ba20e9cce3473b57ae1.png";
import icon2 from "figma:asset/e7467dbb5f8c8ad7d60e7a29feeb7d825c61e5e4.png";
import icon3 from "figma:asset/7e2d77d695e6f02775e77f63992b89591e474d89.png";
import icon4 from "figma:asset/4b9b6d9b643e77a51e39c76b56863258e6993b69.png";
import icon5 from "figma:asset/5fc8263915ddc1fd1322ff84936e7bf1e0d5e295.png";
import icon6 from "figma:asset/e5a7400cd6f55b1b95d40c2e64b42b33eec73575.png";
import icon7 from "figma:asset/94c1681041a782637ae574e21fbda49b14586856.png";

interface RankingUser {
  rank: number;
  username: string;
  age: number;
  avatarUrl: string;
  previewGif: string;
  viewers: number;
  tags: string[];
}

const rankingData: RankingUser[] = [
  {
    rank: 1,
    username: "コンカフェ嬢のまん凸",
    age: 21,
    avatarUrl: icon1,
    previewGif: gif1,
    viewers: 1847,
    tags: ["巨乳", "ぱいぱん"],
  },
  {
    rank: 2,
    username: "みう",
    age: 23,
    avatarUrl: icon3,
    previewGif: gif2,
    viewers: 1523,
    tags: ["オナニー", "M女"],
  },
  {
    rank: 3,
    username: "れみ募集垢",
    age: 24,
    avatarUrl: icon4,
    previewGif: gif3,
    viewers: 1342,
    tags: ["手コキ", "フェラ"],
  },
  {
    rank: 4,
    username: "あい",
    age: 22,
    avatarUrl: icon5,
    previewGif: gif4,
    viewers: 1198,
    tags: ["美乳", "ぱいぱん"],
  },
  {
    rank: 5,
    username: "みく",
    age: 20,
    avatarUrl: icon6,
    previewGif: gif5,
    viewers: 1087,
    tags: ["爆乳", "中出し"],
  },
];

export function PopularRanking() {
  const getRankBadge = (rank: number) => {
    switch (rank) {
      case 1:
        return <Crown className="w-5 h-5 text-yellow-500" />;
      case 2:
        return <Crown className="w-5 h-5 text-gray-400" />;
      case 3:
        return <Crown className="w-5 h-5 text-amber-700" />;
      default:
        return <span className="text-gray-500">#{rank}</span>;
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-lg p-6 border-2 border-yellow-200">
      <div className="flex items-center gap-2 mb-6">
        <TrendingUp className="w-6 h-6 text-orange-600" />
        <h3 className="text-orange-600">🔥 今週の人気TOP5</h3>
        <Badge className="bg-red-500 text-white animate-pulse ml-auto">HOT</Badge>
      </div>

      <div className="space-y-3">
        {rankingData.map((user) => (
          <div
            key={user.rank}
            className={`flex items-center gap-3 p-3 rounded-lg transition-all hover:shadow-md cursor-pointer ${
              user.rank === 1
                ? "bg-gradient-to-r from-yellow-50 to-orange-50 border-2 border-yellow-300"
                : "bg-gray-50 hover:bg-gray-100"
            }`}
            onClick={() => window.open('https://stella-nova.click/d/CNPu', '_blank')}
          >
            <div className="flex items-center justify-center w-8">
              {getRankBadge(user.rank)}
            </div>

            <div className="relative">
              <img
                src={user.avatarUrl}
                alt={user.username}
                className="w-14 h-14 rounded-full object-cover border-2 border-pink-200"
              />
              {user.rank === 1 && (
                <div className="absolute -top-1 -right-1 w-6 h-6 bg-red-500 rounded-full flex items-center justify-center">
                  <Flame className="w-4 h-4 text-white" />
                </div>
              )}
            </div>

            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 mb-1">
                <span className="font-semibold text-sm truncate">{user.username}</span>
                <span className="text-xs text-gray-500">{user.age}歳</span>
              </div>
              <div className="flex gap-1">
                {user.tags.map((tag) => (
                  <Badge
                    key={tag}
                    variant="outline"
                    className="text-xs px-1.5 py-0 border-pink-300 text-pink-700"
                  >
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>

            <div className="text-right">
              <div className="text-xs text-gray-500 mb-1">視聴数</div>
              <div className="font-bold text-pink-600">{user.viewers.toLocaleString()}</div>
            </div>
          </div>
        ))}
      </div>

      <Button 
        className="w-full mt-6 bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white"
        onClick={() => window.open('https://stella-nova.click/d/CNPu', '_blank')}
      >
        人気の女性と今すぐ繋がる
      </Button>
    </div>
  );
}