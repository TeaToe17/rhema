"use client";

import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Music2,
  Camera,
  Laptop,
  HeartHandshake,
  Baby,
  Users,
} from "lucide-react";

const departments = [
  {
    name: "Choir",
    description: "Lead the house into worship.",
    image: "/choir.jpg",
    Icon: Music2,
  },
  {
    name: "Media",
    description: "Share the story beyond the room.",
    image: "/media.jpg",
    Icon: Camera,
  },
  {
    name: "IT & Tech",
    description: "Keep the systems serving people.",
    image: "/IT.png",
    Icon: Laptop,
  },
  {
    name: "Ushering",
    description: "Make every person feel at home.",
    image: "/ushering.png",
    Icon: HeartHandshake,
  },
  {
    name: "Children",
    description: "Nurture little hearts in faith.",
    image: "/baby.jpg",
    Icon: Baby,
  },
  {
    name: "Welfare",
    description: "Care for our family with love.",
    image: "/welfare.jpeg",
    Icon: Users,
  },
];

export default function Departments() {
  return (
    <section className="relative overflow-hidden bg-[#FFF9EF] py-20 sm:py-28">
      {/* Subtle background details */}
      <div className="pointer-events-none absolute -right-32 top-10 size-96 rounded-full bg-[#A8B99A]/10 blur-[100px]" />
      <div className="pointer-events-none absolute -left-32 bottom-0 size-96 rounded-full bg-[#D99A72]/10 blur-[100px]" />

      <div className="container-wide relative">
        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 max-w-3xl sm:mb-16"
        >
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#A66D50]/20 bg-[#F4EADC] px-4 py-2">
            <span className="size-2 rounded-full bg-[#D99A72]" />
            <p className="text-[10px] font-black uppercase tracking-[0.22em] text-[#A66D50]">
              Find your place
            </p>
          </div>

          <h2 className="font-display text-4xl font-bold leading-[1.05] tracking-tight text-[#183D2B] sm:text-5xl lg:text-6xl">
            There is a seat
            <br />
            <span className="text-[#A66D50]">at the table.</span>
          </h2>

          <p className="mt-5 max-w-xl text-sm leading-7 text-[#6F7567] sm:text-base">
            Church is more than attending a service. Discover a place to serve,
            build meaningful relationships, and make a difference alongside
            others.
          </p>
        </motion.div>

        {/* Department gallery */}
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {departments.map((department, index) => {
            const Icon = department.Icon;

            return (
              <motion.article
                key={department.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{
                  duration: 0.55,
                  delay: (index % 3) * 0.1,
                }}
                whileHover={{ y: -7 }}
                className="group relative isolate min-h-[340px] overflow-hidden rounded-[1.7rem] bg-[#183D2B] shadow-sm"
              >
                {/* Department photograph */}
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                  style={{
                    backgroundImage: `url('${department.image}')`,
                  }}
                />

                {/* Image overlays */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#10291D] via-[#183D2B]/35 to-[#183D2B]/5" />
                <div className="absolute inset-0 bg-gradient-to-br from-[#183D2B]/20 to-transparent" />

                {/* Top details */}
                <div className="absolute left-5 right-5 top-5 flex items-center justify-between">
                  <span className="flex size-10 items-center justify-center rounded-xl border border-[#FFF9EF]/20 bg-[#183D2B]/35 text-[#E8D7B5] backdrop-blur-md">
                    <Icon size={19} />
                  </span>

                  <span className="rounded-full border border-[#FFF9EF]/20 bg-[#183D2B]/35 px-3 py-1.5 text-[9px] font-bold uppercase tracking-[0.16em] text-[#FFF9EF]/85 backdrop-blur-md">
                    Department {String(index + 1).padStart(2, "0")}
                  </span>
                </div>

                {/* Bottom content */}
                <div className="absolute inset-x-0 bottom-0 p-6 sm:p-7">
                  <div className="mb-3 h-px w-10 bg-[#D6B978] transition-all duration-500 group-hover:w-16" />

                  <h3 className="text-2xl font-black tracking-tight text-[#FFF9EF] sm:text-3xl">
                    {department.name}
                  </h3>

                  <p className="mt-2 max-w-xs text-sm leading-6 text-[#FFF9EF]/70">
                    {department.description}
                  </p>

                  <a
                    href="#connect"
                    className="mt-6 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.15em] text-[#E8D7B5] transition-colors hover:text-white"
                  >
                    Get involved
                    <ArrowUpRight
                      size={16}
                      className="transition-transform group-hover:-translate-y-1 group-hover:translate-x-1"
                    />
                  </a>
                </div>

                {/* Decorative border */}
                <div className="pointer-events-none absolute inset-0 rounded-[1.7rem] border border-white/10 transition-colors duration-500 group-hover:border-[#D6B978]/50" />
              </motion.article>
            );
          })}
        </div>

        {/* Bottom note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-10 flex flex-col gap-3 border-t border-[#183D2B]/10 pt-7 sm:flex-row sm:items-center sm:justify-between"
        >
          <p className="max-w-lg text-sm leading-6 text-[#6F7567]">
            You don't have to have it all figured out. There's room to learn,
            grow, and serve.
          </p>

          <a
            href="#connect"
            className="inline-flex w-fit items-center gap-2 text-sm font-bold text-[#183D2B] transition-colors hover:text-[#A66D50]"
          >
            Find your place
            <ArrowUpRight size={17} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
