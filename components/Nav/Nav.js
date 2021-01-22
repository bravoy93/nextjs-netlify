import PropTypes from "prop-types";
import styled from "styled-components";
import Link from "next/link";

const Navigation = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 auto;
  max-width: 1200px;
  padding: 12px 24px;
  & ul {
    list-style-type: none;
    display: flex;
    & li {
      padding: 0 10px;
      & a {
        text-decoration: none;
        font-size: 1.2rem;
        font-weight: 700;
        color: #0070f3;
      }
    }
  }
`;

const LogoImg = styled.img`
  height: 1.5em;
  cursor: pointer;
`;

const Nav = ({ children }) => {
  return (
    <Navigation>
      <Link href="/">
        <LogoImg src="/vercel.svg" alt="Vercel Logo" className="logo" />
      </Link>
      <ul>{children}</ul>
    </Navigation>
  );
};

Nav.defaultProps = {
  children: <li>Link</li>,
};

export default Nav;
