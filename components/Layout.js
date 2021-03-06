import Nav from "./Nav/Nav";
import styled from "styled-components";
import Link from "next/link";
import PropTypes from "prop-types";
import Head from "next/head";
import { useEffect } from "react";
import { NextSeo } from "next-seo";

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

const Layout = ({ children, title, description }) => {
  useEffect(() => {
    if (
      typeof window !== "undefined" &&
      "serviceWorker" in navigator &&
      window.workbox !== undefined
    ) {
      const wb = window.workbox;

      console.log(wb)
      
      // const promptNewVersionAvailable = (event) => {
      //   if (
      //     confirm(
      //       "A newer version of this web app is available, reload to update?"
      //     )
      //   ) {
      //     wb.addEventListener("controlling", (event) => {
      //       window.location.reload();
      //     });

      //     wb.messageSW({ type: "SKIP_WAITING" });
      //   } else {
      //     console.log(
      //       "User rejected to reload the web app, keep using old version. New version will be automatically load when user open the app next time."
      //     );
      //   }
      // };

      // wb.addEventListener("waiting", promptNewVersionAvailable);
      // wb.addEventListener("externalwaiting", promptNewVersionAvailable);

      // wb.addEventListener("message", (event) => {
      //   console.log(`Event ${event.type} is triggered.`);
      //   console.log(event);
      // });
      // wb.register();
    };
  }, []);

  return (
    <>
      <NextSeo
        title={`${title} | NextJS App`}
        description={description}
        openGraph={{
          type: 'website',
          locale: 'en_US',
          url: 'https://nextjs-netlify.vercel.app/',
          title: `${title} | NextJS App`,
          description,
          images: [
            {
              url: 'icons/icon-512x512.png',
              width: 512,
              height: 512,
              alt: 'Og Image Alt',
            }
          ],
          site_name: 'Yoe NextJS',
        }}
        twitter={{
          handle: '@bravoy93',
          site: 'https://nextjs-netlify.vercel.app/',
          cardType: 'summary_large_image',
        }}
      />
      <Head>
        <link rel="icon" sizes="16x16 32x32 48x48" href="/favicon.ico" />

        {/* PWA */}
        <link rel="manifest" href="manifest.webmanifest" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="application-name" content="Yoe NextJS" />
        <meta name="apple-mobile-web-app-title" content="Yoe NextJS" />
        <meta name="theme-color" content="#0070f3" />
        <meta name="msapplication-navbutton-color" content="#0070f3" />
        <meta
          name="apple-mobile-web-app-status-bar-style"
          content="black-translucent"
        />
        <meta name="msapplication-starturl" content="/" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />

        <link
          rel="icon"
          type="image/png"
          sizes="48x48"
          href="icons/icon-48x48.png"
        />
        <link
          rel="apple-touch-icon"
          type="image/png"
          sizes="48x48"
          href="icons/icon-48x48.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="72x72"
          href="icons/icon-72x72.png"
        />
        <link
          rel="apple-touch-icon"
          type="image/png"
          sizes="72x72"
          href="icons/icon-72x72.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="96x96"
          href="icons/icon-96x96.png"
        />
        <link
          rel="apple-touch-icon"
          type="image/png"
          sizes="96x96"
          href="icons/icon-96x96.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="144x144"
          href="icons/icon-144x144.png"
        />
        <link
          rel="apple-touch-icon"
          type="image/png"
          sizes="144x144"
          href="icons/icon-144x144.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="192x192"
          href="icons/icon-192x192.png"
        />
        <link
          rel="apple-touch-icon"
          type="image/png"
          sizes="192x192"
          href="icons/icon-192x192.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="256x256"
          href="icons/icon-256x256.png"
        />
        <link
          rel="apple-touch-icon"
          type="image/png"
          sizes="256x256"
          href="icons/icon-256x256.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="384x384"
          href="icons/icon-384x384.png"
        />
        <link
          rel="apple-touch-icon"
          type="image/png"
          sizes="384x384"
          href="icons/icon-384x384.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="512x512"
          href="icons/icon-512x512.png"
        />
        <link
          rel="apple-touch-icon"
          type="image/png"
          sizes="512x512"
          href="icons/icon-512x512.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="192x192"
          href="icons/icon-192x192-maskable.png"
        />
        <link
          rel="apple-touch-icon"
          type="image/png"
          sizes="192x192"
          href="icons/icon-192x192-maskable.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="512x512"
          href="icons/icon-512x512-maskable.png"
        />
        <link
          rel="apple-touch-icon"
          type="image/png"
          sizes="512x512"
          href="icons/icon-512x512-maskable.png"
        />

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
  description: PropTypes.string,
};

Layout.defaultProps = {
  title: "Home",
  description: "NextJS App made by Yoe"
};

export default Layout;
