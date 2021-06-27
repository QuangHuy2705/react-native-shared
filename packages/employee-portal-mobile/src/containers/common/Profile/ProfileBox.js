import connect from '~/shared/redux/connect';

import ProfileBox from '~/components/common/Profile/ProfileBox';

const mapStateToProps = (state, { profileId }) => ({
  profile: state.user[profileId]
});

const mapDispatchToProps = null;

const ConnectedProfileBox = connect(
  mapStateToProps,
  mapDispatchToProps,
)(ProfileBox);

export default ConnectedProfileBox;
