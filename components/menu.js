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
        width: "100vw",
        maxWidth: '850px',
        overflowX: "auto",
        padding: "0 1em",
        marginLeft: 'auto',
        marginRight: 'auto'
      }}
    >
      <ul>
        {cat.map((item) => (
          <Link href={item.href} key={item.item}>
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
        ))}
      </ul>
      <style jsx>{`
        div {
          width: 100%;
          margin-bottom: 2em;
        }
        ul {
          display: flex;
          justify-content: space-between;
          overflow-x: auto;
          width: 800px;
        }
        @media only screen and (max-width: 767px) {
          ul {
            padding-left: 1em;
          }
        }
        .menu-item {
          display: flex;
          flex-direction: column;
          font-weight: 700;
        }
        .menu-item svg {
          fill: var(--text);
        }
        a:hover,
        a:focus {
          color: var(--orange);
        }
        a:focus {
          outline: var(--orange) auto 1px;
          outline-offset: 1px;
        }
      `}</style>
    </div>
  );
}
