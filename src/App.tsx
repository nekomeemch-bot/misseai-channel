import { Badge } from "./components/ui/badge";
import { Button } from "./components/ui/button";
import { Header } from "./components/Header";
import { ExitIntentPopup } from "./components/ExitIntentPopup";
import { OfferCountdown } from "./components/OfferCountdown";
import { StoryCircles } from "./components/StoryCircles";
import { FilterBar } from "./components/FilterBar";
import { PostCard } from "./components/PostCard";
import { PopularRanking } from "./components/PopularRanking";
import { ReviewsSection } from "./components/ReviewsSection";
import { Footer } from "./components/Footer";
import { ViewerCount } from "./components/ViewerCount";
import { Flame, AlertCircle, TrendingUp, Zap, Smartphone, Download } from "lucide-react";

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

const samplePosts = [
  {
    id: "1",
    username: "コンカフェ嬢のまん凸",
    age: 21,
    gender: "女性",
    platform: "ライブチャット",
    content: "今日も配信するよ〜💕誰か一緒に楽しみたい人いませんか？😘過激なこともOKです♪",
    tags: ["巨乳", "ぱいぱん", "オナニー"],
    timestamp: "3分前",
    isOnline: true,
    avatarUrl: icon1,
    hasVideo: true,
    isSpaceLive: true,
    viewers: 423,
    timeLeft: 12,
    blurLevel: 1,
    previewGif: gif1,
  },
  {
    id: "2",
    username: "みう",
    age: 23,
    gender: "女性",
    platform: "ライブチャット",
    content: "寂しいから誰か構ってください🥺配信中だよ！来てくれたら嬉しいな💗",
    tags: ["オナニー", "潮吹き", "M女"],
    timestamp: "5分前",
    isOnline: true,
    avatarUrl: icon3,
    hasVideo: true,
    isSpaceLive: false,
    viewers: 42,
    timeLeft: 8,
    blurLevel: 1,
    previewGif: gif2,
  },
  {
    id: "3",
    username: "れみ募集垢",
    age: 24,
    gender: "女性",
    platform: "ライブチャット",
    content: "今ならすぐ繋がれます！見せ合いとかしたい♪恥ずかしがり屋さんも大歓迎😊",
    tags: ["手コキ", "フェラ", "生ハメ"],
    timestamp: "8分前",
    isOnline: true,
    avatarUrl: icon4,
    hasVideo: true,
    isSpaceLive: true,
    viewers: 35,
    timeLeft: 22,
    blurLevel: 1,
    previewGif: gif3,
  },
  {
    id: "4",
    username: "あい",
    age: 22,
    gender: "女性",
    platform: "ライブチャット",
    content: "暇してるから話し相手募集〜！お互い楽しめたらいいな💕気軽に遊びにきてね",
    tags: ["美乳", "ぱいぱん", "即会い"],
    timestamp: "12分前",
    isOnline: true,
    avatarUrl: icon5,
    hasVideo: true,
    isSpaceLive: false,
    viewers: 19,
    timeLeft: 18,
    blurLevel: 1,
    previewGif: gif4,
  },
  {
    id: "5",
    username: "みく",
    age: 20,
    gender: "女性",
    platform: "ライブチャット",
    content: "深夜なのに寝れない…誰か一緒に楽しいことしませんか？😘ビデオ通話できるよ♪",
    tags: ["爆乳", "中出し", "3P"],
    timestamp: "18分前",
    isOnline: true,
    avatarUrl: icon6,
    hasVideo: true,
    isSpaceLive: true,
    viewers: 51,
    timeLeft: 5,
    blurLevel: 1,
    previewGif: gif5,
  },
  {
    id: "6",
    username: "紗倉環奈♥🎀",
    age: 20,
    gender: "女性",
    platform: "ライブチャット",
    content: "今スペース配信中だよ〜♪配信しながら誰か遊んでくれる人いないかな？💕リスナーさんと1対1で繋がりたいから気軽に来てね😘スペース聞いててくれた人優先で繋ぐよ〜🎀",
    tags: ["スレンダー", "ぱいぱん", "ライブ"],
    timestamp: "25分前",
    isOnline: true,
    avatarUrl: icon7,
    hasVideo: true,
    isSpaceLive: true,
    viewers: 23,
    timeLeft: 12,
    blurLevel: 2,
    isAppExclusive: true,
  },
];

export default function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <ExitIntentPopup />

      <OfferCountdown />

      <section className="bg-gradient-to-r from-red-500 via-pink-500 to-purple-600 py-2.5 md:py-3">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center gap-2 md:gap-3 text-white text-xs md:text-sm">
            <Flame className="w-4 h-4 md:w-5 md:h-5 animate-pulse" />
            <span className="font-semibold">今だけ限定！待ち時間0分で即繋がれる</span>
            <Flame className="w-4 h-4 md:w-5 md:h-5 animate-pulse" />
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-b from-pink-50/50 to-white border-b py-8 md:py-10">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full border border-pink-200 shadow-sm mb-4">
              <AlertCircle className="h-4 w-4 text-pink-600" />
              <span className="text-sm text-gray-700">
                <strong className="text-pink-600">X（Twitter）スペース配信者</strong>と今すぐ繋がれる
              </span>
            </div>
            <p className="text-gray-600 text-sm md:text-base">
              オンラインでビデオ通話やチャットを楽しみたい方の募集掲示板<br className="hidden md:block" />
              全員オンラインで待機中・即マッチング可能
            </p>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-r from-pink-500 via-purple-500 to-purple-600 py-3 md:py-4">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center gap-3 md:gap-8 text-white text-xs md:text-sm flex-wrap">
            <div className="flex items-center gap-1.5 md:gap-2 bg-white/10 backdrop-blur-sm px-3 py-1.5 rounded-full">
              <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
              <span>オンライン: <strong className="font-bold">342人</strong></span>
            </div>
            <div className="flex items-center gap-1.5 md:gap-2 bg-white/10 backdrop-blur-sm px-3 py-1.5 rounded-full">
              <TrendingUp className="w-3.5 h-3.5 md:w-4 md:h-4" />
              <span>新規投稿: <strong className="font-bold">1,248件</strong></span>
            </div>
            <div className="flex items-center gap-1.5 md:gap-2 bg-white/10 backdrop-blur-sm px-3 py-1.5 rounded-full">
              <Zap className="w-3.5 h-3.5 md:w-4 md:h-4" />
              <span>平均: <strong className="font-bold">2分</strong>でマッチ</span>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-b from-purple-50 to-white border-b border-purple-100 py-5 md:py-6">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-purple-500 text-white px-4 py-2 rounded-full shadow-lg mb-3">
              <span className="text-lg">🎙️</span>
              <span className="text-sm font-semibold">Xスペース配信者限定</span>
            </div>
            <p className="text-sm md:text-base text-gray-600">
              スペースで聞いたあの声の主と今すぐ繋がれる<br className="hidden sm:block" />
              <strong className="text-purple-600">「スペース配信中」バッジ</strong>の相手を探そう
            </p>
          </div>
        </div>
      </section>

      <StoryCircles />

      <FilterBar />

      <section id="posts" className="container mx-auto px-4 py-8 md:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8">
          <div className="lg:col-span-2">
            <div className="mb-6 md:mb-8">
              <div className="flex items-center justify-between flex-wrap gap-3 md:gap-4 mb-4">
                <div className="flex items-center gap-2 md:gap-3">
                  <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
                  <h2 className="flex items-center gap-2 m-0">
                    オンライン中の募集
                  </h2>
                  <Badge className="bg-red-500 text-white animate-pulse border-0 shadow-lg">
                    LIVE
                  </Badge>
                </div>
                <ViewerCount />
              </div>
              <p className="text-gray-500 text-xs md:text-sm">今すぐ繋がれる相手がここに・待ち時間ほぼ0分</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {samplePosts.map((post) => (
                <PostCard key={post.id} {...post} />
              ))}
            </div>
            <div className="text-center mt-8 md:mt-10">
              <div className="relative bg-gradient-to-br from-pink-50 via-purple-50 to-pink-50 border border-pink-200 rounded-2xl p-6 md:p-10 overflow-hidden shadow-xl">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-pink-300/20 to-purple-300/20 rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-br from-purple-300/20 to-pink-300/20 rounded-full blur-3xl"></div>
                
                <div className="relative z-10">
                  <div className="flex items-center justify-center gap-2 mb-4">
                    <Smartphone className="w-6 h-6 md:w-7 md:h-7 text-pink-600" />
                    <h3 className="text-pink-600 m-0">残り336人はアプリ限定！</h3>
                  </div>
                  <p className="text-sm md:text-base text-gray-600 mb-6 max-w-md mx-auto">
                    今すぐ繋がれる相手がもっといます<br className="hidden sm:block" />
                    無料登録で全員とマッチング可能
                  </p>
                  <Button 
                    size="lg" 
                    className="bg-gradient-to-r from-pink-500 via-pink-600 to-purple-600 hover:from-pink-600 hover:via-purple-600 hover:to-purple-700 text-white shadow-2xl px-8 md:px-12 py-6 md:py-7 text-base md:text-lg"
                    onClick={() => window.open('https://stella-nova.click/d/CNPu', '_blank')}
                  >
                    <Download className="w-5 h-5 md:w-6 md:h-6 mr-2" />
                    無料登録して全員を見る
                  </Button>
                  <p className="text-xs text-gray-500 mt-4">
                    ※無料ダウンロードで今すぐ利用開始
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-1">
            <div className="sticky top-24">
              <PopularRanking />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <ReviewsSection />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}