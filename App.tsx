/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useState } from 'react';
import {
  Pressable,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';

const commonQuestions = [
  {body: 'tjGmaaaaaaaaaaaa', header: 'header-1'},
  {
    body:
      'QmVx5RK58MtuZX0TOkDOmZb9zUXhj5VA8KpazxuRQ6dTtrjmHp1yRTcAKykJ5VygYuSyxmFwewSoU2BaGTKxqF4hB31zcCGn5ElIFxGp9rVlrHwokleElERO7PDpLSvkP1UhLhT3sbm9d8htjHqfmEf7ZtRdcr6XsIFsY3HJujc4vNBYMbOK01crSvIWWcizo6kcyOyfCCbaaaaaaaaaaaa',
    header: 'header-2',
  },
  {
    body:
      'Wa4fPh0CYBydHlxqZPDkLtIKZSqBqrcmuc8gaCeVDjozGAiWe8rgDldmjrb9vJoLrQJ51yRkw4Uvgdqw2nzwhWguSqLDBLCawZheVHibD6dg8LSGosfmK3XNaJazkabRDF9hwXh4QUgToS4ZvWTfREW0T5Juf426tC1PWq4hLgbCPmeYrFcPvddFrCuKFyhD1narWxUBpcWvr12W00xpJiCY9JD2fIyQkQloIdWpPY34iYYnKoSekM6MJ4IEiHxTLJtegRtehJvaaaaaaaaaaaa',
    header: 'header-3',
  },
  {
    body:
      'diCwLJGBol3XXEBBJ9vtjoKuYuOm7YG4Dzl2YINIKj2Gt0eUHLqjfbIvsNT2HeYOESZNetl5OdyRXVtfIIblBdQuWSGgVPEPhlO5AW3wt1KZvUHwtmR9EUWJurmOZXWcBscLjJ6TIUCDVx77QbbKrlI6JNNgPAdVZh4zKTrXI7t9XF0zzQBTUFaaaaaaaaaaaa',
    header: 'header-4',
  },
  {
    body:
      't8UAdcdxOKpTakHXFBf4PcWW7m0Ydmcj0NbPaKuJjFubCy9vivuWeMl1FCXvkHgj1zoiWWosvhcOIDVIUvgksijCV5EwYcL2HYN93fxlxZq4GvrUQo6MrkSUyr5MwDrIrI86GGxFhKcSiKiolmzPYLjqGfWCUfF5CZefoa5ofEtAtspKjhccXlC1FqdRRu0QkdD5TW4c4cbODfB5kcaaaaaaaaaaaa',
    header: 'this will shift text wrap',
  },
  {
    body:
      'tkTAOfFM1ERNxaHYVbxizOb6WIQfOpIrV0jLISXo46mwM5xz8Or7pWPduYgmbppPuMenyNSruMMaTvIsdaaaaaaaaaaaa',
    header: 'header-5',
  },
  {
    body:
      'eBTEYnVqX95oOZos3MnZjU69ft7YDO38f1j48FBOby01JqJlylspoX5WaMWK816FhqtwbxxmpfKSPZuMIINTmPM8hKAbKc30V6Mlrwi3hALdVZMOJCkCZ8Rjd3Y6chXIyORmpl1s4J1fcOuuCRnOnMhzLyHQ6uD0nmv89FsY5hxKt3WzsfkE7sLweDUGJdGgIYAybDjOcWOcLMjJZ9Haaaaaaaaaaaa',
    header: 'header-6',
  },
  {
    body:
      '5fVdOxaHfPkSgeDmWE75C4qHK36lb21FVyFzv2cSyvpb7AVrKGpepeqUUOh79yZhFrgJnTSrcuqm9o4XTXA7zTD2Bi95FVK2zQooWrpgtNEllMLKYOeLSUWWNQsA8Kihif2bndFeNzQNoNWdEXD0mx6GWIrZjV2cY2W4ZC5t4isiIw6lcjeXYjxiZRN5LrfXgJYgzjVaMRJoGoELPrwp2HOcTtRaaaaaaaaaaaa',
    header: 'header-7',
  },
  {body: 'gLXlUL8syQHljv2Fgaaaaaaaaaaaa', header: 'header-8'},
  {
    body:
      'OPFNedo7G4DLSNVpUpjYOxUx2mqNjhKXq3TULoVklBVX0B4YFploEzoQlkODcgZe7fApyX39MorHlMOcWDgOo1BLnQcewR9fnmFrk5kHPYj8qSYcN3z74Hedvcpa6yOBfyNbCuxpXimltOTVAc0eYYjaaaaaaaaaaaa',
    header: 'header-9',
  },
];

type AccordionRowProps = {header: string; body: string};


export const AccordionRow = ({header, body}: AccordionRowProps) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const onToggle = (isRowExpanded: boolean) => {
    setIsExpanded(isRowExpanded);
  };

  return (
    <Pressable
      style={styles.accordionRowContainer}
      onPress={() => onToggle(!isExpanded)}>
      <View>
        <Text>{header}</Text>
        {isExpanded ? <Text>-</Text> : <Text>+</Text>}
      </View>
      {isExpanded && (
        <View>
          <Text
            onLayout={event => {
              console.log('onLayout', header, event.nativeEvent.layout.height);
            }}>
            {body}
          </Text>
        </View>
      )}
    </Pressable>
  );
};

function App(): React.JSX.Element {
  return (
    <SafeAreaView>
      <ScrollView>
        <View
          style={styles.accordionWrapper}>
          <View>
            {commonQuestions.map(({body, header}, index) => (
              <AccordionRow
                key={`${header}-${index}`}
                header={header}
                body={body}
              />
            ))}
          </View>
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
  accordionRowContainer: {
    borderTopWidth: 1,
    paddingTop: 16,
    paddingBottom: 16,
  },
});

export default App;
