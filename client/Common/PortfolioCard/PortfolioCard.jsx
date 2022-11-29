import React from 'react'

const PortfolioCard = () => {
    return (
        <div data-aos="fade-up" data-aos-delay="500" data-aos-once="true" className="col-lg-6 col-xl-4 col-md-6 col-12 mt--50 mt_md--30 mt_sm--30">
            <div className="rn-portfolio" data-toggle="modal" data-target="#exampleModalCenter">
                <div className="inner">
                    <div className="thumbnail">
                        <a href="">
                            <img src="https://rainbowit.net/html/inbio/assets/images/portfolio/portfolio-01.jpg" alt="Personal Portfolio Images" />
                        </a>
                    </div>
                    <div className="content">
                        <div className="category-info">
                            <div className="category-list">
                                <a href="">Web Design</a>
                            </div>
                            <div className="meta">
                                <span><a href=""><i className="feather-heart"></i></a>
                                    690</span>
                            </div>
                        </div>
                        <h4 className="title"><a href="">App for tecnology & services<i
                            className="feather-arrow-up-right"></i></a></h4>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PortfolioCard