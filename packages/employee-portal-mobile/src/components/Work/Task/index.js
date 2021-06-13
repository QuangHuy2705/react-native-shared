import React from 'react';

import styled from 'styled-components';

import View from '~/ui/primitives/View';
import ApproveForm from '~/components/Work/Task/ApproveForm';

import Feed from './Feed';

const Container = styled(View)`
	background: transparent;
`;

function Task() {
  const [form, showApprovalForm] = React.useState({});

  return (
    <>
      <Container>
        <Feed
          onApprove={() => showApprovalForm({ action: 'approve', isOpen: true })}
          onReject={() => showApprovalForm({ action: 'reject', isOpen: true })}
          onComment={() => { }}
        />
      </Container>
      {form.isOpen && (
        <ApproveForm
          action={form.action}
          onApprove={() => showApprovalForm({ isOpen: false })}
          onReject={() => showApprovalForm({ isOpen: false })}
          onCancel={() => showApprovalForm({ isOpen: false })}
        />
      )}
    </>
  )
}

export default Task;
