"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useFitLog } from "@/context/FitLogContext";
import PlanWorkoutCard from "@/components/my-plan/PlanWorkoutCard";

const PlanTabs = () => {
  const searchParams = useSearchParams();

  const activeTab =
    searchParams.get("tab") === "saved" ? "saved" : "plan";

  const { plannedWorkouts, savedWorkouts } = useFitLog();

  const workouts =
    activeTab === "plan" ? plannedWorkouts : savedWorkouts;

  return (
    <div className="mt-12">
      <div className="flex border-b border-[#242832]">
        <Link
          href="/my-plan?tab=plan"
          className={`px-5 py-4 text-sm font-semibold transition ${
            activeTab === "plan"
              ? "border-b-2 border-[#CCFF00] text-[#CCFF00]"
              : "text-gray-500 hover:text-white"
          }`}
        >
Today's Plan
        </Link>

        <Link
          href="/my-plan?tab=saved"
          className={`px-5 py-4 text-sm font-semibold transition ${
            activeTab === "saved"
              ? "border-b-2 border-[#CCFF00] text-[#CCFF00]"
              : "text-gray-500 hover:text-white"
          }`}
        >
          Saved
        </Link>
      </div>

      <div className="space-y-5 py-8">
        {workouts.length > 0 ? (
          workouts.map((workout) => (
            <PlanWorkoutCard
              key={workout.id}
              workout={workout}
              type={activeTab}
            />
          ))
        ) : (
          <div className="rounded-2xl border border-[#242832] bg-[#14171D] px-6 py-16 text-center">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#CCFF00]">
              NOTHING HERE YET
            </p>

            <p className="mx-auto mt-4 max-w-md text-sm leading-6 text-gray-500">
              {activeTab === "plan"
                ? "Add workouts to your plan and they will appear here."
                : "Save workouts for later and they will appear here."}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default PlanTabs;