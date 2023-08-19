import { createContext } from "react";

const UserContext = createContext({user:{
    name: "Dummy name",
    email:"Dummy@gmail.com"
}})
export default UserContext