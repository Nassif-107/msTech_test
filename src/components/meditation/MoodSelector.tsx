import { View, Text, Pressable } from "react-native";
import { MOOD_OPTIONS } from "../../constants/moods";
import type { MoodKey } from "../../types/mood";

type MoodSelectorProps = {
  selectedMood: MoodKey | null;
  onSelect: (mood: MoodKey) => void;
  disabled: boolean;
};

export function MoodSelector({
  selectedMood,
  onSelect,
  disabled,
}: MoodSelectorProps) {
  return (
    <View className="flex-row justify-center gap-4">
      {MOOD_OPTIONS.map((option) => {
        const isActive = selectedMood === option.key;
        return (
          <Pressable
            key={option.key}
            onPress={() => onSelect(option.key)}
            disabled={disabled}
            className={`items-center rounded-2xl px-4 py-3 ${
              isActive ? "bg-[#241b5e] border border-[#7a26ff]" : "bg-[#1a1245]"
            }`}
          >
            <Text className="text-3xl mb-1">{option.emoji}</Text>
            <Text className="text-[#a8a3c7] text-xs">{option.label}</Text>
          </Pressable>
        );
      })}
    </View>
  );
}
