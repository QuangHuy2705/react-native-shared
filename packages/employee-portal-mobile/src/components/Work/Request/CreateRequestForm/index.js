import React from 'react';

import styled from 'styled-components';
import moment from 'moment';

import View from '~/ui/primitives/View';
import ScrollView from '~/components/common/ScrollView';

import FormHeader from '~/components/Work/Header/FormHeader';

import RegisterDatePanel from './RegisterDatePanel';
import DescriptionPanel from './DescriptionPanel';
import RegistrationDetailPanel from './RegistrationDetailPanel';

const Container = styled(View)`
    margin-top: 16px;
    background: transparent;
`;

function getDetails({ startDate, endDate }) {
  const items = [];

  for (let date = startDate; date <= endDate; date += (24 * 60 * 60000)) {
    const item = moment(date);
    const id = item.format('YYYY-MM-DD');
    const name = item.format('MMMM DD, YYYY');
    items.push({ id, name });
  }
  return items;
}

function getDefaultDates() {
  const now = new Date();
  now.setUTCHours(0, 0, 0, 0);
  const startDate = now.getTime();
  now.setUTCHours(23, 0, 0, 0);
  const endDate = now.getTime();
  return { startDate, endDate };
}

function CreateRequestForm({ category, onSubmit, onClose }) {
  const [description, setDesc] = React.useState('');

  const [dates, setDates] = React.useState(getDefaultDates());
  let days = moment(dates.endDate).diff(moment(dates.startDate), 'days') + 1;

  const [types, setTypes] = React.useState({});
  const items = getDetails(dates, types);

  // Canculate total days
  Object.values(types).forEach(t => {
    if (t.id > 1) {
      days -= 0.5;
      days >= 0 ? days : 0.5;
    }
  });

  function handleSubmit() {
    const registrationType = {};
    items.forEach(i => {
      const type = types[i.id] || { id: 1 };
      registrationType[i.id] = type.id;
    });
    onSubmit({ category, dates, description, registrationType });
  }

  return (
    <Container>
      <FormHeader
        subTitle={category}
        isFormValid
        onSubmit={handleSubmit}
        onClose={onClose}
      >
        Create Request
      </FormHeader>
      <ScrollView>
        <RegisterDatePanel
          dates={dates}
          totalDays={days}
          onChange={setDates}
        />
        <DescriptionPanel description={description} onChange={setDesc} />
        <RegistrationDetailPanel
          items={items}
          types={types}
          onChangeTypes={setTypes}
        />
      </ScrollView>
    </Container>
  );
}

export default CreateRequestForm;
