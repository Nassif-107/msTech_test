import { Tabs } from "expo-router";
import { Text } from "react-native";
import { COLORS } from "../../constants/theme";

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: COLORS.surface,
          borderTopColor: COLORS.elevated,
          borderTopWidth: 1,
          height: 60,
          paddingBottom: 8,
          paddingTop: 8,
        },
        tabBarActiveTintColor: COLORS.primaryLight,
        tabBarInactiveTintColor: COLORS.textMuted,
      }}
    >
      <Tabs.Screen
        name="meditations"
        options={{
          title: "Медитации",
          tabBarIcon: ({ color }) => (
            <Text style={{ fontSize: 22, color }}>🧘</Text>
          ),
        }}
      />
    </Tabs>
  );
}
