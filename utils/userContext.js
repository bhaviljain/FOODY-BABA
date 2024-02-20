import { createContext } from "react";

const UserContext = createContext ({
    loggedUser : "Bhavil Jain",
    loggedout :"User Logged out"
})

export default UserContext;