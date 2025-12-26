export type TaxItem = {
  id: number;
  name: string;
  percentage: number;
};

export const taxes: TaxItem[] = [
  {
    id: 1,
    name: "CGST (Central Goods and Services Tax)",
    percentage: 9,
  },
  {
    id: 2,
    name: "IGST (Integrated Goods and Services Tax)",
    percentage: 18,
  },
];
