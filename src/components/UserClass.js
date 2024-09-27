import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: {
        name: "Dummy",
        location: "default",
      },
    };
    // console.log("contractor called");
  }

  async componentDidMount() {
    // console.log("component did mount called");
    //api call
    const data = await fetch("https://api.github.com/users/papusingh");
    const json = await data.json();

    // console.log(json);

    this.setState({
      userInfo: json,
    });
  }

  componentDidUpdate() {
    // console.log("component did update got called");
  }

  componentWillUnmount() {
    // console.log("component will unmounte called");
  }

  render() {
    // console.log("render is called");
    const { name, location, avatar_url } = this.state.userInfo;
    return (
      <div className="user-card">
        <img src={avatar_url}></img>
        <h2>Name: {name}</h2>
        <h3>Location: {location}</h3>
        <h3>Contact: papu@gmail.com</h3>
      </div>
    );
  }
}

export default UserClass;
