import { ScrollView, View, Text } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { DailyMoodSection } from "../../components/meditation/DailyMoodSection";
import { MeditationList } from "../../components/meditation/MeditationList";
import { GRADIENTS } from "../../constants/theme";

export default function MeditationsScreen() {
  const insets = useSafeAreaInsets();

  return (
    <LinearGradient colors={[...GRADIENTS.background]} className="flex-1">
      <ScrollView
        contentContainerStyle={{
          paddingTop: insets.top + 16,
          paddingBottom: insets.bottom + 80,
          paddingHorizontal: 20,
        }}
        showsVerticalScrollIndicator={false}
      >
        <View className="mb-6">
          <Text className="text-white text-3xl font-bold">Медитации</Text>
          <Text className="text-[#a8a3c7] text-base mt-1">
            Найдите свой покой
          </Text>
        </View>

        <DailyMoodSection />

        <View className="mb-4">
          <Text className="text-white text-xl font-bold mb-4">
            Все сессии
          </Text>
          <MeditationList />
        </View>
      </ScrollView>
    </LinearGradient>
  );
}
