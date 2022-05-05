import Head from 'next/head'
import Image from 'next/image'
import { Navbar } from '../components/Navbar'
import { Section } from '../components/Section'
import { Contact } from '../components/Contact'
export default function Home() {
  return (
    <>
    <Navbar/>
    <Section/>
    <Contact/>
      <section className='mt-20 py-60 bg-green-200'>
      <h1 className="text-3xl font-bold underline">
        Hello world! Success from Kubernetes
      </h1>
      </section>

    </>
  )
}
