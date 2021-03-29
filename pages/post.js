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
          <h2><span>Post a job for <del>$99</del></span><ins> Free</ins></h2>
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
        
        ins {
          position: absolute;
          text-decoration: none;
          font-family: "Lobster", cursive;
          color: var(--orange);
          margin-left: -20px;
          margin-top: 20px;
          transform: rotate(-10deg);
          font-size: 1.25em;
        }
        del {
          text-decoration: line-through;
          text-decoration-color: var(--orange);
          text-decoration-thickness: 4px;
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
