
interface MemePageProps {
  onContinue: () => void;
}

const MemePage = ({ onContinue }: MemePageProps) => {
  return (
    <div className="h-screen fixed inset-0 bg-romantic-gradient flex flex-col items-center justify-center p-4 overflow-hidden">
      <div className="relative z-10 text-center animate-scale-up max-w-[95%] w-full flex flex-col items-center gap-4">

        {/* Video Player Container */}
        <div className="relative rounded-xl shadow-2xl border-4 border-primary/30 bg-black/20 backdrop-blur-sm p-2 w-fit mx-auto">

          {/* Floating Sticker - Absolutely Positioned Left */}
          <img
            src="/i-love-you-meme.jpg"
            alt="I Love You Meme"
            className="absolute -left-32 top-1/2 -translate-y-1/2 w-28 md:w-36 -rotate-12 drop-shadow-xl z-20 mix-blend-multiply opacity-90 hidden md:block"
          />

          <div className="flex flex-col items-center">
            {/* Reduced Video Size: Max Height of 65% of viewport */}
            <video
              src="/proposal-video.mp4"
              autoPlay
              loop
              playsInline
              className="w-auto h-auto max-h-[65vh] rounded-lg shadow-lg object-contain"
            />
          </div>
        </div>

        {/* Text below video - Compact */}
        <div className="bg-black/70 backdrop-blur-lg rounded-2xl p-2 md:p-3 shadow-2xl border border-white/20 w-fit">
          <h1 className="text-lg md:text-xl font-bold text-white mb-0.5">
            YESSS! 🎉💕
          </h1>
          <p className="text-sm text-white mb-0 leading-relaxed">
            You just made me the happiest guy ever!
          </p>
          <p className="text-[10px] text-white/80 italic">
            (And yes, I'm doing a happy dance right now 😄)
          </p>
        </div>

        {/* Button - Closer to text */}
        <div className="mt-2 text-center">
          <button
            onClick={onContinue}
            className="bg-white text-rose-600 px-6 py-3 rounded-full font-bold text-lg shadow-2xl hover:bg-rose-50 hover:scale-105 transition-all duration-300 animate-bounce"
          >
            Wanna be surprised? 🎁
          </button>
        </div>
      </div>
    </div>
  );
};

export default MemePage;
