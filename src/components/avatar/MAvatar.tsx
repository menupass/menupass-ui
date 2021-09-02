import React from 'react';
import { Image, Text, View } from 'react-native';
import { MAvatarStyles } from './MAvatarStyles';
import type { MAvatarTypes } from './MAvatarTypes';
import { MAvatarDefault } from './MAvatarDefault';

export const MAvatar = (props: MAvatarTypes) => {
  const getAvatar = () => {
    if (props.photo && typeof props.photo === 'string') {
      return <Image source={{ uri: props.photo }} width={64} height={64} />;
    }

    if (props.photo && typeof props.photo === 'function') {
      return <props.photo width={64} height={64} />;
    }

    return <MAvatarDefault />;
  };

  return (
    <View style={MAvatarStyles.container}>
      <View style={MAvatarStyles.photoContainer}>{getAvatar()}</View>
      <View style={MAvatarStyles.userInfoContainer}>
        <Text style={MAvatarStyles.username}>{props.username}</Text>
        <Text style={MAvatarStyles.status}>{props.status}</Text>
      </View>
    </View>
  );
};

export default MAvatar;
