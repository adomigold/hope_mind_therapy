import React from "react"
import Navbar from '../components/Navbar'
import Intro from '../components/Intro'
import Services from '../components/Services'
import fsPromises from 'fs/promises';
import path from 'path'
import Curriculum from "../components/Curriculum";
import Footer from "../components/Footer";


export default function Home({services, about}) {
  return (
    <>
      <main className="page-wrapper">
        <Navbar />
        <Intro />
        <Services skills={services} />
        <Curriculum/>
        <Footer/>
      </main>
    </>
  )
}

export async function getStaticProps() {
  const fileservices = path.join(process.cwd(), 'assets/jsons/services.json');
  const serviceData = await fsPromises.readFile(fileservices);
  const services = JSON.parse(serviceData);

  const fileAbout = path.join(process.cwd(), 'assets/jsons/about_us.json')
  const aboutData = await fsPromises.readFile(fileAbout)
  const about = JSON.parse(aboutData)
  return{
    props:{
      services:services,
      about:about
    }
  }
}