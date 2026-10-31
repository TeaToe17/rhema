"use client";

import Image from "next/image";
import { motion, Variants } from "framer-motion";
import { ArrowUpRight, Sparkles } from "lucide-react";

const reveal: Variants = {
  hidden: { opacity: 0, y: 35 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

export default function HeroCarousel() {
  return (
    <section className="relative overflow-hidden bg-[#f8f5ed] py-24 sm:py-32">
      {/* Background decoration */}
      <div className="pointer-events-none absolute -left-32 top-20 h-80 w-80 rounded-full bg-[#d9b66b]/10 blur-3xl" />
      <div className="pointer-events-none absolute -right-32 bottom-0 h-96 w-96 rounded-full bg-[#193b2b]/10 blur-3xl" />

      <div className="container-wide relative mx-auto grid items-center gap-16 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
        {/* TEXT CONTENT */}
        <motion.div
          variants={reveal}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="relative z-10"
        >
          <div className="mb-7 flex items-center gap-3">
            <span className="h-px w-10 bg-[#b89650]" />
            <p className="text-[11px] font-bold uppercase tracking-[0.3em] text-[#9a783a]">
              More than a service
            </p>
          </div>

          <h2 className="max-w-xl font-display text-5xl font-semibold leading-[1.02] tracking-tight text-[#183426] sm:text-6xl lg:text-7xl">
            We are
            <br />
            <span className="relative inline-block italic text-[#a98443]">
              becoming.
              <motion.span
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.5 }}
                className="absolute -bottom-2 left-0 h-[3px] w-full origin-left bg-[#c9a65e]"
              />
            </span>
          </h2>

          <p className="mt-9 max-w-md text-base leading-8 text-[#657268] sm:text-lg">
            Come for the songs, stay for the family. Every gathering is an
            invitation to encounter God, grow in faith, and discover the
            fullness of who He has called you to be.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-6">
            <a
              href="/community"
              className="group inline-flex items-center gap-4 rounded-full bg-[#193b2b] px-7 py-4 text-sm font-semibold text-white transition-all duration-300 hover:bg-[#a98443] hover:shadow-xl hover:shadow-[#193b2b]/10"
            >
              Find your community
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/15 transition-transform duration-300 group-hover:rotate-45">
                <ArrowUpRight size={17} />
              </span>
            </a>

            <div className="flex items-center gap-2 text-xs font-medium uppercase tracking-[0.16em] text-[#78847a]">
              <Sparkles size={15} className="text-[#b89650]" />
              Growing together
            </div>
          </div>

          {/* Small statement */}
          <div className="mt-16 border-l border-[#c9a65e] pl-5">
            <p className="font-display text-xl italic text-[#193b2b]">
              "The Home of the Blessed People."
            </p>
            <p className="mt-2 text-[10px] font-semibold uppercase tracking-[0.22em] text-[#929b91]">
              Rhema Chapel, Lekki
            </p>
          </div>
        </motion.div>

        {/* IMAGE COMPOSITION */}
        <motion.div
          initial={{ opacity: 0, x: 45 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative mx-auto w-full max-w-[650px] pb-10 pl-4 sm:pl-10"
        >
          {/* Large landscape image */}
          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
            className="relative aspect-[5/4] w-full overflow-hidden rounded-[2rem] bg-[#193b2b] shadow-2xl shadow-[#193b2b]/15 sm:rounded-[2.5rem]"
          >
            <Image
              src="/rhemalandscapeplaceholder.png"
              alt="Rhema Chapel gathering"
              fill
              priority={false}
              sizes="(max-width: 768px) 100vw, 55vw"
              className="object-cover transition-transform duration-1000 hover:scale-105"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-[#10271c]/65 via-transparent to-transparent" />

            <div className="absolute bottom-6 left-6 right-6 sm:bottom-8 sm:left-8">
              <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#e5c77f]">
                One family
              </p>
              <h3 className="mt-2 font-display text-3xl text-white sm:text-4xl">
                One faith. One purpose.
              </h3>
            </div>
          </motion.div>

          {/* Portrait image overlay */}
          <motion.div
            animate={{
              y: [0, 12, 0],
              rotate: [-3, -1, -3],
            }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -bottom-2 left-0 z-10 h-52 w-36 overflow-hidden rounded-[1.5rem] border-[5px] border-[#f8f5ed] bg-[#193b2b] shadow-2xl sm:-bottom-4 sm:left-4 sm:h-64 sm:w-48 sm:rounded-[2rem]"
          >
            <Image
              src="/rhemaportraitplaceholder.png"
              alt="Life and fellowship at Rhema Chapel"
              fill
              sizes="(max-width: 640px) 144px, 192px"
              className="object-cover"
            />
          </motion.div>

          {/* Floating gold detail */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
            className="absolute -right-3 -top-8 flex h-20 w-20 items-center justify-center rounded-full border border-[#c5a45e]/50 bg-[#f8f5ed] sm:-right-5 sm:-top-10 sm:h-24 sm:w-24"
          >
            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#193b2b] text-[#e2c477] sm:h-16 sm:w-16">
              <Sparkles size={24} />
            </div>
          </motion.div>

          {/* Small floating caption */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6, duration: 0.7 }}
            className="absolute -bottom-5 right-2 z-20 rounded-2xl border border-[#e9dfc9] bg-white/90 px-5 py-4 shadow-xl backdrop-blur-md sm:right-5"
          >
            <p className="font-display text-lg italic text-[#193b2b]">
              A place to belong.
            </p>
            <p className="mt-1 text-[9px] font-bold uppercase tracking-[0.2em] text-[#a98443]">
              You are welcome here
            </p>
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom decorative line */}
      <div className="container-wide mx-auto mt-24 flex items-center gap-5">
        <div className="h-px flex-1 bg-[#ded8ca]" />
        <span className="text-[9px] font-semibold uppercase tracking-[0.3em] text-[#a98443]">
          Faith · Fellowship · Purpose
        </span>
        <div className="h-px flex-1 bg-[#ded8ca]" />
      </div>
    </section>
  );
}
