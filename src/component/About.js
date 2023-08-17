import { Outlet } from "react-router";
import Profile from "./Profile";
import ProfileClass from "./ProfileClass";

import {Component} from "react";

class About extends Component{


  constructor(props) {
    super(props)

    console.log("Parent-constructor")
  }

  //Why can i make componentDidMount Async but i can Not make useEffect callback Function async
    async componentDidMount() {

 console.log("parent-component Did mount")
    }

  
  componentDidUpdate() {
    console.log("parent Component-Did-Updte")
  }
  render() {

    console.log("parent- render")
    return (
    <div>
      <h1>About Us Page</h1>
      <p>
        {" "}
        This is the Namaste React Live Course Chapter 07 - Finding the Path 🚀
      </p>
      {/* <Outlet/> */}

   
      <ProfileClass name={""} xyz="abc"/>

    </div>
  );
  }
}

export default About
