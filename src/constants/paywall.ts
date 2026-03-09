export const BENEFITS = [
  { icon: "🧘", text: "Безлимитный доступ ко всем медитациям" },
  { icon: "✨", text: "AI-настрой дня под ваше настроение" },
  { icon: "🎯", text: "Персональные рекомендации" },
  { icon: "🆕", text: "Новые медитации каждую неделю" },
  { icon: "🚫", text: "Без рекламы" },
] as const;

export const PLANS = [
  {
    id: "monthly" as const,
    title: "Месячный",
    price: "299 ₽",
    period: "мес",
    badge: null,
  },
  {
    id: "yearly" as const,
    title: "Годовой",
    price: "1 990 ₽",
    period: "год",
    badge: "Выгодно",
  },
] as const;
