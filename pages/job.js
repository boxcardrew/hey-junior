import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Nav from "../components/nav";
// import Posting from "../components/posting";

export default function Post() {
  const category = "Developer";
  const share = [
    {name: "Share", src: "/icons/share.svg", url: "/", shareData: { title: "Job from HeyJunior", text: "Check out this job posting from HeyJunior", url: "window.location" }},
    {name: "Share to Linked In", src: "/icons/cib_linkedin.svg", url: "/"},
    {name: "Share to Twitter", src: "/icons/cib_twitter.svg", url: "/"}
  ]
  return (
    <div className="container">
      <Head>
        <title>This is the Job Posting | HeyJunior</title>
      </Head>
      <div className="main">
        <Nav />
        <div className="page-nav">
          <Link href="/">
            <a>Back to Job Postings</a>
          </Link>
          <Link href={category}>
            <a>See More {category} Jobs</a>
          </Link>
        </div>
        <section className="section">
          <div className="grid">
            <article>
              <span>Posted Jan 1</span>
              <h1>Job Title</h1>
              <span>Location, NB</span>
              <div>
                <span>ui/ux</span>
                <span>ui/ux</span>
                <span>ui/ux</span>
                <span>ui/ux</span>
              </div>
              <div className="mobile-company">
                <h3>Google Inc.</h3>
              </div>
              <div>
                <h4>About us</h4>
                <p>
                  We are the company behind very popular open-source tools for
                  ML workflow- DVC and CML. We're a well-funded, remote-first
                  team on a missing to solve the complexity of managing
                  datasets, ML infrastructure, ML models lifecycle management.
                </p>
                <h4>Learn more:</h4>
                <p>
                  <ul>
                    <li>Check out our GitHub</li>
                    <li>Check out the Website and Docs </li>
                    <li>Finally, take a look at our Blog and YouTube</li>
                  </ul>
                  <h4>What we offer:</h4>
                  Team is distributed remotely worldwide. You will be one of the
                  first employees for the DVC core team. Highly competitive
                  salary, stock options, and bonuses. Open source-first company-
                  you work will be visible and will be used by thousands
                  developers every day! This feels great! Check out our Discord
                  and GitHub. Founders and team with strong engineering, data
                  science, and open source experience. We all code and
                  understand engineering first-hand. Engineering team is
                  involved into product discussions and planning. We do it
                  openly via Github or Discord chat. Besides building the
                  product we participate in conferences (PyCon, PyData, O'Reilly
                  AI, etc). We encourage and support the team in giving talks,
                  writing blog-posts, and other activities. Well-defined process
                  that we all participate in improving.
                </p>
                <h4>About us</h4>
                <p>
                  We are the company behind very popular open-source tools for
                  ML workflow- DVC and CML. We're a well-funded, remote-first
                  team on a missing to solve the complexity of managing
                  datasets, ML infrastructure, ML models lifecycle management.
                </p>
                <h4>Learn more:</h4>
                <p>
                  <ul>
                    <li>Check out our GitHub</li>
                    <li>Check out the Website and Docs </li>
                    <li>Finally, take a look at our Blog and YouTube</li>
                  </ul>
                  <h4>What we offer:</h4>
                  Team is distributed remotely worldwide. You will be one of the
                  first employees for the DVC core team. Highly competitive
                  salary, stock options, and bonuses. Open source-first company-
                  you work will be visible and will be used by thousands
                  developers every day! This feels great! Check out our Discord
                  and GitHub. Founders and team with strong engineering, data
                  science, and open source experience. We all code and
                  understand engineering first-hand. Engineering team is
                  involved into product discussions and planning. We do it
                  openly via Github or Discord chat. Besides building the
                  product we participate in conferences (PyCon, PyData, O'Reilly
                  AI, etc). We encourage and support the team in giving talks,
                  writing blog-posts, and other activities. Well-defined process
                  that we all participate in improving.
                </p>
              </div>
              <div className="apply">
                <a href="*" className="button">
                  Apply Now
                </a>
                <div className="share">
                  <span className="block">Share this Job:</span>
                  {share.map (social => (
                    <button onClick={async () => {
                      try {
                        await navigator.share(social.shareData)
                      } catch(err) {
                        console.log(err)
                      }
                    }
                    }>
                      <Image
                        src={`${social.src}`}
                        alt={`${social.name}`}
                        width={24}
                        height={24}
                      />  
                    </button>
                  ))}
                </div>
              </div>
              <div className="maintain">
                <h4>Help us maintain the quality of our job postings.</h4>
                <div>
                  <p>Is this job a junior position?</p>
                  <a href="/" className="button">
                    Let Us Know
                  </a>
                </div>
              </div>
            </article>
            <aside>
              <div className="img-default">FB</div>
              <span>Company</span>
              <a href="https://www.google.com" target="_">
                View Website
              </a>
              <a className="button">Apply Now</a>
            </aside>
          </div>
        </section>
        <div className="similar">
          <div className="page-nav">
            <h4>Related Jobs</h4>
            <span>See More {category} Jobs</span>
          </div>
          {/* <Posting />
          <Posting />
          <Posting /> */}
        </div>
      </div>
      <style jsx>{`
        .img-default {
          background: var(--orange);
          border-radius: 50%;
          width: 50px;
          height: 50px;
          display: flex;
          justify-content: center;
          align-items: center;
          font-size: 1.5rem;
          font-weight: 700;
          color: var(--white);
        }
        .container {
          min-height: 100vh;
          padding: 0 0.5rem;
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        .maintain {
          background: var(--dark-green);
          color: var(--white);
          border-radius: 8px;
          padding: 1em;
        }
        .maintain p {
          padding-top: 0.5em;
        }
        .maintain div {
          margin-bottom: 0;
          display: flex;
          justify-content: space-between;
        }
        .maintain a {
          align-self: flex-end;
        }
        .similar {
          width: 100%;
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
        .section {
          background: var(--light-yellow);
          border-radius: 8px;
          padding: 2em 2em;
          width: 100%;
          margin-bottom: 2em;
        }
        .grid {
          display: grid;
          grid-template-columns: auto 200px;
          grid-gap: 2em;
        }
        .page-nav {
          margin-top: 3em;
          margin-bottom: 1em;
        }
        .page-nav span,
        .page-nav a {
          font-weight: 700;
        }
        .page-nav,
        .apply {
          display: flex;
          justify-content: space-between;
          align-items: center;
          width: 100%;
        }
        aside {
          display: flex;
          flex-direction: column;
          align-items: center;
          padding-top: 1em;
        }
        aside a {
          margin-bottom: 1em;
        }
        article h1 {
          font-size: 2.25rem;
          margin-bottom: 0.25em;
        }
        article p,
        article ul,
        article div {
          margin-bottom: 2em;
        }
        article li {
          list-style: disc inside;
        }
        article {
          max-width: 60ch;
        }
        article .share {
          margin-bottom: 0;
          text-align: right;
        }
        .share a {
          margin-left: 1em;
        }
        .block {
          margin-bottom: .5em;
          display: block;
          font-weight: 700;
        }
        @media only screen and (min-width: 766px) {
          .mobile-company {
            display: none;
          }
        }
        @media only screen and (max-width: 765px) {
          aside {
            display: none;
          }
          .grid {
            display: block;
          }
          .maintain,
          .maintain div {
            display: block;
          }
          .apply {
            display: block;
            text-align: center;
          }
          .apply div {
            margin-top: 2em;
          }
          article .share {
            text-align: center;
          }
          .section {
            padding: 2em 0.5em;
          }
          .page-nav span,
        .page-nav a {
          font-size: .625rem;
        }
        }
      `}</style>
    </div>
  );
}
