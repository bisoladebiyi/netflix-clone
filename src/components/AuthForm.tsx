import React from "react";
import styled from "styled-components";
import { IForm } from "../../utils/interfaces";
import { device } from "../styles/variables";

const AuthForm: React.FC<IForm> = ({
  authType,
  error,
  onClick,
  loading,
  email,
  password,
  setEmail,
  setPassword,
  clearErrorMsg,
}) => {
  return (
    <>
      <Form action="">
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

export const Form = styled.form`
  height: 200px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const Input = styled.input<{ $error?: boolean }>`
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

export const Button = styled.button`
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

  @media ${device.mobileVL} {
    font-size: 14px;
  }

  &:disabled {
    background: grey;
  }
`;

const Error = styled.p`
  color: #e50914;
  text-align: center;
  font-size: 13px;
`;
