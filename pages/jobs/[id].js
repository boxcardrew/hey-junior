import prisma from "../../lib/prisma";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Nav from "../../components/nav";
import getDate from "../../utils/getDate";

// import Posting from "../../components/posting";

export const getServerSideProps = async ({ params }) => {
  const post = await prisma.jobPosting.findUnique({
    where: {
      id: Number(params?.id) || -1,
    },
  });
  return {
    props: post,
  };
};

export default function Post(props) {
  console.log(props);
  const category = "Developer";
  const share = [
    {
      name: "Share",
      src: "/icons/share.svg",
      url: "/",
      shareData: {
        title: "Job from HeyJunior",
        text: "Check out this job posting from HeyJunior",
        url: "window.location",
      },
    },
    { name: "Share to Linked In", src: "/icons/cib_linkedin.svg", url: "/" },
    { name: "Share to Twitter", src: "/icons/cib_twitter.svg", url: "/" },
  ];
  return (
    <div className="container">
      <Head>
        <title>
          {props.title} - {props.company} | HeyJunior
        </title>
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
              <span>Posted {getDate(props.createdAt)}</span>
              <h1 className="title">{props.title}</h1>
              <div className="location">
                  <Image
                    src="/icons/place.svg"
                    alt={props.location.location.city}
                    width={24}
                    height={24}
                  />
                <span>
                  {props.location.location.city}
                </span>
              </div>
              <div className="tags">
                {props.tags.map((tag) => (
                  <span key={tag}>{tag} </span>
                ))}
              </div>
              <div className="mobile-company">
                <h3>{props.company}</h3>
              </div>
              <div>
                <div
                  className="description"
                  dangerouslySetInnerHTML={{ __html: props.description }}
                />
              </div>
              <div className="apply">
                <a href={props.applyURL} className="button">
                  Apply Now
                </a>
                <div className="share">
                  <span className="block">Share this Job:</span>
                  {share.map((social) => (
                    <button
                      onClick={async () => {
                        try {
                          await navigator.share(social.shareData);
                        } catch (err) {
                          console.log(err);
                        }
                      }}
                    >
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
              
              <div className="img-default"><img src={`//logo.clearbit.com/${props.companyWebsite}?size=50`} /></div>
              <span>{props.company}</span>
              {props.companyWebsite ? (
                <a href={`https://${props.companyWebsite}`} target="_">
                  View Website
                </a>
              ) : null}
              <a className="button" href={props.applyURL}>
                Apply Now
              </a>
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
        article .location {
          display: flex;
          height: 24px;
          align-items: center;
          margin-bottom: .5em;
        }
        article .title {
          margin-bottom: 0em;
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
        .share button {
          margin-left: 1em;
        }
        .block {
          margin-bottom: 0.5em;
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
            font-size: 0.625rem;
          }
        }
      `}</style>
    </div>
  );
}
