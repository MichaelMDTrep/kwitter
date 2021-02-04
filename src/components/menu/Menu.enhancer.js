import { connect } from "react-redux";
import { logout } from "../../redux/actions/auth";
import { messagesIn } from "../../redux/actions/messages";

const mapStateToProps = (state) => ({
  isAuthenticated: !!state.auth.isAuthenticated,
});

const mapDispatchToProps = {
  logout,
  messagesIn,
};

export const enhancer = connect(mapStateToProps, mapDispatchToProps);
