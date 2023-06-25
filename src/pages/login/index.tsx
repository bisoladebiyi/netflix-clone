import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { logIn } from "../../../utils/requests";
import AuthForm from "../../components/AuthForm";
import Layout from "../../components/layout/layout";
import { AuthWrapper, Modal } from "../signup";

const LogIn = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [errorMsg, setErrorMsg] = useState("");
  const router = useRouter();

  const onLoginClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setLoading(true);

    logIn(email, password)
      .then(() => router.push("/"))
      .catch((e) => {
        if (e.code === "auth/user-not-found") {
          setErrorMsg(
            "Your information was not found in our records, please sign up!"
          );
        }
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
          <h2>Log In</h2>
          <AuthForm
            authType={"login"}
            onClick={onLoginClick}
            error={errorMsg}
            loading={loading}
            email={email}
            password={password}
            setEmail={setEmail}
            setPassword={setPassword}
            clearErrorMsg={clearErrorMsg}
          />
          <p className="link">
            New to Netflix? <Link href={"/signup"}>Sign Up</Link>
          </p>
        </Modal>
      </AuthWrapper>
    </Layout>
  );
};

export default LogIn;
