import { connect } from "react-redux";
import { sendlike, removeLike } from "../../redux/actions/Actions";
import { messagesIn } from "../../redux/actions/messages";
const mapStateToProps = (state) => {
  return {
    like: state.likes,
    loading: state.loading,
    username: state.auth.username,
  };
};

const mapDispatchToProps = {
  // onLikesUp: () => dispatch(actionCreator.likesup(1)),
  // onLikesDown: () => dispatch(actionCreator.likesDown(1)),
  sendlike,
  removeLike,
  messagesIn,
};

export const enhancer = connect(mapStateToProps, mapDispatchToProps);
