
"use client";

import Image from "next/image";
import { useFitLog } from "@/context/FitLogContext";
import { toast } from "react-toastify";
import {
  Clock,
  Flame,
  Star,
  Check,
  BookmarkPlus,
} from "lucide-react";
import type { Workout } from "@/components/home/types/workout";

interface WorkoutDetailsProps {
  workout: Workout;
}

const WorkoutDetails = ({ workout }: WorkoutDetailsProps) => {
    const { addToPlan, saveWorkout, isInPlan, isSaved } = useFitLog();

const alreadyInPlan = isInPlan(workout.id);
const alreadySaved = isSaved(workout.id);
  return (
    <section className="bg-[#0B0D0F] py-16 lg:py-20">
      <div className="container-main">

        {/* Main Content */}
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">

          {/* Image */}
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-[#242832]">
            <Image
              src={workout.image}
              alt={workout.name}
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>

          {/* Details */}
          <div className="flex flex-col justify-center">

            {/* Category */}
            <div className="mb-5 flex flex-wrap gap-2">
              {workout.muscleGroups.map((muscle) => (
                <span
                  key={muscle}
                  className="rounded-full border border-[#30353F] px-3 py-1 text-xs font-medium text-[#CCFF00]"
                >
                  {muscle}
                </span>
              ))}
            </div>

            {/* Title */}
            <h1 className="text-4xl font-black uppercase leading-tight text-white sm:text-5xl lg:text-6xl">
              {workout.name}
            </h1>

            {/* Description */}
            <p className="mt-6 max-w-xl text-base leading-7 text-gray-400">
              {workout.description}
            </p>

            {/* Quick Stats */}
            <div className="mt-8 grid grid-cols-3 gap-3">
              <div className="rounded-xl border border-[#242832] bg-[#14171D] p-4">
                <Clock size={18} className="mb-3 text-[#CCFF00]" />
                <p className="text-lg font-bold text-white">
                  {workout.duration}
                </p>
                <p className="text-xs text-gray-500">Minutes</p>
              </div>

              <div className="rounded-xl border border-[#242832] bg-[#14171D] p-4">
                <Flame size={18} className="mb-3 text-[#CCFF00]" />
                <p className="text-lg font-bold text-white">
                  {workout.caloriesBurned}
                </p>
                <p className="text-xs text-gray-500">Calories</p>
              </div>

              <div className="rounded-xl border border-[#242832] bg-[#14171D] p-4">
                <Star
                  size={18}
                  className="mb-3 fill-[#CCFF00] text-[#CCFF00]"
                />
                <p className="text-lg font-bold text-white">
                  {workout.rating}
                </p>
                <p className="text-xs text-gray-500">Rating</p>
              </div>
            </div>

            {/* Workout Specs */}
            <div className="mt-8 grid grid-cols-2 gap-x-8 gap-y-5 border-y border-[#242832] py-6">
              <div>
                <p className="text-xs uppercase tracking-wider text-gray-500">
                  Equipment
                </p>
                <p className="mt-1 text-sm font-medium text-white">
                  {workout.equipment}
                </p>
              </div>

              <div>
                <p className="text-xs uppercase tracking-wider text-gray-500">
                  Difficulty
                </p>
                <p className="mt-1 text-sm font-medium text-white">
                  {workout.difficulty}
                </p>
              </div>

              <div>
                <p className="text-xs uppercase tracking-wider text-gray-500">
                  Sets
                </p>
                <p className="mt-1 text-sm font-medium text-white">
                  {workout.sets}
                </p>
              </div>

              <div>
                <p className="text-xs uppercase tracking-wider text-gray-500">
                  Reps
                </p>
                <p className="mt-1 text-sm font-medium text-white">
                  {workout.reps}
                </p>
              </div>
                        </div>

            {/* Action Buttons */}
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
             <button
                type="button"
                onClick={() => {
                    addToPlan(workout);
                    toast.success("Added to today's plan");
                }}
                disabled={alreadyInPlan}
                className="inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-[#CCFF00] px-6 py-3.5 text-sm font-bold text-black transition hover:bg-[#b8e600] disabled:cursor-not-allowed disabled:opacity-60"
                >
                <Check size={18} />
                {alreadyInPlan ? "Added to Plan" : "Add to Today's Plan"}
                </button>

              <button 
                type="button"
               onClick={() => {
  if (!alreadySaved) {
    saveWorkout(workout);
    toast.success("Saved for later");
  }
}}
                className="inline-flex flex-1 items-center justify-center gap-2 rounded-full border border-[#3A3F48] px-6 py-3.5 text-sm font-semibold text-white transition hover:border-[#CCFF00] disabled:cursor-not-allowed disabled:opacity-60"
              >
                <BookmarkPlus size={18} />
                {alreadySaved ? "Saved" : "Save for Later"}
              </button>
            </div>

          </div>
        </div>

        {/* Instructions */}

        <div className="mt-16 max-w-4xl">
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-[#CCFF00]">
            How To Perform
          </p>

          <h2 className="text-3xl font-black uppercase text-white md:text-4xl">
            Instructions
          </h2>

          <div className="mt-8 space-y-4">
            {workout.instructions.map((instruction, index) => (
              <div
                key={index}
                className="flex gap-4 rounded-xl border border-[#242832] bg-[#14171D] p-5"
              >
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#CCFF00] text-sm font-bold text-black">
                  {index + 1}
                </div>

                <p className="pt-1 text-sm leading-6 text-gray-300">
                  {instruction}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default WorkoutDetails;