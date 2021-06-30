import React from 'react';

import styled from 'styled-components';

import View from '~/ui/primitives/View';
import Text from '~/ui/primitives/Text';
import DatePicker from '~/components/common/DatePicker'

import Panel from './Panel';

const TYPE_DATE = 'date';
const TYPE_TEXT = 'text';

const Item = styled(View)`
    flex-direction: row;
    padding: 8px 16px;
    align-items: center;
    justify-content: space-between;

    ${({ isLast }) => !isLast && `
      border-color: #A7A7A77A;
      border-bottom-width: 0.5px;
    `}
`;

const ItemText = styled(Text)`
  color: #000;
  font-size: 14px;
  
  ${({ isLast }) => isLast && `
    font-weight: 500;
  `}
`;

function getDisplayDays(days) {
  return days > 1 ? `${days} days` : `${days} day`;
}

function RegisterDatePanel({ dates, totalDays, onChange }) {
  const items = [
    { id: 'startDate', name: "Start", value: dates.startDate, type: TYPE_DATE },
    { id: 'endDate', name: "End", value: dates.endDate, type: TYPE_DATE },
    { id: 'total', name: "Total", value: getDisplayDays(totalDays), type: TYPE_TEXT },
  ];

  function handleDateChange(newDates) {
    const mergedDates = { ...dates, ...newDates };
    if (newDates.endDate && newDates.endDate < mergedDates.startDate) {
      mergedDates.startDate = mergedDates.endDate;
    } else if (newDates.startDate && newDates.startDate > mergedDates.endDate) {
      mergedDates.endDate = mergedDates.startDate;
    }
    onChange(mergedDates);
  }

  console.log(dates);

  return (
    <Panel title="Register date">
      {items.map((i, idx) => {
        const isLast = idx === items.length - 1;
        return i.type === TYPE_DATE
          ? (
            <DatePicker
              key={i.id}
              textLeft={i.name}
              date={i.value}
              onDateChange={(day) => handleDateChange({ [i.id]: day })}
            />
          ) : (
            <Item key={i.id} isLast={isLast}>
              <ItemText isLast={isLast}>{i.name}</ItemText>
              <ItemText isLast={isLast}>{i.value}</ItemText>
            </Item>
          )
      })}
    </Panel>
  );
}

export default RegisterDatePanel;
