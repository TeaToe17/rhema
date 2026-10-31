"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X, ArrowUpRight } from "lucide-react";

const links = [
  { name: "Home", href: "/" },
  { name: "Connect", href: "/connect" },
  { name: "Community", href: "/community" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4 md:px-8 md:pt-6">
      <motion.div
        initial={{ y: -35, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="mx-auto flex max-w-[1440px] items-center justify-between rounded-full border border-[#e7d7bc]/20 bg-[#183D2B]/95 px-5 py-3 shadow-[0_12px_50px_rgba(12,35,24,0.24)] backdrop-blur-2xl md:px-8 md:py-3.5"
      >
        {/* BRAND */}
        <Link
          href="/"
          onClick={() => setOpen(false)}
          className="group flex items-center gap-3"
        >
          <div className="relative size-12 shrink-0 overflow-hidden rounded-full border border-[#e7d7bc]/50 bg-white p-1.5 shadow-md transition-transform duration-500 group-hover:scale-105">
            <Image
              src="/rhemalogo.png"
              alt="Rhema Chapel Logo"
              fill
              priority
              sizes="48px"
              className="object-contain"
            />
          </div>

          <div className="flex flex-col">
            <span className="font-display text-[19px] font-semibold leading-none tracking-tight text-[#FFF9EF]">
              Rhema<span className="text-[#D99A72]">.</span>
            </span>
            <span className="mt-1.5 whitespace-nowrap text-[12px] font-semibold uppercase tracking-[0.19em] text-[#E9DCC8]/75 sm:text-[11px] sm:tracking-[0.22em]">
              The Home of the Blessed People
            </span>
          </div>
        </Link>

        {/* DESKTOP NAVIGATION */}
        <nav className="hidden items-center gap-10 md:flex">
          {links.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="group relative py-2 text-[13px] font-medium tracking-wide text-[#FFF9EF]/75 transition-colors duration-300 hover:text-white"
            >
              {link.name}

              <span className="absolute -bottom-0.5 left-0 h-[2px] w-0 rounded-full bg-[#D99A72] transition-all duration-300 group-hover:w-full" />
            </Link>
          ))}
        </nav>

        {/* DESKTOP CTA */}
        <div className="hidden md:block">
          <Link
            href="/connect"
            className="group flex items-center gap-3 rounded-full bg-[#E8C98D] px-5 py-3 text-[11px] font-bold uppercase tracking-[0.12em] text-[#183D2B] shadow-[0_5px_20px_rgba(232,201,141,0.12)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#FFF0CC] hover:shadow-[0_8px_28px_rgba(232,201,141,0.22)]"
          >
            Plan a Visit
            <ArrowUpRight
              size={15}
              className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </Link>
        </div>

        {/* MOBILE TOGGLE */}
        <button
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen(!open)}
          className="grid size-10 place-items-center rounded-full border border-white/20 bg-white/5 text-[#FFF9EF] transition-colors hover:bg-white/15 md:hidden"
        >
          <AnimatePresence mode="wait" initial={false}>
            <motion.span
              key={open ? "close" : "open"}
              initial={{ opacity: 0, rotate: -90, scale: 0.7 }}
              animate={{ opacity: 1, rotate: 0, scale: 1 }}
              exit={{ opacity: 0, rotate: 90, scale: 0.7 }}
              transition={{ duration: 0.2 }}
            >
              {open ? <X size={20} /> : <Menu size={20} />}
            </motion.span>
          </AnimatePresence>
        </button>
      </motion.div>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -12, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -12, scale: 0.97 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="mx-auto mt-3 max-w-[1440px] overflow-hidden rounded-[28px] border border-[#e7d7bc]/20 bg-[#183D2B]/[.98] p-6 shadow-2xl shadow-[#102b1d]/30 backdrop-blur-2xl md:hidden"
          >
            <div className="mb-6 flex items-center justify-between gap-3">
              <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#D99A72]">
                Explore Rhema
              </span>

              <span className="text-right text-[9px] text-[#FFF9EF]/45">
                THE HOME OF THE BLESSED PEOPLE
              </span>
            </div>

            <div className="flex flex-col">
              {links.map((link, index) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, x: -15 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.08 + 0.05 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="group flex items-center justify-between border-b border-white/10 py-5 text-2xl font-medium text-[#FFF9EF] transition-colors hover:text-[#E8C98D]"
                  >
                    <span>{link.name}</span>

                    <ArrowUpRight
                      size={20}
                      className="text-[#D99A72] transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
                    />
                  </Link>
                </motion.div>
              ))}
            </div>

            <Link
              href="/connect"
              onClick={() => setOpen(false)}
              className="mt-6 flex items-center justify-center gap-3 rounded-full bg-[#E8C98D] px-6 py-4 text-xs font-bold uppercase tracking-widest text-[#183D2B] transition-colors hover:bg-[#FFF0CC]"
            >
              Plan a Visit
              <ArrowUpRight size={16} />
            </Link>

            <p className="mt-6 text-center text-[10px] uppercase tracking-[0.2em] text-[#FFF9EF]/40">
              A place to belong. A people to become.
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
