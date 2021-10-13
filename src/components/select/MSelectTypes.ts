export type MSelectItems = {
  label: string;
  value: string;
};

export type MSelectTypes = {
  label: string;
  values: MSelectItems[];
  selectedValue: string;
  onValueChange: (itemValue: string, index: number) => void;
};
