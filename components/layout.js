import Footer from "./footer";
import Nav from "./nav";

export default function Layout({children}) {
  return (
    <div>
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
