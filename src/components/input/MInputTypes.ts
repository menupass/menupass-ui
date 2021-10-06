import type { TextInputProps } from 'react-native';

export type MInputProps = TextInputProps & {
  label: string;
  hasError?: boolean;
};
