import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";
import styled from "styled-components";
import { createUser } from "../../../utils/requests";
import AuthForm from "../../components/AuthForm";
import Layout from "../../components/layout/layout";

const SignUp = () => {
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [errorMsg, setErrorMsg] = useState("");
  const router = useRouter();

  const onLoginClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setLoading(true);

    createUser(email, password)
      .then(() => router.push("/"))
      .catch((e) => {
        console.log(e);
      });

    setLoading(false);
  };

  const clearErrorMsg = () => {
    setErrorMsg("");
  };
  return (
    <Layout isAuth>
      <AuthWrapper>
        <Modal>
          <h2>Sign Up</h2>
          <AuthForm
            authType={"signup"}
            onClick={onLoginClick}
            error={errorMsg}
            loading={loading}
            email={email}
            password={password}
            firstName={firstName}
            lastName={lastName}
            setFirstName={setFirstName}
            setLastName={setLastName}
            setEmail={setEmail}
            setPassword={setPassword}
            clearErrorMsg={clearErrorMsg}
          />
          <p className="link">
            Already have an account? <Link href={"/login"}>Log In</Link>
          </p>
        </Modal>
      </AuthWrapper>
    </Layout>
  );
};

export default SignUp;

export const AuthWrapper = styled.div`
  height: 100vh;
  width: 100%;
  background-image: url("https://wpassets.brainstation.io/app/uploads/2017/04/13100509/Netflix-Background.jpg");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  display: grid;
  place-items: center;
`;

export const Modal = styled.div`
  width: 450px;
  height: 660px;
  background-color: rgba(0, 0, 0, 0.75);
  border-radius: 4px;
  padding: 60px 68px;

  .link {
    font-size: 13px;
    color: #737373;

    a {
      color: #fff;
      &:hover {
        text-decoration: underline;
      }
    }
  }
`;
