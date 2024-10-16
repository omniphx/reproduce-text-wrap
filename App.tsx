/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  useColorScheme,
  View,
} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import {Accordion} from './Accordion/Accordion';

const commonQuestions = [
  {answer: 'tjGmaaaaaaaaaaaa', question: 'header-1'},
  {
    answer:
      'QmVx5RK58MtuZX0TOkDOmZb9zUXhj5VA8KpazxuRQ6dTtrjmHp1yRTcAKykJ5VygYuSyxmFwewSoU2BaGTKxqF4hB31zcCGn5ElIFxGp9rVlrHwokleElERO7PDpLSvkP1UhLhT3sbm9d8htjHqfmEf7ZtRdcr6XsIFsY3HJujc4vNBYMbOK01crSvIWWcizo6kcyOyfCCbaaaaaaaaaaaa',
    question: 'header-2',
  },
  {
    answer:
      'Wa4fPh0CYBydHlxqZPDkLtIKZSqBqrcmuc8gaCeVDjozGAiWe8rgDldmjrb9vJoLrQJ51yRkw4Uvgdqw2nzwhWguSqLDBLCawZheVHibD6dg8LSGosfmK3XNaJazkabRDF9hwXh4QUgToS4ZvWTfREW0T5Juf426tC1PWq4hLgbCPmeYrFcPvddFrCuKFyhD1narWxUBpcWvr12W00xpJiCY9JD2fIyQkQloIdWpPY34iYYnKoSekM6MJ4IEiHxTLJtegRtehJvaaaaaaaaaaaa',
    question: 'header-3',
  },
  {
    answer:
      'diCwLJGBol3XXEBBJ9vtjoKuYuOm7YG4Dzl2YINIKj2Gt0eUHLqjfbIvsNT2HeYOESZNetl5OdyRXVtfIIblBdQuWSGgVPEPhlO5AW3wt1KZvUHwtmR9EUWJurmOZXWcBscLjJ6TIUCDVx77QbbKrlI6JNNgPAdVZh4zKTrXI7t9XF0zzQBTUFaaaaaaaaaaaa',
    question: 'header-4',
  },
  {
    answer:
      't8UAdcdxOKpTakHXFBf4PcWW7m0Ydmcj0NbPaKuJjFubCy9vivuWeMl1FCXvkHgj1zoiWWosvhcOIDVIUvgksijCV5EwYcL2HYN93fxlxZq4GvrUQo6MrkSUyr5MwDrIrI86GGxFhKcSiKiolmzPYLjqGfWCUfF5CZefoa5ofEtAtspKjhccXlC1FqdRRu0QkdD5TW4c4cbODfB5kcaaaaaaaaaaaa',
    question: 'this will shift text wrap',
  },
  {
    answer:
      'tkTAOfFM1ERNxaHYVbxizOb6WIQfOpIrV0jLISXo46mwM5xz8Or7pWPduYgmbppPuMenyNSruMMaTvIsdaaaaaaaaaaaa',
    question: 'header-5',
  },
  {
    answer:
      'eBTEYnVqX95oOZos3MnZjU69ft7YDO38f1j48FBOby01JqJlylspoX5WaMWK816FhqtwbxxmpfKSPZuMIINTmPM8hKAbKc30V6Mlrwi3hALdVZMOJCkCZ8Rjd3Y6chXIyORmpl1s4J1fcOuuCRnOnMhzLyHQ6uD0nmv89FsY5hxKt3WzsfkE7sLweDUGJdGgIYAybDjOcWOcLMjJZ9Haaaaaaaaaaaa',
    question: 'header-6',
  },
  {
    answer:
      '5fVdOxaHfPkSgeDmWE75C4qHK36lb21FVyFzv2cSyvpb7AVrKGpepeqUUOh79yZhFrgJnTSrcuqm9o4XTXA7zTD2Bi95FVK2zQooWrpgtNEllMLKYOeLSUWWNQsA8Kihif2bndFeNzQNoNWdEXD0mx6GWIrZjV2cY2W4ZC5t4isiIw6lcjeXYjxiZRN5LrfXgJYgzjVaMRJoGoELPrwp2HOcTtRaaaaaaaaaaaa',
    question: 'header-7',
  },
  {answer: 'gLXlUL8syQHljv2Fgaaaaaaaaaaaa', question: 'header-8'},
  {
    answer:
      'OPFNedo7G4DLSNVpUpjYOxUx2mqNjhKXq3TULoVklBVX0B4YFploEzoQlkODcgZe7fApyX39MorHlMOcWDgOo1BLnQcewR9fnmFrk5kHPYj8qSYcN3z74Hedvcpa6yOBfyNbCuxpXimltOTVAc0eYYjaaaaaaaaaaaa',
    question: 'header-9',
  },
];

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <ScrollView>
        <View
          style={styles.accordionWrapper}>
          <Accordion
            items={commonQuestions}
            dataMap={{
              header: 'question',
              body: 'answer',
            }}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  accordionWrapper: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;
