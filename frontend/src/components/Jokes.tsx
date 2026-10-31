"use client";

import { motion } from "framer-motion";
import { Sparkles, Sun, Laugh } from "lucide-react";

const jokes = [
  {
    number: "01",
    question: "Why did the choir bring a ladder to rehearsal?",
    answer: "They wanted to reach a higher note.",
    accent: "#D99A72",
    rotation: "-rotate-1",
  },
  {
    number: "02",
    question: "What is a church drummer’s favourite kind of story?",
    answer: "One with a good beat — and a happy ending.",
    accent: "#B7A16B",
    rotation: "rotate-1",
  },
];

export default function Jokes() {
  return (
    <section className="relative overflow-hidden bg-[#F4EADC] px-5 py-24 sm:py-28">
      {/* Decorative background elements */}
      <div className="pointer-events-none absolute -right-24 top-0 h-72 w-72 rounded-full bg-[#D99A72]/10 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 -left-20 h-72 w-72 rounded-full bg-[#183D2B]/[0.07] blur-3xl" />

      <div className="container-wide relative">
        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="mb-12 flex flex-col justify-between gap-5 sm:flex-row sm:items-end"
        >
          <div>
            <div className="mb-5 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#E8C98D] text-[#183D2B]">
                <Sun size={21} />
              </div>

              <span className="text-xs font-bold uppercase tracking-[.25em] text-[#A66D50]">
                A moment of joy
              </span>
            </div>

            <h2 className="font-display text-4xl font-bold leading-tight text-[#183D2B] sm:text-6xl">
              A little church
              <span className="block font-normal italic text-[#B87554]">
                joy.
              </span>
            </h2>
          </div>

          <p className="max-w-xs text-sm leading-7 text-[#6F7567]">
            Faith is serious business, but that doesn't mean we can't have a
            little fun along the way.
          </p>
        </motion.div>

        {/* Joke cards */}
        <div className="grid gap-5 md:grid-cols-2">
          {jokes.map((joke, index) => (
            <motion.div
              key={joke.number}
              initial={{ opacity: 0, y: 35, rotate: index === 0 ? -2 : 2 }}
              whileInView={{ opacity: 1, y: 0, rotate: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7, delay: index * 0.15 }}
              whileHover={{ y: -7, rotate: index === 0 ? 0.5 : -0.5 }}
              className="group relative overflow-hidden rounded-[2rem] border border-[#183D2B]/[0.07] bg-[#FFF9EF] p-7 shadow-[0_15px_45px_rgba(39,55,37,0.05)] sm:p-10"
            >
              {/* Oversized quotation mark */}
              <span
                className="pointer-events-none absolute -right-1 -top-10 font-display text-[180px] font-bold leading-none opacity-[0.055]"
                style={{ color: joke.accent }}
              >
                “
              </span>

              <div className="relative">
                <div className="mb-9 flex items-center justify-between">
                  <span
                    className="flex h-11 w-11 items-center justify-center rounded-2xl"
                    style={{
                      backgroundColor: `${joke.accent}25`,
                      color: joke.accent,
                    }}
                  >
                    <Laugh size={21} />
                  </span>

                  <span className="font-display text-sm font-bold tracking-widest text-[#183D2B]/30">
                    {joke.number}
                  </span>
                </div>

                <p className="max-w-lg font-display text-2xl font-bold leading-snug text-[#183D2B] sm:text-3xl">
                  {joke.question}
                </p>

                <div className="my-7 flex items-center gap-3">
                  <span
                    className="h-[2px] w-10 rounded-full"
                    style={{ backgroundColor: joke.accent }}
                  />
                  <span className="text-[10px] font-bold uppercase tracking-[.22em] text-[#8C897B]">
                    The answer
                  </span>
                </div>

                <p
                  className="text-lg font-semibold leading-relaxed sm:text-xl"
                  style={{ color: joke.accent }}
                >
                  {joke.answer}
                </p>
              </div>

              <Sparkles
                size={22}
                className="absolute bottom-7 right-7 text-[#E8C98D] opacity-70 transition-all duration-500 group-hover:rotate-45 group-hover:scale-125"
              />
            </motion.div>
          ))}
        </div>

        {/* Closing detail */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-12 flex items-center justify-center gap-3 text-center"
        >
          <span className="h-px w-8 bg-[#D99A72]/60" />
          <p className="text-[10px] font-bold uppercase tracking-[.25em] text-[#78816E]">
            There's always room for joy
          </p>
          <span className="h-px w-8 bg-[#D99A72]/60" />
        </motion.div>
      </div>
    </section>
  );
}
