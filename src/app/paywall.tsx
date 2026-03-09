import { useState } from "react";
import { ScrollView, Text, Pressable } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useRouter } from "expo-router";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { PaywallHeader } from "../components/paywall/PaywallHeader";
import { BenefitsList } from "../components/paywall/BenefitsList";
import { PlanSelector } from "../components/paywall/PlanSelector";
import { SubscribeButton } from "../components/paywall/SubscribeButton";
import { useSubscription } from "../hooks/useSubscription";
import { GRADIENTS } from "../constants/theme";
import type { SubscriptionPlan } from "../types/subscription";

export default function PaywallScreen() {
  const [selectedPlan, setSelectedPlan] = useState<SubscriptionPlan>("yearly");
  const { subscribe } = useSubscription();
  const router = useRouter();
  const insets = useSafeAreaInsets();

  const handleSubscribe = () => {
    subscribe();
    router.replace("/(tabs)/meditations");
  };

  return (
    <LinearGradient colors={[...GRADIENTS.paywall]} className="flex-1">
      <ScrollView
        contentContainerStyle={{
          paddingTop: insets.top + 20,
          paddingBottom: insets.bottom + 20,
          paddingHorizontal: 24,
        }}
        showsVerticalScrollIndicator={false}
      >
        <PaywallHeader />
        <BenefitsList />
        <PlanSelector
          selectedPlan={selectedPlan}
          onSelectPlan={setSelectedPlan}
        />
        <SubscribeButton onPress={handleSubscribe} />
        <Pressable className="mt-4 items-center py-3">
          <Text className="text-[#6b6590] text-sm">Восстановить покупку</Text>
        </Pressable>
      </ScrollView>
    </LinearGradient>
  );
}
