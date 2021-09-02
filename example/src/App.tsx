import * as React from 'react';

import { StyleSheet, View, Text, ScrollView, SafeAreaView } from 'react-native';
import {
  MTextInput,
  MFullWidthButton,
  MFloatButton,
  MAvatar,
  MFloatButtonType,
} from 'menupass-ui';

export default function App() {
  return (
    <SafeAreaView style={styles.main}>
      <Text style={styles.text}>Menu Pass UI Components example</Text>
      <ScrollView contentContainerStyle={styles.scroll}>
        <View style={styles.container}>
          <MTextInput label={'E-mail'} placeholder={'Inset your e-mail'} />
          <MFullWidthButton label={'Continue'} />
          <MFullWidthButton label={'Continue'} disabled />
          <MAvatar username={'Vitor Monteiro'} status={'Ativo'} />
        </View>
      </ScrollView>
      <MFloatButton type={MFloatButtonType.Plus} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
  },
  text: {
    alignSelf: 'center',
    marginBottom: 50,
  },
  scroll: {
    flex: 1,
  },
  container: {
    width: '100%',
    flex: 1,
    paddingHorizontal: 25,
    justifyContent: 'space-evenly',
  },
});
