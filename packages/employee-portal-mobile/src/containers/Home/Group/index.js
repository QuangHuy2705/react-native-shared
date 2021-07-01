import connect from '~/shared/redux/connect';

import Group from '~/components/Home/Group';
import { Actions } from '~/shared/redux/modules/group/group';

const mapStateToProps = (state) => {
	return {
  	groupList: state.groups.items
	}	
};

const mapDispatchToProps = {
  getGroupList: Actions.getGroupList,
};

const ConnectedGroup = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Group);

export default ConnectedGroup;
