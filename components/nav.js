import Link from 'next/link';

export default function Nav() {
  return (
    <nav>
      <ul>
        <li className="logo" ><Link href="/">HeyJunior</Link></li>
        <li><Link href="/post"><a className="button">Post a job</a></Link></li>
      </ul>
    
      <style jsx>{`
        nav {
          width: 100%;
        }
        ul {
          list-style: none;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        .logo {
          font-family: 'Lobster', cursive;
          font-size: 1.5rem;
        }
      `}
      </style>
    </nav>

  )
}