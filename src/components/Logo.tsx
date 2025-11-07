export function Logo() {
  return (
    <div className="flex items-center gap-2 md:gap-3 select-none">
      {/* Professional icon */}
      <div className="relative">
        <svg
          width="44"
          height="44"
          viewBox="0 0 44 44"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="flex-shrink-0 drop-shadow-lg w-8 h-8 md:w-11 md:h-11"
        >
          <defs>
            {/* Gradient for main circle */}
            <linearGradient id="main-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FF1493" />
              <stop offset="50%" stopColor="#FF69B4" />
              <stop offset="100%" stopColor="#FFB6C1" />
            </linearGradient>
            
            {/* Gradient for camera */}
            <linearGradient id="camera-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FF1493" />
              <stop offset="100%" stopColor="#C71585" />
            </linearGradient>
            
            {/* Shadow filter */}
            <filter id="inner-shadow">
              <feGaussianBlur in="SourceAlpha" stdDeviation="1"/>
              <feOffset dx="0" dy="1" result="offsetblur"/>
              <feComponentTransfer>
                <feFuncA type="linear" slope="0.3"/>
              </feComponentTransfer>
              <feMerge>
                <feMergeNode/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
          </defs>
          
          {/* Background circle with gradient */}
          <circle 
            cx="22" 
            cy="22" 
            r="18" 
            fill="url(#main-gradient)"
            filter="url(#inner-shadow)"
          />
          
          {/* Highlight on top */}
          <ellipse
            cx="22"
            cy="14"
            rx="12"
            ry="8"
            fill="white"
            opacity="0.25"
          />
          
          {/* Left eye - wink arc */}
          <path
            d="M14 18.5C14 18.5 15.5 20 17.5 20C19.5 20 21 18.5 21 18.5"
            stroke="white"
            strokeWidth="2.8"
            strokeLinecap="round"
            strokeLinejoin="round"
            opacity="0.95"
          />
          
          {/* Right eye - open */}
          <circle cx="27.5" cy="19" r="2.8" fill="white" opacity="0.95" />
          <circle cx="27.5" cy="19" r="1.4" fill="#2D3748" />
          <circle cx="28" cy="18.5" r="0.6" fill="white" /> {/* eye shine */}
          
          {/* Smile */}
          <path
            d="M14 26.5C14 26.5 17 30.5 22 30.5C27 30.5 30 26.5 30 26.5"
            stroke="white"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
            opacity="0.95"
          />
          
          {/* Blush - left */}
          <ellipse
            cx="11"
            cy="24"
            rx="2.5"
            ry="2"
            fill="#FF1493"
            opacity="0.4"
          />
          
          {/* Blush - right */}
          <ellipse
            cx="33"
            cy="24"
            rx="2.5"
            ry="2"
            fill="#FF1493"
            opacity="0.4"
          />
          
          {/* Camera badge */}
          <g transform="translate(30, 6)">
            <rect
              x="0"
              y="0"
              width="11"
              height="8"
              rx="2"
              fill="url(#camera-gradient)"
              filter="url(#inner-shadow)"
            />
            <circle cx="5.5" cy="4" r="2.2" fill="white" opacity="0.9" />
            <circle cx="5.5" cy="4" r="1.3" fill="#2D3748" opacity="0.3" />
            <circle cx="9" cy="2" r="0.8" fill="#FF4444" /> {/* recording dot */}
          </g>
        </svg>
        
        {/* Sparkle decoration */}
        <div className="absolute -top-0.5 -left-0.5 w-2 h-2 bg-yellow-400 rounded-full opacity-80 animate-ping" style={{ animationDuration: '2s' }}></div>
        <div className="absolute -bottom-1 -right-1 w-1.5 h-1.5 bg-pink-300 rounded-full opacity-60"></div>
      </div>
      
      {/* Professional typography */}
      <div className="flex flex-col leading-tight">
        {/* Main brand text */}
        <div className="relative">
          <h1 
            className="m-0 p-0 relative text-xl md:text-3xl"
            style={{
              fontFamily: "'Outfit', 'Hiragino Kaku Gothic ProN', 'Noto Sans JP', sans-serif",
              fontWeight: 900,
              letterSpacing: '-0.03em',
              lineHeight: 0.95,
              background: 'linear-gradient(135deg, #E91E63 0%, #FF1493 30%, #FF69B4 60%, #FFB6C1 90%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              filter: 'drop-shadow(0 2px 6px rgba(233, 30, 99, 0.2))',
              textShadow: '0 0 1px rgba(255, 255, 255, 0.5)'
            }}
          >
            見せ合い
          </h1>
          
          {/* Decorative sparkle */}
          <svg 
            className="absolute -top-1 -right-3 md:-top-2 md:-right-4 w-3 h-3 md:w-4 md:h-4" 
            viewBox="0 0 24 24"
            style={{
              animation: 'sparkle 3s ease-in-out infinite',
              filter: 'drop-shadow(0 0 2px rgba(255, 193, 7, 0.6))'
            }}
          >
            <path 
              d="M12 0L13.5 8.5L22 10L13.5 11.5L12 20L10.5 11.5L2 10L10.5 8.5L12 0Z" 
              fill="#FFC107"
              opacity="1"
            />
          </svg>
        </div>
        
        {/* Subtitle */}
        <div className="flex items-center gap-1 md:gap-1.5 -mt-0.5 md:-mt-1">
          <span 
            className="text-sm md:text-lg"
            style={{
              fontFamily: "'Outfit', 'Hiragino Kaku Gothic ProN', 'Noto Sans JP', sans-serif",
              fontWeight: 700,
              letterSpacing: '0.01em',
              background: 'linear-gradient(135deg, #F06292 0%, #EC4899 50%, #E91E63 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}
          >
            ちゃんねる
          </span>
          <span className="text-base md:text-lg leading-none" style={{ filter: 'drop-shadow(0 1px 2px rgba(236, 72, 153, 0.3))' }}>💕</span>
        </div>
      </div>
      
      <style>{`
        @keyframes sparkle {
          0%, 100% { 
            opacity: 0.9;
            transform: scale(1) rotate(0deg);
          }
          50% { 
            opacity: 0.5;
            transform: scale(1.2) rotate(180deg);
          }
        }
      `}</style>
    </div>
  );
}
