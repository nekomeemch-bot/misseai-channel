import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Card } from "./ui/card";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Play, Clock, Eye, MessageCircle, Video, Users, Lock, Smartphone, Crown, Mic, Timer, Heart } from "lucide-react";
import { useState, useEffect, useMemo } from "react";

interface PostCardProps {
  id: string;
  username: string;
  age: number;
  gender: string;
  platform: string;
  content: string;
  tags: string[];
  timestamp: string;
  isOnline?: boolean;
  avatarUrl?: string;
  hasVideo?: boolean;
  isSpaceLive?: boolean;
  viewers?: number;
  timeLeft?: number;
  likes?: number;
  comments?: number;
  isVIP?: boolean;
  blurLevel?: number; // 0: 通常, 1: 少しぼかし, 2: 完全ぼかし
  isAppExclusive?: boolean;
  previewGif?: string; // GIF背景用
}

export function PostCard({
  username,
  age,
  gender,
  platform,
  content,
  tags,
  timestamp,
  isOnline = true,
  avatarUrl,
  hasVideo = true,
  isSpaceLive = false,
  viewers = 0,
  timeLeft,
  likes,
  comments,
  isVIP = Math.random() > 0.6,
  blurLevel = 0,
  isAppExclusive = false,
  previewGif,
}: PostCardProps) {
  // Initialize likes and comments with fixed values using useMemo
  const fixedLikes = useMemo(() => likes ?? Math.floor(Math.random() * 2000) + 500, [likes]);
  const fixedComments = useMemo(() => comments ?? Math.floor(Math.random() * 500) + 100, [comments]);
  
  const [countdown, setCountdown] = useState(timeLeft || Math.floor(Math.random() * 20) + 5);
  const [isHovered, setIsHovered] = useState(false);
  const affiliateLink = "https://stella-nova.click/d/CNPu";
  
  const handleCardClick = () => {
    window.open(affiliateLink, '_blank');
  };
  
  // blurLevelに基づいてぼかしの状態を決定
  const getBlurClass = () => {
    if (blurLevel === 0) return "";
    if (blurLevel === 1) return "blur-[3px]";
    return "blur-md";
  };
  
  const getOverlayOpacity = () => {
    if (blurLevel === 0) return "";
    if (blurLevel === 1) return "bg-black/30";
    return "bg-black/50";
  };

  useEffect(() => {
    if (countdown <= 0) return;
    
    const timer = setInterval(() => {
      setCountdown((prev) => Math.max(0, prev - 1));
    }, 60000); // 1分ごと

    return () => clearInterval(timer);
  }, [countdown]);

  return (
    <Card className="p-0 hover:shadow-lg transition-all hover:border-pink-300 overflow-hidden group cursor-pointer" onClick={handleCardClick} onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
      {/* Video Preview Area */}
      <div className="relative aspect-video bg-gradient-to-br from-pink-100 to-purple-100 overflow-hidden">
        <ImageWithFallback 
          src={avatarUrl || ""} 
          alt={username}
          className={`w-full h-full object-cover group-hover:scale-105 transition-transform duration-300 ${getBlurClass()}`}
        />
        
        {/* Video Effect Overlay - 動画配信っぽいノイズとスキャンライン */}
        {blurLevel > 0 && (
          <>
            {/* スキャンライン効果 */}
            <div 
              className="absolute inset-0 pointer-events-none opacity-10"
              style={{
                backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,.3) 2px, rgba(0,0,0,.3) 4px)',
                animation: 'scan 8s linear infinite'
              }}
            />
            
            {/* 微細なノイズ効果 */}
            <div 
              className="absolute inset-0 pointer-events-none opacity-5"
              style={{
                backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 400 400\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'4\' /%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\' /%3E%3C/svg%3E")',
                animation: 'noise 0.2s infinite'
              }}
            />
          </>
        )}
        
        {/* Blur Overlay - レベル2（完全ぼかし） */}
        {blurLevel === 2 && (
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm">
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <div className="w-20 h-20 rounded-full bg-white/95 flex items-center justify-center mb-3 shadow-2xl">
                <Lock className="w-10 h-10 text-pink-600" />
              </div>
              <Badge className="bg-gradient-to-r from-pink-600 to-purple-600 text-white px-5 py-2 text-sm shadow-lg mb-2">
                <Smartphone className="w-4 h-4 mr-1 inline" />
                アプリ限定コンテンツ
              </Badge>
              <p className="text-white text-xs">無料登録で今すぐ見れます</p>
            </div>
          </div>
        )}
        
        {/* Blur Overlay - レベル1（少しぼかし） */}
        {blurLevel === 1 && (
          <div className={`absolute inset-0 ${getOverlayOpacity()}`}>
            {previewGif && (
              <div 
                className="absolute inset-0 backdrop-blur-[2px]"
                style={{
                  backgroundImage: `url(${previewGif})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  filter: 'blur(4px)',
                }}
              />
            )}
            {/* Playアイコンとバッジは常に表示 */}
            <div className="absolute inset-0 backdrop-blur-[1px] flex flex-col items-center justify-center" style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}>
              <div className="w-16 h-16 rounded-full bg-white/90 flex items-center justify-center mb-3 shadow-xl">
                <Play className="w-8 h-8 text-pink-600 ml-1" />
              </div>
              <Badge className="bg-pink-600 text-white px-4 py-1 text-sm">
                🔞 続きを見る
              </Badge>
            </div>
          </div>
        )}
        
        {/* Normal Video Overlay - レベル0（通常） */}
        {blurLevel === 0 && (
          <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-16 h-16 rounded-full bg-white/90 flex items-center justify-center group-hover:scale-110 transition-transform shadow-xl">
                <Play className="w-8 h-8 text-pink-600 ml-1" />
              </div>
            </div>
          </div>
        )}
        
        {/* Top Badges */}
        <div className="absolute top-2 left-2 flex flex-col gap-1.5">
          {isAppExclusive && (
            <Badge className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white flex items-center gap-1 px-2 py-0.5 text-xs shadow-lg">
              <Smartphone className="w-3 h-3" />
              アプリ限定
            </Badge>
          )}
          {isVIP && (
            <Badge className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white flex items-center gap-1 px-2 py-0.5 text-xs shadow-lg">
              <Crown className="w-3 h-3" />
              VIP会員
            </Badge>
          )}
          {hasVideo && blurLevel === 0 && (
            <Badge className="bg-red-600 hover:bg-red-700 text-white flex items-center gap-1 px-2 py-0.5 text-xs shadow-lg">
              <div className="w-1.5 h-1.5 bg-white rounded-full animate-pulse"></div>
              LIVE配信中
            </Badge>
          )}
          {isSpaceLive && (
            <Badge className="bg-purple-600 hover:bg-purple-700 text-white flex items-center gap-1 px-2 py-0.5 text-xs shadow-lg">
              <Mic className="w-3 h-3" />
              スペース配信中
            </Badge>
          )}
        </div>

        {/* Viewers Count */}
        {viewers > 0 && (
          <div className="absolute top-2 right-2 bg-black/60 text-white px-2 py-1 rounded-full flex items-center gap-1 text-xs">
            <Eye className="w-3 h-3" />
            {viewers}人が視聴中
          </div>
        )}

        {/* Countdown Timer */}
        {countdown > 0 && (
          <div className="absolute bottom-2 right-2 bg-red-600 text-white px-2 py-1 rounded flex items-center gap-1 text-xs shadow-lg animate-pulse">
            <Timer className="w-3 h-3" />
            あと{countdown}分でオフライン
          </div>
        )}

        {/* Online Status */}
        {isOnline && (
          <div className="absolute bottom-2 left-2 bg-green-500 text-white px-2 py-1 rounded-full text-xs shadow-lg flex items-center gap-1">
            <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
            オンライン
          </div>
        )}
      </div>

      {/* Card Content */}
      <div className="p-4">
        <div className="flex items-start justify-between mb-3">
          <div className="flex items-center gap-2">
            <div className="relative">
              <ImageWithFallback 
                src={avatarUrl || ""} 
                alt={username}
                className="w-10 h-10 rounded-full object-cover border-2 border-pink-200"
              />
              {isOnline && (
                <div className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-green-500 rounded-full border-2 border-white"></div>
              )}
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="font-semibold">{username}</span>
                <span className="text-gray-500 text-xs">
                  {age}歳
                </span>
              </div>
              <div className="flex items-center gap-1 text-gray-400 text-xs">
                <Clock className="w-3 h-3" />
                <span>{timestamp}</span>
              </div>
            </div>
          </div>
        </div>

        <p className="text-gray-700 text-sm mb-3 line-clamp-2">{content}</p>
        
        <div className="flex flex-wrap gap-1.5 mb-3">
          {tags.map((tag) => (
            <Badge key={tag} variant="outline" className="text-xs px-2 py-0 border-pink-300 text-pink-700 hover:bg-pink-50">
              #{tag}
            </Badge>
          ))}
        </div>

        {/* Likes and Comments */}
        <div className="flex items-center gap-4 mb-3 text-sm text-gray-600">
          <div className="flex items-center gap-1">
            <Heart className="w-4 h-4" />
            <span>{fixedLikes >= 1000 ? `${(fixedLikes / 1000).toFixed(1)}K` : fixedLikes}</span>
          </div>
          <div className="flex items-center gap-1">
            <MessageCircle className="w-4 h-4" />
            <span>{fixedComments}件</span>
          </div>
        </div>
        
        {blurLevel === 2 ? (
          <Button 
            className="w-full bg-gradient-to-r from-blue-500 to-cyan-600 hover:from-blue-600 hover:to-cyan-700 shadow-lg"
            onClick={(e) => {
              e.stopPropagation();
              window.open(affiliateLink, '_blank');
            }}
          >
            <Smartphone className="w-4 h-4 mr-2" />
            アプリで見る（無料）
          </Button>
        ) : (
          <Button 
            className="w-full bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 shadow-lg"
            onClick={(e) => {
              e.stopPropagation();
              window.open(affiliateLink, '_blank');
            }}
          >
            <Video className="w-4 h-4 mr-2" />
            今すぐ繋がる
          </Button>
        )}
        
        {countdown > 0 && countdown <= 10 && (
          <p className="text-center text-xs text-red-600 mt-2 font-semibold animate-pulse">
            ⚠️ まもなくオフラインになります！
          </p>
        )}
      </div>
    </Card>
  );
}