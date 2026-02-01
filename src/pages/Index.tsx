import { useState } from "react";
import FloatingHearts from "@/components/FloatingHearts";
import ValentineCard from "@/components/ValentineCard";
import CelebrationPage from "@/components/CelebrationPage";

const Index = () => {
  const [showCelebration, setShowCelebration] = useState(false);
  
  // Customize the name here
  const valentineName = "Sarah";

  const handleYesClick = () => {
    setShowCelebration(true);
  };

  if (showCelebration) {
    return <CelebrationPage name={valentineName} />;
  }

  return (
    <div className="min-h-screen bg-romantic-gradient flex items-center justify-center relative overflow-hidden">
      <FloatingHearts />
      <ValentineCard name={valentineName} onYesClick={handleYesClick} />
    </div>
  );
};

export default Index;
