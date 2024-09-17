import User from "./User";
import UserClass from "./UserClass";
import React from "react";

class About extends React.Component {
  constructor(props) {
    super(props);

    // console.log("parrent constructor");
  }

  componentDidMount() {
    // console.log("parrent component did mount called");
    //api call
  }

  render() {
    // console.log("parrent render");
    return (
      <div>
        <h1>About</h1>
        <h2>This is Namaste React Web Series</h2>
        <UserClass
          name={"papu kumar singh"}
          location={"Bangalore"}
          contact={"papu@gmail.com"}
        />
      </div>
    );
  }
}

export default About;
