import { createContext, useEffect, useState, type ReactNode } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import type { SubscriptionContextType } from "../types/subscription";

const STORAGE_KEY = "zenpulse_subscribed";

export const SubscriptionContext = createContext<SubscriptionContextType>({
  isSubscribed: false,
  subscribe: () => {},
});

export function SubscriptionProvider({ children }: { children: ReactNode }) {
  const [isSubscribed, setIsSubscribed] = useState(false);

  useEffect(() => {
    AsyncStorage.getItem(STORAGE_KEY).then((value) => {
      if (value === "true") setIsSubscribed(true);
    });
  }, []);

  const subscribe = () => {
    setIsSubscribed(true);
    AsyncStorage.setItem(STORAGE_KEY, "true");
  };

  return (
    <SubscriptionContext.Provider value={{ isSubscribed, subscribe }}>
      {children}
    </SubscriptionContext.Provider>
  );
}
