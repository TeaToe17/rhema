"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  MapPin,
  Mail,
  Phone,
  Globe,
  Radio,
  Heart,
  MoveUpRight,
} from "lucide-react";

import { FaInstagram, FaFacebookF, FaYoutube } from "react-icons/fa";


const navigation = [
  { name: "Home", href: "/" },
  { name: "Connect with us", href: "/connect" },
  { name: "Our community", href: "/community" },
];

const socials = [
  { icon: FaInstagram, href: "#", label: "Instagram" },
  { icon: FaFacebookF, href: "#", label: "Facebook" },
  { icon: FaYoutube, href: "#", label: "YouTube" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 25 },
  visible: { opacity: 1, y: 0 },
};

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#14251c] text-white">
      {/* DECORATIVE BACKGROUND */}
      <div className="pointer-events-none absolute -right-40 top-20 size-[500px] rounded-full border border-[#d9b66b]/[0.07]" />
      <div className="pointer-events-none absolute -right-20 top-40 size-[350px] rounded-full border border-[#d9b66b]/[0.07]" />
      <div className="pointer-events-none absolute -left-40 bottom-0 size-[450px] rounded-full bg-[#d9b66b]/[0.025] blur-[100px]" />

      <div className="relative z-10 mx-auto max-w-[1440px] px-6 md:px-12 lg:px-16">
        {/* TOP BRAND STATEMENT */}
        <section className="relative border-b border-white/10 py-20 md:py-28">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={{
              visible: {
                transition: { staggerChildren: 0.12 },
              },
            }}
            className="max-w-4xl"
          >
            <motion.div
              variants={fadeUp}
              className="mb-7 flex items-center gap-3"
            >
              <span className="h-px w-9 bg-[#d9b66b]" />
              <span className="text-[10px] font-semibold uppercase tracking-[0.35em] text-[#d9b66b]">
                The Rhema Experience
              </span>
            </motion.div>

            <motion.h2
              variants={fadeUp}
              className="font-display text-5xl font-medium leading-[1.08] tracking-tight text-[#f7f3e9] md:text-7xl lg:text-[88px]"
            >
              A home for the
              <br />
              <span className="font-serif italic text-[#d9b66b]">
                blessed people.
              </span>
            </motion.h2>

            <motion.p
              variants={fadeUp}
              className="mt-7 max-w-lg text-sm leading-7 text-white/55 md:text-base"
            >
              There is a place for you here. Come experience faith, find
              meaningful connections, and grow with a family that feels like
              home.
            </motion.p>

            <motion.div variants={fadeUp} className="mt-9">
              <Link
                href="/connect"
                className="group inline-flex items-center gap-5 rounded-full bg-[#d9b66b] py-4 pl-7 pr-5 text-xs font-bold uppercase tracking-[0.15em] text-[#14251c] transition-all duration-300 hover:bg-[#f0d69d] hover:shadow-[0_8px_35px_rgba(217,182,107,0.15)]"
              >
                Find your place here
                <span className="grid size-8 place-items-center rounded-full bg-[#14251c] text-[#d9b66b] transition-transform duration-300 group-hover:rotate-45">
                  <ArrowUpRight size={16} />
                </span>
              </Link>
            </motion.div>
          </motion.div>

          {/* DECORATIVE WATERMARK */}
          <div className="pointer-events-none absolute -bottom-8 right-0 hidden select-none font-serif text-[240px] leading-none text-white/[0.025] lg:block">
            R.
          </div>
        </section>

        {/* MAIN FOOTER CONTENT */}
        <div className="grid gap-14 py-16 md:grid-cols-2 lg:grid-cols-[1.5fr_0.8fr_1.1fr] lg:gap-20 lg:py-20">
          {/* BRAND */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <Link href="/" className="group inline-flex items-center gap-4">
              <div className="relative size-[58px] shrink-0 overflow-hidden rounded-full bg-white p-1.5 transition-transform duration-500 group-hover:scale-105">
                <Image
                  src="/rhemalogo.png"
                  alt="Rhema Chapel Logo"
                  fill
                  sizes="58px"
                  className="object-contain"
                />
              </div>

              <div>
                <h3 className="font-display text-xl font-semibold tracking-tight">
                  Rhema Chapel
                </h3>
                <p className="mt-1 text-[9px] uppercase tracking-[0.3em] text-[#d9b66b]">
                  Lekki · Lagos
                </p>
              </div>
            </Link>

            <p className="mt-7 max-w-sm text-sm leading-7 text-white/50">
              A people of faith, hope and love, growing together and carrying
              the light of Christ into our city.
            </p>

            <div className="mt-8 flex items-center gap-3">
              {socials.map((social) => {
                const Icon = social.icon;

                return (
                  <a
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    className="group grid size-11 place-items-center rounded-full border border-white/10 text-white/60 transition-all duration-300 hover:border-[#d9b66b] hover:bg-[#d9b66b] hover:text-[#14251c]"
                  >
                    <Icon
                      size={17}
                      className="transition-transform duration-300 group-hover:scale-110"
                    />
                  </a>
                );
              })}
            </div>
          </motion.div>

          {/* EXPLORE */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <div className="mb-8 flex items-center gap-3">
              <span className="h-px w-6 bg-[#d9b66b]" />
              <h4 className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#d9b66b]">
                Explore
              </h4>
            </div>

            <nav className="flex flex-col items-start gap-5">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="group flex items-center gap-2 text-sm text-white/65 transition-colors duration-300 hover:text-[#e8c77e]"
                >
                  {item.name}
                  <ArrowUpRight
                    size={13}
                    className="opacity-0 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:opacity-100"
                  />
                </Link>
              ))}
            </nav>
          </motion.div>

          {/* CONTACT */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <div className="mb-8 flex items-center gap-3">
              <span className="h-px w-6 bg-[#d9b66b]" />
              <h4 className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#d9b66b]">
                Find your way to us
              </h4>
            </div>

            <div className="space-y-6">
              <div className="group flex gap-4">
                <MapPin size={19} className="mt-0.5 shrink-0 text-[#d9b66b]" />
                <p className="text-sm leading-7 text-white/55 transition-colors group-hover:text-white/80">
                  Along Alternative Road, Off Chevron Drive, Lekki, Lagos.
                </p>
              </div>

              <a
                href="tel:+2348007436201"
                className="group flex items-center gap-4 text-sm text-white/55 transition-colors hover:text-white"
              >
                <Phone size={18} className="shrink-0 text-[#d9b66b]" />
                +234 800 RHEMA 01
              </a>

              <a
                href="mailto:hello@rhemaplace.org"
                className="group flex items-center gap-4 text-sm text-white/55 transition-colors hover:text-white"
              >
                <Mail size={18} className="shrink-0 text-[#d9b66b]" />
                hello@rhemaplace.org
              </a>
            </div>
          </motion.div>
        </div>

        {/* BOTTOM STRIP */}
        <div className="flex flex-col gap-5 border-t border-white/10 py-7 md:flex-row md:items-center md:justify-between">
          <p className="text-[10px] tracking-wide text-white/35">
            © {new Date().getFullYear()} Rhema Chapel International Churches,
            Lekki. All rights reserved.
          </p>

          <div className="flex items-center gap-2 text-[10px] uppercase tracking-[0.18em] text-white/35">
            Made with
            <Heart size={11} className="fill-[#d9b66b] text-[#d9b66b]" />
            for His glory.
          </div>

          <Link
            href="/"
            className="group flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.18em] text-white/45 transition-colors hover:text-[#d9b66b]"
          >
            Back to top
            <MoveUpRight
              size={13}
              className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
            />
          </Link>
        </div>
      </div>
    </footer>
  );
}
