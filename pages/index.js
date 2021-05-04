import { server } from '../config'
import Link from 'next/link'

export default function Home({ message }) {
  return (
    <ul>
      <li>
        <Link href="/contact">
          <a>Contact</a>
        </Link>
      </li>
      <li>
        <Link href="/about">
          <a>About</a>
        </Link>
      </li>
      <li>
        <Link href="/api">
          <a>Api</a>
        </Link>
      </li>
      <li>{message.message}</li>
    </ul>

  )
}


export const getStaticProps = async () => {
  const res = await fetch(`${server}/api`)
  const message = await res.json()

  return {
      props: {
          message,
      },
  }
}