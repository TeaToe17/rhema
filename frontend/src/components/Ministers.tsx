"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight, Sparkles, Heart } from "lucide-react";

const ministers = [
  {
    name: "Pastor Tolu",
    role: "Minister",
    image: "/rhemaportraitplaceholder.png",
  },
  {
    name: "Minister Ada",
    role: "Minister",
    image: "/rhemaportraitplaceholder.png",
  },
];

export default function Ministers() {
  return (
    <section className="relative overflow-hidden bg-[#F4EADC] py-24 sm:py-28">
      {/* Background atmosphere */}
      <div className="pointer-events-none absolute -right-32 top-20 size-96 rounded-full bg-[#D99A72]/10 blur-[100px]" />
      <div className="pointer-events-none absolute -left-32 bottom-0 size-96 rounded-full bg-[#A8B99A]/20 blur-[110px]" />

      <div className="container-wide relative">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="mb-14 flex flex-col justify-between gap-6 md:flex-row md:items-end"
        >
          <div>
            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-10 bg-[#A66D50]" />
              <p className="text-xs font-bold uppercase tracking-[.28em] text-[#A66D50]">
                The people who serve
              </p>
            </div>

            <h2 className="max-w-2xl font-display text-5xl font-bold leading-[1.05] text-[#183D2B] sm:text-6xl lg:text-7xl">
              Leadership with
              <span className="block font-normal italic text-[#A66D50]">
                a heart for people.
              </span>
            </h2>
          </div>

          <p className="max-w-sm text-sm leading-7 text-[#6F7567] sm:text-base">
            Meet the people committed to building a family of faith, nurturing
            lives and serving God's purpose in our community.
          </p>
        </motion.div>

        {/* Featured minister */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
          className="mb-16 grid overflow-hidden rounded-[2rem] border border-[#183D2B]/10 bg-[#183D2B] shadow-xl shadow-[#183D2B]/10 md:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)]"
        >
          {/* Featured portrait */}
          <div className="relative mx-auto aspect-[3/4] w-full max-w-[420px] overflow-hidden bg-[#314b39] md:mx-0 md:max-w-none">
            <Image
              src="/rhemaportraitplaceholder.png"
              alt="Pastor Emmanuel"
              fill
              priority
              sizes="(max-width: 768px) 100vw, 40vw"
              className="object-cover object-top transition-transform duration-1000 hover:scale-105"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-[#14251c]/60 via-transparent to-transparent" />

            <div className="absolute left-5 top-5 flex items-center gap-2 rounded-full border border-white/20 bg-[#183D2B]/60 px-4 py-2 text-white backdrop-blur-md">
              <Sparkles size={13} className="text-[#E8D7B5]" />
              <span className="text-[10px] font-bold uppercase tracking-[.2em]">
                Our leadership
              </span>
            </div>
          </div>

          {/* Featured details */}
          <div className="flex flex-col justify-center px-7 py-10 text-white sm:px-10 md:px-12 lg:px-16">
            <p className="mb-5 text-xs font-bold uppercase tracking-[.25em] text-[#E8D7B5]">
              Minister in charge
            </p>

            <h3 className="font-display text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
              Pastor Emmanuel
            </h3>

            <div className="my-7 h-px w-16 bg-[#D99A72]" />

            <p className="max-w-md text-sm leading-8 text-white/70 sm:text-base">
              Leading our house with wisdom, warmth and a heart for people.
            </p>

            <div className="mt-10 flex items-center gap-3 text-[#E8D7B5]">
              <Heart size={17} />
              <span className="text-xs font-semibold uppercase tracking-[.16em]">
                Serving with purpose
              </span>
            </div>

            <div className="mt-12 flex items-center gap-3 text-xs font-semibold uppercase tracking-[.16em] text-white/50">
              <span className="h-px w-8 bg-[#D99A72]" />
              Rhema Chapel leadership
            </div>
          </div>
        </motion.div>

        {/* Supporting ministers heading */}
        <div className="mb-8 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-xs font-bold uppercase tracking-[.25em] text-[#A66D50]">
              Serving alongside
            </p>
            <h3 className="mt-2 font-display text-3xl font-bold text-[#183D2B] sm:text-4xl">
              Our ministers.
            </h3>
          </div>

          <p className="max-w-sm text-sm leading-6 text-[#6F7567]">
            Different gifts and callings, united in service and purpose.
          </p>
        </div>

        {/* Supporting ministers portrait grid */}
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3 xl:grid-cols-4">
          {ministers.map((minister, index) => (
            <motion.div
              key={`${minister.name}-${index}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{
                duration: 0.6,
                delay: (index % 4) * 0.1,
              }}
              className="group relative overflow-hidden rounded-[1.5rem] border border-[#183D2B]/10 bg-[#FFF9EF] shadow-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-xl hover:shadow-[#183D2B]/10 sm:rounded-[1.8rem]"
            >
              {/* Portrait */}
              <div className="relative aspect-[3/4] overflow-hidden bg-[#D8DCCF]">
                <Image
                  src={minister.image}
                  alt={minister.name}
                  fill
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#183D2B]/70 via-transparent to-transparent opacity-80" />

                <div className="absolute right-3 top-3 grid size-8 place-items-center rounded-full border border-white/30 bg-[#183D2B]/50 text-[#E8D7B5] backdrop-blur-md transition-all duration-300 group-hover:bg-[#E8D7B5] group-hover:text-[#183D2B] sm:right-4 sm:top-4 sm:size-9">
                  <ArrowUpRight size={15} />
                </div>

                <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6">
                  <p className="mb-2 text-[9px] font-bold uppercase tracking-[.2em] text-[#E8D7B5] sm:text-[10px]">
                    {minister.role}
                  </p>

                  <h4 className="font-display text-xl font-bold leading-tight text-white sm:text-2xl">
                    {minister.name}
                  </h4>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Closing line */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-16 flex flex-col items-center justify-center gap-3 text-center"
        >
          <span className="h-8 w-px bg-[#A66D50]/50" />
          <p className="font-display text-xl italic text-[#6F7567] sm:text-2xl">
            One family. One faith. One purpose.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
