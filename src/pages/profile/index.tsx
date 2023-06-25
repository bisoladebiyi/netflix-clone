import { onAuthStateChanged, User } from "firebase/auth";
import { NextPage } from "next";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { newlySignedInUserName } from "../../../utils/helpers";
import { updateEmailAddress, updateName } from "../../../utils/requests";
import { Button, Input } from "../../components/AuthForm";
import Layout from "../../components/layout/layout";
import { auth } from "../../firebase";
import { AuthWrapper, Modal } from "../signup";

const Profile: NextPage = () => {
  const [email, setEmail] = useState<string>("");
  const [displayName, setDisplayName] = useState<string>("");
  const [user, setUser] = useState<User>();
  const [msg, setMsg] = useState<string>("Update Profile");

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setDisplayName(
          user.displayName || newlySignedInUserName(user?.email || "")
        );
        setEmail(user?.email || "");
        setUser(user);
      }
    });

    return unsubscribe;
  }, []);

  const updateProfile = () => {
    setMsg("Updating...");

    if (user?.displayName !== displayName) {
      updateName(displayName).then(() =>
        alert("Your display name has been updated")
      );
    }

    if (user?.email !== email) {
      updateEmailAddress(email).then(() =>
        alert("Your email has been updated")
      );
    }

    setMsg("Update Profile");
  };

  return (
    <Layout>
      <AuthWrapper>
        <Modal>
          <h2>Profile</h2>
          <form action="">
            <Label htmlFor="">Name</Label>
            <Input
              value={displayName}
              onChange={(e) => setDisplayName(e.target.value)}
            />
            <Label htmlFor="" $margin>
              Email
            </Label>
            <Input value={email} onChange={(e) => setEmail(e.target.value)} />
            <Button onClick={updateProfile}>{msg}</Button>
          </form>
        </Modal>
      </AuthWrapper>
    </Layout>
  );
};

export default Profile;

const Label = styled.label<{ $margin?: boolean }>`
  font-size: 13px;
  display: inline-block;
  margin-top: ${(props) => (props.$margin ? "20px" : "0px")};
  margin-bottom: 2px;
`;
