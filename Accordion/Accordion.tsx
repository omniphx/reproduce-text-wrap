import {AccordionRow} from './AccordionRow';
import {View} from 'react-native';
import React from 'react';

export type AccordionData = {
  header: string;
  body: string;
};

type AccordionProps<T extends object> = {
  items: Record<keyof T, string>[];
  /**
   * Map `header` and `body` to the properties names of source object
   *
   * @example
   * const questions = [{question: 'some-question', answer: 'some-answer'}]
   *  <Accordion
   *    items={questions}
   *    dataMap={{
   *    header: 'question',
   *    body: 'answer',
   *    }}
   *  />
   *
   * */
  dataMap: {
    header: keyof T;
    body: keyof T;
  };
  /**
   * Allows the parent component to manually collapse all rows
   * For example: collapse all rows on button press, a page change, or scroll event.
   * */
  collapseAllRows?: boolean;
  onRowPress?: (isExpanded: boolean, header: AccordionData['header']) => void;
};

export const Accordion = <T extends object>({
  items,
  dataMap,
  collapseAllRows = false,
  onRowPress,
}: AccordionProps<T>) => {
  const accordionData: AccordionData[] = items.map(item => ({
    header: item[dataMap.header],
    body: item[dataMap.body],
  }));

  return (
    <View>
      {accordionData.map(({body, header}, index) => (
        <AccordionRow
          key={`${header}-${index}`}
          header={header}
          body={body}
          collapseRow={collapseAllRows}
          onRowPress={onRowPress}
        />
      ))}
    </View>
  );
};
