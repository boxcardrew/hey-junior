import Head from "next/head";
import JobPostForm from "../components/JobPostForm";
import Nav from "../components/nav";
import PostLayout from "../components/PostLayout";

export default function Post() {
  return (
    <div className="container">
      <Head>
        <title>Post a new job | HeyJunior</title>
      </Head>
      <main className="main">
        <Nav />
        <div className="title">
          <h1>Junior Prices For Junior Jobs</h1>
        </div>
        <section>
          <PostLayout>
            <JobPostForm />
          </PostLayout>
          
        </section>
      </main>
      <style jsx>{`
        section {
          width: 100%;
        }
        .container {
          min-height: 100vh;
          padding: 0 0.5rem;
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        .title {
          margin-top: 3em;
          margin-bottom: 3em;
          text-align: center;
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
             
      `}</style>
    </div>
  );
}
