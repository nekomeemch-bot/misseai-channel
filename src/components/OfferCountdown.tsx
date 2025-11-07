import { useEffect, useState } from "react";
import { Zap, Users } from "lucide-react";
import { Badge } from "./ui/badge";

export function OfferCountdown() {
  const [slots, setSlots] = useState(12);

  useEffect(() => {
    const interval = setInterval(() => {
      setSlots((prev) => {
        const newValue = prev - 1;
        // 3まで減ったらリセット
        if (newValue < 3) {
          return Math.floor(Math.random() * 8) + 8; // 8-15の間でリセット
        }
        return newValue;
      });
    }, Math.random() * 15000 + 10000); // 10-25秒間隔

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-gradient-to-r from-green-500 via-emerald-500 to-teal-600 py-4 border-y-4 border-green-300 shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-center gap-3 md:gap-6">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center animate-bounce">
              <Zap className="w-6 h-6 text-emerald-600" />
            </div>
            <div className="text-white">
              <Badge className="bg-white text-emerald-600 mb-1">⚡ 今だけ</Badge>
              <p className="font-bold text-lg md:text-xl">待ち時間0分で即マッチング可能！</p>
            </div>
          </div>
          
          <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-lg px-4 py-2 border-2 border-white/40">
            <Users className="w-5 h-5 text-white animate-pulse" />
            <div className="text-white">
              <p className="text-xs">本日の残り枠</p>
              <p className="text-2xl font-bold tabular-nums">
                残り{slots}枠
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
