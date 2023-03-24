import Head from 'next/head'
import Banner from '@/components/Banner'
import Client from '@/components/Client'
import Courses from '@/components/Courses'
import About from '@/components/About'

// const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Tech Time With TalentPlus</title>
        <meta name="description" content="Code Challenge with TalentPlus" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link href="https://api.fontshare.com/v2/css?f[]=satoshi@700,500,301,701,300,501,401,400&display=swap" rel="stylesheet" />
        <link href="https://api.fontshare.com/v2/css?f[]=clash-display@200,400,700,500,600,300&display=swap" rel="stylesheet" />
      </Head>
      <main>
        <Banner />
        <Client />
        <Courses />
        <About />
      </main>
    </>
  )
}
