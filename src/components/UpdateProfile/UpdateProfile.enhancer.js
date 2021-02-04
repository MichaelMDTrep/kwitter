import { connect } from "react-redux";
import {
  updateProfile,
  deleteProfile,
  uploadPhoto,
} from "../../redux/actions/users";

// https://react-redux.js.org/using-react-redux/connect-mapstate#connect-extracting-data-with-mapstatetoprops
const mapStateToProps = (state) => ({
  loading: state.auth.loading,
  error: state.auth.error,
  username: state.auth.username,
});

// https://react-redux.js.org/using-react-redux/connect-mapdispatch#connect-dispatching-actions-with-mapdispatchtoprops
const mapDispatchToProps = {
  updateProfile,
  deleteProfile,
  uploadPhoto,
};

export const enhancer = connect(mapStateToProps, mapDispatchToProps);
