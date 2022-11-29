import React from 'react'

const Contact = () => {
  return (
    <div>
                {/* <!-- Start Contact section --> */}
        <div className="rn-contact-area rn-section-gap section-separator" id="contacts">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="section-title text-center">
                            <span className="subtitle">Contact</span>
                            <h2 className="title">Contact With Me</h2>
                        </div>
                    </div>
                </div>
                <div className="row mt--50 mt_md--40 mt_sm--40 mt-contact-sm">
                    <div className="col-lg-5">
                        <div className="contact-about-area">
                            <div className="thumbnail">
                                <img src="assets/images/contact/contact1.png" alt="contact-img"/>
                            </div>
                            <div className="title-area">
                                <h4 className="title">Nevine Acotanza</h4>
                                <span>Chief Operating Officer</span>
                            </div>
                            <div className="description">
                                <p>I am available for freelance work. Connect with me via and call in to my account.
                                </p>
                                <span className="phone">Phone: <a href="tel:01941043264">+01234567890</a></span>
                                <span className="mail">Email: <a href="mailto:admin@example.com">admin@example.com</a></span>
                            </div>
                            <div className="social-area">
                                <div className="name">FIND WITH ME</div>
                                <div className="social-icone">
                                    <a href="#"><i className='feather-facebook' data-feather="facebook"></i></a>
                                    <a href="#"><i className='feather-linkedin' data-feather="linkedin"></i></a>
                                    <a href="#"><i className='feather-instagram' data-feather="instagram"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div data-aos-delay="600" className="col-lg-7 contact-input">
                        <div className="contact-form-wrapper">
                            <div className="introduce">
                                <form className="rnt-contact-form rwt-dynamic-form row" id="contact-form" method="POST" action="mail.php">

                                    <div className="col-lg-6">
                                        <div className="form-group">
                                            <label htmlFor="contact-name">Your Name</label>
                                            <input className="form-control form-control-lg" name="contact-name" id="contact-name" type="text"/>
                                        </div>
                                    </div>

                                    <div className="col-lg-6">
                                        <div className="form-group">
                                            <label htmlFor="contact-phone">Phone Number</label>
                                            <input className="form-control" name="contact-phone" id="contact-phone" type="text"/>
                                        </div>
                                    </div>

                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <label htmlFor="contact-email">Email</label>
                                            <input className="form-control form-control-sm" id="contact-email" name="contact-email" type="email"/>
                                        </div>
                                    </div>

                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <label htmlFor="subject">subject</label>
                                            <input className="form-control form-control-sm" id="subject" name="subject" type="text"/>
                                        </div>
                                    </div>

                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <label htmlFor="contact-message">Your Message</label>
                                            <textarea name="contact-message" id="contact-message" cols="30" rows="10"></textarea>
                                        </div>
                                    </div>

                                    <div className="col-lg-12">
                                        <button name="submit" type="submit" id="submit" className="rn-btn">
                                            <span>SEND MESSAGE</span>
                                            <i data-feather="arrow-right"></i>
                                        </button>
                                    </div>

                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* <!-- End Contuct section --> */}
    </div>
  )
}

export default Contact