export const accordeonItems = Array.from({ length: 25 }, (_, i) => ({
  id: i + 1,
  name: `t${i + 1}`,
  value: [`p${i + 1}`],
}));
