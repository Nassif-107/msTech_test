import { View, Text, Pressable } from "react-native";
import { PLANS } from "../../constants/paywall";
import type { SubscriptionPlan } from "../../types/subscription";

type PlanSelectorProps = {
  selectedPlan: SubscriptionPlan;
  onSelectPlan: (plan: SubscriptionPlan) => void;
};

export function PlanSelector({ selectedPlan, onSelectPlan }: PlanSelectorProps) {
  return (
    <View className="flex-row gap-3 mb-8">
      {PLANS.map((plan) => {
        const isSelected = selectedPlan === plan.id;
        return (
          <Pressable
            key={plan.id}
            onPress={() => onSelectPlan(plan.id)}
            className={`flex-1 rounded-2xl p-4 border-2 ${
              isSelected
                ? "border-[#f5c842] bg-[#241b5e]"
                : "border-[#3a3555] bg-[#1a1245]"
            }`}
          >
            {plan.badge && (
              <View className="bg-[#f5c842] self-start rounded-full px-3 py-1 mb-2">
                <Text className="text-[#0f0a2e] text-xs font-bold">
                  {plan.badge}
                </Text>
              </View>
            )}
            <Text className="text-white text-lg font-bold mb-1">
              {plan.title}
            </Text>
            <Text className="text-[#b380ff] text-xl font-bold">
              {plan.price}
            </Text>
            <Text className="text-[#a8a3c7] text-sm">/ {plan.period}</Text>
          </Pressable>
        );
      })}
    </View>
  );
}
