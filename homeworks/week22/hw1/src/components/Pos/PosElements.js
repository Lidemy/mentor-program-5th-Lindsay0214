import styled from "styled-components";

export const Wrapper = styled.div`
  background-color: #224;
  width: 100vw;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Noto Serif TC", "Courier New", serif;
  color: #fff;
  word-break: break-all;
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

export const Post = styled.div`
  padding: 20px 30px 50px 30px;
  margin: 30px 20px;
  display: flex;

  @media screen and (max-width: 400px) {
    height: 80%;
  }
`;

export const Title = styled.h1`
  font-size: 50px;
  margin: 30px 50px 5px 50px;
  border-bottom: 1px solid rgba(111, 111, 111, 0.6);
  padding-bottom: 20px;
  display:block;
  overflow:hidden;
  text-overflow:ellipsis;
  white-space:nowrap;

  @media screen and (max-width: 480px) {
    margin-left: 16px;
    margin-top: 8px;
  }
`;

export const Info = styled.div`
  font-size: 24px;
  color: #fff;
  width: 100vw;
  display: flex;
  justify-content: space-between;
  display:block;
  overflow:hidden;
  text-overflow:ellipsis;
  white-space:nowrap;
  `;

export const Author = styled.p`
  font-size: 16px;
  display:block;
  display:block;
  overflow:hidden;
  text-overflow:ellipsis;
  white-space:nowrap;
`;

export const Time = styled.p`
  font-size: 16px;
`;

export const Content = styled.div`
  font-size: 24px;
  padding: 20px 30px 50px 30px;
  margin: 30px 20px;
  letter-spacing: 2px;
  display:block;
`;

export const Loading = styled.div`
  height: 22vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;