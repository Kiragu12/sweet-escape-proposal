import { useEffect, useState } from "react";

interface ConfettiPiece {
  id: number;
  left: number;
  color: string;
  size: number;
  duration: number;
  delay: number;
  rotation: number;
}

const colors = [
  "hsl(340, 82%, 52%)",
  "hsl(350, 85%, 60%)",
  "hsl(330, 100%, 75%)",
  "hsl(0, 85%, 60%)",
  "hsl(45, 100%, 60%)",
  "hsl(350, 100%, 80%)",
];

const shapes = ["❤️", "💕", "💖", "💗", "✨", "💝", "🌹"];

const Confetti = () => {
  const [pieces, setPieces] = useState<ConfettiPiece[]>([]);

  useEffect(() => {
    const createConfetti = () => {
      const newPieces: ConfettiPiece[] = [];
      for (let i = 0; i < 60; i++) {
        newPieces.push({
          id: i,
          left: Math.random() * 100,
          color: colors[Math.floor(Math.random() * colors.length)],
          size: Math.random() * 15 + 10,
          duration: Math.random() * 3 + 2,
          delay: Math.random() * 2,
          rotation: Math.random() * 360,
        });
      }
      setPieces(newPieces);
    };

    createConfetti();
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-50">
      {pieces.map((piece) => (
        <div
          key={piece.id}
          className="absolute animate-confetti"
          style={{
            left: `${piece.left}%`,
            fontSize: `${piece.size}px`,
            animationDuration: `${piece.duration}s`,
            animationDelay: `${piece.delay}s`,
            transform: `rotate(${piece.rotation}deg)`,
          }}
        >
          {shapes[Math.floor(Math.random() * shapes.length)]}
        </div>
      ))}
    </div>
  );
};

export default Confetti;
