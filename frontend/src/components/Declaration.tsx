"use client";

import { motion } from "framer-motion";
import { Flame, Sparkles } from "lucide-react";

const declarations = [
  "I boldly declare that this year and beyond no chains are holding me, no forces are stopping me as I walk in liberty into my inheritance in Christ.",

  "Because I can do all things through Christ, I break through barriers, I rise above obstacles, negative patterns, fear and limiting beliefs.",

  "My path is enlarged, my capacity is expanded, my reach is extended and my steps are secure. Because I refuse to be limited, rules will be bent in my favour, and protocols will be broken for my sake in the name of Jesus.",

  "In all areas of my life my experience is progress, increase and advancement and I declare no more limits for me as I am now living without limitations in Jesus name.",
];

export default function Declaration() {
  return (
    <section className="relative isolate overflow-hidden bg-[#183D2B] px-5 py-24 text-[#FFF9EF] sm:py-32">
      {/* Background atmosphere */}
      <div className="pointer-events-none absolute -right-40 -top-40 h-[500px] w-[500px] rounded-full bg-[#D6B978]/10 blur-[110px]" />
      <div className="pointer-events-none absolute -bottom-48 -left-40 h-[500px] w-[500px] rounded-full bg-[#ED7338]/10 blur-[110px]" />

      <div className="pointer-events-none absolute inset-0 opacity-[0.045]">
        <div
          className="h-full w-full"
          style={{
            backgroundImage: "radial-gradient(#FFF9EF 1px, transparent 1px)",
            backgroundSize: "28px 28px",
          }}
        />
      </div>

      <div className="container-wide relative mx-auto max-w-6xl">
        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="mb-16 text-center"
        >
          <div className="mb-6 flex items-center justify-center gap-3">
            <span className="h-px w-10 bg-[#ED7338]" />

            <span className="flex items-center gap-2 text-xs font-bold uppercase tracking-[.3em] text-[#E8C98D]">
              <Flame size={15} />
              Our declaration
            </span>

            <span className="h-px w-10 bg-[#ED7338]" />
          </div>

          <h2 className="font-display text-5xl font-bold leading-[1.05] sm:text-7xl">
            Living beyond
            <span className="block font-normal italic text-[#ED7338]">
              limitations.
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-xl text-sm leading-7 text-white/65 sm:text-base">
            This is our confession of faith. Read it, speak it and believe every
            word.
          </p>
        </motion.div>

        {/* Opening declaration */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.8 }}
          className="relative mb-6 overflow-hidden rounded-[2rem] bg-[#FFF9EF] px-7 py-12 text-[#183D2B] shadow-2xl sm:px-14 sm:py-16"
        >
          <div className="absolute -right-10 -top-16 h-56 w-56 rounded-full border-[30px] border-[#ED7338]/[0.07]" />
          <div className="absolute -bottom-20 -left-10 h-56 w-56 rounded-full border-[30px] border-[#183D2B]/[0.05]" />

          <div className="relative mx-auto max-w-4xl text-center">
            <div className="mx-auto mb-7 flex h-12 w-12 items-center justify-center rounded-full bg-[#ED7338]/10 text-[#ED7338]">
              <Sparkles size={21} />
            </div>

            <p className="mb-6 text-[10px] font-bold uppercase tracking-[.3em] text-[#ED7338]">
              Declare with boldness
            </p>

            <h3 className="font-display text-2xl font-bold leading-[1.5] sm:text-4xl sm:leading-[1.4] lg:text-[2.7rem]">
              “{declarations[0]}”
            </h3>

            <div className="mx-auto mt-9 h-1 w-16 rounded-full bg-[#ED7338]" />
          </div>
        </motion.div>

        {/* Remaining declarations */}
        <div className="grid gap-5 md:grid-cols-2">
          {declarations.slice(1).map((declaration, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.65, delay: index * 0.12 }}
              className={`group relative overflow-hidden rounded-[1.8rem] p-7 transition-transform duration-500 hover:-translate-y-1 sm:p-9 ${
                index === 1
                  ? "bg-[#F4EADC] text-[#183D2B]"
                  : "border border-white/10 bg-[#214B36] text-[#FFF9EF]"
              }`}
            >
              <div className="relative z-10">
                <div className="flex items-center justify-between">
                  <span
                    className={`font-display text-5xl font-bold ${
                      index === 1 ? "text-[#ED7338]/50" : "text-[#E8C98D]/60"
                    }`}
                  >
                    0{index + 2}
                  </span>

                  <Flame
                    size={20}
                    className={
                      index === 1 ? "text-[#ED7338]" : "text-[#E8C98D]"
                    }
                  />
                </div>

                <p className="mt-8 text-base font-medium leading-8 sm:text-lg sm:leading-9">
                  {declaration}
                </p>

                <div
                  className={`mt-8 h-px w-full ${
                    index === 1 ? "bg-[#183D2B]/15" : "bg-white/15"
                  }`}
                />

                <p
                  className={`mt-5 text-[10px] font-bold uppercase tracking-[.25em] ${
                    index === 1 ? "text-[#ED7338]" : "text-[#E8C98D]"
                  }`}
                >
                  My declaration
                </p>
              </div>

              <div
                className={`pointer-events-none absolute -bottom-16 -right-12 h-48 w-48 rounded-full border-[24px] ${
                  index === 1
                    ? "border-[#183D2B]/[0.04]"
                    : "border-white/[0.035]"
                }`}
              />
            </motion.div>
          ))}
        </div>

        {/* Final affirmation */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-20 text-center"
        >
          <div className="mx-auto mb-7 flex h-16 w-16 items-center justify-center rounded-full bg-[#ED7338] text-[#FFF9EF] shadow-lg shadow-black/10">
            <Flame size={29} />
          </div>

          <p className="font-display text-3xl font-bold italic text-[#FFF9EF] sm:text-5xl">
            No more limits for me.
          </p>

          <p className="mt-5 text-xs font-bold uppercase tracking-[.3em] text-[#E8C98D]">
            In Jesus name. Amen.
          </p>

          <div className="mx-auto mt-10 h-12 w-px bg-[#ED7338]/60" />
        </motion.div>
      </div>
    </section>
  );
}
