import Head from "next/head";
import Nav from "../components/nav";
import styles from "../styles/Home.module.css";
import Search from "../components/search";
import Menu from "../components/menu";
import EmailSignup from "../components/email";
import Hiring from "../components/hiring";
import Posting from "../components/posting";
import Title from "../components/title";

import prisma from "../lib/prisma";
import Footer from "../components/footer";
import Layout from "../components/layout";

export async function getStaticProps() {
  const jobs = await prisma.jobPosting.findMany({
    orderBy: [{ featured: "desc" }, { createdAt: "desc" }],
  });
  return {
    props: { jobs },

    revalidate: 10,
  };
}

const Home = ({ jobs }) => {
  return (
    <div>
      <Layout>
        <Head>
          <title>HeyJunior - Jobs to start your new career</title>

          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="favicon/apple-touch-icon.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="favicon/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="favicon/favicon-16x16.png"
          />
          <link rel="manifest" href="favicon/site.webmanifest"></link>
        </Head>

        <main className={styles.main}>
          <section className={styles.hero}>
            <h1 className={styles.title}>The #1 job board for junior</h1>
            <Title />
          </section>
          <Search />
          <Menu />
          <div
            className={styles.section}
            style={{
              display: "flex",
              justifyContent: "space-between",
              width: "100%",
            }}
          >
            <EmailSignup />
            <Hiring />
          </div>
          {/* <div>
          <h2>Trusted by companies</h2>
        </div> */}
          <div style={{ width: "100%" }}>
            <h2 style={{ fontSize: "1.5rem", marginBottom: "1em" }}>
              New Job Posts
            </h2>
            <div>
              <Category jobs={jobs} />
            </div>
          </div>
        </main>
      </Layout>
    </div>
  );
};

const Category = ({ jobs }) => {
  const sections = [];

  jobs.forEach((job) => {
    if (!sections.includes(job.category)) {
      sections.push(job.category);
    }
  });

  const latestPost = (cat) => jobs.filter(post => post.category === cat && post.featured !== true)[0].createdAt
  
  const epochs = [
    ['year', 31536000],
    ['month', 2592000],
    ['day', 86400],
    ['hour', 3600],
    ['minute', 60],
    ['second', 1]
  ];
  
  const getDuration = (timeAgoInSeconds) => {
    for (let [name, seconds] of epochs) {
      const interval = Math.floor(timeAgoInSeconds / seconds);
      if (interval >= 1) {
        return {
          interval: interval,
          epoch: name
        };
      }
    }
  };
  
  const timeAgo = (date) => {
    const timeAgoInSeconds = Math.floor((new Date() - new Date(date)) / 1000);
    const {interval, epoch} = getDuration(timeAgoInSeconds);
    const suffix = interval === 1 ? '' : 's';
    return `${interval} ${epoch}${suffix} ago`;
  };
  
  const getLatest = (job) => {
    timeAgo(job.createdAt)
  }
  
  // console.log(timeAgo(latestPost.createdAt))
  
  return (
    <div>
      {sections.map((section) => (
        <section key={section} id={section}>
          <h3 style={{ marginBottom: ".5em", display: "inline-block", fontSize: '1.25rem' }} >{section} </h3>
          <span> - Latest Post About {timeAgo(latestPost(section))}</span>
          <ul>
            {jobs
              .filter((post) => post.category === section).slice(0, 9)
              .map((post) => (
                <li key={post.id}>
                  <Posting post={post} />
                </li>
              ))}
          </ul>
          <div style={{ textAlign: "center", margin: "2em" }}>
            <a className="button" href={`/jobs/browse/${section}`}>All {section} Jobs</a>
          </div>
        </section>
      ))}
    </div>
  );
};



export default Home;
