import Head from "next/head";
import Nav from "../components/nav";
import styles from "../styles/Home.module.css";
import Search from "../components/search";
import Menu from "../components/menu";
import EmailSignup from "../components/email";
import Hiring from "../components/hiring";
import Posting from "../components/posting";
import Title from "../components/title";

import prisma from '../lib/prisma'
import Footer from "../components/footer";
import Layout from "../components/layout";



export async function getStaticProps() {
  const jobs = await prisma.jobPosting.findMany({
    orderBy: [
      { featured: 'desc' },
      { createdAt: 'desc' }
    ]
  })
  return {
    props : { jobs },
  
    revalidate: 10, 
  }
}

const Home = ( {jobs} ) => {
  
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
            <ul>
              {jobs.map((post) => (
                <li key={post.id}>
                  <Posting post={post} />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </main>
      </Layout>
    </div>
  );
}

export default Home;