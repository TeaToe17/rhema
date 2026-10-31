"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import {
  ArrowUpRight,
  CalendarDays,
  Play,
  Sparkles,
  MapPin,
} from "lucide-react";

const heroImages = [
  "/rhemalandscapeplaceholder.png",
  "/rhemaportraitplaceholder.png",
  "/rhemalandscapeplaceholder.png",
  "/rhemaportraitplaceholder.png",
  "/rhemalandscapeplaceholder.png",
  "/rhemaportraitplaceholder.png",
  "/rhemaportraitplaceholder.png",
];

export default function EntranceDesign() {
  const [activeImage, setActiveImage] = useState(0);
  const visualRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(visualRef, { amount: 0.2 });

  // Cycle through the images while the slideshow is visible.
  useEffect(() => {
    if (!isInView) return;

    const interval = setInterval(() => {
      setActiveImage((current) => (current + 1) % heroImages.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isInView]);

  const headingContainer = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const headingWord = {
    hidden: {
      opacity: 0,
      y: 45,
      filter: "blur(10px)",
    },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: {
        duration: 0.9,
        ease: [0.22, 1, 0.36, 1] as const,
      },
    },
  };

  return (
    <section className="relative isolate min-h-screen overflow-hidden bg-[#14251c] px-5 pb-16 pt-32 text-white md:px-10 md:pt-40">
      {/* BACKGROUND ATMOSPHERE */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -right-40 top-0 size-[650px] rounded-full bg-[#b99a5d]/10 blur-[140px]" />
        <div className="absolute -left-40 bottom-0 size-[550px] rounded-full bg-[#52775b]/15 blur-[140px]" />
        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 180 180' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='.6'/%3E%3C/svg%3E\")",
          }}
        />
      </div>

      <div className="mx-auto max-w-[1440px]">
        {/* TOP INTRO */}
        <div className="grid items-center gap-14 lg:grid-cols-[1.05fr_.95fr] lg:gap-10">
          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="relative z-10"
          >
            <div className="mb-9 flex items-center gap-3">
              <span className="relative flex size-2">
                <span className="absolute inline-flex size-full animate-ping rounded-full bg-[#d9b66b] opacity-50" />
                <span className="relative inline-flex size-2 rounded-full bg-[#d9b66b]" />
              </span>
              <span className="text-[10px] font-semibold uppercase tracking-[0.35em] text-[#d9b66b]">
                Welcome to Rhema Chapel, Lekki
              </span>
            </div>

            {/* CYCLICALLY ANIMATED HEADING */}
            <div className="overflow-hidden">
              <motion.h1
                initial="hidden"
                animate="visible"
                className="font-display text-[clamp(3.7rem,8vw,7.8rem)] font-medium leading-[0.91] tracking-[-0.065em] text-[#f7f4eb]"
              >
                {[
                  <span key="line1">The home of</span>,
                  <span key="line2">
                    the{" "}
                    <span className="font-serif italic font-normal text-[#d9b66b]">
                      blessed
                    </span>
                  </span>,
                  <span key="line3">
                    people<span className="text-[#d9b66b]">.</span>
                  </span>,
                ].map((line, index) => (
                  <motion.span
                    key={index}
                    initial={{ opacity: 0, y: 55 }}
                    animate={{
                      opacity: [0, 1, 1, 0, 0],
                      y: [55, 0, 0, -35, -55],
                    }}
                    transition={{
                      duration: 7,
                      delay: index * 0.35,
                      repeat: Infinity,
                      repeatDelay: 0.5,
                      ease: "easeInOut",
                      times: [0, 0.15, 0.65, 0.85, 1],
                    }}
                    className="block"
                  >
                    {line}
                  </motion.span>
                ))}
              </motion.h1>
            </div>

            <motion.div
              initial={{ opacity: 0, width: 0 }}
              animate={{ opacity: 1, width: 85 }}
              transition={{ delay: 1.4, duration: 0.8 }}
              className="mt-9 h-[2px] bg-[#d9b66b]"
            />

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.3, duration: 0.8 }}
              className="mt-8 max-w-[460px] text-sm leading-8 text-white/60 md:text-base"
            >
              A family rooted in Christ, growing in faith, and walking together
              in the fullness of God's purpose. There's a place for you here.
              Come as you are.
            </motion.p>

            {/* ACTIONS */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.5, duration: 0.8 }}
              className="mt-9 flex flex-wrap items-center gap-4"
            >
              <a
                href="#programmes"
                className="group flex items-center gap-5 rounded-full bg-[#d9b66b] py-4 pl-7 pr-5 text-xs font-bold uppercase tracking-[0.12em] text-[#14251c] transition-all duration-300 hover:-translate-y-1 hover:bg-[#f1d99e] hover:shadow-[0_12px_35px_rgba(217,182,107,0.2)]"
              >
                Find your place
                <span className="grid size-8 place-items-center rounded-full bg-[#14251c] text-[#d9b66b] transition-transform duration-300 group-hover:rotate-45">
                  <ArrowUpRight size={17} />
                </span>
              </a>

              <a
                href="#"
                className="group flex items-center gap-3 px-3 py-3 text-xs font-semibold uppercase tracking-widest text-white/75 transition-colors hover:text-[#d9b66b]"
              >
                <span className="grid size-10 place-items-center rounded-full border border-white/25 transition-all duration-300 group-hover:border-[#d9b66b] group-hover:bg-[#d9b66b]/10">
                  <Play size={13} className="ml-0.5" />
                </span>
                Discover Rhema
              </a>
            </motion.div>

            {/* SMALL BRAND NOTE */}
            <div className="mt-12 flex items-center gap-3 text-[10px] uppercase tracking-[0.22em] text-white/35">
              <Sparkles size={14} className="text-[#d9b66b]" />
              Faith. Fellowship. Purpose.
            </div>
          </motion.div>

          {/* RIGHT VISUAL COMPOSITION */}
          <motion.div
            ref={visualRef}
            initial={{ opacity: 0, scale: 0.94, x: 25 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 1.2, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="relative mx-auto w-full max-w-[600px] pb-10 pt-3 lg:ml-auto lg:pb-16"
          >
            {/* IMAGE FRAME */}
            <div className="relative ml-auto aspect-[4/4.5] w-[88%] overflow-hidden rounded-t-[48%] rounded-b-[10px] border border-white/10 bg-[#314b39] shadow-[0_30px_100px_rgba(0,0,0,0.3)] md:rounded-t-[48%]">
              <AnimatePresence mode="sync">
                <motion.img
                  key={activeImage}
                  src={heroImages[activeImage]}
                  alt="The Rhema Chapel community"
                  initial={{ opacity: 0, scale: 1.06 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{
                    opacity: { duration: 1.2, ease: "easeInOut" },
                    scale: { duration: 6, ease: "linear" },
                  }}
                  className="absolute inset-0 size-full object-cover"
                />
              </AnimatePresence>

              <div className="absolute inset-0 bg-gradient-to-t from-[#14251c]/80 via-transparent to-[#14251c]/10" />

              {/* IMAGE CAPTION */}
              <div className="absolute bottom-9 left-7 right-7 md:bottom-12 md:left-10">
                <p className="mb-3 text-[9px] font-semibold uppercase tracking-[0.35em] text-[#e4c77e]">
                  More than a gathering
                </p>
                <p className="max-w-xs font-serif text-2xl italic leading-tight text-white md:text-2xl">
                  One family. One faith. One home.
                </p>
              </div>

              {/* SLIDESHOW INDICATORS */}
              <div className="absolute bottom-4 right-6 flex items-center gap-1.5">
                {heroImages.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveImage(index)}
                    aria-label={`Show image ${index + 1}`}
                    className={`h-1.5 rounded-full transition-all duration-500 ${
                      activeImage === index
                        ? "w-6 bg-[#d9b66b]"
                        : "w-1.5 bg-white/50 hover:bg-white"
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* FLOATING CIRCLE */}
            <motion.div
              animate={{ y: [0, -12, 0], rotate: [0, 3, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -left-2 top-[13%] grid size-24 place-items-center rounded-full border border-[#d9b66b]/50 bg-[#d9b66b] p-3 text-center text-[#14251c] shadow-2xl md:-left-0 md:size-32"
            >
              <div>
                <Sparkles size={18} className="mx-auto mb-2" />
                <p className="text-[9px] font-black uppercase leading-4 tracking-[0.16em] md:text-[10px]">
                  Blessed
                  <br />
                  to be
                  <br />a blessing
                </p>
              </div>
            </motion.div>

            {/* FLOATING QUOTE CARD */}
            <motion.div
              animate={{ y: [0, 9, 0] }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1,
              }}
              className="absolute -bottom-3 left-0 w-[190px] border border-white/10 bg-[#203a2a]/95 p-5 shadow-2xl backdrop-blur-xl md:w-[225px] md:p-6"
            >
              <div className="mb-3 flex items-center gap-2 text-[#d9b66b]">
                <Sparkles size={14} />
                <span className="text-[9px] font-bold uppercase tracking-[0.2em]">
                  Our heart
                </span>
              </div>
              <p className="font-serif text-lg italic leading-snug text-white md:text-xl">
                Growing together in the love of Christ.
              </p>
            </motion.div>

            {/* DECORATIVE RING */}
            <div className="pointer-events-none absolute -right-5 -top-2 -z-10 size-40 rounded-full border border-[#d9b66b]/20 md:-right-8 md:-top-6 md:size-56" />
          </motion.div>
        </div>

        {/* SERVICE INFORMATION STRIP */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-16 border-t border-white/10 pt-8 md:mt-20 md:pt-9"
        >
          <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-3 lg:items-center">
            <div className="flex items-center gap-4">
              <div className="grid size-12 shrink-0 place-items-center rounded-full border border-[#d9b66b]/30 text-[#d9b66b]">
                <CalendarDays size={20} />
              </div>
              <div>
                <p className="text-[9px] font-semibold uppercase tracking-[0.25em] text-white/40">
                  Join us every Sunday
                </p>
                <p className="mt-1 text-sm font-semibold text-white">
                  9:00 AM – 11:30 AM
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="grid size-12 shrink-0 place-items-center rounded-full border border-[#d9b66b]/30 text-[#d9b66b]">
                <MapPin size={20} />
              </div>
              <div>
                <p className="text-[9px] font-semibold uppercase tracking-[0.25em] text-white/40">
                  Find us
                </p>
                <p className="mt-1 text-sm font-semibold text-white">
                  Lekki, Lagos, Nigeria
                </p>
              </div>
            </div>

            <a
              href="#programmes"
              className="group flex items-center justify-between border border-white/10 px-5 py-4 transition-all duration-300 hover:border-[#d9b66b]/50 hover:bg-white/[0.03] sm:col-span-2 lg:col-span-1"
            >
              <span className="text-xs font-semibold uppercase tracking-[0.15em] text-white/75">
                Explore our gatherings
              </span>
              <ArrowUpRight
                size={19}
                className="text-[#d9b66b] transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
              />
            </a>
          </div>
        </motion.div>
      </div>

      {/* BOTTOM DECORATIVE TEXT */}
      <div className="pointer-events-none absolute -bottom-5 left-0 w-full select-none overflow-hidden text-center">
        <p className="font-serif text-[11vw] font-bold uppercase leading-none tracking-[-0.06em] text-white/[0.018]">
          Rhema Chapel
        </p>
      </div>
    </section>
  );
}
