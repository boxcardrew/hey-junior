import Link from 'next/link';

export default function Nav() {
  return (
    <nav>
      <ul>
        <li className="logo" >HeyJunior</li>
        <li><Link href="/"><a className="button">Post a job</a></L