import { useState, useEffect, useRef } from "react";
import FloatingHearts from "@/components/FloatingHearts";
import ValentineCard from "@/components/ValentineCard";
import MemePage from "@/components/MemePage";
import MemoriesPage from "@/components/MemoriesPage";

const Index = () => {
  const [showMeme, setShowMeme] = useState(false);
  const [showMemories, setShowMemories] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  // State to track if user has interacted (required for audio autoplay)
  const [hasStarted, setHasStarted] = useState(false);

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

  // Function to start the experience
  const startExperience = () => {
    setHasStarted(true);
    if (audioRef.current) {
      audioRef.current.currentTime = 46;
      audioRef.current.play().catch(e => console.error("Audio play failed:", e));
    }
  };

  useEffect(() => {
    // Only try to autoplay if started
    if (hasStarted && audioRef.current) {
      audioRef.current.play().catch(error => {
        console.log("Autoplay prevented:", error);
      });
    }
  }, [hasStarted]);

  // Render the current page content
  const renderContent = () => {
    if (!hasStarted) {
      return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-black/90 z-[100] fixed inset-0">
          <button
            onClick={startExperience}
            className="bg-rose-600 text-white px-8 py-4 rounded-full text-2xl font-bold animate-bounce shadow-[0_0_30px_rgba(225,29,72,0.6)] hover:bg-rose-500 hover:scale-110 transition-all font-romantic"
          >
            Click to Open 💌
          </button>
        </div>
      );
    }

    if (showMemories) {
      return <MemoriesPage />;
    }

    if (showMeme) {
      return <MemePage onContinue={() => setShowMemories(true)} />;
    }

    return (
      <div className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden p-4 md:p-8 bg-romantic-gradient">
        <FloatingHearts />

        {/* Text and buttons */}
        <div className="relative z-10 w-full max-w-5xl px-4">
          <div className="bg-black/70 backdrop-blur-lg rounded-3xl p-6 md:p-8 shadow-2xl border border-white/20 mb-6">
            <h2 className="font-romantic text-6xl md:text-8xl lg:text-9xl text-white text-center drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)] leading-tight">
              Tabby, will you be my Valentine? 💖
            </h2>

            <img
              src="/snoopy-roses-new.png"
              alt="Snoopy holding roses"
              className="absolute -right-24 -bottom-32 w-56 md:w-72 rotate-12 drop-shadow-2xl z-50 pointer-events-none"
            />
          </div>
          <ValentineCard name={valentineName} onYesClick={handleYesClick} />
        </div>

        {/* Footer */}
        <div className="fixed bottom-4 right-4 z-10">
          <p className="text-black text-sm">
            All rights reserved Nowel Kinja 2026
          </p>
        </div>
      </div>
    );
  };

  return (
    <>
      {/* Background Music - Only plays when NOT in Memories page */}
      {!showMemories && (
        <audio ref={audioRef} loop>
          <source src="/blue.mp3" type="audio/mpeg" />
        </audio>
      )}

      {/* Mute/Unmute Button */}
      <button
        onClick={toggleMute}
        className="fixed top-4 right-4 z-50 bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
        aria-label={isMuted ? "Unmute music" : "Mute music"}
      >
        {isMuted ? "🔇" : "🔊"}
      </button>

      {/* DYNAMIC CONTENT */}
      {renderContent()}
    </>
  );
};

export default Index;
