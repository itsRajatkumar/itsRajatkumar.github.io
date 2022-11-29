import React from 'react'
// import Clients from '../Components/Clients/Clients'
import Contact from '../Components/Contact/Contact'
import Footer from '../Components/Footer/Footer'
import Landing from '../Components/Landing/Landing'
import Navbar from '../Components/Navbar/Navbar'
import TopPortfolio from '../Components/TopPortfolio/TopPortfolio'
// import Pricing from '../Components/Pricing/Pricing'
import Resume from '../Components/Resume/Resume'
import Services from '../Components/Services/Services'
// import Testimonials from '../Components/Testimonial/Testimonials'
import TopBlog from '../Components/TopBlog/TopBlog'


const Home = () => {
  const bottomToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
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
            <i onClick={()=>{bottomToTop()}} className='feather-arrow-up' data-feather="arrow-up"></i>
          </div>
        </div>
      </main>
    </>
  )
}

export default Home
