"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";

import type { Workout } from "@/components/home/types/workout";

interface FitLogContextType {
  plannedWorkouts: Workout[];
  savedWorkouts: Workout[];

  addToPlan: (workout: Workout) => void;
  removeFromPlan: (id: number) => void;

  saveWorkout: (workout: Workout) => void;
  removeSaved: (id: number) => void;

  isInPlan: (id: number) => boolean;
  isSaved: (id: number) => boolean;
}

const FitLogContext = createContext<FitLogContextType | undefined>(
  undefined
);

export function FitLogProvider({ children }: { children: ReactNode }) {
  const [plannedWorkouts, setPlannedWorkouts] = useState<Workout[]>([]);
  const [savedWorkouts, setSavedWorkouts] = useState<Workout[]>([]);

  
  useEffect(() => {
    const storedPlan = localStorage.getItem("fitlog-plan");
    const storedSaved = localStorage.getItem("fitlog-saved");

    if (storedPlan) {
      setPlannedWorkouts(JSON.parse(storedPlan));
    }

    if (storedSaved) {
      setSavedWorkouts(JSON.parse(storedSaved));
    }
  }, []);


  
  useEffect(() => {
    localStorage.setItem(
      "fitlog-plan",
      JSON.stringify(plannedWorkouts)
    );
  }, [plannedWorkouts]);


  useEffect(() => {
    localStorage.setItem(
      "fitlog-saved",
      JSON.stringify(savedWorkouts)
    );
  }, [savedWorkouts]);

  const addToPlan = (workout: Workout) => {
    setPlannedWorkouts((current) => {
      if (current.some((item) => item.id === workout.id)) {
        return current;
      }

      return [...current, workout];
    });
  };

  const removeFromPlan = (id: number) => {
    setPlannedWorkouts((current) =>
      current.filter((workout) => workout.id !== id)
    );
  };

  const saveWorkout = (workout: Workout) => {
    setSavedWorkouts((current) => {
      if (current.some((item) => item.id === workout.id)) {
        return current;
      }

      return [...current, workout];
    });
  };

  const removeSaved = (id: number) => {
    setSavedWorkouts((current) =>
      current.filter((workout) => workout.id !== id)
    );
  };

  const isInPlan = (id: number) => {
    return plannedWorkouts.some((workout) => workout.id === id);
  };

  const isSaved = (id: number) => {
    return savedWorkouts.some((workout) => workout.id === id);
  };

  return (
    <FitLogContext.Provider
      value={{
        plannedWorkouts,
        savedWorkouts,
        addToPlan,
        removeFromPlan,
        saveWorkout,
        removeSaved,
        isInPlan,
        isSaved,
      }}
    >
      {children}
    </FitLogContext.Provider>
  );
}

export function useFitLog() {
  const context = useContext(FitLogContext);

  if (!context) {
    throw new Error("useFitLog must be used inside FitLogProvider");
  }

  return context;
}