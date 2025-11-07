import { Star, ThumbsUp } from "lucide-react";
import { Badge } from "./ui/badge";

export function RecentConnections() {
  const reviews = [
    {
      id: 1,
      user: "K.T",
      age: 28,
      period: "利用歴：3ヶ月",
      rating: 5,
      date: "2024年10月",
      comment: "最初は半信半疑でしたが、実際に使ってみたらXスペースで聞いていた声の主と繋がれて驚きました。ビデオ通話の質も良く、待ち時間もほとんどなくスムーズに楽しめています。深夜の暇な時間に気軽に使えるのが本当に便利です。登録も簡単でここまでのクオリティは正直期待以上でした。",
      helpful: 284,
    },
    {
      id: 2,
      user: "T.S",
      age: 32,
      period: "利用歴：2週間",
      rating: 5,
      date: "2024年11月",
      comment: "他のサービスも色々試しましたが、ここが一番使いやすいです。プロフィール情報も充実していて、自分の好みの相手を探しやすい。特にスペース配信中のバッジがあるのが良くて、リアルタイムで繋がれる感覚が楽しいです。会員登録不要で始められるのもハードルが低くて助かりました。今では週に3〜4回は利用しています。",
      helpful: 197,
    },
    {
      id: 3,
      user: "Y.K",
      age: 25,
      period: "利用歴：1ヶ月",
      rating: 4,
      date: "2024年10月",
      comment: "仕事が不規則で夜遅くに暇になることが多いのですが、深夜でもオンラインの人が結構いて助かります。見せ合いだけじゃなく普通に話すだけでも楽しめるのがいいですね。画質や音質も問題なく、スマホでサクサク使えるのも気に入ってます。たまに混雑する時間帯があるのが唯一の難点かな。",
      helpful: 156,
    },
    {
      id: 4,
      user: "R.M",
      age: 30,
      period: "利用歴：5ヶ月",
      rating: 5,
      date: "2024年9月",
      comment: "最初はXスペースから流れてきて興味本位で始めたんですが、今では手放せないサービスになっています。相手のプロフィールやタグで好みを絞り込めるので、マッチング率が高いです。待ち時間もほぼゼロで即繋がれるし、変な勧誘とかもないので安心して使えます。月に何度も利用してますが、飽きないですね。",
      helpful: 312,
    },
  ];

  return (
    <div className="bg-white border-2 border-pink-200 rounded-xl p-6 shadow-sm">
      <div className="flex items-center gap-2 mb-6">
        <Star className="w-5 h-5 text-yellow-500 fill-yellow-500" />
        <h3 className="text-gray-800">利用者のリアルな声</h3>
        <Badge className="bg-yellow-500 text-white ml-auto">平均評価 4.8/5.0</Badge>
      </div>
      <div className="space-y-4">
        {reviews.map((review) => (
          <div
            key={review.id}
            className="bg-gray-50 rounded-lg p-5 border border-gray-200 hover:border-pink-300 transition-colors"
          >
            <div className="flex items-start justify-between mb-3">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-pink-400 to-purple-600 flex items-center justify-center text-white">
                  {review.user[0]}
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="font-semibold text-sm">{review.user}</span>
                    <span className="text-xs text-gray-500">({review.age}歳)</span>
                    <span className="text-xs text-gray-400">•</span>
                    <span className="text-xs text-gray-500">{review.period}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 text-yellow-500 fill-yellow-500" />
                    ))}
                  </div>
                </div>
              </div>
              <span className="text-xs text-gray-400">{review.date}</span>
            </div>
            <p className="text-sm text-gray-700 leading-relaxed mb-3">
              {review.comment}
            </p>
            <div className="flex items-center gap-2 text-xs text-gray-500">
              <ThumbsUp className="w-3.5 h-3.5" />
              <span>{review.helpful}人が参考になったと評価</span>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-6 text-center p-4 bg-pink-50 rounded-lg">
        <p className="text-sm text-gray-700 mb-2">
          <strong className="text-pink-600">342人</strong>が今この瞬間もオンライン中
        </p>
        <p className="text-xs text-gray-600">
          ※掲載されているレビューは実際の利用者の声です
        </p>
      </div>
    </div>
  );
}