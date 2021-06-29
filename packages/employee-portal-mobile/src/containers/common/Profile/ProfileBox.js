import connect from '~/shared/redux/connect';
import { Actions } from '~/shared/redux/modules/user';


import ProfileBox from '~/components/common/Profile/ProfileBox';

const mapStateToProps = (state, { userId, userDomain }) => {
  const key = userId || userDomain;
  return { profile: key ? state.user[key] : null };
}

const mapDispatchToProps = (dispatch, { userId, userDomain }) => {
  return {
    fetchProfile: () => {
      if (userId) {
        dispatch(Actions.getUserById(userId));
        return;
      }
      if (userDomain) {
        dispatch(Actions.getUserByDomain(userDomain));
        return;
      }
    }
  };
};

const ConnectedProfileBox = connect(
  mapStateToProps,
  mapDispatchToProps,
)(ProfileBox);

export default ConnectedProfileBox;
