export enum MFloatButtonType {
  ArrowRight = 'arrowRight',
  ArrowLeft = 'arrowLeft',
  CheckMark = 'checkMark',
  Plus = 'plus',
}

export type MFloatButtonTypes = {
  type: MFloatButtonType;
  onPress?: (param?: any) => void;
  disabled?: boolean;
};
