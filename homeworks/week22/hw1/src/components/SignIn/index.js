import React, { useState, useContext } from "react";
import { login, getMe } from "../../WebAPI";
import { setAuthToken } from "../../utils";
import { useHistory } from "react-router";
import { AuthContext } from "../../contexts";
import {
  Container,
  FormWrap,
  Icon,
  FormContent,
  Form,
  FormH1,
  FormLabel,
  FormInput,
  FormButton,
  Text,
  ErrorMessage,
} from "./SignElements";

const SignIn = () => {
  const { setUser } = useContext(AuthContext);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState();
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrorMessage(null);
    login(username, password).then((data) => {
      if (data.ok === 0) {
        return setErrorMessage(data.message);
      }
      setAuthToken(data.token);

      getMe().then((response) => {
        if (response.ok !== 1) {
          setAuthToken(null);
          return setErrorMessage(response.toString());
        }
        setUser(response.data);
        history.push("/");
      });
    });
  };

  return (
    <>
      <Container>
        <FormWrap>
          <Icon to="/">ㄑ</Icon>
          <FormContent>
            <Form onSubmit={handleSubmit}>
              <FormH1>立即登入</FormH1>
              <FormLabel htmlFor="for">Username{""}</FormLabel>
              <FormInput
                type="username"
                required
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
              <FormLabel htmlFor="for">Password{""}</FormLabel>
              <FormInput
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              {errorMessage && (
                <ErrorMessage>無此帳號密碼，請再次確認</ErrorMessage>
              )}
              <FormButton type="submit">Submit</FormButton>
              <Text>Forgot password</Text>
            </Form>
          </FormContent>
        </FormWrap>
      </Container>
    </>
  );
};

export default SignIn;
