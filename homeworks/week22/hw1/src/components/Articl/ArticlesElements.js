import styled from "styled-components";
import { Link } from "react-router-dom";

export const Wrapper = styled.div`
  background-color: #224;
  width: 100vw;
  height: 70rem;
  display: flex;
  justify-content: center;
  font-family: "Noto Serif TC", "Courier New", serif;
`;

export const Page = styled.div`
  width: 70vw;
  background-color: #224;
  color: #fff;
  border-radius: 6px;
  padding: 20px 30px 50px 30px;
  margin: 100px;

  @media screen and (max-width: 1000px) {
    height: 80%;
  }
`;

export const Post = styled.div`
  background-color: #224;
  color: #fff;
  border-radius: 6px;
  border: 1px solid #fff;
  padding: 20px 30px 50px 30px;
  margin: 30px 20px;

  @media screen and (max-width: 400px) {
    height: 80%;
  }
`;

export const Title = styled.h1`
  color: #fff;
  font-size: 50px;
  margin: 30px 50px 60px 50px;

  @media screen and (max-width: 480px) {
    margin-left: 16px;
    margin-top: 8px;
  }
`;

export const label = styled.h2`
  color: #fff;
  border-bottom: 1px solid rgba(111, 111, 111, 0.6);
  padding: 50px 30px 5px 30px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const PostContainer = styled.div`
  color: #fff;
  border-bottom: 1px solid rgba(111, 111, 111, 0.6);
  padding: 50px 30px 5px 30px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const PostTitle = styled(Link)`
  font-size: 24px;
  padding: 10px;
  color: #fff;
  text-decoration: none;
  width: 40vw;
  display:block;
  overflow:hidden;
  text-overflow:ellipsis;
  white-space:nowrap;
`;

export const PostDate = styled.p`
  color: #fff;
`;

export const LimitPage = styled.div``;

export const Loading = styled.div`
  height: 22vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
