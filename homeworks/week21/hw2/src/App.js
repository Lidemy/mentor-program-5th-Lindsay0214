/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import {
  Wrapper,
  ChessBoard,
  Row,
  Col,
  Cell,
  Black,
  White,
  CellClick,
  Title,
} from "./GameElements";

export default function App() {
  const border = Array(20).fill(null);

  const [palyArr, setPalyArr] = useState([]);
  const [chess, setChess] = useState(null);

  const [chessArr] = useState(() => {
    let array = Array(20).fill("");
    array.forEach((item, index) => {
      array[index] = Array(20).fill("");
    });
    return array;
  });

  function play(row, col) {
    let newChess = chess === 1 ? 2 : 1;
    let newPalyArr = [...palyArr, { row, col, chess: newChess }];
    setChess(newChess);
    setPalyArr(newPalyArr);
    getWinner(newPalyArr, newChess, chessArr, row, col);
  }

  function getWinner(palyArr, chess, chessArr, row, col) {
    palyArr.forEach((item) => {
      chessArr[item.row][item.col] = { ...item };
    });

    // 五顆連線
    let colCount = 0;
    // 上下
    for (let i = col + 1; i < 20; i++) {
      if (chessArr[row][i].chess !== chess) break;
      colCount++;
    }
    for (let i = col - 1; i >= 0; i--) {
      if (chessArr[row][i].chess !== chess) break;
      colCount++;
    }
    if (colCount >= 4) {
      setTimeout(() => {
        let congrats = window.confirm(
          `${chess === 1 ? "黑棋" : "白棋"}贏了～～～！` + "\n" + "再玩一局？"
        );
        if (congrats) window.location.reload();
      }, 0);
      colCount = 0;
      return;
    }
    // 左右
    let rowCount = 0;
    for (let i = row + 1; i < 20; i++) {
      if (chessArr[i][col].chess !== chess) break;
      rowCount++;
    }
    for (let i = row - 1; i >= 0; i--) {
      if (chessArr[i][col].chess !== chess) break;
      rowCount++;
    }
    if (rowCount >= 4) {
      setTimeout(() => {
        let congrats = window.confirm(
          `${chess === 1 ? "黑棋" : "白棋"}贏了～～～！` + "\n" + "再玩一局？"
        );
        if (congrats) window.location.reload();
      }, 0);
      rowCount = 0;
      return;
    }
    // 左斜
    let leftObliqueCount = 0;
    for (let i = row + 1, j = col - 1; i < 20 && j >= 0; i++, j--) {
      if (chessArr[i][j].chess !== chess) break;
      leftObliqueCount++;
    }
    for (let i = row - 1, j = col + 1; i >= 0 && j < 20; i--, j++) {
      if (chessArr[i][j].chess !== chess) break;
      leftObliqueCount++;
    }
    if (leftObliqueCount >= 4) {
      setTimeout(() => {
        let congrats = window.confirm(
          `${chess === 1 ? "黑棋" : "白棋"}贏了～～～！` + "\n" + "再玩一局？"
        );
        if (congrats) window.location.reload();
      }, 0);
      leftObliqueCount = 0;
      return;
    }
    // 右斜
    let rightObliqueCount = 0;
    for (let i = row + 1, j = col + 1; i < 20 && j < 20; i++, j++) {
      if (chessArr[i][j].chess !== chess) break;
      rightObliqueCount++;
    }
    for (let i = row - 1, j = col - 1; i >= 0 && j >= 0; i--, j--) {
      if (chessArr[i][j].chess !== chess) break;
      rightObliqueCount++;
    }
    if (rightObliqueCount >= 4) {
      setTimeout(() => {
        let congrats = window.confirm(
          `${chess === 1 ? "黑棋" : "白棋"}贏了～～～！` + "\n" + "再玩一局？"
        );
        if (congrats) window.location.reload();
      }, 0);
      rightObliqueCount = 0;
      return;
    }
  }

  return (
    <Wrapper>
      <Title>五子棋</Title>
      <ChessBoard>
        {border.map((row, rowIndex) => (
          <Row key={`row + ${rowIndex}`}>
            {border.map((col, colIndex) => (
              <Col key={`col + ${colIndex}`}>
                <Cell>
                  {palyArr.find(
                    (item) => item.row === rowIndex && item.col === colIndex
                  ) ? (
                    palyArr.find(
                      (item) => item.row === rowIndex && item.col === colIndex
                    ).chess === 1 ? (
                      <Black />
                    ) : (
                      <White />
                    )
                  ) : (
                    <CellClick
                      onClick={() => play(rowIndex, colIndex)}
                    ></CellClick>
                  )}
                </Cell>
              </Col>
            ))}
          </Row>
        ))}
      </ChessBoard>
    </Wrapper>
  );
}
