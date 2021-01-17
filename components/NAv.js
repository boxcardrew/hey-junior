import Link from 'next';

export default function Nav() {
  return (
    <nav>
      <ul>
        <li>HeyJunior</li>
        <li><Link href="/"><a>Post a job</a></Link></li>
      </ul>
    </nav>
  )
}