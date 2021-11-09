import Head from 'next/head';
import Nav from '../components/nav';
import Main from '../components/main';

export default function Home() {
  return (
    <div className="flex flex-col">
      <Head>
        <title>WWF</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Nav />
      <div className="flex flex-col items-center justify-center min-h-screen py-2 container mx-auto">
        <Main />
        
      </div>
    </div>
  )
}
