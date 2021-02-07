import Link from "next/link";

export default function Posting(props) {
  return (
    <details className={props.featured ? "featured" : ""}>
      <summary>
        <div className={props.featured ? "card featured" : "card"}>
          <div className="logo">
            <div className="img-default">FB</div>
          </div>
          <div className="company">
            <h4>React Native Developer</h4>
            <div className="company-location">
              <p>Facebook Group</p>
              <p>US - San Francisco</p>
            </div>
          </div>
          <div className="tags">
            <span>Swift</span>
            <span>Java</span>
          </div>
          <div className="date">
            <span>Dec 30</span>
          </div>
          <div className="apply">
            <Link href="/jobid">
              <a className={props.featured ? "button light" : "button"}>
                Apply Now
              </a>
            </Link>
          </div>
        </div>
      </summary>
      <div className="details">
        <h4>About us</h4>
        <p>
          We are the company behind very popular open-source tools for ML
          workflow- DVC and CML. We're a well-funded, remote-first team on a
          missing to solve the complexity of managing datasets, ML
          infrastructure, ML models lifecycle management.
        </p>
        <h4>Learn more:</h4>
        <p>
          <ul>
            <li>Check out our GitHub</li>
            <li>Check out the Website and Docs </li>
            <li>Finally, take a look at our Blog and YouTube</li>
          </ul>
          <h4>What we offer:</h4>
          Team is distributed remotely worldwide. You will be one of the first
          employees for the DVC core team. Highly competitive salary, stock
          options, and bonuses. Open source-first company- you work will be
          visible and will be used by thousands developers every day! This feels
          great! Check out our Discord and GitHub. Founders and team with strong
          engineering, data science, and open source experience. We all code and
          understand engineering first-hand. Engineering team is involved into
          product discussions and planning. We do it openly via Github or
          Discord chat. Besides building the product we participate in
          conferences (PyCon, PyData, O'Reilly AI, etc). We encourage and
          support the team in giving talks, writing blog-posts, and other
          activities. Well-defined process that we all participate in improving.
        </p>
        <div className="contact">
          <a className="button">Apply Now</a>
          <div>
            <span>email:</span> <a href="info@company.net">hr@company.com</a>
          </div>
          <Link href="/job"><a>View Job Posting</a></Link>
        </div>
      </div>

      <style jsx>{`
        summary {
          list-style: none;
          cursor: pointer;
        }
        summary::-webkit-details-marker {
          display: none;
        }
        details {
          background: var(--light-yellow);
          margin-bottom: 1.5em;
          border-radius: 8px;
        }
        .details {
          padding: 0.5em 0.25em;
          max-width: 75%;
          margin: 0 auto;
        }
        .details p,
        .details ul,
        .contact .button {
          margin-bottom: 1.5em;
        }
        .details p:last-of-type {
          margin-bottom: 3.5em;
        }

        .contact {
          display: flex;
          flex-direction: column;
          align-items: center;
          margin-bottom: 2.5em;
        }
        .card {
          position: relative;
          background: var(--light-yellow);
          width: 100%;
          display: flex;
          padding: 0.5em 1em;
          border-radius: 8px;
          min-height: 90px;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 1.5em;
        }
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
        .company {
          margin-left: -48px;
        }
        .company * {
          margin-bottom: 0.25em;
        }
        .company p {
          font-size: 0.875rem;
        }
        .date {
          font-size: 0.875rem;
        }
        .company p:last-of-type {
          font-weight: 300;
        }
        .tags span {
          padding: 1px 0.5em;
          margin-right: 0.5em;
          border: 2px solid var(--text);
          font-size: 12px;
          border-radius: 4px;
          color: var(--text);

          margin-bottom: 0.25em;
        }
        .tags {
          display: flex;
          max-width: 100px;
          flex-wrap: wrap;
        }
        .featured.card {
          background: var(--orange);
          color: var(--white);
        }
        .featured.card::after {
          content: "Promoted";
          position: absolute;
          top: 4px;
          right: 20px;
          font-weight: 200;
          font-size: 0.625rem;
        }
        .featured.card .img-default {
          background: var(--white);
          color: var(--orange);
        }
        .featured.card .tags span {
          border: 2px solid var(--white);
          color: var(--white);
        }
        @media only screen and (max-width: 767px) {
          .apply {
            display: none;
          }
        }
        @media only screen and (max-width: 601px) {
          .card {
            display: grid;
            grid-template: auto / 1fr 50px;
          }

          .logo {
            display: none;
          }
          .company {
            margin-left: 0px;
          }
          .company-location {
            display: flex;
          }
          .company-location p:first-of-type {
            margin-right: 0.5em;
          }
          .tags {
            grid-column: 1/2;
          }
          .date {
            grid-column: 2/3;
            grid-row: 1/2;
            align-self: end;
          }
        }
      `}</style>
    </details>
  );
}
