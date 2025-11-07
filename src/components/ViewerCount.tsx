import { Eye } from "lucide-react";
import { useEffect, useState } from "react";

export function ViewerCount() {
  const [count, setCount] = useState(342);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prev) => {
        const change = Math.floor(Math.random() * 11) - 5; // -5 to +5
        const newCount = prev + change;
        return Math.max(280, Math.min(450, newCount)); // Keep between 280-450
      });
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-red-500 text-white px-4 py-2 rounded-full flex items-center gap-2 shadow-lg animate-pulse">
      <Eye className="w-4 h-4" />
      <span className="text-sm">
        現在 <strong>{count}</strong> 人が見ています
      </span>
    </div>
  );
}
