import { useState } from "react";
import { View, Text } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { MoodSelector } from "./MoodSelector";
import { AffirmationCard } from "./AffirmationCard";
import { useAffirmation } from "../../hooks/useAffirmation";
import type { MoodKey } from "../../types/mood";

export function DailyMoodSection() {
  const [selectedMood, setSelectedMood] = useState<MoodKey | null>(null);
  const { affirmation, isLoading, generate } = useAffirmation();

  const handleSelect = (mood: MoodKey) => {
    setSelectedMood(mood);
    generate(mood);
  };

  return (
    <View className="mb-6">
      <LinearGradient
        colors={["#1a1245", "#241b5e"]}
        className="rounded-2xl p-5"
      >
        <View className="flex-row items-center mb-4">
          <Text className="text-2xl mr-2">✨</Text>
          <Text className="text-white text-xl font-bold">AI Настрой дня</Text>
        </View>
        <Text className="text-[#a8a3c7] text-sm mb-4">
          Выберите ваше настроение, и мы подберём аффирмацию для вас
        </Text>
        <MoodSelector
          selectedMood={selectedMood}
          onSelect={handleSelect}
          disabled={isLoading}
        />
        <AffirmationCard affirmation={affirmation} isLoading={isLoading} />
      </LinearGradient>
    </View>
  );
}
