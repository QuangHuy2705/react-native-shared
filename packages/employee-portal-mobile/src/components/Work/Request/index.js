import React from 'react';

import styled from 'styled-components';
import moment from 'moment';

import View from '~/ui/primitives/View';
import ScrollView from '~/components/common/ScrollView';

import CreateRequestPanel from '~/components/Work/Request/CreateRequestPanel';
import MyRequestPanel from '~/components/Work/Request/MyRequestPanel';
import CreateRequestForm from '~/components/Work/Request/CreateRequestForm';
import Details from '~/components/Work/Request/Details';

const Container = styled(View)`
	background: transparent;
`;

const FormContainer = styled(View)`
	background: #F2F2F2;
	position: absolute;
	top: 0;
	right: 0;
	bottom: 0;
	left: 0;
`;

function Request({ requests, getRequests, submitLeave }) {
  const [form, showCreateForm] = React.useState({});
  const [details, showDetails] = React.useState({});

  console.log(requests);

  React.useEffect(() => {
    getRequests(0);
  }, []);

  if (form.isOpen) {
    return (
      <FormContainer>
        <CreateRequestForm
          category={form.category}
          onSubmit={({ category, dates: { startDate, endDate }, description, registrationType }) => {
            submitLeave(
              category === 'wfh' ? 'wfh' : 'leave',
              moment(startDate).format('YYYY-MM-DD'),
              moment(endDate).format('YYYY-MM-DD'),
              description,
              registrationType
            );
          }}
          onClose={() => showCreateForm({ isOpen: false })}
        />
      </FormContainer>
    )
  }

  if (details.isOpen) {
    return (
      <FormContainer>
        <Details
          request={details.request}
          onClose={() => showCreateForm({ isOpen: false })}
        />
      </FormContainer>
    )
  }

  return (
    <Container>
      <ScrollView onBottomScrolled={() => getRequests(requests.offset)}>
        <CreateRequestPanel
          onCreateRequest={({ id, category }) => showCreateForm({ isOpen: true, id, category })}
        />
        <MyRequestPanel
          requests={requests}
          onViewDetails={showDetails}
        />
      </ScrollView>
    </Container>
  )
}

export default Request;
