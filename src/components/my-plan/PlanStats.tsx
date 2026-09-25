"use client";

import { useFitLog } from "@/context/FitLogContext";

const PlanStats = () => {
  const { plannedWorkouts } = useFitLog();

  const exercises = plannedWorkouts.length;

  const minutes = plannedWorkouts.reduce(
    (total, workout) => total + workout.duration,
    0
  );

  const calories = plannedWorkouts.reduce(
    (total, workout) => total + workout.caloriesBurned,
    0
  );

  return (
    <div className="container-main mt-8">
    <div className=" grid grid-cols-1 gap-4 sm:grid-cols-3">
      <div className="rounded-2xl border border-[#242832] bg-[#14171D] p-6">
        <p className="text-3xl font-black text-white">
          {exercises}
        </p>
        <p className="mt-1 text-sm text-gray-500">
          Exercises
        </p>
      </div>

      <div className="rounded-2xl border border-[#242832] bg-[#14171D] p-6">
        <p className="text-3xl font-black text-white">
          {minutes}
        </p>
        <p className="mt-1 text-sm text-gray-500">
          Minutes
        </p>
      </div>

      <div className="rounded-2xl border border-[#242832] bg-[#14171D] p-6">
        <p className="text-3xl font-black text-white">
          {calories}
        </p>
        <p className="mt-1 text-sm text-gray-500">
          Calories
        </p>
      </div>
    </div>
    </div>
  );
};

export default PlanStats;