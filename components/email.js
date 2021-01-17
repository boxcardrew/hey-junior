import Image from "next/image";

export default function EmailSignup() {
  return (
    <div className="signup">
      <div style={{ display: 'flex', alignItems: 'start' }}>
        <Image
          src={`/icons/waving.svg`}
          alt={`waving hand`}
          width={30}
          height={30}
          
        />
        <h4 style={{ marginTop: '3px', marginLeft: '4px' }}>Hey Junior!</h4>
      </div>
      <p>Subscribe to get a bi-weekly email of new jobs</p>
      <div className="form">
        <input className="input" placeholder="jane@email.com"></input>
        <button className="button">Subscribe</button>
      </div>

      <style jsx>{`
        .signup {
          width: 49%;
          background: var(--green);
          color: #f4f2f2;
          border-radius: 8px;
          padding: 1.25em 1em;
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
