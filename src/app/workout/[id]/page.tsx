import { getWorkout } from "@/lib/api";
import WorkoutDetails from "@/components/workout/WorkoutDetails";

interface WorkoutDetailsPageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function WorkoutDetailsPage({
  params,
}: WorkoutDetailsPageProps) {
  const { id } = await params;

  const workout = await getWorkout(id);

  return <WorkoutDetails workout={workout} />;
}