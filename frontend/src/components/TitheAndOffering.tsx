"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowUpRight,
  Check,
  Copy,
  Heart,
  Landmark,
  Sparkles,
} from "lucide-react";

export default function TitheAndOffering() {
  const [copied, setCopied] = useState(false);

  const accountNumber = "0008687251";

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(accountNumber);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  };

  return (
    <section className="relative isolate overflow-hidden bg-[#14291e] px-5 py-24 text-white sm:py-32">
      {/* Background decoration */}
      <div className="pointer-events-none absolute -right-40 -top-40 -z-10 h-[500px] w-[500px] rounded-full border border-[#d9b66b]/10" />
      <div className="pointer-events-none absolute -right-20 -top-20 -z-10 h-[350px] w-[350px] rounded-full border border-[#d9b66b]/10" />
      <div className="pointer-events-none absolute -bottom-40 -left-40 -z-10 h-[450px] w-[450px] rounded-full bg-[#d9b66b]/[0.06] blur-3xl" />

      <div className="container-wide relative mx-auto grid items-center gap-16 lg:grid-cols-[0.9fr_1.1fr] lg:gap-24">
        {/* LEFT: MESSAGE */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
        >
          <div className="mb-7 flex items-center gap-3">
            <span className="h-px w-10 bg-[#d9b66b]" />
            <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#d9b66b]">
              Give with grace
            </p>
          </div>

          <h2 className="max-w-xl font-display text-5xl font-semibold leading-[1.04] tracking-tight sm:text-6xl lg:text-7xl">
            Your generosity
            <br />
            makes <span className="italic text-[#d9b66b]">room.</span>
          </h2>

          <p className="mt-8 max-w-md text-sm leading-8 text-white/60 sm:text-base">
            Every gift is an opportunity to partner with the work God is doing
            through this house. Thank you for giving with a willing heart and
            helping us make room for more lives to be touched.
          </p>

          <div className="mt-12 flex items-center gap-4 border-t border-white/10 pt-8">
            <div className="flex h-12 w-12 items-center justify-center rounded-full border border-[#d9b66b]/30 text-[#d9b66b]">
              <Heart size={20} />
            </div>
            <div>
              <p className="font-display text-lg italic text-white">
                Giving is an act of worship.
              </p>
              <p className="mt-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-white/35">
                Thank you for partnering with us
              </p>
            </div>
          </div>
        </motion.div>

        {/* RIGHT: BANK DETAILS */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.9, delay: 0.15 }}
          className="relative"
        >
          {/* Decorative label */}
          <div className="absolute -right-3 -top-5 z-10 flex h-16 w-16 items-center justify-center rounded-full border border-[#d9b66b]/30 bg-[#203b2c] text-[#d9b66b] shadow-xl sm:-right-5 sm:-top-7 sm:h-20 sm:w-20">
            <Sparkles size={25} />
          </div>

          <div className="overflow-hidden rounded-[2rem] bg-[#f8f5ed] text-[#193b2b] shadow-2xl shadow-black/20">
            {/* Account header */}
            <div className="relative overflow-hidden bg-[#eae4d6] px-7 py-8 sm:px-10 sm:py-10">
              <div className="pointer-events-none absolute -right-10 -top-20 h-60 w-60 rounded-full border border-[#b89650]/20" />
              <div className="pointer-events-none absolute -right-2 -top-12 h-44 w-44 rounded-full border border-[#b89650]/20" />

              <div className="relative flex items-center gap-4">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[#193b2b] text-[#d9b66b] shadow-lg">
                  <Landmark size={24} />
                </div>

                <div>
                  <p className="font-display text-xl font-semibold sm:text-2xl">
                    Rhema Chapel
                  </p>
                  <p className="mt-1 text-[10px] font-bold uppercase tracking-[0.18em] text-[#8b7957]">
                    Intl Churches
                  </p>
                </div>
              </div>

              <div className="relative mt-9">
                <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#9b824c]">
                  Tithe & Offering
                </p>
                <h3 className="mt-2 font-display text-3xl font-semibold text-[#193b2b] sm:text-4xl">
                  Giving account
                </h3>
              </div>
            </div>

            {/* Bank details */}
            <div className="px-7 py-8 sm:px-10 sm:py-10">
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-[#9a9c8c]">
                    Bank
                  </p>
                  <p className="mt-2 text-lg font-semibold text-[#193b2b]">
                    GTBank
                  </p>
                </div>

                <div>
                  <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-[#9a9c8c]">
                    Account name
                  </p>
                  <p className="mt-2 text-sm font-semibold leading-6 text-[#193b2b]">
                    Rhema Chapel Intl Churches
                  </p>
                </div>
              </div>

              {/* Account number */}
              <div className="mt-8 rounded-2xl border border-[#e5dfd1] bg-white p-5 sm:p-6">
                <div className="flex items-center justify-between gap-3">
                  <p className="text-[9px] font-bold uppercase tracking-[0.22em] text-[#9a9c8c]">
                    Account number
                  </p>
                  <span className="rounded-full bg-[#edf2e9] px-3 py-1 text-[9px] font-bold uppercase tracking-wider text-[#426b4e]">
                    Bank transfer
                  </span>
                </div>

                <div className="mt-4 flex items-center justify-between gap-3">
                  <p className="font-display text-3xl font-semibold tracking-[0.12em] text-[#193b2b] sm:text-4xl">
                    {accountNumber}
                  </p>

                  <button
                    onClick={copy}
                    className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#193b2b] text-white transition-all duration-300 hover:bg-[#a98443] active:scale-95"
                    aria-label="Copy account number"
                    title="Copy account number"
                  >
                    <AnimatePresence mode="wait" initial={false}>
                      {copied ? (
                        <motion.span
                          key="check"
                          initial={{ scale: 0, rotate: -45 }}
                          animate={{ scale: 1, rotate: 0 }}
                          exit={{ scale: 0 }}
                        >
                          <Check size={19} />
                        </motion.span>
                      ) : (
                        <motion.span
                          key="copy"
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          exit={{ scale: 0 }}
                        >
                          <Copy size={18} />
                        </motion.span>
                      )}
                    </AnimatePresence>
                  </button>
                </div>

                <AnimatePresence>
                  {copied && (
                    <motion.p
                      initial={{ opacity: 0, height: 0, y: 5 }}
                      animate={{ opacity: 1, height: "auto", y: 0 }}
                      exit={{ opacity: 0, height: 0 }}
                      className="mt-3 text-xs font-semibold text-[#47764e]"
                    >
                      Account number copied successfully.
                    </motion.p>
                  )}
                </AnimatePresence>
              </div>

              {/* Payment instruction */}
              <div className="mt-6 flex gap-3">
                <div className="mt-0.5 h-5 w-1 shrink-0 rounded-full bg-[#b89650]" />
                <p className="text-xs leading-6 text-[#788278]">
                  Please include a narration describing what your payment is for
                  when making your transfer.
                </p>
              </div>
            </div>

            {/* Bottom strip */}
            <div className="flex items-center justify-between gap-4 bg-[#193b2b] px-7 py-5 text-white sm:px-10">
              <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-white/60">
                The Home of the Blessed People
              </p>
              <Sparkles size={16} className="text-[#d9b66b]" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
