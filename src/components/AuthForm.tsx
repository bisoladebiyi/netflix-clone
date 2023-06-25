import React from "react";
import styled from "styled-components";
import { IForm } from "../../utils/interfaces";

const AuthForm: React.FC<IForm> = ({
  authType,
  error,
  onClick,
  loading,
  firstName,
  lastName,
  email,
  password,
  setEmail,
  setPassword,
  setFirstName,
  setLastName,
  clearErrorMsg,
}) => {
  return (
    <>
      <Form action="" $authType={authType}>
        {authType === "signup" && (
          <>
            <Input
              placeholder="First name"
              required
              value={firstName}
              onChange={(e) => setFirstName && setFirstName(e.target.value)}
            />
            <Input
              placeholder="Last name"
              required
              value={lastName}
              onChange={(e) => setLastName && setLastName(e.target.value)}
            />
          </>
        )}

        <Input
          placeholder="E-mail"
          type={"email"}
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          onFocus={clearErrorMsg}
        />
        <Input
          placeholder="Password"
          type={"password"}
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          onFocus={clearErrorMsg}
        />
        <Button onClick={onClick} disabled={loading}>
          {authType === "signup" ? "Sign Up" : "Log In"}
        </Button>
      </Form>
      <Error>{error}</Error>
    </>
  );
};

export default AuthForm;

const Form = styled.form<{ $authType: string }>`
  height: ${(props) => (props.$authType === "signup" ? "320px" : "200px")};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Input = styled.input<{ $error?: boolean }>`
  background-color: rgb(51, 51, 51);
  width: 100%;
  padding: 18px 20px 10px;
  border: none;
  border-bottom: ${(props) => (props.$error ? "1px solid orange" : "")};
  border-radius: 4px;
  outline: none;
  color: white;
  position: relative;

  &::placeholder {
    position: absolute;
    top: 50%;
    transition: all 0.2s ease-in-out;
    transform: translateY(-50%);
  }

  &:focus::placeholder {
    top: 12px;
    font-size: 0.6rem;
  }
`;

const Button = styled.button`
  background: #e50914;
  border: none;
  width: 100%;
  border-radius: 4px;
  font-size: 16px;
  font-weight: 500;
  margin: 24px 0 12px;
  padding: 16px;
  color: #fff;
  cursor: pointer;

  &:disabled {
    background: grey;
  }
`;

const Error = styled.p`
  color: #e50914;
  text-align: center;
  font-size: 13px;
`;
