"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import type { Workout } from "@/components/home/types/workout";
import WorkoutCard from "./WorkoutCard";

interface WorkoutLibraryProps {
  workouts: Workout[];
}

type SortOption = "duration" | "calories" | "rating";

const WorkoutLibrary = ({ workouts }: WorkoutLibraryProps) => {
  const [sortBy, setSortBy] = useState<SortOption>("duration");

  const sortedWorkouts = [...workouts].sort((a, b) => {
    if (sortBy === "duration") {
      return a.duration - b.duration;
    }

    if (sortBy === "calories") {
      return a.caloriesBurned - b.caloriesBurned;
    }

    return b.rating - a.rating;
  });

  return (
    <section
  id="library"
  className="bg-[#0B0D0F] px-5 py-20 sm:px-8 md:px-10 lg:px-12 lg:py-24 xl:px-16"
>
      <div className="container-main mx-auto max-w-[1440px]">

        <div className="flex flex-col gap-6 border-b border-[#242832] pb-8 md:flex-row md:items-end md:justify-between">

    
          <div>
            <p className="mb-5 font-semibold tracking-[0.1em] text-[#CCFF00]">
              The Library
            </p>

    
            <p className="mt-7 max-w-[560px] text-base leading-7 text-gray-300 md:text-lg">
              Twelve lifts covering every major muscle group.
            </p>
          </div>


          <div className="flex items-center gap-3">
            <span className="text-xs font-medium uppercase tracking-wider text-gray-500">
              Sort by
            </span>

            <div className="relative">
              <select
                value={sortBy}
                onChange={(e) =>
                  setSortBy(e.target.value as SortOption)
                }
                className="h-11 appearance-none rounded-full border border-[#30353F] bg-[#14171D] py-2 pl-4 pr-11 text-sm font-medium text-white outline-none transition hover:border-[#CCFF00] focus:border-[#CCFF00]"
              >
                <option value="duration">Duration</option>
                <option value="calories">Calories</option>
                <option value="rating">Rating</option>
              </select>

              <ChevronDown
                size={16}
                className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-gray-400"
              />
            </div>
          </div>
        </div>


        <div className="py-7">
          <p className="text-sm text-gray-500">
            Showing{" "}
            <span className="font-semibold text-white">
              {sortedWorkouts.length}
            </span>{" "}
            workouts
          </p>
        </div>

        {/* Workout Grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {sortedWorkouts.map((workout) => (
            <WorkoutCard
              key={workout.id}
              workout={workout}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkoutLibrary;