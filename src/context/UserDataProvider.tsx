import React, { createContext, useContext, useState } from "react";

interface IUserData {
  children: JSX.Element;
}

export interface IUserDataValues {
  name: string;
  setName: React.Dispatch<React.SetStateAction<string>> | null;
}

const UserDataContext = createContext<IUserDataValues>({ name: "", setName: null});

const UserDataProvider: React.FC<IUserData> = ({ children }) => {
  const [name, setName] = useState<string>("");
  return (
    <UserDataContext.Provider value={{ name, setName }}>
      {children}
    </UserDataContext.Provider>
  );
};

export default UserDataProvider;

export const useUserDataContext = () => {
  return useContext(UserDataContext);
};
