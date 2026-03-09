import { Pressable, Text } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

type SubscribeButtonProps = {
  onPress: () => void;
};

export function SubscribeButton({ onPress }: SubscribeButtonProps) {
  return (
    <Pressable onPress={onPress}>
      <LinearGradient
        colors={["#7a26ff", "#5a1adb"]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        className="rounded-2xl py-4 items-center"
      >
        <Text className="text-white text-lg font-bold">
          Попробовать бесплатно
        </Text>
      </LinearGradient>
    </Pressable>
  );
}
