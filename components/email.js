import Image from "next/image";
import { useState } from "react";

export default function EmailSignup() {
  const [email, setEmail] = useState("");
  const [success, setSuccess] = useState(false);

  const signUp = async (e) => {
    e.preventDefault()
    fetch("/api/newsletter", {
      method: 'PUT',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({email: email}),
    });
    setSuccess(true);
  };

  return (
    <div className="signup">
      <div style={{ display: "flex", alignItems: "start" }}>
        <Image
          src={`/icons/waving.svg`}
          alt={`waving hand`}
          width={30}
          height={30}
        />
        <h4 style={{ marginTop: "3px", marginLeft: "4px" }}>Hey Junior!</h4>
      </div>
      <p>Subscribe to get a weekly email of new jobs</p>
      <form className="form" onSubmit={signUp}>
        {success ? (
          <span className="success" >Thanks! You're Signed Up!</span>
        ) : (
          <>
            <input
            name="email"
              type="email"
              className="input"
              placeholder="jane@email.com"
              autoComplete="true"
              required
              onChange={(e) => setEmail(e.target.value)}
            />
            <button className="button">Subscribe</button>{" "}
          </>
        )}
      </form>

      <style jsx>{`
        .signup {
          width: 49%;
          background: var(--dark-green);
          color: var(--white);
          border-radius: 8px;
          padding: 1.25em 1em;
        }
        .success {
          font-weight: 700;
          font-size: 0.875rem;
          margin-left: .25em;
        }
        @media only screen and (max-width: 767px) {
          .signup {
            width: 100%;
            margin-bottom: 2em;
          }
        }
        h4 {
          font-weight: 700;
          font-size: 1em;
          padding-bottom: 1em;
        }
        p {
          font-size: 0.875em;
          font-weight: 700;
          padding-bottom: 0.75em;
          padding-left: 0.25em;
        }
        .form {
          display: flex;
          align-items: center;
        }
        .form input {
          margin-right: 1em;
          width: 100%;
        }
        .form button {
          border: 2px solid var(--orange);
        }
      `}</style>
    </div>
  );
}
