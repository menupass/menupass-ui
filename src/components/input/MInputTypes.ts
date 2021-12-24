import type { TextInputProps } from 'react-native';
import type { CurrencyInputProps } from 'react-native-currency-input/lib/typescript/src/props';

export type MInputProps = TextInputProps &
  any & {
    label: string;
    hasError?: boolean;
    mask?: string;
    isPassword?: boolean;
    isCurrency?: boolean;
    height?: number;
    borderRadius?: number;
  };

export type MCurrencyProps = CurrencyInputProps & {
  prefix?: string;
  delimiter?: string;
  separator?: string;
  precision?: number;
  minValue?: number;
  value?: any;
  onChangeValue?: (value: number | null) => void;
};
