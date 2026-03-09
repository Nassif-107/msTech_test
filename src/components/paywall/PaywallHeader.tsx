import { View, Text } from "react-native";

export function PaywallHeader() {
  return (
    <View className="items-center mb-8">
      <Text className="text-6xl mb-4">🧘‍♀️</Text>
      <Text className="text-white text-3xl font-bold text-center mb-2">
        ZenPulse Premium
      </Text>
      <Text className="text-[#a8a3c7] text-base text-center">
        Откройте для себя путь к гармонии
      </Text>
    </View>
  );
}
