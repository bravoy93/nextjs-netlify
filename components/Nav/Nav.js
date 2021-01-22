import PropTypes from "prop-types";
import styled, { css } from "styled-components";
import Link from "next/link";
import { useState } from "react";

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
        @media (max-width: 768px) {
          font-size: 4rem;
          font-weight: 500;
          &:active,
          &:focus {
            color: white;
          }
          transition: all 350ms;
          ${({ menuOpen }) =>
            !menuOpen &&
            css`
              opacity: 0;
            `}
        }
      }
    }
    @media (max-width: 768px) {
      padding: 0;
      margin: 0;
      flex-direction: column;
      justify-content: center;
      height: 100%;
      width: 0;
      position: fixed; /* Stay in place */
      z-index: 2; /* Sit on top */
      left: 0;
      top: 0;
      background-color: rgb(0, 0, 0); /* Black fallback color */
      background-color: rgba(0, 0, 0, 0.9); /* Black w/opacity */
      overflow-x: hidden; /* Disable horizontal scroll */
      transition: 0.5s;
      ${({ menuOpen }) =>
        menuOpen &&
        css`
          width: 100%;
        `}
    }
  }
`;

const LogoImg = styled.img`
  height: 1.5em;
  cursor: pointer;
`;

const HamburgerMenu = styled.div`
  width: 32px;
  height: 26px;
  padding: 4px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  z-index: 3;
  position: absolute;
  right: 24px;
  & div {
    background-color: purple;
    height: 2px;
    width: 100%;
    transition: all 300ms;
    ${({ menuOpen }) =>
      menuOpen &&
      css`
        background-color: #0070f3;
        border-radius: 32px;
        &:nth-child(odd) {
          width: 50%;
          height: 3px;
        }
        &:nth-child(even) {
          transform: translateX(1px);
          border-radius: 32px;
        }
        &:nth-child(1) {
          transform: skewY(-34deg) translate(-4px, 0px);
        }
        &:nth-child(3) {
          transform: skewY(34deg) translate(-4px, 0px);
        }
      `}
  }
  @media (min-width: 769px) {
    display: none;
  }
`;

const BackOverlayContent = styled.div`
  @media (max-width: 768px) {
    position: relative;
    top: 25%;
    width: 100%;
    text-align: center;
    margin-top: 30px;
  }
`;

const Nav = ({ children }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <Navigation menuOpen={menuOpen}>
      <Link href="/">
        <LogoImg src="/vercel.svg" alt="Vercel Logo" className="logo" />
      </Link>
      <BackOverlayContent>
        <ul>{children}</ul>
      </BackOverlayContent>
      <HamburgerMenu onClick={toggleMenu} menuOpen={menuOpen}>
        {[1, 2, 3].map((e) => (
          <div key={e} />
        ))}
      </HamburgerMenu>
    </Navigation>
  );
};

Nav.defaultProps = {
  children: <li>Link</li>,
};

export default Nav;
