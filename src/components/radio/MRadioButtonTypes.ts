export type MRadioButtonItems = {
  label: string;
  value: string;
  disabled?: boolean;
};

export type MRadioButtonTypes = {
  items: MRadioButtonItems[];
  onChangeValue: (value: string, index: number) => void;
  flexDirection: 'row' | 'column';
  side: 'right' | 'left';
  value: string;
  checkedColor?: string;
  notCheckedColor?: string;
  labelColor?: string;
  style?: any;
};
