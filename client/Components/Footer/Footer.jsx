import React from 'react'

const Footer = () => {
  return (
    <>
        <div id="footer" className="rn-footer-area footer-style-2 rn-section-gapTop section-separator">
            <div className="container pb--80 pb_sm--40 plr_sm--20">
                <div className="row">
                    <div className="col-xl-3 col-12 col-lg-3 col-md-6 col-sm-6 col-12">
                        <div className="logo-thumbnail">
                            <a href="#"><img src="assets/images/logo/logo.png" alt="logo-image"/></a>
                        </div>
                        <div className="social-icone-wrapper">
                            <ul className="social-share d-flex liststyle">
                                <li className="facebook"><a href="#"><i className="feather-facebook" data-feather="facebook"></i></a>
                                </li>
                                <li className="instagram"><a href="#"><i className="feather-instagram" data-feather="instagram"></i></a>
                                </li>
                                <li className="twitter"><a href="#"><i className="feather-twitter" data-feather="twitter"></i></a>
                                </li>
                            </ul>
                            <ul className="social-share d-flex liststyle">
                            <li className="linkedin"><a href="#"><i className="feather-linkedin" data-feather="linkedin"></i></a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-sl-3 col-12 mt_sm--20 col-lg-3 col-md-6 col-sm-6 col-12">
                        <div className="menu-wrapper">
                            <div className="menu-title">
                                <h6>product</h6>
                            </div>
                            <ul className="menu-footer">
                                <li><a href="#">Database</a></li>
                                <li><a href="#">Authentication</a></li>
                                <li><a href="#">Storage</a></li>
                                <li><a href="#">Support</a></li>
                                <li><a href="#">Pricing</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-sl-3 col-12 mt_sm--20 col-lg-3 col-md-6 col-sm-6 col-12">
                        <div className="menu-wrapper">
                            <div className="menu-title">
                                <h6>Resources</h6>
                            </div>
                            <ul className="menu-footer">
                                <li><a href="#">Authentication</a></li>
                                <li><a href="#">System Status</a></li>
                                <li><a href="#">Terms of service</a></li>
                                <li><a href="#">Pricing</a></li>
                                <li><a href="#">over right</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-sl-3 col-12 mt_sm--20 col-lg-3 col-md-6 col-sm-6 col-12">
                        <div className="menu-wrapper">
                            <div className="menu-title">
                                <h6>Developers</h6>
                            </div>
                            <ul className="menu-footer">
                                <li><a href="#">Documentation</a></li>
                                <li><a href="#">Authentication</a></li>
                                <li><a href="#">API Reference</a></li>
                                <li><a href="#">Support</a></li>
                                <li><a href="#">Open Source</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="copyright text-center ptb--40 section-separator">
                <p className="description"><a target="_blank" href="https://rajatkumar.tech">Rajatkumar.tech</a></p>
            </div>
        </div>
    </>
  )
}

export default Footer