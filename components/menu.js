import Link from "next/link";
import Image from "next/image";

export default function Menu() {
  const cat = [
    { item: "Remote", src: "remote.svg", href: "/remote" },
    { item: "Design", src: "design.svg", href: "/design" },
    { item: "Develop", src: "develop.svg", href: "/develop" },
    { item: "Support", src: "support.svg", href: "/support" },
    { item: "Sales", src: "sales.svg", href: "/sales" },
    { item: "Marketing", src: "marketing.svg", href: "/marketing" },
    { item: "Finance", src: "finance.svg", href: "/finance" },
    { item: "Other", src: "other.svg", href: "/other" },
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
