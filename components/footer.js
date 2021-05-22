import Link from "next/link";
import Image from "next/image";

const socialLinks = [
  {
    name: "linkedin",
    url: "https://linkedin.com/company/heyjunior",
    icon: "/icons/social/linkedin.svg",
  },
  {
    name: "twitter",
    url: "https://twitter.com/heyjuniorjobs",
    icon: "/icons/social/twitter.svg",
  },
  {
    name: "facebook",
    url: "https://facebook.com/heyjunior",
    icon: "/icons/social/facebook.svg",
  },
  {
    name: "instagram",
    url: "https://instagram.com/heyjunior",
    icon: "/icons/social/instagram.svg",
  },
];

const categories = [
  { name: "Remote", url: "/jobs/browse/remote" },
  { name: "Developer", url: "/jobs/browse/developer" },
  { name: "Design", url: "/jobs/browse/design" },
  { name: "Support", url: "/jobs/browse/support" },
  { name: "Sales", url: "/jobs/browse/sales" },
  { name: "Marketing", url: "/jobs/browse/marketing" },
  { name: "Finance", url: "/jobs/browse/finance" },
  { name: "Other", url: "/jobs/browse/other" },
];

const legals = [
  {name: "Privacy", url: "/privacy"},
  {name: "Terms", url: "/terms"}
]

export default function Footer() {
  return (
    <footer>
      <section>
        <div className="company">
          <h6>Hey Junior</h6>
          <p>
            The future of work must be inclusive. We believe that when people
            feel respected and included they will be more creative, innovative
            and successful.
          </p>
        </div>
        <div className="categories">
          <h6>Job Categories</h6>
          <ul>
            {categories.map(({ name, url }) => (
              <li key={name}>
                <Link href={url}>
                  <a>{`Junior ${name} Jobs`}</a>
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="social">
          <h6>Get In Touch</h6>
          <ul>
            <li className="email">
              <a href="mailto:contact@heyjunior.co">contact@heyjunior.co</a>
            </li>
            {socialLinks.map(({ name, url, icon }) => (
              <li key={name}>
                <a href={url} target="_blank" rel="noreferrer">
                  <Image src={icon} alt={name} width={25} height={25} />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>
      <section className="legals">
        <ul>
          <li>Copyright © {new Date().getFullYear()}</li> 
          {legals.map(({ name, url }) => (
            <li key={name}><Link href={url}><a>{name}</a></Link></li>
          ))}
        </ul>
      </section>
      <style jsx>{`
        footer {
          background: var(--dark-green);
          width: 100%;
          color: var(--white);
        }
        section {
          margin: 0 auto;
          padding: 4em 2em;
          width: 100%;
          max-width: 95%;
          display: flex;
          flex-wrap: wrap;
          gap: 4rem;
          max-width: 1260px;
          justify-content: space-evenly;
        }
        @media (max-width: 859px) {
          section {
            display: block;
          }
        }
        div {
          font-size: .875em;
          margin-bottom: 2em;
        }
        p{
          line-height: 1.5;
          max-width: 40ch;
        }
        .company > h6 {
          font-family: 'Lobster', cursive;
          font-size: 1.5em;
          font-weight: normal;
        }
        h6 {
          font-size: 1em;
          margin-bottom: 1em;
        }
        .social .email {
          margin-bottom: 1.5em;
          display: block;
        }
        li {
          margin-bottom: .5em;
          display: block;
        }
        .social li {
          display: inline-block;
          margin-right: 1.5em;
        }
        .legals {
          text-align: center;
        }
        .legals li, .legals span {
          display: inline-block;
          margin-right: 1em;
        }

      `}</style>
    </footer>
  );
}
