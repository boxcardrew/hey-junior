import Footer from "./footer";
import Nav from "./nav";
import Head from "next/head";

export default function Layout({ children }) {
  return (
    <div>
      <Head>
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@heyjuniorjobs" />
        <meta name="twitter:creator" content="@boxcardrew" />
        <meta name="twitter:url" content="https://heyjunior.co" />
        <meta name="twitter:title" content="Hey Junior - Jobs to start your next career" />
        <meta
          name="twitter:description"
          content="Hey Junior - Junior jobs for junior everythings. Junior developers, designers, marketers, support staff, sales, and more"
        />
        <meta name="twitter:image" content="/header.png" />
        <meta
          name="twitter:image:alt"
          content="Hey Junior - Junior Jobs for Junior Everythings"
        />
      </Head>
      <div className="container">
        <Nav />
        {children}
      </div>
      <Footer />
      <style jsx>{`
        .container {
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          align-items: center;
          max-width: 860px;
          margin: 0 auto;
          padding: 2em 0.5em;
        }
      `}</style>
    </div>
  );
}
