import Head from 'next/head'
import Image from 'next/image'
import { Helmet } from 'react-helmet';
import styles from '../styles/Home.module.css'
import Navbar from '../Components/Navbar/Navbar'
import Landing from '../Components/Landing/Landing'
import Services from '../Components/Services/Services'
import TopPortfolio from '../Components/TopPortfolio/TopPortfolio'
import Resume from '../Components/Resume/Resume'
import TopBlog from '../Components/TopBlog/TopBlog'
import Contact from '../Components/Contact/Contact'
import Footer from '../Components/Footer/Footer'

export default function Home() {
  return (
    <>
      <main className="main-page-wrapper">
        <Navbar />
        <Landing />
        <Services />
        <TopPortfolio />
        <Resume />
        {/* <Testimonials/> */}
        {/* <Clients/> */}
        {/* <Pricing/> */}
        <TopBlog />
        <Contact />
        <Footer />
        <div className="backto-top">
          <div>
            <i onClick={() => { bottomToTop() }} className='feather-arrow-up' data-feather="arrow-up"></i>
          </div>
        </div>
      </main>
    </>
  )
}
