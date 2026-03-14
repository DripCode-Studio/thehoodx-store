"use client";

import Link from "next/link";

export function HeroBanner() {
  return (
    <>
      {/* Marquee — between header and hero */}
      <div className="overflow-hidden bg-black text-white py-3">
        <div className="animate-marquee inline-block whitespace-nowrap">
          <span className="font-black tracking-[3px] uppercase text-sm px-8">
            WE DON&apos;T FOLLOW TRENDS. WE SET THEM. — NO THRONE GIVEN. ONLY TAKEN. &nbsp;&nbsp;&nbsp;&nbsp;
            WE DON&apos;T FOLLOW TRENDS. WE SET THEM. — NO THRONE GIVEN. ONLY TAKEN. &nbsp;&nbsp;&nbsp;&nbsp;
          </span>
        </div>
      </div>

      <section
        className="relative min-h-screen flex flex-col items-center justify-center text-center overflow-hidden"
        style={{
          backgroundImage: "url('/collections/black-throne.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Frosted glass overlay — matches the CSS ::before layer */}
        <div
          className="absolute inset-0 z-[1]"
          style={{
            backdropFilter: "blur(25px)",
            WebkitBackdropFilter: "blur(25px)",
            background: "rgba(255,255,255,0.75)",
          }}
        />

        {/* Content above the overlay */}
        <div className="relative z-[2] flex flex-col items-center gap-5 px-4">
          <h1
            className="hero-brand font-black text-black uppercase"
            style={{
              fontSize: "clamp(60px, 8vw, 120px)",
              letterSpacing: "6px",
            }}
          >
            THE-HØØDX
          </h1>

          <p
            className="text-[#444]"
            style={{ fontSize: "18px", letterSpacing: "2px" }}
          >
            Street Royalty.
          </p>

          <Link
            href="/collections"
            className="bg-black text-white px-8 py-3 rounded-full font-bold uppercase tracking-widest text-sm transition-all hover:bg-neutral-800 hover:scale-105 mt-2"
          >
            Découvrir la collection
          </Link>
        </div>
      </section>
    </>
  );
}
