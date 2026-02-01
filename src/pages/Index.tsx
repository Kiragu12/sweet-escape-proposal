import { useState, useEffect, useRef } from "react";
import FloatingHearts from "@/components/FloatingHearts";
import ValentineCard from "@/components/ValentineCard";
import MemePage from "@/components/MemePage";

const Index = () => {
  const [showMeme, setShowMeme] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);
  
  // Customize the name here
  const valentineName = "rolyne ";

  const handleYesClick = () => {
    setShowMeme(true);
  };

  const toggleMute = () => {
    if (audioRef.current) {
      audioRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  useEffect(() => {
    // Try to autoplay when component mounts
    if (audioRef.current) {
      audioRef.current.play().catch(error => {
        console.log("Autoplay prevented:", error);
      });
    }
  }, []);

  if (showMeme) {
    return <MemePage onContinue={() => {}} />;
  }

  return (
    <div 
      className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden p-4 md:p-8 bg-romantic-gradient"
    >
      {/* Background Music */}
      <audio ref={audioRef} loop>
        <source src="/background-music.mp3" type="audio/mpeg" />
      </audio>

      {/* Mute/Unmute Button */}
      <button
        onClick={toggleMute}
        className="fixed top-4 right-4 z-50 bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
        aria-label={isMuted ? "Unmute music" : "Mute music"}
      >
        {isMuted ? "🔇" : "🔊"}
      </button>

      <FloatingHearts />
      
      {/* Text and buttons */}
      <div className="relative z-10 w-full max-w-2xl px-4">
        <div className="bg-black/70 backdrop-blur-lg rounded-3xl p-6 md:p-8 shadow-2xl border border-white/20 mb-6">
          <p className="text-white text-lg md:text-2xl text-center mb-3 leading-relaxed font-semibold">
            So... I learned to code just for this moment 😅
          </p>
          <p className="text-white/90 text-base md:text-lg text-center mb-4 italic">
            (Okay fine, AI helped me a little)
          </p>
          <p className="text-white text-lg md:text-2xl text-center mb-4 leading-relaxed font-semibold">
            But the question is 100% real:
          </p>
          <h2 className="font-romantic text-4xl md:text-6xl text-white text-center drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)] leading-tight">
            Tabby, will you be my Valentine? 💖
          </h2>
        </div>
        <ValentineCard name={valentineName} onYesClick={handleYesClick} />
      </div>

      {/* Footer */}
      <div className="relative z-10 w-full text-center pb-4">
        <p className="text-white/60 text-sm">
          All rights reserved Nowel Kinja 2026
        </p>
      </div>
    </div>
  );
};

export default Index;
