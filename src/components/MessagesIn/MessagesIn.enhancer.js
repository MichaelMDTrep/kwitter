import { connect } from "react-redux";
import { messagesIn } from "../../redux/actions/messages";

const mapStateToProps = (state) => ({
  isAuthenticated: !!state.auth.isAuthenticated,
  content: state.messages.messageList,
});

const mapDispatchToProps = {
  messagesIn,
};

export const enhancer = connect(mapStateToProps, mapDispatchToProps);
