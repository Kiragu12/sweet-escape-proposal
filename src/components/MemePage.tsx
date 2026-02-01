interface MemePageProps {
  onContinue: () => void;
}

const MemePage = ({ onContinue }: MemePageProps) => {
  return (
    <div className="min-h-screen bg-romantic-gradient flex flex-col items-center justify-center px-4 relative overflow-hidden">
      <div className="relative z-10 text-center animate-scale-up max-w-3xl">
        {/* Meme Image */}
        <div className="rounded-2xl overflow-hidden shadow-2xl border-4 border-primary/30 mb-8">
          <img
            src="/dog-meme.jpg"
            alt="For you meme"
            className="w-full h-auto max-w-md mx-auto"
          />
        </div>

        {/* Text below meme */}
        <div className="bg-black/70 backdrop-blur-lg rounded-3xl p-6 md:p-8 shadow-2xl border border-white/20">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            YESSS! 🎉💕
          </h1>
          <p className="text-xl md:text-2xl text-white mb-3 leading-relaxed">
            You just made me the happiest guy ever!
          </p>
          <p className="text-lg md:text-xl text-white/90 italic">
            (And yes, I'm doing a happy dance right now 😄)
          </p>
        </div>
      </div>
    </div>
  );
};

export default MemePage;
