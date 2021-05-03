import Link from "next/link";
import Image from "next/image";

export default function Hiring() {
  return (
    <div className="card">
      <div style={{ display: 'flex' }}>
        <Image
          src={`/icons/pointer.svg`}
          alt={`pointing finger`}
          width={30}
          height={30}
        />
        <h4 style={{ marginTop: '4px', marginLeft: '8px' }}>Are you hiring?</h4>
      </div>
      <Link href="/post">
        <a className="button">Post a Job</a>
      </Link>

      <style jsx>{`
        .card {
          width: 49%;
          background: var(--dark-green);
          color: var(--white);
          border-radius: 8px;
          padding: 1em 1em;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        @media only screen and (max-width: 767px) {
          .card {
            width: 100%;
            margin-bottom: 2em;
          }
        }
      `}</style>
    </div>
  );
}
