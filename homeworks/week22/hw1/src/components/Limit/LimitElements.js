import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  height: 10vh;
`;

export const Limit = styled.button`
  background-color: ${(props) => (props.$active ? "black" : "transparent")};
  color: ${(props) => (props.$active ? "white" : "black")};
  display: flex;
  justify-content: center;
  background: #224;
  border: 1px solid transparent;
  padding: 0.5rem 1rem;
  width: 7rem;
  cursor: pointer;
  font-size: 1rem;
  color: #fff;

`;

export const LimitButton = styled.div`
  display: flex;


`;

export const Button = styled.button`
  background-color: ${(props) => (props.$active ? "black" : "transparent")};
  color: ${(props) => (props.$active ? "white" : "black")};
  background-color: transparent;
  color: #fff;
  cursor: pointer;
  border-radius: 2px;
  border: 1px solid #fff;
  width: 2rem;
  height: 2rem;
  margin: 0.2rem;
  &:hover {
    background-color: #fff;
    color: #224;
  }
`;

export const Dots = styled.button`
  background-color: transparent;
  color: #fff;
  border: 1px solid transparent;
  width: 2rem;
  height: 2rem;
  margin: 0.1rem;
`;

export const NextButton = styled.button`
  background-color: transparent;
  color: #fff;
  font-size: 14px;
  letter-spacing: 2px;
  border: 1px solid #fff;
  width: 5rem;
  height: 2rem;
  border-radius: 2px;

  &:hover {
    background-color: #fff;
    color: #224;
    cursor: pointer;
  }
`;
