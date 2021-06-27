import connect from '~/shared/redux/connect';

import Profile from '~/components/Profile';

const mapStateToProps = ({ auth: { token: { userId } }, user }, { route: { params } }) => {
  const profileId = (params && params.profileId) || userId;
  return {
    profile: user[profileId]
  }
};

const mapDispatchToProps = null;

const ConnectedProfile = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Profile);

export default ConnectedProfile;
