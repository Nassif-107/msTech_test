import { FlatList } from "react-native";
import { useRouter } from "expo-router";
import { MeditationCard } from "./MeditationCard";
import { useSubscription } from "../../hooks/useSubscription";
import { MEDITATIONS } from "../../constants/meditations";

export function MeditationList() {
  const { isSubscribed } = useSubscription();
  const router = useRouter();

  const handlePress = (isFree: boolean) => {
    if (!isFree && !isSubscribed) {
      router.push("/paywall");
    }
  };

  return (
    <FlatList
      data={MEDITATIONS}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => {
        const isLocked = !item.isFree && !isSubscribed;
        return (
          <MeditationCard
            meditation={item}
            isLocked={isLocked}
            onPress={() => handlePress(item.isFree)}
          />
        );
      }}
      scrollEnabled={false}
    />
  );
}
