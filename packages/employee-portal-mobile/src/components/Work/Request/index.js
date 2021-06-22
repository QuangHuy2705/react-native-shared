import React from 'react';

import styled from 'styled-components';

import View from '~/ui/primitives/View';
import ScrollView from '~/components/common/ScrollView';

import CreateRequestPanel from '~/components/Work/Request/CreateRequestPanel';
import MyRequestPanel from '~/components/Work/Request/MyRequestPanel';
import CreateRequestForm from '~/components/Work/Request/CreateRequestForm';

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

function Request() {
  const [form, showCreateForm] = React.useState({});

  if (form.isOpen) {
    return (
      <FormContainer>
        <CreateRequestForm
          category={form.category}
          onSubmit={() => showCreateForm({ isOpen: false })}
          onClose={() => showCreateForm({ isOpen: false })}
        />
      </FormContainer>
    )
  }

  return (
    <Container>
      <ScrollView>
        <CreateRequestPanel
          onCreateRequest={({ id, category }) => showCreateForm({ isOpen: true, id, category })}
        />
        <MyRequestPanel />
      </ScrollView>
    </Container>
  )
}

export default Request;
