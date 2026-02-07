import { useState, useRef, useCallback } from "react";
import { Button } from "@/components/ui/button";

interface ValentineCardProps {
  name: string;
  onYesClick: () => void;
}

const ValentineCard = ({ name, onYesClick }: ValentineCardProps) => {
  const [noButtonPosition, setNoButtonPosition] = useState({ x: 0, y: 0 });
  const [hasEscaped, setHasEscaped] = useState(false);
  const [escapeCount, setEscapeCount] = useState(0);
  const cardRef = useRef<HTMLDivElement>(null);

  const escapeMessages = [
    "Nice try! 😏",
    "Not so fast! 💨",
    "Can't catch me! 🏃‍♂️",
    "Think again! 🤔",
    "Nope! 🙅‍♀️",
    "Keep trying! 😄",
    "Almost! 😜",
    "So close! 🎯",
  ];

  const moveButton = useCallback(() => {
    if (!cardRef.current) return;

    const card = cardRef.current.getBoundingClientRect();
    const buttonWidth = 120;
    const buttonHeight = 50;
    const padding = 20;

    // Calculate available space within viewport
    const maxX = window.innerWidth - buttonWidth - padding;
    const maxY = window.innerHeight - buttonHeight - padding;

    // Generate random position
    let newX = Math.random() * (maxX - padding) + padding;
    let newY = Math.random() * (maxY - padding) + padding;

    // Ensure it's not too close to current position
    const currentX = noButtonPosition.x || card.left + card.width / 2;
    const currentY = noButtonPosition.y || card.top + card.height;

    if (Math.abs(newX - currentX) < 100) {
      newX = newX < window.innerWidth / 2 ? newX + 150 : newX - 150;
    }
    if (Math.abs(newY - currentY) < 100) {
      newY = newY < window.innerHeight / 2 ? newY + 150 : newY - 150;
    }

    // Clamp to viewport
    newX = Math.max(padding, Math.min(newX, maxX));
    newY = Math.max(padding, Math.min(newY, maxY));

    setNoButtonPosition({ x: newX, y: newY });
    setHasEscaped(true);
    setEscapeCount((prev) => prev + 1);
  }, [noButtonPosition]);

  return (
    <div
      ref={cardRef}
      className="relative z-10 flex flex-col items-center justify-center px-4 w-full"
    >
      {/* Main Card - More transparent and compact */}
      <div className="bg-transparent backdrop-blur-none rounded-3xl p-4 md:p-6 max-w-lg w-full text-center animate-scale-up">
        {/* Buttons - More prominent */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button
            onClick={onYesClick}
            className="bg-primary hover:bg-primary/90 text-primary-foreground font-body font-semibold text-2xl md:text-3xl px-16 py-8 rounded-full shadow-2xl hover:shadow-xl transition-all duration-300 hover:scale-110 animate-pulse-glow w-full sm:w-auto"
          >
            Yes! 💖
          </Button>

          {!hasEscaped && (
            <Button
              variant="outline"
              onMouseEnter={moveButton}
              onTouchStart={moveButton}
              onClick={moveButton}
              className="border-2 border-white/50 bg-white/20 text-white font-body font-medium text-xl md:text-2xl px-14 py-7 rounded-full hover:border-primary/50 transition-all duration-300 w-full sm:w-auto"
            >
              No 😢
            </Button>
          )}
        </div>

        {/* Escape message */}
        {escapeCount > 0 && (
          <p className="mt-6 text-muted-foreground font-body text-lg md:text-xl animate-wiggle">
            {escapeMessages[escapeCount % escapeMessages.length]}
          </p>
        )}
      </div>

      {/* Escaped No Button */}
      {hasEscaped && (
        <Button
          variant="outline"
          onMouseEnter={moveButton}
          onTouchStart={moveButton}
          onClick={moveButton}
          className="fixed border-2 border-muted-foreground/30 text-muted-foreground font-body font-medium text-xl px-12 py-6 rounded-full hover:border-primary/50 transition-all duration-200 z-50 shadow-lg"
          style={{
            left: `${noButtonPosition.x}px`,
            top: `${noButtonPosition.y}px`,
          }}
        >
          No 😢
        </Button>
      )}
    </div>
  );
};

export default ValentineCard;
