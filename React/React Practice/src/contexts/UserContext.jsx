import { createContext, useContext, useState } from "react";

// Create context
const userContext = createContext();

// Provider component
const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState({
    id: "",
    name: "",
    age: "",
    email: "",
    phoneNo: "",
    password: "",
  });
  const [users, setUsers] = useState(localStorage.setItem("users",JSON.stringify(users)));
  
  // Function to update user
  const createUser = (newUser) => {
    if(!checkUserIsPresent(newUser)){
        setUser(newUser);
        setUsers([...users, newUser]);
    }
  };
  const checkUserIsPresent = (newUser) => {
    return users && users.find((u) => u.email === newUser.email);
  };

  const value = {
    user,
    createUser,
  };

  return <userContext.Provider value={value}>{children}</userContext.Provider>;
};

// Custom hook to use context
const useUser = () => useContext(userContext);

// Export
export { useUser, UserContextProvider };
