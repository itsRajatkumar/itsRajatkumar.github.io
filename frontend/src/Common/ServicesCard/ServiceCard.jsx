import React from 'react'

const ServiceCard = () => {
    return (

        <>
            <div data-aos="fade-up" data-aos-duration="500" data-aos-delay="100" data-aos-once="true" className="col-lg-6 col-xl-4 col-md-6 col-sm-12 col-12 mt--50 mt_md--30 mt_sm--30">
                <div className="rn-service">
                    <div className="inner">
                        <div className="icon">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-menu"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
                        </div>
                        <div className="content">
                            <h4 className="title"><a href="#">Business Stratagy</a></h4>
                            <p className="description">I throw myself down among the tall grass by the stream as I
                                lie close to the earth.</p>
                            <a className="read-more-button" href="#"><i className="feather-arrow-right"></i></a>
                        </div>
                    </div>
                    <a className="over-link" href="#"></a>
                </div>
            </div>
        </>
    )
}

export default ServiceCard