import { useState, useCallback } from "react";
import { AFFIRMATIONS } from "../constants/affirmations";
import type { MoodKey } from "../types/mood";

export function useAffirmation() {
  const [affirmation, setAffirmation] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const generate = useCallback((mood: MoodKey) => {
    setIsLoading(true);
    setAffirmation(null);

    setTimeout(() => {
      const options = AFFIRMATIONS[mood];
      const randomIndex = Math.floor(Math.random() * options.length);
      setAffirmation(options[randomIndex]);
      setIsLoading(false);
    }, 1200);
  }, []);

  return { affirmation, isLoading, generate };
}
