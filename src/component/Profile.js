
// import React, { Component } from "react";
// import ProfileUserClass from "./ProfileUserClass";
// import ProfileRepoClass from "./ProfileRepoClass";
// import { Github_API_User, Github_UserName, options } from "../../constants";

// class Profile extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       userInfo: {
//         name: "",
//         bio: "",
//         avatar_url: "", // Add avatar_url to user info
//         followers: 0,
//       },
//     };
//   }
  
//   async componentDidMount() {
//     const response = await fetch(Github_API_User + Github_UserName, options);
//     const json = await response.json();
//     this.setState({
//       userInfo: json,
//     });
//   }

//   render() {
//     const { userInfo } = this.state;

//     return (
//       <div className="bg-gray-900 text-white py-12 min-h-screen">
//         <div className="container mx-auto flex flex-col md:flex-row space-y-6 md:space-y-0 md:space-x-10">
//           <div className="md:w-1/2 p-8 bg-gray-800 rounded-lg shadow-xl">
//             <div className="flex items-center mb-4">
//               <img
//                 src={userInfo.avatar_url}
//                 alt="Profile"
//                 className="w-16 h-16 rounded-full mr-4"
//               />
//               <h1 className="text-4xl font-semibold">{userInfo.name}</h1>
//             </div>
//             <p className="text-lg">{userInfo.bio}</p>
//           </div>
//           <div className="md:w-1/2 p-8 bg-gray-800 rounded-lg shadow-xl">
//             <h1 className="text-4xl font-semibold mb-4">
//               <span className="text-red-500">Food</span>Lover Repository
//             </h1>
//             <ProfileRepoClass followers={userInfo.followers} />
//           </div>
//         </div>
//       </div>
//     );
//   }
// }

// export default Profile;



import React, { Component } from "react";
import ProfileUserClass from "./ProfileUserClass";
import ProfileRepoClass from "./ProfileRepoClass";
import { Github_API_User, Github_UserName, options } from "../../constants";

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: {
        name: "",
        bio: "",
        avatar_url: "", // Add avatar_url to user info
        followers: 0,
      },
    };
  }

  async componentDidMount() {
    const response = await fetch(Github_API_User + Github_UserName, options);
    const json = await response.json();
    this.setState({
      userInfo: json,
    });
  }

  render() {
    const { userInfo } = this.state;

    return (
      <div className="bg-gray-900 text-white py-12 min-h-screen">
        <div className="container mx-auto flex flex-col md:flex-row space-y-6 md:space-y-0 md:space-x-10">
          <div className="md:w-1/2 p-8 bg-gray-800 rounded-lg shadow-xl">
            <div className="flex items-center mb-4">
              <img
                src={userInfo.avatar_url}
                alt="Profile"
                className="w-20 h-20 rounded-full mr-4 border-4 border-blue-500"
              />
              <div>
                <h1 className="text-3xl font-semibold">{userInfo.name}</h1>
                <p className="text-lg text-gray-300">{userInfo.bio}</p>
              </div>
            </div>
          </div>
          <div className="md:w-1/2 p-8 bg-gray-800 rounded-lg shadow-xl">
            <h1 className="text-4xl font-semibold mb-4 text-red-500">
              <span className="text-white">Food</span>Lover Repository
            </h1>
            <ProfileRepoClass followers={userInfo.followers} />
          </div>
        </div>
      </div>
    );
  }
}

export default Profile;
