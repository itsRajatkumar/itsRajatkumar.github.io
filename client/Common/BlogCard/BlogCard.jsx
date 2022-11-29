import React from 'react'
import { Link } from "react-router-dom"

const BlogCard = () => {
    return (
        <>
            <div data-aos="fade-up" data-aos-duration="500" data-aos-delay="800" data-aos-once="true" className="col-lg-6 col-xl-4 mt--30 col-md-6 col-sm-12 col-12 mt--30">
                <div className="rn-blog" data-toggle="modal" data-target="#exampleModalCenters">
                    <div className="inner">
                        <div className="thumbnail">
                            <a href="#">
                                <img src="https://random.imagecdn.app/800/600" alt="Personal Portfolio Images" />
                            </a>
                        </div>
                        <div className="content">
                            <div className="category-info">
                                <div className="category-list">
                                    <a href="#">Application</a>
                                </div>
                                <div className="meta">
                                    <span><i className="feather-clock"></i> 5 min read</span>
                                </div>
                            </div>
                            <h4 className="title">
                                <Link href="/blog/dsfsdkfjs">Mobile app landing design & app
                                maintain<i className="feather-arrow-up-right"></i></Link>
                                </h4>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default BlogCard