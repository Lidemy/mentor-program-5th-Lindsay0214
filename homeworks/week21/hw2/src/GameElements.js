import styled from "styled-components";

export const Wrapper = styled.div`
  font-family: "Noto Serif TC", "Courier New", serif;
`;

export const ChessBoard = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 500px) {
    height: 80%;
    width: 80%;
  }
`;

export const Row = styled.div`
  position: relative;
`;

export const Col = styled.div``;

export const Cell = styled.div`
  border: 1px solid #224;
  width: 30px;
  height: 30px;
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
  box-sizing: border-box;
`;

export const Black = styled.div`
  z-index: 1;
  margin-right: -14px;
  margin-bottom: -13px;
  width: 25px;
  height: 25px;
  border-radius: 50%;
  border: 1px solid #224;
  background-color: #333333;
`;

export const White = styled.div`
  z-index: 1;
  margin-right: -14px;
  margin-bottom: -13px;
  width: 25px;
  height: 25px;
  border-radius: 50%;
  border: 1px solid #224;
  background-color: #fff;
`;

export const CellClick = styled.div`
  width: 25px;
  height: 25px;
  position: absolute;
  z-index: 2;
  margin-right: -14px;
  margin-bottom: -13px;
`;

export const Title = styled.h1`
  color: #224;
  font-size: 50px;
  margin: 30px 50px 60px 50px;
  display: flex;
  justify-content: center;

  @media screen and (max-width: 480px) {
    margin-left: 16px;
    margin-top: 8px;
  }
`;
