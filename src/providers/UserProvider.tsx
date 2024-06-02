import { createContext, useState } from "react";
import { ChildrenProps } from "../types/childrenProps";

export const UserContext = createContext({});

export const UserProvider = (props: ChildrenProps) => {
  const { children } = props;
  const [userInfo, setUserInfo] = useState(null);
  return (
    <UserContext.Provider value={{ userInfo, setUserInfo }}>
      {children}
    </UserContext.Provider>
  );
};
