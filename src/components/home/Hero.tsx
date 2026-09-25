import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="container-main bg-[#0B0D0F]">
      <div className="mx-auto grid min-h-[620px] max-w-[1440px] items-center gap-10 px-5 py-16 md:px-8 lg:grid-cols-2 lg:gap-16 lg:py-20">

        {/* Left Content */}
        <div className="max-w-[650px]">

          {/* Eyebrow */}
          <p className="mb-5 text-sm font-semibold tracking-[0.1em] text-[#CCFF00]">
            WORKOUT LIBRARY
          </p>

          {/* Heading */}
          <h1 className="text-5xl font-black uppercase leading-[0.95] tracking-tight text-white sm:text-4xl lg:text-5xl">
            TRAIN WITH INTENT. LOG
             EVERY SET.
            <br />
          </h1>

          {/* Description */}
          <p className="mt-7 max-w-[560px] text-base leading-7 text-gray-300 md:text-lg">
            FitLog is a dark, no-nonsense gym companion: pick a lift, lock it
into today's plan, and watch the week's work add up.
          </p>

          {/* CTA */}
          <Link
            href="#library"
            className="mt-9 inline-flex items-center gap-3 rounded-full bg-[#CCFF00] px-6 py-3.5 text-sm font-bold uppercase tracking-wide text-black transition hover:bg-[#b8e600]"
          >
            Browse Workouts
            
          </Link>
        </div>

        {/* Right Image */}
        <div className="relative mx-auto w-full max-w-[600px] lg:ml-auto">

          <div className="relative aspect-[4/3] overflow-hidden">
            <Image
              src="/assets/banner.png"
              alt="Workout"
              fill
              priority
            sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;