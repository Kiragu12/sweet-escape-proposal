import { useState, useRef, useEffect } from "react";
import { ChevronLeft, ChevronRight, ChevronDown, Maximize2, PlayCircle, X } from "lucide-react";

// Updated Data Structure with Notes
const categories = [
    {
        title: "Encounter", emoji: "✨", id: "encounter",
        media: [
            { file: "1.jpg", note: "I remember the time We Vibed to a point i had saved you bestie too bad you had another bestie but eeiy to me you were a friend and a half. This screenshot i took after now having a glance to the Real you the kind that wants to be seen" },
            { file: "2.jpg", note: "Also this was a pic after i told you send me a real photo of you coz i know how to read pictures and this is the first time you came clean" },
            { file: "3.jpg", note: "Among the first photos you shared to me but not so disclosing" },
            { file: "4.jpg", note: "Was also the first photo you slide in my dms they actually look official dont they 😂😂😂" },
            { file: "5.jpg", note: "yeah the sun dress but mbn ulikua naavasss 😂😂😂" }
        ]
    },
    {
        title: "Funny moments", emoji: "😂", id: "funny",
        media: [
            { file: "1.jpg", note: "Idont have to exolain this we share same memory... on my pov i felt nice coz you created every reason just for us to chat laugh and spend time together despite the crazy things you nkow we did😂😂" },
            { file: "2.mp4", note: "eeh wewe  endelea ku sema bf watano ntakupeperusha nao wote anyway it s the times i used to laugh coz of this videos 😂😂" },
            { file: "3.mp4", note: "Wewe endelea kusema christopher na nataka kuchukua role yake ebu jitayarishe tayarishe ntakam na pinnaple juice na fruits😂😂..the  younger you was fun jameni" },
            { file: "4.mp4", note: "mbn unanibamba hivih 🤣🤣🤣" },
            { file: "5.mp4", note: "hakuna nyumba ya ukuta mm najenga 😂😂" }
        ]
    },
    {
        title: "Falling in", emoji: "💘", id: "falling",
        media: [
            { file: "1.jpg", note: "God said yeah maybe you never did Architecture you dearly wanted, So youll be the Architect of the life of an Architect❤" },
            { file: "2.mp4", note: "I Sarted to fall in in your intelligence you opened your mouth and my existennce numb..Mrs brwains despite what " },
            { file: "3.mp4", note: "Stilll your bbrwains and confidence" },
            { file: "4.mp4", note: "see yeah i just said it your ability to think conciously..coz as a man i will fall short i needa lady to think on my behalf then make decisions and sping up high" }
        ]
    },
    {
        title: "First date", emoji: "🥂", id: "first_date",
        media: [
            { file: "1.jpg", note: "Nervous but happy" },
            { file: "2.jpg", note: "yeah najua nilikupata offguard but you still maintain the autheticity in you" },
            { file: "3.jpg", note: "the words that came outthen were harsh but the girl that was made was strong" },
            { file: "4.jpg", note: "still rememains tobe the best photo of you taken from my lense..and im so greateful for letting me steer the wheel to our future selves together" }
        ]
    },
    {
        title: "Odi babes", emoji: "😎", id: "odi",
        media: [
            { file: "1.jpg", note: "the i wish i met you ealier vybez😂😂😂😂" },
            { file: "2.jpg", note: "for a reason i wishi conversed with you then, unakaa shy very innocent and alittle bit naive.. the kinder apana mom atanichapa akiona nimekuhugg😂😂😂😂" },
            { file: "3.jpg", note: "super odi vybez.. hapa unaeza ady nichapa kidevu nizimie 🤣🤣🤣" },
            { file: "4.mp4", note: "nitakangaya lakini nikona swali.. kama napenda walking style yako na yangu sasa tutadooo😂😂..anyway cool vybez" }
        ]
    },
    {
        title: "Kikuyu babes", emoji: "👸", id: "kikuyu",
        media: [
            { file: "1.mp4", note: "The kikuyu is so in and I love it most especially when I see my matchendize on your hand" },
            { file: "2.mp4", note: "Cultural Queen" },
            { file: "3.mp4", note: "eeh  hope im the one your singing so passionately to juuu if not 😂😂😂..ntalia " },
            { file: "4.mp4", note: "At this point nakuja ruracio" }
        ]
    },
    {
        title: "On trends", emoji: "🔥", id: "trends",
        media: [
            { file: "1.mp4", note: "i love the way you catch on every trends the up to date babes...not a boring person and also i love how you be excersing thoses non  verbal cues" },
            { file: "2.mp4", note: "yeah alittle nervers when you were doing this .. anyway lets say the crying crying period is now past you we hope for the best and yeah you need my love 😂😂ama ni want anywhoo" },
            { file: "3.mp4", note: "aii the fisrt time seeing you dancing mbn nisicheke catch those trends beibey" },
            { file: "4.mp4", note: "on point especially when you bite your lip..si unifanyie hivoh one day uone kama in the next 24 hrs utakua kenya 😋😂😂😂" }
        ]
    },
    {
        title: "Magical moments", emoji: "🪄", id: "magical",
        media: [
            { file: "1.jpg", note: "yeah i wanted to confess my love but i had a feeling huitaki so sending flowers and a withrdawal poem to you on that day i saw as a peaceful way to say goodbye coz i was so falling in and i never thought you fwere in love with me kumbe😂😂😂😂" },
            { file: "2.jpg", note: "i bought you the ring coz of i knew you wanted one coz you had liked a certain post too bad sikuizi i dont see your likes ulini excempt sio😪" },
            { file: "3.jpg", note: "i remeber this tyme told you my team was playing you gave me the best wishes and prayeed my team to win i consider it one of the most biggest care memories i have ever had .. my team really means alot so i thoght lemme buy you a jersey coz you heartfully support mancity..even though being my rivally team, btw why do you support manshitty😂😂😂😂?" },
            { file: "4.mp4", note: "its magical to mee coz its the first video i saw of you with my name shagged to your body .. i guess hizi ndo signals zilikua zinafanya niku eke kama target " },
            { file: "5.mp4", note: "this is the one that shifted my pov towards you ... on this day you waited for me to finish my eveningclass ndo tu uende na mm home hehe.. ona haria sijawai pendwa hii design... you made me fall inlove in an instance..yeah the videos is still in my my black lock screeeen till today🥰🥰" }
        ]
    },
    {
        title: "Adventure", emoji: "🧗‍♀️", id: "adventure",
        media: [
            { file: "1.jpg", note: "the day i was working on the second letter i had to source tools and work on it" },
            { file: "2.jpg", note: "imagine i create a thumbnail uniambie utanipeleka YOLO hady wale nangoja 😥😅😅" },
            { file: "3.jpg", note: "the knowing you through this podcast has been an adventure thankyou" },
            { file: "4.jpg", note: "yeah that painting is mine so you know the image on the painting is my dark side thougthts of you crazy 😂😂" }
        ]
    },
    {
        title: "Lightskined", emoji: "💅", id: "lightskined",
        media: [
            { file: "1.jpg", note: "Glow up" },
            { file: "2.jpg", note: "Shining" },
            { file: "3.jpg", note: "Radiant" },
            { file: "4.mp4", note: "lets say your skin color captivates nad yeah im not a racist 😂😂😂" }
        ]
    },
    {
        title: "Gorgeous you", emoji: "😍", id: "gorgeous",
        media: [
            { file: "1.jpg", note: "still remains the most gorgeous pic I have of you i admire it the smile confidence and beauty reloaded with cuteness" },
            { file: "2.jpg", note: "This pic finishes me coz it was the very same i was looking at on 28th november moments before i thought i had lost you..so Mature and well self explained on the beauty simple" },
            { file: "3.jpg", note: "Hi ni screen shiot after uliamua ni kauke your so beutifull and stunning, the beauty that stops time that slows the speed of light in space ..lakini nitawacha sasa ku screen shot kama hutakua unanitumia sawa maybe you belive i dont deserve that 😥yeah uliniboo but sawa tu ukofity despite what 😂😂" },
            { file: "4.jpg", note: "the lips kept me guessing... yoow when do i get to be in sycn with it .. the next tyme i see you i will be shually after them😚" }
        ]
    },
    {
        title: "Overly seduced", emoji: "💋", id: "seduced",
        media: [
            { file: "1.jpg", note: "here i am captivated by the toe nails and the slick shape of your body at close range jamani its makes me melt till this day" },
            { file: "2.jpg", note: "I mean ady ww unaona hips the curve is so on point it would curve a statue .. sheesh this is my dark side so bare with me you seduce me" },
            { file: "3.mp4", note: "the way you wine your waist and bubble the nyash .. eiiy jamani you just make me realize how of a gem you are an all in one wife package .. make more of this and make me yor onluy supporter if yu don mind" },
            { file: "4.mp4", note: "the shape of your boobs down to your torso makes me shedmy last molecule of salaiva 🤤🤤" }
        ]
    },
    {
        title: "Stalking", emoji: "👀", id: "stalking",
        media: [
            { file: "1.jpg", note: "aki i promise i dont know how i found my self here nilikua natafuta the video to that song you wrere singing ile day nikikam church then i found this ..nilicheka the rest was history😂😂 biga binja kwa church na crop top funny .. gai hiow does it even fit you " },
            { file: "2.jpg", note: "i just found my self stalking your true callers creenshot hapa pale " },
            { file: "3.jpg", note: "call me your gurduian angel .. anyway im always watching 😂😂😂" },
            { file: "4.mp4", note: "when i was stalking your social media on one fine sato i came across this and it become my fisrt favourite stalking returns after hours of scrolling" }
        ]
    },
    {
        title: "Fails", emoji: "🤦‍♀️", id: "fails",
        media: [
            { file: "1.jpg", note: "a screen shot  of one i sent nikidhani ni gmail yako. na ulikua umenigrey all platforms na hupic calls around january when i though yeah maybe evans is telling the truth.. that was the content in it its a fail coz haikukufikia" },
            { file: "2.jpg", note: "hapa nayo nikama hukutaka kupatana na mm , u were bored coz tell me why tuliongelelea qs.. architects na engineers .. on our first date of the year ..wueeh ni mbaya...its a failed date to me" }
        ]
    },
];

const MemoriesPage = () => {
    const [currentPage, setCurrentPage] = useState(-1);
    const [selectedCategory, setSelectedCategory] = useState<typeof categories[0] | null>(null);

    const audioRef = useRef<HTMLAudioElement>(null);

    // Scroll to top and play music on mount
    useEffect(() => {
        window.scrollTo(0, 0);
        if (audioRef.current) {
            audioRef.current.volume = 0.5; // Set volume to 50%
            audioRef.current.play().catch(e => console.log("Audio play failed", e));
        }
    }, []);

    const isVideo = (file: string) => file.endsWith('.mp4');

    const nextPage = () => {
        if (currentPage < categories.length) setCurrentPage(c => c + 1);
    };

    const prevPage = () => {
        if (currentPage > -1) setCurrentPage(c => c - 1);
    };

    const renderModalMedia = (category: typeof categories[0], file: string) => {
        const path = `/memories/${category.id}/${file}`;
        if (isVideo(file)) {
            return <video src={path} controls className="w-full h-auto rounded-lg shadow-lg" />;
        }
        return <img src={path} alt="Memory" className="w-full h-auto rounded-lg shadow-lg" />;
    };

    const getRotationStyle = (index: number) => {
        const rotations = [
            "rotate-[-2deg]",
            "rotate-[1deg]",
            "rotate-[-1deg]",
            "rotate-[2deg]",
            "rotate-[-2deg]",
        ];
        return rotations[index % rotations.length];
    };

    return (
        <div className="h-screen w-full fixed inset-0 bg-slate-900 flex flex-col items-center justify-center p-4 relative overflow-hidden">
            {/* Background Music for Memories */}
            <audio ref={audioRef} loop>
                <source src="/tell-me-lie.mp3" type="audio/mpeg" />
            </audio>

            {/* Background Ambience */}
            <div className="absolute inset-0 opacity-30 bg-[url('https://images.unsplash.com/photo-1518621736915-f3b1c41bfd00?q=80&w=3786&auto=format&fit=crop')] bg-cover bg-center" />
            <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/80" />

            <h1 className="relative z-10 font-romantic text-2xl md:text-3xl lg:text-4xl text-white text-center mb-0 mt-2 drop-shadow-[0_0_15px_rgba(255,255,255,0.5)]">
                Our Love Story 📖
            </h1>

            {/* 3D BOOK CONTAINER */}
            <div className={`relative z-20 w-full max-w-sm md:max-w-md lg:max-w-xl aspect-[3/4] perspective-1000 my-2 scale-[0.80] md:scale-[0.85] transition-transform duration-1000 ${currentPage > -1 ? 'translate-x-[35%]' : ''}`}>
                <div className="relative w-full h-full transform-style-3d transition-transform duration-500">

                    {/* Cover Page */}
                    <div
                        className={`absolute inset-0 w-full h-full bg-[#8B4513] rounded-r-2xl rounded-l-md shadow-2xl origin-left transition-transform duration-1000 transform-style-3d border-2 border-[#5D2906] flex flex-col items-center justify-center p-0 overflow-hidden ${currentPage > -1 ? 'rotate-y-180' : ''}`}
                        style={{ zIndex: currentPage > -1 ? 9 : 41 }}
                        onClick={() => setCurrentPage(0)}
                    >
                        <div className="w-full h-full relative group cursor-pointer">
                            <img src="/cover.jpg" className="w-full h-full object-cover" alt="Cover" />
                            <div className="absolute inset-0 bg-black/0 flex flex-col items-center justify-between p-6 py-8 transition-colors hover:bg-black/5">
                                <div className="text-center mt-2 px-2 z-10">
                                    <h2 className="font-romantic text-2xl md:text-4xl text-black drop-shadow-[0_2px_4px_rgba(0,0,0,1)] leading-relaxed">
                                        On 14th Feb I share the<br />14 memories I hold
                                    </h2>
                                    <p className="font-romantic text-xl md:text-2xl text-rose-100 mt-2 drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]">
                                        (Puffy Bunny)
                                    </p>
                                </div>
                                <div className="mb-8 transform hover:scale-110 transition-transform z-10">
                                    <p className="text-white font-bold text-lg bg-black/40 px-6 py-2 rounded-full backdrop-blur-md shadow-2xl border border-white/20 hover:bg-rose-500/80 transition-colors">
                                        Click to Open ➡️
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Pages Loop */}
                    {categories.map((category, index) => {
                        const isFlipped = currentPage > index;
                        const zIndex = isFlipped ? 10 + index : 40 - index;

                        return (
                            <div
                                key={category.id}
                                className={`absolute inset-0 w-full h-full bg-[#fdfbf7] rounded-r-xl rounded-l-md shadow-xl origin-left transition-transform duration-1000 transform-style-3d border-l border-gray-300 ${isFlipped ? 'rotate-y-180' : ''}`}
                                style={{ zIndex }}
                            >
                                {/* PAGE CONTENT (Front) - Will be visible mirrored when flipped as backface-visibility is visible by default now */}
                                <div className="absolute inset-0 flex flex-col h-full">
                                    <div className="flex items-center justify-between border-b-2 border-rose-200 pb-2 mb-2 shrink-0 p-4 md:p-6 pb-0">
                                        <span className="text-gray-400 font-romantic text-xl">Page {index + 1}</span>
                                        <span className="text-rose-400 font-romantic text-xl">14</span>
                                    </div>
                                    <h2 className="text-3xl md:text-4xl font-romantic text-rose-600 text-center mb-0 shrink-0">
                                        {category.title} {category.emoji}
                                    </h2>

                                    {/* SCROLLABLE CONTENT AREA */}
                                    <div
                                        className="flex-1 w-full bg-[#fdfbf7] relative overflow-y-auto custom-scrollbar cursor-pointer group bg-[url('https://www.transparenttextures.com/patterns/paper.png')] p-4"
                                        onClick={() => setSelectedCategory(category)}
                                    >
                                        {/* Left Side Scroll Hint */}
                                        <div className="absolute left-1 top-1/2 -translate-y-1/2 flex flex-col items-center gap-2 text-rose-400 animate-pulse">
                                            <ChevronDown size={24} className="animate-bounce" />
                                            <span className="font-romantic text-sm whitespace-nowrap bg-white/80 px-2 py-1 rounded-lg shadow-sm border border-rose-200" style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}>
                                                Scroll down little bunny 🐰
                                            </span>
                                            <ChevronDown size={24} className="animate-bounce" />
                                        </div>



                                        {/* Single Column Layout for HUGE images */}
                                        <div className="flex flex-col gap-8 items-center pb-8">
                                            {category.media.slice(0, 5).map((item, i) => (
                                                <div
                                                    key={i}
                                                    // WIDER SIZE: w-72 md:w-96
                                                    // Added subpixel-antialiased and transform-gpu for sharp text/images
                                                    className={`relative bg-white p-3 shadow-md border border-gray-200 hover:shadow-2xl w-72 md:w-96 shrink-0 subpixel-antialiased transform-gpu
                                       ${getRotationStyle(i)}`}
                                                >
                                                    <div className="aspect-[4/3] w-full bg-gray-100 overflow-hidden mb-1 relative shadow-inner">
                                                        {isVideo(item.file) ? (
                                                            <div className="w-full h-full bg-black relative">
                                                                {/* Removed opacity-80 for clarity */}
                                                                <video src={`/memories/${category.id}/${item.file}`} className="w-full h-full object-cover object-top" />
                                                                <div className="absolute inset-0 flex items-center justify-center">
                                                                    <PlayCircle className="text-white w-8 h-8 drop-shadow-md" />
                                                                </div>
                                                            </div>
                                                        ) : (
                                                            <img src={`/memories/${category.id}/${item.file}`} className="w-full h-full object-cover object-top" alt="mini" />
                                                        )}
                                                    </div>
                                                    <div className="bg-white pt-2 min-h-[40px] flex items-center justify-center border-t border-dashed border-gray-200">
                                                        <p className="font-handwriting text-xs md:text-sm text-center text-gray-700 leading-tight px-1 font-semibold w-full">
                                                            {item.note || "Add note..."}
                                                        </p>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>

                                        {/* Scroll Hint */}
                                        <div className="absolute bottom-2 left-0 right-0 text-center text-gray-400 text-xs animate-bounce pointer-events-none">
                                            Scroll for more ↓
                                        </div>
                                    </div>

                                    <div className="text-center relative z-20 shrink-0 p-2">
                                        <p className="font-body text-gray-500 custom-handwriting text-sm italic">
                                            "Unforgettable moments..."
                                        </p>
                                    </div>
                                </div>
                                {/* Back of page overlay (Grey & Blurry) */}
                                {isFlipped && (
                                    <div className="absolute inset-0 bg-slate-200/50 backdrop-blur-[3px] z-50 rounded-r-xl rounded-l-md pointer-events-none transition-all duration-500" />
                                )}
                            </div>
                        );
                    })}

                    {/* Back Cover */}
                    <div
                        className={`absolute inset-0 w-full h-full bg-gradient-to-br from-slate-100 to-gray-200 rounded-r-2xl rounded-l-md shadow-2xl origin-left transition-transform duration-1000 transform-style-3d flex items-center justify-center border-2 border-gray-300 ${currentPage === categories.length ? '' : ''}`}
                        style={{ zIndex: 0 }}
                    >
                        {/* Pink "Love" Watermark */}
                        <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
                            <span className="font-romantic text-[150px] md:text-[200px] text-rose-200/40 rotate-[-15deg] select-none">Love</span>
                        </div>
                        {/* Romantic Quote */}
                        <div className="relative z-10 text-center px-8">
                            <p className="font-romantic text-2xl md:text-3xl lg:text-4xl text-black leading-relaxed font-bold">
                                "I believe you should fall in love with yourself, that's why I let you see yourself from my eyes and in return have my love for you as a prize of you loving you."
                            </p>
                        </div>
                    </div>

                </div>
            </div>

            {/* SIDE NAVIGATION CONTROLS */}
            <button
                onClick={prevPage}
                disabled={currentPage === -1}
                className="absolute left-4 top-1/2 -translate-y-1/2 z-50 bg-white/10 hover:bg-white/20 text-white p-4 rounded-full backdrop-blur-md border border-white/20 disabled:opacity-30 disabled:cursor-not-allowed transition-all active:scale-95 shadow-xl group"
            >
                <ChevronLeft size={40} className="group-hover:-translate-x-1 transition-transform" />
            </button>

            <button
                onClick={nextPage}
                disabled={currentPage === categories.length}
                className="absolute right-4 top-1/2 -translate-y-1/2 z-50 bg-white/10 hover:bg-white/20 text-white p-4 rounded-full backdrop-blur-md border border-white/20 disabled:opacity-30 disabled:cursor-not-allowed transition-all active:scale-95 shadow-xl group"
            >
                <ChevronRight size={40} className="group-hover:translate-x-1 transition-transform" />
            </button>

            {/* FULL SCREEN GALLERY MODAL */}
            {selectedCategory && (
                <div className="fixed inset-0 z-50 bg-black/95 backdrop-blur-xl flex flex-col animate-fade-in p-4 md:p-8">
                    <div className="flex items-center justify-between mb-6">
                        <h2 className="text-3xl md:text-5xl text-white font-romantic">
                            {selectedCategory.title} {selectedCategory.emoji}
                        </h2>
                        <button onClick={() => setSelectedCategory(null)} className="bg-white/10 p-3 rounded-full hover:bg-white/20 transition-colors text-white">
                            <X size={24} />
                        </button>
                    </div>
                    <div className="flex-1 overflow-y-auto w-full pr-2 custom-scrollbar">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pb-12 w-full max-w-7xl mx-auto">
                            {selectedCategory.media.map((item, i) => (
                                <div key={i} className="group relative break-inside-avoid bg-white/5 p-4 rounded-xl border border-white/10 hover:border-white/30 transition-colors">
                                    <div className="rounded-lg overflow-hidden bg-black/40 relative aspect-video md:aspect-auto shadow-lg mb-3">
                                        {renderModalMedia(selectedCategory, item.file)}
                                    </div>
                                    {/* Note in Modal */}
                                    <div className="bg-white/10 p-3 rounded-lg backdrop-blur-sm border border-white/5">
                                        <p className="text-white/90 text-sm font-handwriting italic text-center">"{item.note || 'No note added'}"</p>
                                    </div>
                                    <div className="flex items-center justify-between mt-2 px-1">
                                        <p className="text-white/30 text-xs">Moment {i + 1}</p>
                                        {isVideo(item.file) && <span className="text-rose-400 text-xs flex items-center gap-1"><PlayCircle size={12} /> Video</span>}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default MemoriesPage;
