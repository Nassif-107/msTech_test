import { View, Text } from "react-native";
import { BENEFITS } from "../../constants/paywall";

export function BenefitsList() {
  return (
    <View className="mb-8 px-2">
      {BENEFITS.map((benefit) => (
        <View key={benefit.text} className="flex-row items-center mb-3">
          <Text className="text-xl mr-3">{benefit.icon}</Text>
          <Text className="text-white text-base flex-1">{benefit.text}</Text>
        </View>
      ))}
    </View>
  );
}
