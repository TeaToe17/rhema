"use client";

import { motion } from "framer-motion";
import { Quote, ArrowUpRight } from "lucide-react";

const testimonies = [
  {
    name: "Amaka",
    text: "I came looking for a service and found a family. The warmth here is something I carry into every week.",
  },
  {
    name: "Daniel",
    text: "Rhema Chapel helped me remember that faith is not a solo journey. I am growing and I am grateful.",
  },
  {
    name: "Tomi",
    text: "The Word became practical for me here. I have found courage to take the next step.",
  },
];

export default function Testimonies() {
  return (
    <section className="relative isolate overflow-hidden bg-[#FFF9EF] px-5 py-20 sm:py-28">
      {/* Background details */}
      <div className="pointer-events-none absolute -left-32 top-10 -z-10 size-80 rounded-full bg-[#A8B99A]/15 blur-[100px]" />
      <div className="pointer-events-none absolute -right-32 bottom-0 -z-10 size-96 rounded-full bg-[#D99A72]/10 blur-[110px]" />

      <div className="container-wide relative">
        {/* Heading */}
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
              Stories from the family
            </p>
          </div>

          <h2 className="font-display text-4xl font-bold leading-[1.05] tracking-tight text-[#183D2B] sm:text-5xl lg:text-6xl">
            Every story has
            <br />
            <span className="text-[#A66D50]">a place here.</span>
          </h2>

          <p className="mt-5 max-w-xl text-sm leading-7 text-[#6F7567] sm:text-base">
            Different journeys, shared faith, and the beautiful experience of
            growing together as a family.
          </p>
        </motion.div>

        {/* Testimony cards */}
        <div className="grid gap-5 md:grid-cols-3">
          {testimonies.map((testimony, index) => (
            <motion.blockquote
              key={testimony.name}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.6,
                delay: index * 0.12,
              }}
              whileHover={{ y: -6 }}
              className={`group relative flex min-h-[310px] flex-col overflow-hidden rounded-[1.7rem] border p-7 transition duration-500 sm:p-8 ${
                index === 1
                  ? "border-[#D6B978]/30 bg-[#183D2B] text-[#FFF9EF]"
                  : "border-[#183D2B]/10 bg-[#F4EADC] text-[#183D2B]"
              }`}
            >
              {/* Decorative quotation mark */}
              <Quote
                size={54}
                strokeWidth={1.2}
                className={`mb-7 ${
                  index === 1 ? "text-[#D6B978]/60" : "text-[#A66D50]/35"
                }`}
              />

              <p
                className={`flex-1 font-display text-lg leading-8 sm:text-xl ${
                  index === 1 ? "text-[#FFF9EF]" : "text-[#183D2B]"
                }`}
              >
                “{testimony.text}”
              </p>

              <footer
                className={`mt-8 flex items-center justify-between border-t pt-5 ${
                  index === 1 ? "border-[#FFF9EF]/15" : "border-[#183D2B]/10"
                }`}
              >
                <div>
                  <cite className="block text-sm font-black not-italic">
                    {testimony.name}
                  </cite>

                  <span
                    className={`mt-1 block text-[10px] font-bold uppercase tracking-[0.16em] ${
                      index === 1 ? "text-[#D6B978]" : "text-[#A66D50]"
                    }`}
                  >
                    Rhema family
                  </span>
                </div>

                <span
                  className={`flex size-9 items-center justify-center rounded-full border transition duration-300 group-hover:rotate-45 ${
                    index === 1
                      ? "border-[#FFF9EF]/20 text-[#D6B978] group-hover:bg-[#D6B978] group-hover:text-[#183D2B]"
                      : "border-[#183D2B]/15 text-[#A66D50] group-hover:bg-[#183D2B] group-hover:text-[#FFF9EF]"
                  }`}
                >
                  <ArrowUpRight size={17} />
                </span>
              </footer>

              {/* Decorative corner */}
              <div
                className={`pointer-events-none absolute -right-12 -top-12 size-36 rounded-full border ${
                  index === 1
                    ? "border-[#FFF9EF]/[0.06]"
                    : "border-[#183D2B]/[0.06]"
                }`}
              />
            </motion.blockquote>
          ))}
        </div>

        {/* Closing statement */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-12 flex flex-col gap-4 border-t border-[#183D2B]/10 pt-7 sm:flex-row sm:items-center sm:justify-between"
        >
          <p className="max-w-lg text-sm leading-6 text-[#6F7567]">
            Your story matters too. There is room to belong, grow and become.
          </p>

          <a
            href="#connect"
            className="inline-flex w-fit items-center gap-2 text-sm font-bold text-[#183D2B] transition-colors hover:text-[#A66D50]"
          >
            Become part of the family
            <ArrowUpRight size={17} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
