import React from 'react'
import { Link } from 'react-router-dom'
import BlogCard from '../Common/BlogCard/BlogCard'
import Footer from "../Components/Footer/Footer"

const BlogDetail = () => {
  return (
    <>
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
                  <li><Link to="/blog">Blog</Link></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>


      <section class="blog_area single-post-area section_gap">
        <div class="container">
          <div class="posts-list">
            <div class="single-post">
              <div class="blog_details">
                <h2>Astronomy Binoculars A Great Alternative</h2>
                <div>
                  <img src="https://img.freepik.com/free-vector/abstract-website-banner-with-modern-shapes_1361-1738.jpg?w=2000" alt="news modal" className="img-fluid modal-feat-img"></img>

                </div>
                <span class="date">2 May, 2021</span>
                <p class="excert">
                  MCSE boot camps have its supporters and its detractors. Some people do not understand why you should have to spend money on boot camp when you can get the MCSE study materials yourself at a fraction.
                </p>
                <p>
                  Boot camps have its supporters and its detractors. Some people do not understand why you should have to spend money on boot camp when you can get the MCSE study materials yourself at a fraction of the camp price. However, who has the willpower to actually sit through a self-imposed MCSE training. who has the willpower to actually sit through a self-imposed
                </p>
                <p>
                  Boot camps have its supporters and its detractors. Some people do not understand why you should have to spend money on boot camp when you can get the MCSE study materials yourself at a fraction of the camp price. However, who has the willpower to actually sit through a self-imposed MCSE training. who has the willpower to actually sit through a self-imposed
                </p>
                {/* <div class="testimonial-activation-item-3 slick-arrow-style-one mb--60" data-aos="fade-up" data-aos-duration="500" data-aos-delay="300" data-aos-once="true">
                  <div className="rn-testimonial">
                    <div className="testimonial-inner">
                      <div className="testimonial-header">
                        <div className="thumbnail">
                          <img src="https://cdn4.buysellads.net/uu/1/127574/1668534146-SSTK1.jpg" alt="client-image" />
                        </div>
                        <h5 className="ts-header">
                          <span className="text-color-primary">@Tuhin</span> Engineer
                        </h5>
                      </div>
                      <div className="testimonial-body">
                        <p className="discription">@jack_danials thank you as well for your template
                          from
                          <span>@Alamin_Orko </span>! The team is using it too. It'll really
                          speed up the design and
                          development process 🏃.
                        </p>
                      </div>
                    </div>
                  </div>
                </div> */}
                <h3 className='mt-5'>More Blogs</h3>
                <div>
                  <div className="row row--25 justify-content-center mt--30 mt_md--10 mt_sm--10">
                    <BlogCard />
                    <BlogCard />
                  </div>
                  <nav style={{ marginTop: "60px" }} aria-label="Page navigation example">
                    <ul className="pagination justify-content-center">
                      <li className="page-item ml-3">
                        <Link className="page-link rn-btn" to="/blog"> <span><i className="feather-arrow-left"></i> Back</span></Link>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  )
}

export default BlogDetail