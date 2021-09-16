import React, { useState, useContext } from "react";
import { register, getMe } from "../../WebAPI";
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
  Button,
  ErrorMessage,
} from "./SignUpElements";

const SignUp = () => {
  const { setUser } = useContext(AuthContext);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [nickname, setNickname] = useState("");
  const [errorMessage, setErrorMessage] = useState();
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrorMessage(null);
    register(username, password, nickname).then((data) => {
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
              <FormH1>立即註冊</FormH1>
              <FormLabel htmlFor="for">Username{""}</FormLabel>
              <FormInput
                type="username"
                required
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
              <FormLabel htmlFor="for">Nickname{""}</FormLabel>
              <FormInput
                type="nickname"
                required
                value={nickname}
                onChange={(e) => setNickname(e.target.value)}
              />
              <FormLabel htmlFor="for">Password{""}</FormLabel>
              <FormInput
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              {errorMessage && <ErrorMessage>內容有誤請再次確認</ErrorMessage>}
              <FormButton type="submit">Submit</FormButton>
              <Text>
                Already have account，<Button to="/sign-in">SIGN IN</Button>
              </Text>
            </Form>
          </FormContent>
        </FormWrap>
      </Container>
    </>
  );
};

export default SignUp;
