import type { ImageSource } from "expo-image";

export type Meditation = {
  id: string;
  title: string;
  description: string;
  duration: string;
  image: ImageSource;
  isFree: boolean;
};
