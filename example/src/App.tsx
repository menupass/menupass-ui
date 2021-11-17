import * as React from 'react';

import { StyleSheet, View, Text, ScrollView, SafeAreaView } from 'react-native';

import {
  MTextInput,
  MFullWidthButton,
  MFloatButton,
  MAvatar,
  MSelect,
  MFloatButtonType,
  MRadioButton,
  // @ts-ignore
} from 'menupass-ui';

import { useState } from 'react';
import { useFonts } from 'expo-font';
import { fonts } from './consts/fonts';

export default function App() {
  const [masked, setMasked] = useState('');
  const [withError, setWithError] = useState('');
  const [normal, setNormal] = useState('');
  const [password, setPassword] = useState('');

  let [fontsLoaded] = useFonts({
    [fonts.Bold]: require('./assets/fonts/Roboto-Bold.ttf'),
    [fonts.Medium]: require('./assets/fonts/Roboto-Medium.ttf'),
    [fonts.Regular]: require('./assets/fonts/Roboto-Regular.ttf'),
    [fonts.Light]: require('./assets/fonts/Roboto-Light.ttf'),
  });

  const selectData = [
    {
      label: 'Test 1',
      value: 'test1',
    },
    {
      label: 'Test 2',
      value: 'test2',
    },
    {
      label: 'Test 3',
      value: 'test3',
    },
  ];

  return (
    <SafeAreaView style={styles.main}>
      {fontsLoaded && (
        <>
          <Text style={styles.text}>Menu Pass UI Components example</Text>
          <ScrollView contentContainerStyle={styles.scroll}>
            <View style={styles.container}>
              <MTextInput
                label={'Password'}
                placeholder={'Insert your password'}
                value={password}
                onChangeText={setPassword}
                secureTextEntry
                isPassword
              />
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
                mask={'(00) 00000-0000'}
                onChangeText={setMasked}
              />
              <MFullWidthButton label={'Continue'} />
              <MFullWidthButton label={'Continue'} disabled />
              <MAvatar username={'Vitor Monteiro'} status={'Ativo'} />
              <MSelect
                label={'Select'}
                values={selectData}
                selectedValue={'test1'}
                onValueChange={(value: string, index: number) =>
                  console.log(value, index)
                }
              />
              <MSelect
                label={'Empty Select'}
                placeholder={'no values'}
                values={[]}
                selectedValue={'test1'}
                onValueChange={(value: string, index: number) =>
                  console.log(value, index)
                }
                enabled={false}
              />
              <MRadioButton
                items={[
                  { label: 'Test1', value: 'radio1' },
                  { label: 'Test2', value: 'radio2', disabled: true },
                ]}
                onChangeValue={(value: string, index: number) =>
                  console.log(value, index)
                }
                side={'left'}
                flexDirection={'column'}
                labelColor={'#FF0000'}
                value={'radio1'}
                checkedColor={'#FF0000'}
                notCheckedColor={'#FF0000'}
                style={{ marginBottom: 10 }}
              />
            </View>
          </ScrollView>
          <MFloatButton type={MFloatButtonType.Plus} />
        </>
      )}
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
    marginBottom: 100,
  },
});
