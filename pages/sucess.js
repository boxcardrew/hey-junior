import Nav from "../components/nav";
import Image from "next/image";

export default function Sucess() {
  return (
    <div className="container">
      <div className="main">
        <Nav />
        <section className="hero">
          <div className="box">
            <div>
              <h1>Here's to your new hire!</h1>
            </div>
            <div className="box-flex">
              <div className="box-image">
                <Image
                  src={`/team.svg`}
                  alt={`team work`}
                  width={313}
                  height={308}
                />
              </div>
              <div className="box-desc">
                <p>Your job posting will be live shortly.</p>
                <p>
                  You will recieve an email with a link to edit your job
                  posting.
                </p>
                <p>
                  If you need help or support, please reach out to:<br></br>
                  <a href="mailto:support@heyjunior.co">support@heyjunior.co</a>
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
      <style jsx>{`
        .container {
          min-height: 100vh;
          padding: 0 0.5rem;
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        .main {
          padding: 2em 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          width: 100%;
          max-width: 860px;
        }
        .hero {
          width: 100%;
          height: 100vh;
        }
        .box {
          background: var(--dark-green);
          width: 100%;
          margin-top: 10em;
          margin-bottom: auto;
          border-radius: 8px;
          padding: 3em 1em 4em 1em;
          color: var(--white);
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        .box-flex {
          display: flex;
        }
        @media only screen and (max-width: 696px) {
          .box {
            margin-top: 4em;
          }
          .box-flex {
            display: block;
          }
          .box-image {
            text-align: center;
            margin-top: -4em;
            position: relative;
            z-index: 1;
          }
          .hero h1 {
            position: relative;
            z-index: 2;
          }
        }
        .box-image, .box-desc {
          flex 1;
        }
        .box-desc {
          margin-top: 2.5em;
          
        }
        .box-image {
          margin-right: 2em;
        }
        h1 {
          font-size: 2.75rem;
          margin-bottom: .5em;
        }
        p {
          font-weight: 700;
          font-size: 1.25rem;
          margin-bottom: 2em;
          max-width: 34ch;
        }
        a{
          text-decoration: underline;
        }
      `}</style>
    </div>
  );
}
