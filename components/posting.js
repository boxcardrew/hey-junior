import Link from "next/link";

const getDate = (date) => {
  const created = new Date(date);
  const options = { month: "short", day: "numeric" };
  return created.toLocaleDateString("en-us", options);
};

const createMarkup = (desc) => {
  return { _html: desc };
};

export default function Posting({ post }) {
  return (
    <details className={post.featured | post.highlight ? "featured" : ""}>
      <summary>
        <div className={post.featured | post.highlight ? "card featured" : "card"}>
          
            <div className="logo">
              <div className="">
              {post.featured ? 
                <img src={`//logo.clearbit.com/${post.companyWebsite}?size=75`} height="50px" width="50px" alt={post.company} />
              : 
                <div className="img-default">{post.company.slice(0, 1)}</div>
              }
              </div>
            </div>
            <div className="company">
              <h5>{post.title}</h5>
              <div className="company-location">
                <p>{post.company}</p>
                
                <p>{post?.location?.location?.city || post.location}</p>
              </div>
            </div>

          <div className="tags">
            {post.tags.map((tag) => (
              <span key={tag}>{tag}</span>
            ))}
          </div>
          <div className="date">
            {post.featured ? (
              <span>Featured</span>
            ) : (
              <span>{getDate(post.createdAt)}</span>
            )}
          </div>
          <div className="apply">
            
              <a href={post.applyURL} className={post.featured | post.highlight ? "button light" : "button"}>
                Apply Now
              </a>
            
          </div>
        </div>
      </summary>
      <div className="details">
        <div
          className="description"
          dangerouslySetInnerHTML={{ __html: post.description }}
        />
        <div className="contact">
          <a className="button" href={post.applyURL}>Apply Now</a>
          
          <Link href={"/jobs/" + post.id}>
            <a>View Job Posting</a>
          </Link>
        </div>
      </div>

      <style jsx>{`
        summary {
          list-style: none;
          cursor: pointer;
        }
        
        summary::marker {
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
          grid-template-columns: 5em 3fr 2fr 1fr 1fr;
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
        .logo {
          
        }
        .company h5 {
          font-size: 1rem;
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
        }
        .apply {
          margin-left: auto;
        }
        .featured.card {
          background: var(--orange);
          color: var(--white);
        }
        .promoted.card::after {
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
            grid-template-columns: 1fr 3fr 1fr;
          }
        }
        @media only screen and (max-width: 601px) {
          .card {
            display: grid;
            padding: 0.5em;
            grid-gap: 0 0.5em;
            grid-template-columns: 1fr 4fr 1fr;
          }

          .logo {
            grid-row: 1/3;
          }
          .company {
            margin-left: 0px;
            grid-column: 2/4;
          }
          .company-location {
            
          }
          .company-location p:first-of-type {
            margin-right: 0.5em;
          }
          .company-location p:last-of-type {
            overflow: hidden;
            white-space: nowrap;
            text-overflow: ellipsis;
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
