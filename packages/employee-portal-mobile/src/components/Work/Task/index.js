import React from 'react';

import styled from 'styled-components';
import { ActivityIndicator } from 'react-native';
import ScrollView from '~/components/common/ScrollView';
import View from '~/ui/primitives/View';
import ApproveForm from '~/components/Work/Task/ApproveForm';

import Feed from './Feed';

const Container = styled(View)`
	background: transparent;
`;

function Task({ tasks, getTasks, submitTaskReview }) {
  const [form, showApprovalForm] = React.useState({});
  function fetchTasks() {
    if (!tasks.loading) {
      getTasks(tasks.offset);
    }
  }

  React.useEffect(() => {
    getTasks(0);
  }, []);

  return (
    <>
      <Container>
        <ScrollView onBottomScrolled={fetchTasks}>
          <Feed
            tasks={tasks}
            onApprove={(item) => showApprovalForm({ item, action: 'approve', isOpen: true })}
            onReject={(item) => showApprovalForm({ item, action: 'reject', isOpen: true })}
            onComment={() => { }}
          />
          {tasks.loading && (
            <ActivityIndicator
              size="large"
              color="#929292"
              style={{ alignSelf: 'center', marginTop: 16 }}
            />
          )}
        </ScrollView>
      </Container>
      {form.isOpen && (
        <ApproveForm
          action={form.action}
          onSubmit={() => {
            const { item, action } = form;
            showApprovalForm({});
            submitTaskReview(item.id, item.type, action)
          }}
          onCancel={() => showApprovalForm({})}
        />
      )}
    </>
  );
}

export default Task;
