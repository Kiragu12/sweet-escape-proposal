import Confetti from "./Confetti";

interface CelebrationPageProps {
  name: string;
}

const CelebrationPage = ({ name }: CelebrationPageProps) => {
  return (
    <div className="min-h-screen bg-celebration-gradient flex flex-col items-center justify-center px-4 relative overflow-hidden">
      <Confetti />

      {/* Main celebration content */}
      <div className="relative z-10 text-center animate-scale-up max-w-2xl">
        {/* Big heart */}
        <div className="text-8xl md:text-9xl mb-6 animate-bounce-soft">
          💕
        </div>

        {/* Celebration message */}
        <h1 className="font-romantic text-4xl md:text-6xl lg:text-7xl text-gradient-romantic mb-4 leading-tight">
          Yay!
        </h1>
        <h2 className="font-romantic text-2xl md:text-4xl lg:text-5xl text-gradient-romantic mb-8">
          You made me the happiest person!
        </h2>

        {/* Sweet message */}
        <div className="bg-card/80 backdrop-blur-sm rounded-3xl p-6 md:p-8 shadow-2xl border border-primary/20 mb-8">
          <p className="font-body text-lg md:text-xl text-foreground leading-relaxed">
            Dear <span className="font-romantic text-2xl text-primary">{name}</span>,
          </p>
          <p className="font-body text-lg md:text-xl text-foreground leading-relaxed mt-4">
            Thank you for saying yes! I can't wait to spend this special day with you. 
            You mean the world to me, and I'm so grateful to have you in my life. 
          </p>
          <p className="font-body text-lg md:text-xl text-foreground leading-relaxed mt-4">
            Here's to love, laughter, and endless happy moments together! 
          </p>
          <div className="text-3xl mt-4">
            🌹💝🌹
          </div>
        </div>

        {/* Romantic GIF */}
        <div className="rounded-2xl overflow-hidden shadow-xl border-4 border-primary/20 inline-block">
          <img
            src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExcHRhNHRia2h4YjZycXJ1YzVtcjg4cHNyaDN6Y3MwdWQ5aGgyYjFjciZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/3o7TKoWXm3okO1kgHC/giphy.gif"
            alt="Happy celebration"
            className="w-64 md:w-80 h-auto"
          />
        </div>

        {/* Forever message */}
        <p className="font-romantic text-2xl md:text-3xl text-primary mt-8 animate-shimmer">
          Forever & Always 💕
        </p>
      </div>

      {/* Background decorative elements */}
      <div className="absolute top-10 left-10 text-4xl opacity-50 animate-bounce-soft">💖</div>
      <div className="absolute top-20 right-10 text-3xl opacity-40 animate-bounce-soft" style={{ animationDelay: "0.5s" }}>💗</div>
      <div className="absolute bottom-20 left-20 text-5xl opacity-30 animate-bounce-soft" style={{ animationDelay: "1s" }}>💕</div>
      <div className="absolute bottom-10 right-20 text-4xl opacity-50 animate-bounce-soft" style={{ animationDelay: "1.5s" }}>💝</div>
    </div>
  );
};

export default CelebrationPage;
