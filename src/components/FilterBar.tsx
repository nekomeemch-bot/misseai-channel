import { useState } from "react";
import { SlidersHorizontal } from "lucide-react";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";

export function FilterBar() {
  const [selectedFilters, setSelectedFilters] = useState<string[]>([]);

  const filters = [
    { id: "online", label: "今すぐ繋がれる", color: "bg-green-500" },
    { id: "space", label: "スペース配信中", color: "bg-purple-500" },
    { id: "video", label: "動画あり", color: "bg-red-500" },
    { id: "new", label: "新人", color: "bg-pink-500" },
    { id: "popular", label: "人気", color: "bg-orange-500" },
  ];

  const tags = [
    "巨乳", "美乳", "爆乳", "ぱいぱん", "スレンダー",
    "オナニー", "潮吹き", "M女", "見せ合い",
  ];

  const toggleFilter = (id: string) => {
    setSelectedFilters((prev) =>
      prev.includes(id) ? prev.filter((f) => f !== id) : [...prev, id]
    );
  };

  return (
    <div className="bg-white border-b shadow-sm">
      <div className="container mx-auto px-4 py-4">
        {/* Main Filters */}
        <div className="flex items-center gap-2 mb-3 overflow-x-auto pb-2 scrollbar-hide">
          <SlidersHorizontal className="w-5 h-5 text-gray-500 flex-shrink-0" />
          {filters.map((filter) => (
            <Button
              key={filter.id}
              variant={selectedFilters.includes(filter.id) ? "default" : "outline"}
              size="sm"
              onClick={() => toggleFilter(filter.id)}
              className={`flex-shrink-0 ${
                selectedFilters.includes(filter.id)
                  ? `${filter.color} text-white hover:opacity-90`
                  : "hover:border-pink-300"
              }`}
            >
              {filter.label}
            </Button>
          ))}
        </div>

        {/* Tag Filters */}
        <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
          {tags.map((tag) => (
            <Badge
              key={tag}
              variant="outline"
              className="cursor-pointer hover:bg-pink-50 hover:border-pink-300 transition-colors flex-shrink-0"
            >
              #{tag}
            </Badge>
          ))}
        </div>

        {/* Active Filter Count */}
        {selectedFilters.length > 0 && (
          <div className="mt-3 flex items-center justify-between">
            <span className="text-sm text-gray-600">
              {selectedFilters.length}個のフィルターを適用中
            </span>
            <button
              onClick={() => setSelectedFilters([])}
              className="text-sm text-pink-600 hover:text-pink-700"
            >
              クリア
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
