import Link from "next/link";
import Image from "next/image";

export default function Menu() {
  const cat = [
    { item: "Remote", src: "remote.svg", href: "/jobs/browse/remote" },
    { item: "Design", src: "design.svg", href: "/jobs/browse/design" },
    { item: "Develop", src: "develop.svg", href: "/jobs/browse/develop" },
    { item: "Support", src: "support.svg", href: "/jobs/browse/support" },
    { item: "Sales", src: "sales.svg", href: "/jobs/browse/sales" },
    { item: "Marketing", src: "marketing.svg", href: "/jobs/browse/marketing" },
    { item: "Finance", src: "finance.svg", href: "/jobs/browse/finance" },
    { item: "Other", src: "other.svg", href: "/jobs/browse/other" },
  ];

  return (
    <div
      style={{
        maxWidth: '850px',
        overflowX: "auto",
        padding: "0 1em",
        marginLeft: 'auto',
        marginRight: 'auto'
      }}
    >
      <ul>
        {cat.map((item) => (
          <li key={item.item}>
          <Link href={item.href}>
            <a>
              <div className="menu-item">
                <Image
                  src={`/icons/${item.src}`}
                  alt={`${item.item} work`}
                  width={30}
                  height={30}
                />
                <span>{item.item}</span>
              </div>
            </a>
          </Link>
          </li>
        ))}
      </ul>
      <style jsx>{`
        div {
          width: 100%;
        }
        ul {
          display: flex;
          justify-content: space-between;
          overflow-x: auto;
          width: 800px;
          margin-bottom: 4em;
        }
        @media only screen and (max-width: 767px) {
          li:last-of-type {
            margin-right: 1em;
          }
          
        }
        .menu-item {
          display: flex;
          flex-direction: column;
          font-weight: 700;
        }
        .menu-item svg {
          fill: currentColor;
        }
        a:hover,
        a:focus {
          color: var(--orange);
        }
        a:focus {
          outline: var(--orange) auto 1px;
          outline-offset: -2px;
        }
      `}</style>
    </div>
  );
}
