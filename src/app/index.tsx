import { Redirect } from "expo-router";
import { useSubscription } from "../hooks/useSubscription";

export default function Index() {
  const { isSubscribed } = useSubscription();

  if (!isSubscribed) {
    return <Redirect href="/paywall" />;
  }

  return <Redirect href="/(tabs)/meditations" />;
}
