import Layout from "../components/Layout";
import styled from "styled-components";

const Title = styled.h1`
  margin: 0;
  line-height: 1.15;
  font-size: 4rem;
  text-align: center;
  align-self: center;
  & a {
    color: #0070f3;
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
    &:focus {
      text-decoration: underline;
    }
    &:active {
      text-decoration: underline;
    }
  }
`;

export default function Home() {
  return (
    <Layout>
      <Title className="title">
        Welcome to <a href="https://nextjs.org">Next.js!</a>
      </Title>
    </Layout>
  );
}
