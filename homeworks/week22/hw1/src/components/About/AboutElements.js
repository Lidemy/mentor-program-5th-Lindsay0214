import styled from "styled-components";

export const Wrapper = styled.div`
  background-color: #224;
  width: 100vw;
  height: 92vh;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Noto Serif TC", "Courier New", serif;
`;

export const Page = styled.div`
  width: 60vw;
  background-color: #224;
  color: #fff;
  padding: 20px 30px 50px 30px;
  margin: 100px;

  @media screen and (max-width: 400px) {
    height: 80%;
  }
`;

export const Title = styled.h1`
  color: #fff;
  font-size: 50px;
  margin: 30px 50px 0px 50px;
  padding: 40px 0;
  border-bottom: 1px solid #fff;

  @media screen and (max-width: 480px) {
    margin-left: 16px;
    margin-top: 8px;
  }
`;

export const Content = styled.h2`
  color: #fff;
  padding: 50px 30px 5px 50px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
