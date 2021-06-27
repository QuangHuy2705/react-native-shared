import connect from '~/shared/redux/connect';

import PostStatusBox from "~/components/Home/Feed/List/PostStatusBox";

const mapStateToProps = (state) => ({
  profile: state.user[state.auth.token.userId]
});

const mapDispatchToProps = null;

const ConnectedBox = connect(
  mapStateToProps,
  mapDispatchToProps,
)(PostStatusBox);

export default ConnectedBox;
