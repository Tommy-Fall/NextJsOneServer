import { server } from '../config'

export default function Contact({message}) {
  return <div>{message.message}</div>
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