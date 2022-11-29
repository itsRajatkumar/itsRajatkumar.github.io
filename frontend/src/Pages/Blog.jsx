import React from 'react'
import { Link } from "react-router-dom";
import BlogCard from '../Common/BlogCard/BlogCard'

const Blog = () => {
  return (
    <>
      {/* <Navbar/> */}
      <main className="main-page-wrapper">
        <div className="breadcrumb-area rn-section-gap breadcrumb-style-one">
          <div className="plr--85">
            <div className="row">
              <div className="col-lg-12">
                <div className="breadcrumb-inner">
                  <div className="header-left">
                    <div className="logo">
                      <a href="index.html">
                        <img src="../../public/assets/images/logo/logo.png" alt="logo" />
                      </a>
                    </div>
                  </div>
                  <ul className="page-list">
                    <li><Link to="/">Home</Link></li>
                    <li className="separator"></li>
                    <li className="current-page">Blog</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="rn-blog-area rn-section-gap" id="blog">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div data-aos="fade-up" data-aos-duration="500" data-aos-delay="500" data-aos-once="true" className="section-title text-center aos-init aos-animate">
                  <span className="subtitle">Visit my blog and keep your feedback</span>
                  <h2 className="title">My Blog</h2>
                </div>
              </div>
            </div>
            <div className="row row--25 mt--30 mt_md--10 mt_sm--10">
              <BlogCard />
              <BlogCard />
              <BlogCard />
              <BlogCard />
              <BlogCard />
              <BlogCard />
            </div>
            <nav style={{ marginTop: "60px" }} aria-label="Page navigation example">
              <ul className="pagination justify-content-center">
                <li className="page-item disabled">
                  <a className="page-link rn-btn" href="#" tabIndex="-1">Previous</a>
                </li>
                <li className="page-item  ml-3"><a className="page-link  rn-btn" href="#">1</a></li>
                <li className="page-item  ml-3"><a className="page-link  rn-btn" href="#">2</a></li>
                <li className="page-item  ml-3"><a className="page-link  rn-btn" href="#">3</a></li>
                <li className="page-item ml-3">
                  <a className="page-link rn-btn" href="#">Next</a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </main>
    </>
  )
}

export default Blog