import Head from "next/head";
import styles from "../../../styles/Home.module.css";
import Search from "../../../components/search";
import Menu from "../../../components/menu";
import EmailSignup from "../../../components/email";
import Hiring from "../../../components/hiring";
import Posting from "../../../components/posting";

import prisma from '../../../lib/prisma'
import Layout from "../../../components/layout";



export async function getServerSideProps({  }) {
  
  const jobs = await prisma.jobPosting.findMany({
    where: {
      remote: true
    },
    orderBy: [
      { featured: 'desc' },
      { createdAt: 'desc' }
    ]
  })
  return {
    props : { jobs }
  }
}

const Home = ( {jobs} ) => {
  
  return (
    <div>
      <Layout>

      <Head>
        <title>Junior Remote Jobs</title>
        
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
          <h3 style={{ fontSize: "1.5rem", marginBottom: "1em", textTransform: "capitalize" }}>
            Remote Jobs
          </h3>
          <div>
            <ul>
              {jobs.map((post) => (
                <li key={post.id}>
                  <Posting post={post} />
                </li>
              ))}
              {/* <li>
                <Posting featured="true" />
              </li>
              <li>
                <Posting featured="true" />
              </li>
              <li>
                <Posting featured="true" />
              </li>
              <li>
                <Posting />
              </li>
              <li>
                <Posting />
              </li>
              <li>
                <Posting />
              </li>
              <li>
                <Posting />
              </li> */}
            </ul>
          </div>
        </div>
      </main>
      </Layout>
    </div>
  );
}

export default Home;