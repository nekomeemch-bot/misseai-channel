import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Badge } from "./ui/badge";

// Story circles component for displaying active users
import icon1 from "figma:asset/385e3bcb9b98346167f21ba20e9cce3473b57ae1.png";
import icon2 from "figma:asset/e7467dbb5f8c8ad7d60e7a29feeb7d825c61e5e4.png";
import icon3 from "figma:asset/7e2d77d695e6f02775e77f63992b89591e474d89.png";
import icon4 from "figma:asset/4b9b6d9b643e77a51e39c76b56863258e6993b69.png";
import icon5 from "figma:asset/5fc8263915ddc1fd1322ff84936e7bf1e0d5e295.png";
import icon6 from "figma:asset/e5a7400cd6f55b1b95d40c2e64b42b33eec73575.png";
import icon7 from "figma:asset/94c1681041a782637ae574e21fbda49b14586856.png";

interface Story {
  id: string;
  username: string;
  avatarUrl: string;
  isNew: boolean;
}

const stories: Story[] = [
  {
    id: "1",
    username: "コンカフェ嬢のまん凸",
    avatarUrl: icon1,
    isNew: true,
  },
  {
    id: "2",
    username: "みう",
    avatarUrl: icon3,
    isNew: true,
  },
  {
    id: "3",
    username: "れみ募集垢",
    avatarUrl: icon4,
    isNew: true,
  },
  {
    id: "4",
    username: "あい",
    avatarUrl: icon5,
    isNew: false,
  },
  {
    id: "5",
    username: "みく",
    avatarUrl: icon6,
    isNew: true,
  },
  {
    id: "6",
    username: "紗倉環奈♥🎀",
    avatarUrl: icon7,
    isNew: false,
  },
];

export function StoryCircles() {
  const handleStoryClick = () => {
    window.open('https://stella-nova.click/d/CNPu', '_blank');
  };

  return (
    <div className="bg-gradient-to-r from-purple-50 to-pink-50 py-4 border-b">
      <div className="container mx-auto px-4">
        <div className="flex items-center gap-2 mb-3">
          <Badge className="bg-purple-600 text-white">⏰ 24時間限定</Badge>
          <span className="text-sm text-gray-600">過激な動画を今だけ公開中</span>
        </div>
        <div className="flex gap-4 overflow-x-auto pb-2 scrollbar-hide">
          {stories.map((story) => (
            <button
              key={story.id}
              className="flex flex-col items-center gap-2 flex-shrink-0 group cursor-pointer"
              onClick={handleStoryClick}
            >
              <div className="relative transform transition-transform duration-200 group-hover:scale-110">
                <div
                  className={`w-20 h-20 rounded-full p-1 transition-all duration-200 ${
                    story.isNew
                      ? "bg-gradient-to-br from-pink-500 via-purple-500 to-pink-500 group-hover:from-pink-600 group-hover:via-purple-600 group-hover:to-pink-600"
                      : "bg-gray-300 group-hover:bg-gray-400"
                  }`}
                >
                  <img
                    src={story.avatarUrl}
                    alt={story.username}
                    className="w-full h-full rounded-full object-cover border-2 border-white"
                  />
                </div>
                {story.isNew && (
                  <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 bg-red-500 text-white text-xs px-2 py-0.5 rounded-full whitespace-nowrap shadow-lg group-hover:bg-red-600 transition-colors duration-200">
                    NEW
                  </div>
                )}
              </div>
              <span className="text-xs max-w-[80px] truncate group-hover:text-pink-600 transition-colors duration-200 group-hover:font-semibold">
                {story.username}
              </span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
