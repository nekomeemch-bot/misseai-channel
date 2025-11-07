import { Logo } from "./Logo";
import { Badge } from "./ui/badge";
import { Sparkles } from "lucide-react";

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b bg-white/95 backdrop-blur-sm shadow-sm">
      <div className="container mx-auto px-4 py-3 md:py-4 flex items-center justify-between">
        <Logo />
        <div className="flex items-center gap-2 md:gap-3">
          <Badge className="bg-gradient-to-r from-pink-500 to-purple-600 text-white border-0 shadow-lg animate-pulse hidden sm:flex items-center gap-1">
            <Sparkles className="w-3 h-3" />
            <span className="text-xs">342人オンライン</span>
          </Badge>
          <Badge className="bg-green-500 text-white border-0 shadow-md flex items-center gap-1">
            <div className="w-1.5 h-1.5 bg-white rounded-full animate-pulse"></div>
            <span className="text-xs">LIVE配信中</span>
          </Badge>
        </div>
      </div>
    </header>
  );
}
