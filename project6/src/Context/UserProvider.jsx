import React from "react";
import UserContext from "./UserContext";
const UserProvider = ({children}) => {
    const [user,SetUser]=React.useState(null)
    return (
        <UserContext.Provider value={{user,SetUser}}>
            {children}
        </UserContext.Provider>
    )
}
export default UserProvider;