import React, { Component } from "react";
import { Image } from "semantic-ui-react";
import { getUserInfoAction, getPhoto } from "../../redux/actions/users";
import { connect } from "react-redux";

class ProfileCard extends Component {
  constructor(props) {
    super(props);
    this.state = { loading: false };
  }

  handleLoadingClick = () => {
    this.setState({ loading: true });

    setTimeout(() => {
      this.setState({ loading: false });
    }, 3000);
  };

  showDisplayName() {
    const foo = "tacos";
    return foo;
  }
  componentDidMount() {
    return this.props.getUserInfoAction(this.props.username);
  }

  render() {
    return (
      <>
        <ul>
          <li style={{ fontWeight: "bolder" }}>
            {" "}
            username:{"  "}
            {this.props.username || null}
          </li>
          <li style={{ fontWeight: "bolder" }}>
            displayName: {this.props.user && this.props.user["displayName"]}
          </li>
          pic local:{" "}
          <li style={{ fontWeight: "bolder" }}>
            <Image
              size="small"
              src={`https://kwitter-api.herokuapp.com/users/${this.props.username}/picture`}
              alt="Profile Picture"
            />
          </li>
          <br />
          <li style={{ fontWeight: "bolder" }}>
            <p>about: {(this.props.user && this.props.user.about) || "null"}</p>
          </li>
          <li style={{ fontWeight: "bolder" }}>
            account created at:{" "}
            {(this.props.user && this.props.user.createdAt) || null}
          </li>
          <li style={{ fontWeight: "lighter" }}> password: *HIDDEN_VALUE*</li>{" "}
        </ul>
      </>

      //     <Card.Group doubling itemsPerRow={3} stackable>
      //       {cards.map( (card) => (
      //         <Card key={card.header}>
      //           {loading ? (
      //             <Placeholder>
      //               <Placeholder.Image square />
      //             </Placeholder>
      //           ) : (
      //             <Image src={card.avatar} />
      //           )}

      //           <Card.Content>
      //             {loading ? (
      //               <Placeholder>
      //                 <Placeholder.Header>
      //                   <Placeholder.Line length='very short' />
      //                   <Placeholder.Line length='medium' />
      //                 </Placeholder.Header>
      //                 <Placeholder.Paragraph>
      //                   <Placeholder.Line length='short' />
      //                 </Placeholder.Paragraph>
      //               </Placeholder>
      //             ) : (
      //               <Fragment>
      //                 <Card.Header>{card.header}</Card.Header>
      //                 <Card.Meta>{card.date}</Card.Meta>
      //                 <Card.Description>{card.description}</Card.Description>
      //               </Fragment>
      //             )}
      //           </Card.Content>

      //           <Card.Content extra>
      //             <Button disabled={loading} primary>
      //               Add
      //             </Button>
      //             <Button disabled={loading}>Delete</Button>
      //           </Card.Content>
      //         </Card>
      //       ))}
      //     </Card.Group>
      //   </Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.users.user.user,
    username: state.auth.username,
  };
};
const mapDispatchToProps = {
  getUserInfoAction,
  getPhoto,
};

export const DisplayCardContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ProfileCard);
