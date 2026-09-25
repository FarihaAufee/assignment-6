"use client";

import Image from "next/image";
import Link from "next/link";
import { useFitLog } from "@/context/FitLogContext";
import { usePathname } from "next/navigation";
import {
  Bookmark,
  ClipboardList,
  Menu,
  X,
} from "lucide-react";
import { useState } from "react";

const Navbar = () => {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const { plannedWorkouts, savedWorkouts } = useFitLog();
  const Navbar = () => {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  const { plannedWorkouts, savedWorkouts } = useFitLog();


};
  const isWorkoutActive = pathname === "/";
  const isPlanActive = pathname === "/my-plan";

  return (
    
    <nav className="sticky top-0 z-50 border-b border-[#242832] bg-[#0B0D0F] container-main" >
      <div className="mx-auto flex h-[72px] max-w-[1440px] items-center justify-between px-5 md:px-8">

        {/* Logo */}
        <div className="flex items-center gap-2"> 
        <Link href="/" className="shrink-0">
          <Image
            src="/assets/logo.png"
            alt="FitLog"
            width={100}
            height={40}
            priority
            className="h-auto w-[80px] md:w-[35px]"
          />
        </Link> <span className="text-lg font-bold">FITLOG</span>
</div>
        {/* Desktop Navigation */}
        <div className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-2 md:flex">

          <Link
            href="/"
            className={`rounded-full px-5 py-2 text-sm font-medium transition ${
              isWorkoutActive
                ? "bg-[#CCFF00] text-black"
                : "text-gray-400 hover:bg-[#171A20] hover:text-white"
            }`}
          >
            Workouts
          </Link>

          <Link
            href="/my-plan?tab=plan"
            className={`rounded-full px-5 py-2 text-sm font-medium transition ${
              isPlanActive
                ? "bg-[#CCFF00] text-black"
                : "text-gray-400 hover:bg-[#171A20] hover:text-white"
            }`}
          >
            My Plan
          </Link>
        </div>

        {/* Desktop Plan & Saved */}
        <div className="hidden items-center gap-3 md:flex">

          {/* Plan */}
          <Link
             href="/my-plan?tab=plan"
            className="flex items-center gap-2 rounded-full bg-[#CCFF00] px-4 py-2 text-sm font-semibold text-black transition hover:bg-[#b8e600]"
          >
            <ClipboardList size={16} />
            <span>Plan</span>

            {/* Temporary count */}
            <span className="flex h-5 min-w-5 items-center justify-center rounded-full bg-black px-1.5 text-xs text-[#CCFF00]">
  {plannedWorkouts.length}
</span>
          </Link>

          {/* Saved */}
          <Link
             href="/my-plan?tab=saved"
            className="flex items-center gap-2 rounded-full border border-[#3A3F48] px-4 py-2 text-sm font-medium text-white transition hover:border-[#CCFF00]"
          >
            <Bookmark size={16} />
            <span>Saved</span>

            {/* Temporary count */}
            <span className="flex h-5 min-w-5 items-center justify-center rounded-full bg-[#242832] px-1.5 text-xs">
  {savedWorkouts.length}
</span>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
          className="flex h-10 w-10 items-center justify-center rounded-lg text-white hover:bg-[#171A20] md:hidden"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="border-t border-[#242832] bg-[#0B0D0F] px-5 py-4 md:hidden">

          <div className="flex flex-col gap-2">

            <Link
              href="/"
              onClick={() => setMenuOpen(false)}
              className={`rounded-lg px-4 py-3 text-sm font-medium ${
                isWorkoutActive
                  ? "bg-[#CCFF00] text-black"
                  : "text-gray-300 hover:bg-[#171A20]"
              }`}
            >
              Workouts
            </Link>

            <Link
              href="/my-plan"
              onClick={() => setMenuOpen(false)}
              className={`rounded-lg px-4 py-3 text-sm font-medium ${
                isPlanActive
                  ? "bg-[#CCFF00] text-black"
                  : "text-gray-300 hover:bg-[#171A20]"
              }`}
            >
              My Plan
            </Link>

            <div className="mt-2 flex gap-2 border-t border-[#242832] pt-3">

              <Link
                href="/my-plan"
                onClick={() => setMenuOpen(false)}
                className="flex flex-1 items-center justify-center gap-2 rounded-full bg-[#CCFF00] px-4 py-2 text-sm font-semibold text-black"
              >
                <ClipboardList size={16} />
                Plan
                <span className="rounded-full bg-black px-2 py-0.5 text-xs text-[#CCFF00]">
                  0
                </span>
              </Link>

              <Link
                href="/my-plan"
                onClick={() => setMenuOpen(false)}
                className="flex flex-1 items-center justify-center gap-2 rounded-full border border-[#3A3F48] px-4 py-2 text-sm text-white"
              >
                <Bookmark size={16} />
                Saved
                <span className="rounded-full bg-[#242832] px-2 py-0.5 text-xs">
                  0
                </span>
              </Link>

            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;