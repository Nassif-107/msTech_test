import "../../global.css";
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { SubscriptionProvider } from "../context/SubscriptionContext";

export default function RootLayout() {
  return (
    <SubscriptionProvider>
      <StatusBar style="light" />
      <Stack
        screenOptions={{
          headerShown: false,
          contentStyle: { backgroundColor: "#0f0a2e" },
          animation: "slide_from_bottom",
        }}
      />
    </SubscriptionProvider>
  );
}
