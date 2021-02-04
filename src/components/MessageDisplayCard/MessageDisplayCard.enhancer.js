import { connect } from "react-redux";
import { messagesIn } from "../../redux/actions/messages";

// https://react-redux.js.org/using-react-redux/connect-mapstate#connect-extracting-data-with-mapstatetoprops
const mapStateToProps = (state) => ({
  isAuthenticated: !!state.auth.isAuthenticated,
  loading: state.auth.loading,
  error: state.auth.error,
});

//react-redux.js.org/using-react-redux/connect-mapdispatch#connect-dispatching-actions-with-mapdispatchtoprops
const mapDispatchToProps = {
  messagesIn,
};

export const enhancer = connect(mapStateToProps, mapDispatchToProps);
