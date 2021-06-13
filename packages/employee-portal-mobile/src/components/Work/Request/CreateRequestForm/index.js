import React from 'react';

import styled from 'styled-components';

import View from '~/ui/primitives/View';

import FormHeader from '~/components/Work/Header/FormHeader';

import RegisterDatePanel from './RegisterDatePanel';
import DescriptionPanel from './DescriptionPanel';
import RegistrationDetailPanel from './RegistrationDetailPanel';

const Container = styled(View)`
    margin-top: 16px;
    background: transparent;
`;

function CreateRequestForm({ category, onSubmit, onClose }) {
  return (
    <Container>
      <FormHeader
        subTitle={category}
        isFormValid
        onSubmit={onSubmit}
        onClose={onClose}
      >
        Create Request
      </FormHeader>
      <RegisterDatePanel />
      <DescriptionPanel />
      <RegistrationDetailPanel />
    </Container>
  );
}

export default CreateRequestForm;
