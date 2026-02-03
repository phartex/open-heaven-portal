"use client";

import { useState } from "react";
import CalendarCard from "./components/Calendar";
import { useOpenHeavens } from "./hooks/useHeaven";
import { Skeleton } from "./components/ui/skeleton";
import { format } from "path";


interface Devotional {
  title: string;
  date: string;
  topic: string;
  memorise: {
    verse: string;
    reference: string;
  };
  read: {
    reference: string;
    verses: string[];
  };
  bibleInOneYear: string;
  message: string[];
  keyPoint: string;
  hymn: {
    title: string;
    verses: string[];
  };
  prayer: string;
  source: string;
}

export default function HomePage() {
  const [selectedDate, setSelectedDate] = useState<string | null>(null);

  const {
    data: devotional,
    isLoading: loading,
    isError,
  } = useOpenHeavens(selectedDate ?? "");

  const handleDateSelect = (date: Date) => {
    // Format date in local timezone to avoid timezone shift issues
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    const formattedDate = `${year}-${month}-${day}`;
    setSelectedDate(formattedDate);
    console.log(formattedDate);
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-red-50 text-slate-900 p-3 sm:p-4 md:p-8">
      <div className="mx-auto max-w-4xl">
        {/* Header */}
        <header className="text-center mb-8 sm:mb-10 md:mb-12 animate-fade-in px-2">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold text-amber-900 mb-2 tracking-tight">
            Open Heavens
          </h1>
          <p className="text-base sm:text-lg text-amber-700 font-light tracking-wide">
            Daily Devotional
          </p>
        </header>

        {/* Calendar */}
        <div className="flex justify-center mb-8 sm:mb-10 md:mb-12 px-2">
          <CalendarCard
            selectedDate={selectedDate ? new Date(selectedDate) : undefined}
            onDateSelect={handleDateSelect}
            isLoading={loading}
          />
        </div>

        {/* Error State */}
        {isError && (
          <div className="text-center p-6 sm:p-8 bg-red-50 border border-red-200 rounded-2xl animate-fade-in mx-2">
            <p className="text-red-700 font-medium text-sm sm:text-base">
              Devotional not available for this date.
            </p>
            <p className="text-xs sm:text-sm text-red-600 mt-2">
              Please try selecting another date.
            </p>
          </div>
        )}

        {/* Loading Skeleton */}
        {loading && (
          <article className="space-y-6 sm:space-y-8 animate-fade-in px-2">
            {/* Title & Date Skeleton */}
            <section className="bg-white/80 backdrop-blur-sm rounded-2xl sm:rounded-3xl p-5 sm:p-8 md:p-10 shadow-xl border border-amber-100">
              <div className="space-y-4">
                <Skeleton className="h-8 sm:h-10 w-3/4" />
                <Skeleton className="h-4 w-1/2" />
              </div>
              
              {/* Memory Verse Skeleton */}
              <div className="bg-gradient-to-br from-amber-100 to-orange-100 rounded-xl sm:rounded-2xl p-4 sm:p-6 border-l-4 border-amber-600 mt-5 sm:mt-6">
                <Skeleton className="h-3 w-32 mb-3" />
                <div className="space-y-2">
                  <Skeleton className="h-5 w-full" />
                  <Skeleton className="h-5 w-5/6" />
                  <Skeleton className="h-5 w-4/6" />
                </div>
                <Skeleton className="h-3 w-40 mt-3" />
              </div>
            </section>

            {/* Bible Reading Skeleton */}
            <section className="bg-white/80 backdrop-blur-sm rounded-2xl sm:rounded-3xl p-5 sm:p-8 md:p-10 shadow-xl border border-orange-100">
              <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
                <span className="w-1 sm:w-1.5 h-6 sm:h-8 bg-orange-600 rounded-full"></span>
                <Skeleton className="h-6 sm:h-8 w-40" />
              </div>
              <Skeleton className="h-4 w-48 mb-4" />
              <div className="space-y-3 pl-3 sm:pl-4 border-l-2 border-orange-200">
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-11/12" />
                <Skeleton className="h-4 w-5/6" />
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-10/12" />
                <Skeleton className="h-4 w-4/5" />
              </div>
            </section>

            {/* Bible in One Year Skeleton */}
            <section className="bg-gradient-to-r from-amber-100 to-orange-100 rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-amber-200 mx-2 sm:mx-0">
              <Skeleton className="h-3 w-32 mb-2" />
              <Skeleton className="h-5 w-40" />
            </section>

            {/* Message Skeleton */}
            <section className="bg-white/80 backdrop-blur-sm rounded-2xl sm:rounded-3xl p-5 sm:p-8 md:p-10 shadow-xl border border-red-100">
              <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
                <span className="w-1 sm:w-1.5 h-6 sm:h-8 bg-red-600 rounded-full"></span>
                <Skeleton className="h-6 sm:h-8 w-48" />
              </div>
              <div className="space-y-4">
                <div className="space-y-2">
                  <Skeleton className="h-4 w-full" />
                  <Skeleton className="h-4 w-11/12" />
                  <Skeleton className="h-4 w-5/6" />
                </div>
                <div className="space-y-2">
                  <Skeleton className="h-4 w-full" />
                  <Skeleton className="h-4 w-10/12" />
                  <Skeleton className="h-4 w-4/5" />
                </div>
                <div className="space-y-2">
                  <Skeleton className="h-4 w-full" />
                  <Skeleton className="h-4 w-11/12" />
                </div>
                <div className="space-y-2">
                  <Skeleton className="h-4 w-full" />
                  <Skeleton className="h-4 w-5/6" />
                  <Skeleton className="h-4 w-3/4" />
                </div>
              </div>
            </section>

            {/* Key Point Skeleton */}
            <section className="bg-gradient-to-br from-red-100 to-orange-100 rounded-xl sm:rounded-2xl p-5 sm:p-8 border-l-4 border-red-600 shadow-lg mx-2 sm:mx-0">
              <Skeleton className="h-3 w-24 mb-3" />
              <div className="space-y-2">
                <Skeleton className="h-6 w-full" />
                <Skeleton className="h-6 w-4/5" />
              </div>
            </section>

            {/* Hymn Skeleton */}
            <section className="bg-white/80 backdrop-blur-sm rounded-2xl sm:rounded-3xl p-5 sm:p-8 md:p-10 shadow-xl border border-amber-100">
              <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
                <span className="w-1 sm:w-1.5 h-6 sm:h-8 bg-amber-600 rounded-full"></span>
                <Skeleton className="h-6 sm:h-8 w-32" />
              </div>
              <Skeleton className="h-5 w-56 mb-4 sm:mb-6" />
              <div className="space-y-3 sm:space-y-4 pl-3 sm:pl-4 border-l-2 border-amber-200">
                <Skeleton className="h-4 w-5/6" />
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-4/5" />
                <Skeleton className="h-4 w-11/12" />
              </div>
            </section>

            {/* Prayer Skeleton */}
            <section className="bg-gradient-to-br from-orange-100 to-red-100 rounded-2xl sm:rounded-3xl p-5 sm:p-8 md:p-10 shadow-xl border border-orange-200">
              <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
                <span className="w-1 sm:w-1.5 h-6 sm:h-8 bg-orange-600 rounded-full"></span>
                <Skeleton className="h-6 sm:h-8 w-32" />
              </div>
              <div className="space-y-2">
                <Skeleton className="h-5 w-full" />
                <Skeleton className="h-5 w-11/12" />
                <Skeleton className="h-5 w-5/6" />
              </div>
            </section>
          </article>
        )}

        {/* Devotional Content */}
        {devotional?.data && !loading && (
          <article className="space-y-6 sm:space-y-8 animate-slide-up px-2">
            {/* Title & Date Card */}
            <section className="bg-white/80 backdrop-blur-sm rounded-2xl sm:rounded-3xl p-5 sm:p-8 md:p-10 shadow-xl border border-amber-100">
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 sm:gap-4 mb-5 sm:mb-6">
                <div className="flex-1">
                  <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-amber-950 mb-2 sm:mb-3 leading-tight">
                    {devotional.data.topic}
                  </h2>
                  <p className="text-xs sm:text-sm text-amber-600 font-medium tracking-wide uppercase">
                    {new Date(devotional.data.date).toLocaleDateString("en-US", {
                      weekday: "long",
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </p>
                </div>
              </div>

              {/* Memory Verse */}
              <div className="bg-gradient-to-br from-amber-100 to-orange-100 rounded-xl sm:rounded-2xl p-4 sm:p-6 border-l-4 border-amber-600">
                <h3 className="text-xs sm:text-sm font-bold text-amber-900 uppercase tracking-wider mb-2 sm:mb-3">
                  Memory Verse
                </h3>
                <blockquote className="text-base sm:text-lg md:text-xl font-serif italic text-amber-950 leading-relaxed mb-2 sm:mb-3">
                  "{devotional.data.memorise.verse}"
                </blockquote>
                <cite className="text-xs sm:text-sm font-semibold text-amber-700 not-italic">
                  — {devotional.data.memorise.reference}
                </cite>
              </div>
            </section>

            {/* Bible Reading */}
            <section className="bg-white/80 backdrop-blur-sm rounded-2xl sm:rounded-3xl p-5 sm:p-8 md:p-10 shadow-xl border border-orange-100">
              <h3 className="text-xl sm:text-2xl font-serif font-bold text-orange-900 mb-3 sm:mb-4 flex items-center gap-2 sm:gap-3">
                <span className="w-1 sm:w-1.5 h-6 sm:h-8 bg-orange-600 rounded-full"></span>
                Bible Reading
              </h3>
              <p className="text-orange-700 font-semibold mb-3 sm:mb-4 text-sm sm:text-base">
                {devotional.data.read.reference}
              </p>
              <div className="space-y-2 sm:space-y-3 pl-3 sm:pl-4 border-l-2 border-orange-200">
                {devotional.data.read.verses.map((verse: any, idx: any) => (
                  <p
                    key={idx}
                    className="text-slate-700 leading-relaxed text-sm sm:text-base"
                  >
                    {verse}
                  </p>
                ))}
              </div>
            </section>

            {/* Bible in One Year */}
            {devotional.data.bibleInOneYear && (
              <section className="bg-gradient-to-r from-amber-100 to-orange-100 rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-amber-200 mx-2 sm:mx-0">
                <p className="text-xs sm:text-sm font-bold text-amber-900 uppercase tracking-wider mb-1 sm:mb-2">
                  Bible in One Year
                </p>
                <p className="text-base sm:text-lg font-semibold text-amber-800">
                  {devotional.data.bibleInOneYear}
                </p>
              </section>
            )}

            {/* Message */}
            <section className="bg-white/80 backdrop-blur-sm rounded-2xl sm:rounded-3xl p-5 sm:p-8 md:p-10 shadow-xl border border-red-100">
              <h3 className="text-xl sm:text-2xl font-serif font-bold text-red-900 mb-4 sm:mb-6 flex items-center gap-2 sm:gap-3">
                <span className="w-1 sm:w-1.5 h-6 sm:h-8 bg-red-600 rounded-full"></span>
                Today's Message
              </h3>
              <div className="prose prose-sm sm:prose-base lg:prose-lg max-w-none">
                {devotional.data.message.map((paragraph: any, idx : any) => (
                  <p
                    key={idx}
                    className="text-slate-700 leading-relaxed mb-3 sm:mb-4 last:mb-0 text-sm sm:text-base"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
            </section>

            {/* Key Point */}
            {devotional.data.keyPoint && (
              <section className="bg-gradient-to-br from-red-100 to-orange-100 rounded-xl sm:rounded-2xl p-5 sm:p-8 border-l-4 border-red-600 shadow-lg mx-2 sm:mx-0">
                <h3 className="text-xs sm:text-sm font-bold text-red-900 uppercase tracking-wider mb-2 sm:mb-3">
                  Key Point
                </h3>
                <p className="text-lg sm:text-xl md:text-2xl font-serif font-semibold text-red-950 leading-relaxed">
                  {devotional.data.keyPoint}
                </p>
              </section>
            )}

            {/* Hymn */}
            {devotional.data.hymn.title && (
              <section className="bg-white/80 backdrop-blur-sm rounded-2xl sm:rounded-3xl p-5 sm:p-8 md:p-10 shadow-xl border border-amber-100">
                <h3 className="text-xl sm:text-2xl font-serif font-bold text-amber-900 mb-1 sm:mb-2 flex items-center gap-2 sm:gap-3">
                  <span className="w-1 sm:w-1.5 h-6 sm:h-8 bg-amber-600 rounded-full"></span>
                  Hymn
                </h3>
                <p className="text-amber-700 font-semibold mb-4 sm:mb-6 text-base sm:text-lg">
                  {devotional.data.hymn.title}
                </p>
                <div className="space-y-3 sm:space-y-4">
                  {devotional.data.hymn.verses.map((verse: any, idx: any) => (
                    <p
                      key={idx}
                      className="text-slate-700 leading-relaxed font-serif italic text-sm sm:text-base pl-3 sm:pl-4 border-l-2 border-amber-200"
                    >
                      {verse}
                    </p>
                  ))}
                </div>
              </section>
            )}

            {/* Prayer */}
            {devotional.data.prayer && (
              <section className="bg-gradient-to-br from-orange-100 to-red-100 rounded-2xl sm:rounded-3xl p-5 sm:p-8 md:p-10 shadow-xl border border-orange-200">
                <h3 className="text-xl sm:text-2xl font-serif font-bold text-orange-900 mb-3 sm:mb-4 flex items-center gap-2 sm:gap-3">
                  <span className="w-1 sm:w-1.5 h-6 sm:h-8 bg-orange-600 rounded-full"></span>
                  Prayer
                </h3>
                <p className="text-base sm:text-lg font-serif italic text-slate-800 leading-relaxed">
                  {devotional.data.prayer}
                </p>
              </section>
            )}

            {/* Source Link */}
            <div className="text-center pt-4 sm:pt-6 pb-2">
              <a
                href={devotional.data.source}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-amber-700 hover:text-amber-900 font-medium transition-colors duration-200 text-sm sm:text-base"
              >
                <span>View original on Flatimes</span>
                <svg
                  className="w-3.5 h-3.5 sm:w-4 sm:h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  />
                </svg>
              </a>
            </div>
          </article>
        )}

        {/* Empty State */}
        {!loading && !devotional?.data && !isError && (
          <div className="text-center p-10 sm:p-12 md:p-16 bg-white/60 backdrop-blur-sm rounded-2xl sm:rounded-3xl border border-amber-100 animate-fade-in mx-2">
            <div className="w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-4 sm:mb-6 rounded-full bg-amber-100 flex items-center justify-center">
              <svg
                className="w-8 h-8 sm:w-10 sm:h-10 text-amber-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
            </div>
            <p className="text-lg sm:text-xl text-amber-800 font-medium px-2">
              Select a date to view the devotional
            </p>
            <p className="text-xs sm:text-sm text-amber-600 mt-2 px-2">
              Choose from the calendar above to begin
            </p>
          </div>
        )}
      </div>

      {/* Global Animations */}
      <style jsx global>{`
        @keyframes fade-in {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes slide-up {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in {
          animation: fade-in 0.6s ease-out;
        }

        .animate-slide-up {
          animation: slide-up 0.8s ease-out;
        }
      `}</style>
    </main>
  );
}