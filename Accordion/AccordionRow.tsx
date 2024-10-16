import React, {useEffect, useState} from 'react';

import {
  Pressable,
  Text,
  StyleSheet,
  View,
} from 'react-native';
import {AccordionData} from './Accordion';

type AccordionRowProps = {
  collapseRow: boolean;
  onRowPress?: (isExpanded: boolean, header: AccordionData['header']) => void;
  testID?: string;
} & AccordionData;

export const AccordionRow = ({
  header,
  body,
  collapseRow,
  onRowPress,
}: AccordionRowProps) => {
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    if (collapseRow) {
      setIsExpanded(false);
    }
  }, [collapseRow]);

  const onToggle = (isRowExpanded: boolean) => {
    setIsExpanded(isRowExpanded);

    if (onRowPress) {
      onRowPress(isRowExpanded, header);
    }
  };

  return (
    <Pressable
      style={styles.accordionRowContainer}
      onPress={() => onToggle(!isExpanded)}
      hitSlop={0}
      accessible={true}>
      <View style={styles.accordionRowHeader}>
        <Text style={styles.accordionRowHeaderText}>{header}</Text>
        {isExpanded ? <Text>-</Text> : <Text>+</Text>}
      </View>
      {isExpanded && (
        <View style={styles.accordionRowBody}>
          <Text
            style={styles.accordionRowBodyText}
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

const styles = StyleSheet.create({
  accordionRowContainer: {
    borderColor: '#CCD4D8',
    borderTopWidth: 1.6,
    paddingTop: 16,
    marginBottom: 16,
  },
  accordionRowHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 36,
  },
  accordionRowHeaderText: {
    flexShrink: 1,
    color: '#002A3A',
  },
  accordionRowIcon: {
    color: '#002A3A',
  },
  accordionRowBody: {
    marginTop: 16,
  },
  accordionRowBodyText: {
    color: '#002A3A',
  },
});
