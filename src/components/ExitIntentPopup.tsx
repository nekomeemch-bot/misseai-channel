import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, Gift, Zap } from "lucide-react";
import { Button } from "./ui/button";

export function ExitIntentPopup() {
  const [show, setShow] = useState(false);
  const [hasShown, setHasShown] = useState(false);

  useEffect(() => {
    const handleMouseLeave = (e: MouseEvent) => {
      // マウスが画面上部に移動した時（離脱の兆候）
      if (e.clientY <= 0 && !hasShown) {
        setShow(true);
        setHasShown(true);
      }
    };

    document.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [hasShown]);

  return (
    <AnimatePresence>
      {show && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 z-50 backdrop-blur-sm"
            onClick={() => setShow(false)}
          />
          
          {/* Popup */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 50 }}
            className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 w-full max-w-md"
          >
            <div className="bg-white rounded-2xl shadow-2xl p-8 mx-4 relative">
              <button
                onClick={() => setShow(false)}
                className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
              >
                <X className="w-6 h-6" />
              </button>

              <div className="text-center">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-pink-500 to-purple-600 rounded-full mb-4 animate-pulse">
                  <Gift className="w-10 h-10 text-white" />
                </div>
                
                <h3 className="mb-3 text-pink-600">ちょっと待って！</h3>
                
                <p className="text-gray-700 mb-6 leading-relaxed">
                  今なら<strong className="text-pink-600 text-xl">待ち時間0分で即マッチング</strong>できます！<br />
                  <span className="text-sm text-gray-500">このチャンスを逃さないで</span>
                </p>

                <div className="bg-gradient-to-r from-pink-50 to-purple-50 rounded-lg p-4 mb-6">
                  <div className="flex items-center justify-center gap-2 text-sm text-gray-600 mb-2">
                    <Zap className="w-4 h-4 text-yellow-500" />
                    <span>今だけの特別待遇</span>
                  </div>
                  <ul className="text-left text-sm space-y-2 text-gray-700">
                    <li>✓ 待ち時間なし即マッチング</li>
                    <li>✓ 342人が今すぐ対応可能</li>
                    <li>✓ スペース配信者と優先接続</li>
                  </ul>
                </div>

                <Button 
                  className="w-full bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white mb-3 py-6 text-lg shadow-xl"
                  onClick={() => window.open('https://stella-nova.click/d/CNPu', '_blank')}
                >
                  今すぐ始める
                </Button>
                
                <button
                  onClick={() => setShow(false)}
                  className="text-sm text-gray-400 hover:text-gray-600 transition-colors"
                >
                  あとで確認する
                </button>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}