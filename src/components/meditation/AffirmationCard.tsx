import { View, Text, ActivityIndicator } from "react-native";
import { COLORS } from "../../constants/theme";

type AffirmationCardProps = {
  affirmation: string | null;
  isLoading: boolean;
};

export function AffirmationCard({ affirmation, isLoading }: AffirmationCardProps) {
  if (!isLoading && !affirmation) return null;

  return (
    <View className="mt-4 bg-[#241b5e] rounded-2xl p-4 border border-[#3a3555]">
      {isLoading ? (
        <View className="items-center py-4">
          <ActivityIndicator size="small" color={COLORS.primaryLight} />
          <Text className="text-[#a8a3c7] text-sm mt-2">
            Генерируем аффирмацию...
          </Text>
        </View>
      ) : (
        <Text className="text-white text-base leading-6 text-center italic">
          «{affirmation}»
        </Text>
      )}
    </View>
  );
}
