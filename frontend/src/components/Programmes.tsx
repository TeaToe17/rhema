"use client";

import Image from "next/image";
import { motion, Variants } from "framer-motion";
import { ArrowUpRight, CalendarDays, Clock3, Heart, Video } from "lucide-react";

const programmes = [
  {
    title: "Midweek Service",
    day: "Every Wednesday",
    time: "6:00 — 8:00 PM",
    description: "A deeper dive into the Word and a time to grow in faith.",
    image: "/biblestudy.webp",
    icon: CalendarDays,
    number: "02",
  },
  {
    title: "Friday Online",
    day: "Every Friday",
    time: "7:00 — 8:00 PM",
    description: "Stay connected, wherever life finds you.",
    image: "/prayer pic.jpg",
    icon: Video,
    number: "03",
  },
];

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

export default function Programmes() {
  return (
    <section
      id="programmes"
      className="relative overflow-hidden bg-[#f8f5ed] py-24 sm:py-32"
    >
      {/* Decorative background */}
      <div className="pointer-events-none absolute -right-40 top-20 h-96 w-96 rounded-full bg-[#d9b66b]/10 blur-3xl" />
      <div className="pointer-events-none absolute -left-40 bottom-0 h-96 w-96 rounded-full bg-[#193b2b]/5 blur-3xl" />

      <div className="container-wide relative mx-auto">
        {/* Section heading */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="mb-14 flex flex-col justify-between gap-8 md:flex-row md:items-end"
        >
          <div>
            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-10 bg-[#b89650]" />
              <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#a98443]">
                Make room for what matters
              </p>
            </div>

            <h2 className="max-w-xl font-display text-5xl font-semibold leading-[1.05] tracking-tight text-[#193b2b] sm:text-6xl lg:text-7xl">
              Life is better
              <br />
              <span className="italic text-[#a98443]">together.</span>
            </h2>
          </div>

          <div className="max-w-sm md:pb-2">
            <p className="text-sm leading-7 text-[#6d796f] sm:text-base">
              There's always room to worship, learn, connect and grow. Find a
              gathering that fits into your week and come be part of the family.
            </p>
          </div>
        </motion.div>

        {/* Programme layout */}
        <div className="grid gap-5 lg:grid-cols-[1.25fr_0.75fr]">
          {/* Main Sunday programme */}
          <motion.article
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8 }}
            whileHover={{ y: -5 }}
            className="group relative min-h-[470px] overflow-hidden rounded-[2rem] bg-[#193b2b] sm:min-h-[540px]"
          >
            <Image
              src="/rhemalandscapeplaceholder.png"
              alt="Sunday Celebration at Rhema Chapel"
              fill
              sizes="(max-width: 1024px) 100vw, 65vw"
              className="object-cover transition-transform duration-1000 group-hover:scale-105"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-[#10251a] via-[#10251a]/45 to-transparent" />

            <div className="absolute left-7 top-7 flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2.5 text-[10px] font-bold uppercase tracking-[0.2em] text-white backdrop-blur-md sm:left-9 sm:top-9">
              <Heart size={13} className="text-[#e5c77f]" />
              Our main family gathering
            </div>

            <div className="absolute bottom-0 left-0 right-0 p-7 sm:p-10">
              <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.25em] text-[#e5c77f]">
                01 / Every Sunday
              </p>

              <h3 className="font-display text-4xl font-semibold text-white sm:text-5xl lg:text-6xl">
                Sunday
                <br />
                Celebration.
              </h3>

              <p className="mt-4 max-w-md text-sm leading-7 text-white/75">
                Our main family gathering. Come together for worship, the Word
                and an atmosphere of faith.
              </p>

              <div className="mt-7 flex flex-wrap items-center gap-5 border-t border-white/20 pt-6">
                <div className="flex items-center gap-2 text-sm font-medium text-white">
                  <Clock3 size={16} className="text-[#e5c77f]" />
                  9:00 — 11:30 AM
                </div>

                <div className="flex items-center gap-2 text-sm font-medium text-white">
                  <CalendarDays size={16} className="text-[#e5c77f]" />
                  Every Sunday
                </div>
              </div>
            </div>
          </motion.article>

          {/* Supporting programmes */}
          <div className="flex flex-col gap-5">
            {programmes.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.article
                  key={item.title}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{
                    duration: 0.7,
                    delay: index * 0.15,
                  }}
                  whileHover={{ y: -5 }}
                  className="group relative flex min-h-[220px] flex-1 overflow-hidden rounded-[2rem] border border-[#e9e1d2] bg-white"
                >
                  {/* Portrait image */}
                  <div className="relative min-h-full w-[36%] shrink-0 overflow-hidden bg-[#193b2b] sm:w-[40%]">
                    <Image
                      src={item.image}
                      alt={`${item.title} at Rhema Chapel`}
                      fill
                      sizes="(max-width: 768px) 36vw, 240px"
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-[#193b2b]/10" />

                    <span className="absolute left-3 top-3 flex h-9 w-9 items-center justify-center rounded-full bg-[#f8f5ed]/90 font-display text-sm text-[#193b2b]">
                      {item.number}
                    </span>
                  </div>

                  {/* Programme details */}
                  <div className="flex flex-1 flex-col justify-center p-5 sm:p-7">
                    <div className="mb-4 flex h-9 w-9 items-center justify-center rounded-full bg-[#f4efe3] text-[#a98443]">
                      <Icon size={17} />
                    </div>

                    <h3 className="font-display text-2xl font-semibold leading-tight text-[#193b2b] sm:text-3xl">
                      {item.title}
                    </h3>

                    <p className="mt-3 text-[10px] font-bold uppercase tracking-[0.15em] text-[#a98443]">
                      {item.day}
                    </p>

                    <p className="mt-2 flex items-center gap-2 text-xs font-semibold text-[#647267]">
                      <Clock3 size={14} />
                      {item.time}
                    </p>

                    <p className="mt-4 text-xs leading-6 text-[#7a857b] sm:text-sm">
                      {item.description}
                    </p>
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>

        {/* Closing note */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-10 flex flex-col items-center justify-between gap-5 rounded-2xl border border-[#e6dece] bg-[#f2eee4] px-6 py-6 sm:flex-row sm:px-9"
        >
          <div className="flex items-center gap-4">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#193b2b] text-[#e5c77f]">
              <Heart size={18} />
            </div>
            <div>
              <p className="font-display text-lg text-[#193b2b]">
                There's a place for you here.
              </p>
              <p className="mt-1 text-xs text-[#788278]">
                We'd love to have you worship with us.
              </p>
            </div>
          </div>

          <a
            href="/connect"
            className="group inline-flex items-center gap-3 text-xs font-bold uppercase tracking-[0.15em] text-[#193b2b] transition-colors hover:text-[#a98443]"
          >
            Plan your visit
            <span className="flex h-9 w-9 items-center justify-center rounded-full border border-[#c9b98f] transition-all group-hover:rotate-45 group-hover:bg-[#193b2b] group-hover:text-white">
              <ArrowUpRight size={16} />
            </span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
