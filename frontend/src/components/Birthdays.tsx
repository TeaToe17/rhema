"use client";

import { useMemo, useState } from "react";
import {
  Cake,
  CalendarDays,
  ChevronDown,
  ChevronUp,
  Gift,
  Sparkles,
} from "lucide-react";

const birthdayList = [
  { name: "Tosin Ade", month: 10, day: 4 },
  { name: "Sarah James", month: 10, day: 12 },
  { name: "Femi Cole", month: 10, day: 24 },
  { name: "Aisha Bello", month: 11, day: 2 },
  { name: "Martha Obi", month: 12, day: 8 },
];

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

export default function Birthdays() {
  const currentMonth = new Date().getMonth() + 1;
  const [showAll, setShowAll] = useState(false);

  const currentMonthName = months[currentMonth - 1];

  const peopleThisMonth = useMemo(
    () =>
      birthdayList
        .filter((person) => person.month === currentMonth)
        .sort((a, b) => a.day - b.day),
    [currentMonth],
  );

  const groupedBirthdays = useMemo(
    () =>
      months.map((month, index) => ({
        month,
        monthNumber: index + 1,
        people: birthdayList
          .filter((person) => person.month === index + 1)
          .sort((a, b) => a.day - b.day),
      })),
    [],
  );

  return (
    <section className="relative overflow-hidden bg-[#F4EADC] py-20 sm:py-24">
      {/* Background accents */}
      <div className="pointer-events-none absolute -right-32 top-10 size-80 rounded-full bg-[#D99A72]/10 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-32 -left-32 size-96 rounded-full bg-[#A8B99A]/20 blur-3xl" />

      <div className="container-wide relative z-10">
        {/* Section heading */}
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <div className="mb-5 flex items-center gap-3">
              <span className="grid size-12 place-items-center rounded-2xl bg-[#183D2B] text-[#E8D7B5] shadow-lg shadow-[#183D2B]/10">
                <Cake size={23} />
              </span>

              <div>
                <p className="text-xs font-bold uppercase tracking-[.2em] text-[#A66D50]">
                  Celebrating our family
                </p>
                <p className="text-sm font-medium text-[#6F7567]">
                  A year of people worth celebrating
                </p>
              </div>
            </div>

            <h2 className="max-w-2xl font-display text-4xl font-bold leading-tight text-[#183D2B] sm:text-5xl">
              Celebrating our people.
            </h2>

            <p className="mt-4 max-w-xl text-base leading-7 text-[#6F7567]">
              Every life is a gift, and every birthday is another reason to
              celebrate. Join us in celebrating the people who make our family
              special.
            </p>
          </div>

          <div className="flex items-center gap-2 text-sm font-semibold text-[#183D2B]">
            <CalendarDays size={18} className="text-[#A66D50]" />
            {birthdayList.length} birthdays in our directory
          </div>
        </div>

        {/* This month's birthdays */}
        <div className="mt-12 overflow-hidden rounded-[2rem] bg-[#183D2B] p-6 text-[#FFF9EF] shadow-xl shadow-[#183D2B]/10 sm:p-9">
          <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-center">
            <div>
              <p className="text-xs font-bold uppercase tracking-[.2em] text-[#D99A72]">
                This month · {currentMonthName}
              </p>

              <h3 className="mt-2 font-display text-2xl font-bold sm:text-3xl">
                Happy birthday!
              </h3>

              <p className="mt-2 max-w-lg text-sm leading-6 text-[#FFF9EF]/65">
                Celebrating everyone born in {currentMonthName}. We are grateful
                for your life and the blessing you are to our family.
              </p>
            </div>

            <div className="grid size-16 shrink-0 place-items-center rounded-2xl bg-[#E8D7B5]/15 text-[#E8D7B5]">
              <Gift size={30} />
            </div>
          </div>

          {peopleThisMonth.length > 0 ? (
            <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {peopleThisMonth.map((person) => (
                <div
                  key={`${person.name}-${person.month}-${person.day}`}
                  className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/[0.07] p-5 transition hover:bg-white/[0.12]"
                >
                  <div>
                    <p className="font-bold text-[#FFF9EF]">{person.name}</p>
                    <p className="mt-1 text-sm text-[#FFF9EF]/60">
                      {currentMonthName} {person.day}
                    </p>
                  </div>

                  <Sparkles size={20} className="text-[#D99A72]" />
                </div>
              ))}
            </div>
          ) : (
            <div className="mt-8 rounded-2xl border border-white/10 bg-white/[0.06] px-5 py-8 text-center">
              <Cake size={30} className="mx-auto mb-3 text-[#D99A72]" />
              <p className="font-semibold text-[#FFF9EF]">
                No birthdays listed for this month yet.
              </p>
              <p className="mt-1 text-sm text-[#FFF9EF]/55">
                We look forward to celebrating with you!
              </p>
            </div>
          )}
        </div>

        {/* Full birthday directory */}
        <div className="mt-16">
          <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <p className="text-xs font-bold uppercase tracking-[.2em] text-[#A66D50]">
                The birthday directory
              </p>
              <h3 className="mt-2 font-display text-3xl font-bold text-[#183D2B] sm:text-4xl">
                All year, all family.
              </h3>
              <p className="mt-3 text-sm text-[#6F7567]">
                A look at all the birthdays across the year.
              </p>
            </div>

            <button
              onClick={() => setShowAll(!showAll)}
              className="inline-flex items-center gap-2 self-start rounded-full border border-[#183D2B]/15 px-5 py-3 text-sm font-bold text-[#183D2B] transition hover:bg-[#183D2B] hover:text-[#FFF9EF] sm:self-auto"
            >
              {showAll ? "Show less" : "View full directory"}
              {showAll ? <ChevronUp size={17} /> : <ChevronDown size={17} />}
            </button>
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {groupedBirthdays
              .filter((group) => showAll || group.monthNumber === currentMonth)
              .map((group) => {
                const isCurrentMonth = group.monthNumber === currentMonth;

                return (
                  <div
                    key={group.month}
                    className={`rounded-3xl border p-6 transition ${
                      isCurrentMonth
                        ? "border-[#183D2B]/20 bg-[#FFF9EF] shadow-lg shadow-[#183D2B]/5"
                        : "border-[#183D2B]/[0.07] bg-[#FFF9EF]/65"
                    }`}
                  >
                    <div className="flex items-center justify-between gap-3">
                      <h4 className="font-display text-xl font-bold text-[#183D2B]">
                        {group.month}
                      </h4>

                      {isCurrentMonth && (
                        <span className="rounded-full bg-[#183D2B] px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-[#E8D7B5]">
                          Current month
                        </span>
                      )}
                    </div>

                    <div className="my-4 h-px bg-[#183D2B]/10" />

                    {group.people.length > 0 ? (
                      <div className="space-y-3">
                        {group.people.map((person) => (
                          <div
                            key={`${person.name}-${person.day}`}
                            className="flex items-center justify-between gap-3"
                          >
                            <span className="text-sm font-semibold text-[#183D2B]">
                              {person.name}
                            </span>

                            <span className="shrink-0 rounded-lg bg-[#F4EADC] px-3 py-1.5 text-xs font-semibold text-[#A66D50]">
                              {person.day} {group.month.slice(0, 3)}
                            </span>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <p className="py-2 text-sm italic text-[#6F7567]/70">
                        No birthdays added yet.
                      </p>
                    )}
                  </div>
                );
              })}
          </div>

          {!showAll && (
            <p className="mt-5 text-center text-xs text-[#6F7567]">
              Showing {currentMonthName}. Select "View full directory" to
              explore all 12 months.
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
