import styled from "styled-components";
import { Link } from "react-router-dom";

export const Wrapper = styled.div`
  background-color: #224;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Noto Serif TC", "Courier New", serif;
`;

export const Icon = styled(Link)`
  position: fixed;
  top: 50px;
  left: 80px;
  color: #fff;
  font-weight: 700;
  font-size: 32px;

  @media screen and (max-width: 480px) {
    margin-left: 16px;
    margin-top: 8px;
  }
`;

export const Page = styled.div`
  width: 60vw;
  background-color: #224;
  color: #fff;
  border-radius: 6px;
  padding: 20px 30px 50px 30px;
  margin: 100px;

  @media screen and (max-width: 400px) {
    height: 80%;
  }
`;

export const Title = styled.h1`
  color: #fff;
  font-size: 50px;
  margin: 30px 50px 60px 10px;

  @media screen and (max-width: 480px) {
    margin-left: 16px;
    margin-top: 8px;
  }
`;

export const MessageForm = styled.div`
  height: 100px;
  margin-bottom: 80px;

  @media screen and (max-width: 480px) {
    padding: 10px;
  }
`;

export const MessageTextArea = styled.textarea`
  width: 80%;
  height: 100%;
  display: block;
  background-color: #224;
  color: #fff;
  border-radius: 6px;
  border: 1px solid #fff;

  @media screen and (max-width: 400px) {
    padding: 32px 32px;
  }
`;

export const SubmitButton = styled.div`
  padding: 10px;
  width: 60px;
  margin-top: 10px;
  background-color: #224;
  color: #fff;
  border-radius: 6px;
  border: 1px solid #fff;
  font-size: 18px;

  &:hover {
    background-color: #fff;
    color: #224;
    cursor: pointer;
  }
`;

export const MessageList = styled.div`
  margin-top: 100px;
  background-color: #224;
  color: #fff;
`;

export const MessageContainer = styled.div`
  border: 1px solid #fff;
  padding: 25px 20px;
  border-radius: 8px;

  & + & {
    margin: 20px 0;
  }
`;

export const MessageHead = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
  padding-bottom: 7px;
  border-bottom: 1px solid rgba(221, 221, 221, 0.4);
`;

export const MessageAuthor = styled.div`
  color: #fff;
  font-size: 14px;
`;

export const MessageTime = styled.div``;

export const MessageBody = styled.div`
  font-size: 16px;
`;

export const ErrorMessage = styled.div`
  margin-top: 16px;
  color: #fff;
  background-color: red;
  padding: 3px;
`;

export const AlertMessage = styled.div`
  margin-top: 16px;
  color: #fff;
  padding: 3px;
  display: flex;
  justify-content: center;
`;

export const Loading = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  color: white;
  font-size: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
