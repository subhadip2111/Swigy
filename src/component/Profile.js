import { Component } from "react";
import ProfileUserClass from "./ProfileUserClass";
import ProfileRepoClass from "./ProfileRepoClass";
import { Github_API_User, Github_UserName, options } from "../../constants";

// Profileclass is class component
class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: {
        name: "",
        bio: "",
      },
    };
    // console.log("Profile-Parent constructor");
  }
  
  async componentDidMount() {
    const response = await fetch(Github_API_User + Github_UserName, options); // Fetch the data from github User API
    const json = await response.json();
    this.setState({
      userInfo: json,
    });
    // console.log("Profile-Parent componentDidMount");
  }

  componentDidUpdate() {
    // console.log("Profile-Parent componentDidUpdate");
  }

  componentWillUnmount() {
    // console.log("Profile-Parent componentWillUnmount");
  }
  render() {
    const {userInfo} = this.state; // object destructuring for json data
    // console.log("Profile-Parent - render");
  return (
      <div className="bg-gray-100 py-8">
        <div className="container mx-auto flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-8">
          <div className="md:w-1/2">
            <h1 className="text-3xl font-semibold mb-4">About Me</h1>
            <ProfileUserClass data={userInfo} />
          </div>
          <div className="md:w-1/2">
            <h1 className="text-3xl font-semibold mb-4">
              Food<span className="text-red-500">Lover</span> App Repository
            </h1>
            <ProfileRepoClass followers={userInfo.followers} />
          </div>
        </div>
      </div>
    );
  }
}

export default Profile;
