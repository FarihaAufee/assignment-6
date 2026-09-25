import Image from "next/image";
import Link from "next/link";
import { Clock, Flame, Star } from "lucide-react";
import type { Workout } from "@/components/home/types/workout";

interface WorkoutCardProps {
  workout: Workout;
}

const WorkoutCard = ({ workout }: WorkoutCardProps) => {
  return (
    <Link href={`/workout/${workout.id}`}>
      <article className="group overflow-hidden rounded-2xl border border-[#242832] bg-[#14171D] transition duration-300 hover:-translate-y-1 hover:border-[#CCFF00]">

        {/* Image */}
        <div className="relative aspect-[16/10] overflow-hidden">
          <Image
            src={workout.image}
            alt={workout.name}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover transition duration-500 group-hover:scale-105"
          />

          {/* Difficulty */}
          <span className="absolute left-4 top-4 rounded-full bg-[#0B0D0F]/90 px-3 py-1 text-xs font-medium text-[#CCFF00] backdrop-blur-sm">
            {workout.difficulty}
          </span>
        </div>

        {/* Content */}
        <div className="p-5">

          {/* Muscle Groups */}
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

          {/* Name */}
          <h3 className="text-xl font-bold text-white transition group-hover:text-[#CCFF00]">
            {workout.name}
          </h3>

          {/* Equipment */}
          <p className="mt-2 text-sm text-gray-500">
            {workout.equipment}
          </p>

          {/* Stats */}
          <div className="mt-5 flex items-center justify-between border-t border-[#242832] pt-4">

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
        </div>
      </article>
    </Link>
  );
};

export default WorkoutCard;