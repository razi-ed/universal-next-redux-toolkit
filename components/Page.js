import Link from 'next/link'
import Clock from './Clock'
import AddCount from './AddCount'

export default function Page ({ title, linkTo }){
  return (
    <div>
      <h1>{title}</h1>
      <Clock />
      <AddCount />
      <nav>
        <Link href={linkTo}>
          <a>Navigate</a>
        </Link>
      </nav>
    </div>
  );
}
