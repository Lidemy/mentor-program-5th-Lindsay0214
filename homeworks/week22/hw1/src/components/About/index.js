import React from "react";
import { Wrapper, Page, Title, Content } from "./AboutElements";

export default function About() {
  return (
    <Wrapper>
      <Page>
        <Title>About</Title>
        <Content>
          Hello, this is Lindsay's blog！
          <br />
          Welcome to enjoy with me！
        </Content>
      </Page>
    </Wrapper>
  );
}
