import { createContext, useState } from "react";
import { ChildrenProps } from "../types/childrenProps";

export const UserContext = createContext({});

export const UserProvider = (props: ChildrenProps) => {
  const { children } = props;
  const [name, setName] = useState("Aru");
  return (
    <UserContext.Provider value={{ name, setName }}>
      {children}
    </UserContext.Provider>
  );
};
