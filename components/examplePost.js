import Link from "next/link";

const getDate = (date) => {
  const created = new Date(date);
  const options = { month: "short", day: "numeric" };
  return created.toLocaleDateString("en-us", options);
};

const createMarkup = (desc) => {
  return { _html: desc };
};

export default function ExamplePosting({ values }) {
  return (
    <details className={values.featured ? "featured" : ""}>
      <summary>
        <div className={values.featured ? "card featured" : "card"}>
          
            <div className="logo">
              <div className="img-default"><img
                      src={`//logo.clearbit.com/${values.companyName.split(' ').join('')
                      }.com?size=50`}
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.src =
                          "/favicon/favicon.png";
                      }}
                      style={{ maxWidth: '50px' }}
                    /></div>
            </div>
            <div className="company">
              <h4>{values.jobTitle || 'Junior Web Developer'}</h4>
              <div className="company-location">
                <p>{values.companyName || 'HeyJunior'}</p>
                <p>{values.location || 'Phoenix, AZ'}</p>
              </div>
            </div>

          <div className="tags">
            {values.tags ? 
            <>
            {values.tags.split(',').slice(0, 3).map((tag) => (
              <span key={tag}>{tag}</span>
            ))}
            </>
            : " "}
          </div>
          <div className="date">
            {values.featured ? (
              <span>Featured</span>
            ) : (
              <span>{getDate(Date.now())}</span>
            )}
          </div>
          <div className="apply">
            
              <span href='#' className={values.featured ? "button light" : "button"}>
                Apply Now
              </span>
            
          </div>
        </div>
      </summary>
      <div className="details">
        <div
          className="description"
          dangerouslySetInnerHTML={{ __html: values.jobDescription }}
        />
        <div className="contact">
          <span className="button" href={values.applyURL}>Apply Now</span>
          <div>
            <span>email:{values.companyEmail}</span>
          </div>
          <span>
            <a>View Job Posting</a>
          </span>
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
          margin-bottom: .25em;
          border-radius: 8px;
        }
        .details {
          padding: 0.5em 0.25em;
          max-width: 75%;
          margin: 0 auto;
        }
        .description p,
        .description ul,
        .contact .button {
          margin-bottom: 1.5em;
        }
        .description p:last-of-type {
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
          padding: 0.5em 1em;
          border-radius: 8px;
          min-height: 90px;
          align-items: center;
          margin-bottom: 1.5em;
          display: grid;
          grid-template-columns: 5em 3fr 1fr 1fr 1fr;
        }
        .img-default {
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
        .logo {
          
        }
        .company {
          
        }
        .company * {
          margin-bottom: 0.25em;
        }
        .company p {
          font-size: 0.875rem;
        }
        .date {
          font-size: 0.875rem;
          
          text-align: center;
        }
        .company p:last-of-type {
          font-weight: 300;
        }
        .tags span {
          padding: 1px 0.5em;
          margin-right: 1em;
          border: 2px solid var(--text);
          font-size: 12px;
          border-radius: 4px;
          color: var(--text);
          
          margin-bottom: 0.25em;
        }
        .tags {
          display: flex;
          max-width: 100px;
        }
        .apply {
          margin-left: auto;
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
          .date {
            grid-column: 5/-1;
            grid-row: 1/3;
          }
          .card {
            grid-template-columns: 1fr 3fr 1fr 1fr 1fr;
          }
        }
        @media only screen and (max-width: 601px) {
          .card {
            display: grid;
            padding: 0.5em;
            grid-gap: 0 0.5em;
          }

          .logo {
            grid-row: 1/3;
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
           grid-column: 2/3;
          }
          x
          .details {
            max-width: 85%;
          }
        }
      `}</style>
    </details>
  );
}
