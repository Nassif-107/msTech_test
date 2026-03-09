export type SubscriptionPlan = "monthly" | "yearly";

export type SubscriptionContextType = {
  isSubscribed: boolean;
  subscribe: () => void;
};
