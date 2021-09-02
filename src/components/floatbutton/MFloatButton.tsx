import React from 'react';
import { TouchableOpacity } from 'react-native';
import type { MFloatButtonTypes } from './MFloatButtonTypes';
import { MFloatButtonType } from './MFloatButtonTypes';
import { ArrowLeft } from './buttontypes/ArrowLeft';
import { ArrowRight } from './buttontypes/ArrowRight';
import { CheckMark } from './buttontypes/CheckMark';
import { MFloatButtonStyles } from './MFloatButtonStyles';
import { MFloatButtonColors } from './MFloatButtonColors';
import { Plus } from './buttontypes/Plus';

export const MFloatButton = (props: MFloatButtonTypes) => {
  const getType = () => {
    switch (props.type) {
      case MFloatButtonType.ArrowLeft:
        return <ArrowLeft />;
      case MFloatButtonType.ArrowRight:
        return <ArrowRight />;
      case MFloatButtonType.CheckMark:
        return <CheckMark />;
      case MFloatButtonType.Plus:
        return <Plus />;
      default:
        return <ArrowRight />;
    }
  };

  return (
    <TouchableOpacity
      disabled={props.disabled}
      activeOpacity={0.7}
      onPress={props.onPress}
      style={[
        MFloatButtonStyles.container,
        {
          backgroundColor: props.disabled
            ? MFloatButtonColors.containerBgDisabled
            : MFloatButtonColors.containerBg,
        },
      ]}
    >
      {getType()}
    </TouchableOpacity>
  );
};

export default MFloatButton;
