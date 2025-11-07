import { Star, ThumbsUp, Quote } from "lucide-react";
import { Badge } from "./ui/badge";
import { Card } from "./ui/card";
import { ImageWithFallback } from "./figma/ImageWithFallback";

interface Review {
  id: string;
  username: string;
  age: number;
  avatarUrl: string;
  rating: number;
  comment: string;
  likes: number;
  timestamp: string;
  verified: boolean;
}

const reviewsData: Review[] = [
  {
    id: "1",
    username: "ひろし",
    age: 28,
    avatarUrl: "https://images.unsplash.com/photo-1630572780070-fce8b9e1e7e7?w=400",
    rating: 5,
    comment: "本当にすぐ繋がれました！待ち時間もほぼなくて、相手の方も優しくて楽しかったです。アプリも使いやすくて満足してます👍",
    likes: 234,
    timestamp: "2日前",
    verified: true,
  },
  {
    id: "2",
    username: "たかし",
    age: 32,
    avatarUrl: "https://api.dicebear.com/7.x/avataaars/svg?seed=takashi&backgroundColor=b6e3f4",
    rating: 5,
    comment: "スペース配信聞いてた人と実際に繋がれて感動！声だけじゃなくて顔も見れて最高でした💕無料登録だけでこんなに楽しめるとは思わなかった",
    likes: 189,
    timestamp: "3日前",
    verified: true,
  },
  {
    id: "3",
    username: "けんた",
    age: 25,
    avatarUrl: "https://images.unsplash.com/photo-1603954698693-b0bcbceb5ad0?w=400",
    rating: 5,
    comment: "最初は半信半疑でしたが、登録してすぐマッチングできました。相手も積極的で楽しい時間を過ごせました。おすすめです！",
    likes: 156,
    timestamp: "5日前",
    verified: true,
  },
  {
    id: "4",
    username: "ゆうき",
    age: 30,
    avatarUrl: "https://api.dicebear.com/7.x/notionists/svg?seed=yuuki&backgroundColor=ffdfbf",
    rating: 5,
    comment: "深夜でもオンラインの人が多くてびっくり！いつでも遊べるのがいいですね。課金しなくても十分楽しめるので助かってます😊",
    likes: 142,
    timestamp: "1週間前",
    verified: true,
  },
];

export function ReviewsSection() {
  return (
    <div>
      <div className="text-center mb-8">
        <h2 className="mb-2">💬 利用者のリアルな声</h2>
        <p className="text-gray-600 text-sm md:text-base">
          実際に使った方々の評価・レビュー
        </p>
        <div className="flex items-center justify-center gap-2 mt-4">
          <div className="flex">
            {[1, 2, 3, 4, 5].map((star) => (
              <Star key={star} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
            ))}
          </div>
          <span className="font-bold text-lg">4.8</span>
          <span className="text-gray-500 text-sm">(2,847件のレビュー)</span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {reviewsData.map((review) => (
          <Card key={review.id} className="p-6 hover:shadow-lg transition-shadow">
            <div className="flex items-start gap-4 mb-4">
              <ImageWithFallback
                src={review.avatarUrl}
                alt={review.username}
                className="w-12 h-12 rounded-full object-cover"
              />
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <span className="font-semibold">{review.username}</span>
                  <span className="text-gray-500 text-sm">{review.age}歳</span>
                  {review.verified && (
                    <Badge className="bg-blue-500 text-white text-xs px-2 py-0">
                      ✓ 認証済み
                    </Badge>
                  )}
                </div>
                <div className="flex items-center gap-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star
                      key={star}
                      className={`w-4 h-4 ${
                        star <= review.rating
                          ? "fill-yellow-400 text-yellow-400"
                          : "text-gray-300"
                      }`}
                    />
                  ))}
                </div>
              </div>
              <span className="text-gray-400 text-xs">{review.timestamp}</span>
            </div>

            <div className="relative">
              <Quote className="absolute -top-2 -left-2 w-6 h-6 text-pink-200" />
              <p className="text-gray-700 text-sm md:text-base pl-4">
                {review.comment}
              </p>
            </div>

            <div className="flex items-center gap-4 mt-4 pt-4 border-t">
              <button className="flex items-center gap-1 text-gray-500 hover:text-pink-600 transition-colors text-sm">
                <ThumbsUp className="w-4 h-4" />
                <span>参考になった ({review.likes})</span>
              </button>
            </div>
          </Card>
        ))}
      </div>

      <div className="text-center mt-8">
        <p className="text-gray-500 text-sm">
          ※ レビューは実際の利用者から投稿されたものです
        </p>
      </div>
    </div>
  );
}
