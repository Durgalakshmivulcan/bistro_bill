export type TaxGroup = {
  id: number;
  name: string;
  mixOf: string[];
  percentage: number;
};

export const taxGroups: TaxGroup[] = [
  {
    id: 1,
    name: "Cascading Tax",
    mixOf: ["GST", "VAT"],
    percentage: 12,
  },
];
