import Nav from "./Nav/Nav";
import styled from "styled-components";
import Link from "next/link";
import PropTypes from "prop-types";
import Head from "next/head";

const Container = styled.div`
  min-height: 80vh;
  padding: 0 0.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Main = styled.main`
  padding: 0;
  width: 100%;
  flex: 1;
  display: flex;
  justify-content: center;
`;

const Footer = styled.footer`
  width: 100%;
  height: 100px;
  border-top: 1px solid #eaeaea;
  display: flex;
  justify-content: center;
  align-items: center;
  & img {
    margin-left: 0.5rem;
    height: 1em;
  }
  & a {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
const ALink = styled.a`
  color: inherit;
  text-decoration: none;
`;

const NavLink = ({ to, label }) => (
  <li>
    <Link href={to}>{label}</Link>
  </li>
);

const Layout = ({ children, title = "Home" }) => {
  return (
    <>
      <Head>
        <title> {title} | NextJS App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Nav>
        <NavLink to="/" label="Home" />
        <NavLink to="/about" label="About" />
        <NavLink to="/users" label="Users" />
      </Nav>
      <Container className="container">
        <Main>{children}</Main>
        <Footer>
          <ALink
            href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Powered by{" "}
            <img src="/vercel.svg" alt="Vercel Logo" className="logo" />
          </ALink>
        </Footer>

        <style jsx global>{`
          html,
          body {
            padding: 0;
            margin: 0;
            font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
              Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
              sans-serif;
          }

          * {
            box-sizing: border-box;
          }
        `}</style>
      </Container>
    </>
  );
};

Layout.defaultProps = {
  title: PropTypes.string,
};

Layout.defaultProps = {
  title: "Home",
};

export default Layout;
