import { connect } from "react-redux";
import { messagesOut, messagesIn } from "../../redux/actions/messages";

const mapStateToProps = (state) => ({
  isAuthenticated: !!state.auth.isAuthenticated,
});

const mapDispatchToProps = {
  messagesOut,
  messagesIn,
};

export const enhancer = connect(mapStateToProps, mapDispatchToProps);
