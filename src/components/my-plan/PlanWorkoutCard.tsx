"use client";

import Image from "next/image";
import Link from "next/link";
import { Clock, Flame, Star, X, Check } from "lucide-react";
import { toast } from "react-toastify";
import { useFitLog } from "@/context/FitLogContext";
import type { Workout } from "@/components/home/types/workout";

interface PlanWorkoutCardProps {
  workout: Workout;
  type: "plan" | "saved";
}

const PlanWorkoutCard = ({
  workout,
  type,
}: PlanWorkoutCardProps) => {
  const { removeFromPlan, removeSaved } = useFitLog();

  const handleRemove = () => {
    if (type === "plan") {
      removeFromPlan(workout.id);
      toast.success("Workout removed from your plan");
    } else {
      removeSaved(workout.id);
      toast.success("Workout removed from saved");
    }
  };

  const handleDone = () => {
    removeFromPlan(workout.id);
    toast.success("Workout marked as done");
  };

  return (
    <article className="overflow-hidden rounded-2xl border border-[#242832] bg-[#14171D]">
      <div className="flex flex-col sm:flex-row">
        <div className="relative aspect-[16/10] w-full shrink-0 sm:aspect-auto sm:h-auto sm:w-[240px]">
          <Image
            src={workout.image}
            alt={workout.name}
            fill
            sizes="(max-width: 640px) 100vw, 240px"
            className="object-cover"
          />
        </div>

        <div className="flex flex-1 flex-col p-5">
          <div className="flex items-start justify-between gap-4">
            <div>
              <div className="mb-3 flex flex-wrap gap-2">
                {workout.muscleGroups.map((muscle) => (
                  <span
                    key={muscle}
                    className="rounded-full border border-[#30353F] px-2.5 py-1 text-[11px] font-medium text-gray-400"
                  >
                    {muscle}
                  </span>
                ))}
              </div>

              <h3 className="text-xl font-bold text-white">
                {workout.name}
              </h3>

              <p className="mt-2 text-sm text-gray-500">
                {workout.equipment}
              </p>
            </div>

            <button
              type="button"
              onClick={handleRemove}
              aria-label={`Remove ${workout.name}`}
              className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[#30353F] text-gray-400 transition hover:border-red-500 hover:text-red-500"
            >
              <X size={17} />
            </button>
          </div>

          <div className="mt-5 flex flex-wrap items-center gap-5 border-t border-[#242832] pt-4">
            <div className="flex items-center gap-1.5 text-xs text-gray-400">
              <Clock size={15} />
              <span>{workout.duration} min</span>
            </div>

            <div className="flex items-center gap-1.5 text-xs text-gray-400">
              <Flame size={15} />
              <span>{workout.caloriesBurned} kcal</span>
            </div>

            <div className="flex items-center gap-1.5 text-xs text-gray-400">
              <Star
                size={15}
                className="fill-[#CCFF00] text-[#CCFF00]"
              />
              <span>{workout.rating}</span>
            </div>
          </div>

          <div className="mt-5 flex flex-col gap-3 sm:flex-row">
            <Link
              href={`/workout/${workout.id}`}
              className="inline-flex items-center justify-center rounded-full bg-[#CCFF00] px-5 py-2.5 text-sm font-bold text-black transition hover:bg-[#b8e600]"
            >
              View Details
            </Link>

            {type === "plan" && (
              <button
                type="button"
                onClick={handleDone}
                className="inline-flex items-center justify-center gap-2 rounded-full border border-[#3A3F48] px-5 py-2.5 text-sm font-semibold text-white transition hover:border-[#CCFF00] hover:text-[#CCFF00]"
              >
                <Check size={16} />
                Mark as Done
              </button>
            )}
          </div>
        </div>
      </div>
    </article>
  );
};

export default PlanWorkoutCard;