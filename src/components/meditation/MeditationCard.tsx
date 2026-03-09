import { View, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import { LinearGradient } from "expo-linear-gradient";
import type { Meditation } from "../../types/meditation";

type MeditationCardProps = {
  meditation: Meditation;
  isLocked: boolean;
  onPress: () => void;
};

export function MeditationCard({
  meditation,
  isLocked,
  onPress,
}: MeditationCardProps) {
  return (
    <Pressable
      onPress={onPress}
      className={`mb-4 rounded-2xl overflow-hidden ${
        isLocked ? "opacity-50" : ""
      }`}
    >
      <LinearGradient
        colors={["#1a1245", "#241b5e"]}
        className="flex-row items-center p-4"
      >
        <Image
          source={meditation.image}
          className="w-16 h-16 rounded-xl"
          contentFit="cover"
        />
        <View className="flex-1 ml-4">
          <Text className="text-white text-lg font-bold">
            {meditation.title}
          </Text>
          <Text className="text-[#a8a3c7] text-sm mt-1">
            {meditation.description}
          </Text>
          <Text className="text-[#b380ff] text-sm mt-1">
            {meditation.duration}
          </Text>
        </View>
        {isLocked && (
          <View className="bg-[#3a3555] rounded-full w-10 h-10 items-center justify-center">
            <Text className="text-lg">🔒</Text>
          </View>
        )}
      </LinearGradient>
    </Pressable>
  );
}
