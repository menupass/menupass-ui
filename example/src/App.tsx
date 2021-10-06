import * as React from 'react';

import { StyleSheet, View, Text, ScrollView, SafeAreaView } from 'react-native';
import {
  MTextInput,
  MFullWidthButton,
  MFloatButton,
  MAvatar,
  MFloatButtonType,
} from 'menupass-ui';
import { useState } from 'react';

export default function App() {
  const [masked, setMasked] = useState('');
  const [withError, setWithError] = useState('');
  const [normal, setNormal] = useState('');
  return (
    <SafeAreaView style={styles.main}>
      <Text style={styles.text}>Menu Pass UI Components example</Text>
      <ScrollView contentContainerStyle={styles.scroll}>
        <View style={styles.container}>
          <MTextInput
            label={'E-mail'}
            placeholder={'Inset your e-mail'}
            value={normal}
            onChangeText={setNormal}
          />
          <MTextInput
            value={withError}
            onChangeText={setWithError}
            label={'With error'}
            placeholder={'Inset your e-mail'}
            hasError
          />
          <MTextInput
            value={masked}
            label={'Masked'}
            placeholder={'Inset your e-mail'}
            mask="(00) 00000-0000"
            onChangeText={setMasked}
          />
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
