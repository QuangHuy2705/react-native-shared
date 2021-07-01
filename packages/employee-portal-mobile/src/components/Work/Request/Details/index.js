import React from 'react';

import styled from 'styled-components';
import moment from 'moment';

import View from '~/ui/primitives/View';

import DetailHeader from '~/components/Work/Header/DetailHeader';

import RegisterDatePanel from './RegisterDatePanel';
import DescriptionPanel from './DescriptionPanel';

const Container = styled(View)`
    margin-top: 16px;
    background: transparent;
`;

function Details({ request, onClose }) {
  const { requestId, createdTime, description, registrationType } = request;

  const startDate = moment(request.startDate);
  const endDate = moment(request.endDate);

  let days = endDate.diff(startDate, 'days') + 1;
  // Canculate total days
  Object.values(registrationType).forEach(t => {
    if (t.id > 1) {
      days -= 0.5;
      days >= 0 ? days : 0.5;
    }
  });

  return (
    <Container>
      <DetailHeader
        subTitle={`Created on ${moment(createdTime).format('MMMM DD, YYYY')}`}
        onClose={onClose}
      >
        Annual Leave
      </DetailHeader>
      <RegisterDatePanel
        dates={{
          startDate: startDate.format('MMMM DD, YYYY'),
          endDate: endDate.format('MMMM DD, YYYY'),
        }}
        totalDays={days}
      />
      <DescriptionPanel title="Description" description={description} />
      <DescriptionPanel title="Request Id" description={requestId.toUpperCase()} />
    </Container>
  );
}

export default Details;
