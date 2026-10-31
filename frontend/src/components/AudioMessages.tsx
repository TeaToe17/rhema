import { ArrowUpRight, Headphones, Radio, Sparkles } from "lucide-react";

type AudioMessage = {
  title: string;
  preacher: string;
  duration: string;
  audioLink: string;
};

const audios: AudioMessage[] = [
  {
    title: "Understanding Your Identity in Christ",
    preacher: "Pastor Emmanuel",
    duration: "32 min",
    audioLink: "something.mp3",
  },
  {
    title: "Walking in the Fullness of Faith",
    preacher: "Pastor Tolu",
    duration: "28 min",
    audioLink: "something.mp3",
  },
  {
    title: "The Power of a Renewed Mind",
    preacher: "Pastor Emmanuel",
    duration: "41 min",
    audioLink: "something.mp3",
  },
  {
    title: "Living a Life of Purpose",
    preacher: "Minister Ada",
    duration: "35 min",
    audioLink: "something.mp3",
  },
  {
    title: "Grace for the Journey",
    preacher: "Pastor Tolu",
    duration: "30 min",
    audioLink: "something.mp3",
  },
  {
    title: "Growing Deeper in the Word",
    preacher: "Pastor Emmanuel",
    duration: "38 min",
    audioLink: "something.mp3",
  },
];

const audioAccents = [
  {
    color: "#D6B978",
    background: "from-[#D6B978]/20 to-[#A8B99A]/5",
  },
  {
    color: "#A8B99A",
    background: "from-[#A8B99A]/20 to-[#D99A72]/5",
  },
  {
    color: "#D99A72",
    background: "from-[#D99A72]/20 to-[#D6B978]/5",
  },
];

export default function AudioMessagesSection() {
  return (
    <section className="relative isolate overflow-hidden bg-[#183D2B] py-20 text-[#FFF9EF] sm:py-28">
      {/* Background atmosphere */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -left-32 top-10 size-96 rounded-full bg-[#A8B99A]/10 blur-[100px]" />
        <div className="absolute -right-24 bottom-0 size-96 rounded-full bg-[#D99A72]/10 blur-[100px]" />

        <div className="absolute inset-0 bg-[radial-gradient(#fff9ef0c_1px,transparent_1px)] [background-size:24px_24px]" />

        <span className="absolute -right-10 top-16 select-none text-[14rem] font-black leading-none tracking-tighter text-[#FFF9EF]/[0.025] sm:text-[20rem]">
          WORD
        </span>

        <div className="absolute -right-20 -top-20 size-80 rounded-full border border-[#FFF9EF]/[0.06]" />
        <div className="absolute -right-8 -top-8 size-56 rounded-full border border-[#FFF9EF]/[0.06]" />
      </div>

      <div className="container-wide relative">
        {/* Header */}
        <div className="mb-12 flex flex-col justify-between gap-7 sm:mb-16 md:flex-row md:items-end">
          <div>
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#D6B978]/25 bg-[#FFF9EF]/[0.06] px-4 py-2 text-[#E8D7B5]">
              <Radio size={14} />

              <span className="text-[10px] font-black uppercase tracking-[0.2em]">
                Listen back · Grow deeper
              </span>
            </div>

            <h2 className="text-6xl font-black leading-[0.9] tracking-[-0.075em] sm:text-7xl lg:text-8xl">
              Feed your
              <br />
              <span className="bg-gradient-to-r from-[#E8D7B5] via-[#D6B978] to-[#D99A72] bg-clip-text text-transparent">
                spirit.
              </span>
            </h2>
          </div>

          <div className="max-w-sm md:pb-2">
            <p className="text-base leading-8 text-[#FFF9EF]/60 sm:text-lg">
              Take the Word beyond Sunday. Revisit a message, find fresh
              perspective, and carry what matters into your everyday life.
            </p>

            <div className="mt-4 flex items-center gap-2 text-xs font-bold text-[#D6B978]">
              <Sparkles size={14} />
              <span>Truth for your everyday journey</span>
            </div>
          </div>
        </div>

        {/* Audio library */}
        {audios.length > 0 ? (
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {audios.map((audio, index) => {
              const accent = audioAccents[index % audioAccents.length];

              return (
                <article
                  key={`${audio.title}-${index}`}
                  className="group relative isolate overflow-hidden rounded-[2rem] border border-[#FFF9EF]/10 bg-[#214331] p-5 transition duration-500 hover:-translate-y-2 hover:border-[#D6B978]/40 hover:bg-[#294B37] hover:shadow-2xl hover:shadow-black/10 sm:p-6"
                >
                  {/* Card ambience */}
                  <div
                    className={`pointer-events-none absolute -right-12 -top-12 -z-10 size-36 rounded-full bg-gradient-to-br ${accent.background} blur-3xl transition duration-500 group-hover:scale-150`}
                  />

                  <div className="mb-8 flex items-start justify-between">
                    <div
                      className="relative grid size-14 place-items-center overflow-hidden rounded-2xl border border-white/10 shadow-lg transition duration-500 group-hover:rotate-[-5deg] group-hover:scale-105"
                      style={{
                        background: `linear-gradient(135deg, ${accent.color}40, #183D2B)`,
                      }}
                    >
                      <Headphones
                        size={23}
                        style={{ color: accent.color }}
                      />

                      <div
                        className="absolute -bottom-3 -right-2 size-8 rounded-full blur-md"
                        style={{ backgroundColor: `${accent.color}50` }}
                      />
                    </div>

                    <span className="rounded-full border border-[#FFF9EF]/10 bg-[#FFF9EF]/[0.06] px-3 py-1.5 text-xs font-bold text-[#FFF9EF]/60">
                      {audio.duration}
                    </span>
                  </div>

                  <div className="mb-5">
                    <span
                      className="text-[10px] font-black uppercase tracking-[0.18em]"
                      style={{ color: accent.color }}
                    >
                      Message {String(index + 1).padStart(2, "0")}
                    </span>

                    <h3 className="mt-3 text-xl font-black leading-snug tracking-tight text-[#FFF9EF] transition-colors group-hover:text-[#E8D7B5]">
                      {audio.title}
                    </h3>

                    <p className="mt-2 text-sm text-[#FFF9EF]/50">
                      {audio.preacher}
                    </p>
                  </div>

                  {/* Audio player */}
                  <div className="rounded-2xl border border-[#FFF9EF]/[0.07] bg-[#183D2B]/70 p-3">
                    {audio.audioLink ? (
                      <audio
                        className="w-full"
                        controls
                        preload="none"
                        src={audio.audioLink}
                        aria-label={`Listen to ${audio.title}`}
                      >
                        Your browser does not support audio playback.
                      </audio>
                    ) : (
                      <p className="py-2 text-sm text-[#FFF9EF]/50">
                        Audio is not available yet.
                      </p>
                    )}
                  </div>

                  <div className="mt-5 flex items-center justify-between border-t border-[#FFF9EF]/10 pt-4">
                    <span className="text-xs font-bold text-[#FFF9EF]/40">
                      Rhema Chapel Messages
                    </span>

                    <span
                      className="grid size-8 place-items-center rounded-full border border-[#FFF9EF]/10 transition group-hover:rotate-45 group-hover:border-[#D6B978] group-hover:bg-[#D6B978] group-hover:text-[#183D2B]"
                      style={{ color: accent.color }}
                    >
                      <ArrowUpRight size={16} />
                    </span>
                  </div>
                </article>
              );
            })}
          </div>
        ) : (
          <div className="rounded-[2rem] border border-[#FFF9EF]/10 bg-[#FFF9EF]/[0.04] px-6 py-14 text-center">
            <Headphones
              className="mx-auto mb-4 text-[#D6B978]"
              size={32}
            />

            <h3 className="text-xl font-black">
              Messages are on the way.
            </h3>

            <p className="mt-2 text-sm text-[#FFF9EF]/55">
              Check back soon for audio messages from Rhema Chapel.
            </p>
          </div>
        )}

        {/* Bottom callout */}
        <div className="relative mt-10 overflow-hidden rounded-[2rem] border border-[#D6B978]/20 bg-gradient-to-r from-[#214331] via-[#294B37] to-[#3A4935] p-6 sm:mt-14 sm:p-8">
          <div className="pointer-events-none absolute -right-8 -top-16 size-48 rounded-full border border-[#FFF9EF]/[0.08]" />
          <div className="pointer-events-none absolute -right-1 -top-9 size-32 rounded-full border border-[#FFF9EF]/[0.08]" />

          <div className="relative flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-start gap-4">
              <div className="flex size-12 shrink-0 items-center justify-center rounded-2xl border border-[#D6B978]/20 bg-[#D6B978]/10 text-[#D6B978]">
                <Radio size={22} />
              </div>

              <div>
                <h3 className="text-lg font-extrabold tracking-tight sm:text-xl">
                  Keep feeding your faith.
                </h3>

                <p className="mt-2 max-w-lg text-sm leading-6 text-[#FFF9EF]/55">
                  Make room for the Word, revisit a message, and take
                  something meaningful with you.
                </p>
              </div>
            </div>

            <a
              href="#sermons"
              className="inline-flex shrink-0 items-center justify-center gap-2 rounded-xl bg-[#E8D7B5] px-5 py-3.5 text-sm font-bold text-[#183D2B] transition hover:bg-[#FFF9EF]"
            >
              Explore messages
              <ArrowUpRight size={17} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}