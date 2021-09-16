import styled from "styled-components";

export const Wrapper = styled.div`
  background-color: #224;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Noto Serif TC", "Courier New", serif;
`;

export const Page = styled.div`
  width: 60%;
  background-color: #224;
  color: #fff;
  border-radius: 6px;
  padding: 20px 30px 50px 30px;
  margin: 100px;

  @media screen and (max-width: 400px) {
    height: 80%;
  }
`;

export const Form = styled.form`
  background-color: #224;
  color: #fff;
  border-radius: 6px;
  padding: 20px 30px 50px 30px;
  margin: 30px 20px;

  @media screen and (max-width: 400px) {
    height: 80%;
  }
`;

export const Title = styled.h1`
  color: #fff;
  font-size: 50px;
  margin: 30px 50px 60px 5px;

  @media screen and (max-width: 480px) {
    margin-left: 16px;
    margin-top: 8px;
  }
`;

export const Input = styled.input`
  width: 50vw;
  height: 50px;
  border-radius: 6px;
  border: 1px solid #fff;
  margin: 10px 0 40px 0;
`;

export const TextArea = styled.textarea`
  width: 50vw;
  height: 300px;
  border-radius: 6px;
  border: 1px solid #fff;
  margin-top: 15px;
`;

export const FormH1 = styled.h1`
  font-size: 18px;
`;

export const Button = styled.button`
  padding: 10px;
  width: 100px;
  margin: 30px 5px;
  background-color: #224;
  color: #fff;
  border-radius: 6px;
  border: 1px solid #fff;
  font-size: 16px;

  &:hover {
    background-color: #fff;
    color: #224;
    cursor: pointer;
  }
`;
