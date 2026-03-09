import type { Meditation } from "../types/meditation";

export const MEDITATIONS: Meditation[] = [
  {
    id: "1",
    title: "Утреннее пробуждение",
    description: "Мягкий старт нового дня",
    duration: "5 мин",
    image: require("../../assets/splash-icon.png"),
    isFree: true,
  },
  {
    id: "2",
    title: "Глубокое дыхание",
    description: "Техника осознанного дыхания",
    duration: "10 мин",
    image: require("../../assets/splash-icon.png"),
    isFree: true,
  },
  {
    id: "3",
    title: "Снятие стресса",
    description: "Расслабление тела и ума",
    duration: "15 мин",
    image: require("../../assets/splash-icon.png"),
    isFree: false,
  },
  {
    id: "4",
    title: "Вечерняя медитация",
    description: "Подготовка к спокойному сну",
    duration: "20 мин",
    image: require("../../assets/splash-icon.png"),
    isFree: false,
  },
  {
    id: "5",
    title: "Осознанность",
    description: "Практика присутствия в моменте",
    duration: "12 мин",
    image: require("../../assets/splash-icon.png"),
    isFree: false,
  },
  {
    id: "6",
    title: "Сканирование тела",
    description: "Полное расслабление от головы до пят",
    duration: "25 мин",
    image: require("../../assets/splash-icon.png"),
    isFree: false,
  },
];
