import React ,{useState}from 'react'

const Resume = () => {
    const [selected, setSelected] = useState(1)
  return (
    <>
            {/* <!-- Start Resume Area --> */}
        <div className="rn-resume-area rn-section-gap section-separator" id="resume">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="section-title text-center">
                            <span className="subtitle">7+ Years of Experience</span>
                            <h2 className="title">My Resume</h2>
                        </div>
                    </div>
                </div>
                <div className="row mt--45">
                    <div className="col-lg-12">
                        <ul className="rn-nav-list nav nav-tabs" id="myTabs" role="tablist">
                            <li className="nav-item" onClick={()=>{setSelected(1)}}>
                                <a className={`nav-link ${selected === 1 ? "active": ""}`} id="education-tab" data-toggle="tab"  role="tab" aria-controls="education" aria-selected={`${selected === 1 ? "true": "false"}`}>education</a>
                            </li>
                            <li className="nav-item" onClick={()=>{setSelected(2)}}>
                                <a className={`nav-link ${selected === 2 ? "active": ""}`} id="professional-tab" data-toggle="tab"  role="tab" aria-controls="professional" aria-selected={`${selected === 2 ? "true": "false"}`}>professional
                                    Skills</a>
                            </li>
                            <li className="nav-item" onClick={()=>{setSelected(3)}}>
                                <a className={`nav-link ${selected === 3 ? "active": ""}`} id="experience-tab" data-toggle="tab"  role="tab" aria-controls="experience" aria-selected={`${selected === 3 ? "true": "false"}`}>experience</a>
                            </li>
                            <li className="nav-item" onClick={()=>{setSelected(4)}}>
                                <a className={`nav-link ${selected === 4 ? "active": ""}`} id="interview-tab" data-toggle="tab"  role="tab" aria-controls="interview" aria-selected={`${selected === 4 ? "true": "false"}`}>interview</a>
                            </li>
                        </ul>
                        {/* <!-- Start Tab Content Wrapper  --> */}
                        <div className="rn-nav-content tab-content" id="myTabContents">
                            {/* <!-- Start Single Tab  --> */}
                            <div className={`tab-pane ${ selected === 1 ? "show active" : ""} fade single-tab-area`} id="education" role="tabpanel" aria-labelledby="education-tab">
                                <div className="personal-experience-inner mt--40">
                                    <div className="row">
                                        {/* <!-- Start Skill List Area  --> */}
                                        <div className="col-lg-6 col-md-12 col-12">
                                            <div className="content">
                                                <span className="subtitle">2007 - 2010</span>
                                                <h4 className="maintitle">Education Quality</h4>
                                                <div className="experience-list">

                                                    {/* <!-- Start Single List  --> */}
                                                    <div className="resume-single-list">
                                                        <div className="inner">
                                                            <div className="heading">
                                                                <div className="title">
                                                                    <h4>Personal Portfolio April Fools</h4>
                                                                    <span>University of DVI (1997 - 2001)</span>
                                                                </div>
                                                                <div className="date-of-time">
                                                                    <span>4.30/5</span>
                                                                </div>
                                                            </div>
                                                            <p className="description">The education should be very
                                                                interactual. Ut tincidunt est ac dolor aliquam sodales.
                                                                Phasellus sed mauris hendrerit, laoreet sem in, lobortis
                                                                mauris hendrerit ante.</p>
                                                        </div>
                                                    </div>
                                                    {/* <!-- End Single List  -->

                                                    <!-- Start Single List  --> */}
                                                    <div className="resume-single-list">
                                                        <div className="inner">
                                                            <div className="heading">
                                                                <div className="title">
                                                                    <h4> Examples Of Personal Portfolio</h4>
                                                                    <span>College of Studies (2000 - 2002)</span>
                                                                </div>
                                                                <div className="date-of-time">
                                                                    <span>4.50/5</span>
                                                                </div>
                                                            </div>
                                                            <p className="description">Maecenas finibus nec sem ut
                                                                imperdiet. Ut tincidunt est ac dolor aliquam sodales.
                                                                Phasellus sed mauris hendrerit, laoreet sem in, lobortis
                                                                mauris hendrerit ante.</p>
                                                        </div>
                                                    </div>
                                                    {/* <!-- End Single List  -->

                                                    <!-- Start Single List  --> */}
                                                    <div className="resume-single-list">
                                                        <div className="inner">
                                                            <div className="heading">
                                                                <div className="title">
                                                                    <h4>Tips For Personal Portfolio</h4>
                                                                    <span>University of Studies (1997 - 2001)</span>
                                                                </div>
                                                                <div className="date-of-time">
                                                                    <span>4.80/5</span>
                                                                </div>
                                                            </div>
                                                            <p className="description"> If you are going to use a passage.
                                                                Ut tincidunt est ac dolor aliquam sodales.
                                                                Phasellus sed mauris hendrerit, laoreet sem in, lobortis
                                                                mauris hendrerit ante.</p>
                                                        </div>
                                                    </div>
                                                    {/* <!-- End Single List  --> */}

                                                </div>
                                            </div>
                                        </div>
                                        {/* <!-- End Skill List Area  -->

                                        <!-- Start Skill List Area 2nd  --> */}
                                        <div className="col-lg-6 col-md-12 col-12 mt_md--60 mt_sm--60">
                                            <div className="content">
                                                <span className="subtitle">2007 - 2010</span>
                                                <h4 className="maintitle">Job Experience</h4>
                                                <div className="experience-list">

                                                    {/* <!-- Start Single List  --> */}
                                                    <div className="resume-single-list">
                                                        <div className="inner">
                                                            <div className="heading">
                                                                <div className="title">
                                                                    <h4>Diploma in Web Development</h4>
                                                                    <span>BSE In CSE (2004 - 2008)</span>
                                                                </div>
                                                                <div className="date-of-time">
                                                                    <span>4.70/5</span>
                                                                </div>
                                                            </div>
                                                            <p className="description">Contrary to popular belief. Ut
                                                                tincidunt est ac dolor aliquam sodales.
                                                                Phasellus sed mauris hendrerit, laoreet sem in, lobortis
                                                                mauris hendrerit ante.</p>
                                                        </div>
                                                    </div>
                                                    {/* <!-- End Single List  -->

                                                    <!-- Start Single List  --> */}
                                                    <div className="resume-single-list">
                                                        <div className="inner">
                                                            <div className="heading">
                                                                <div className="title">
                                                                    <h4>The Personal Portfolio Mystery</h4>
                                                                    <span>Job at Rainbow-Themes (2008 - 2016)</span>
                                                                </div>
                                                                <div className="date-of-time">
                                                                    <span>4.95/5</span>
                                                                </div>
                                                            </div>
                                                            <p className="description">Generate Lorem Ipsum which looks. Ut
                                                                tincidunt est ac dolor aliquam sodales.
                                                                Phasellus sed mauris hendrerit, laoreet sem in, lobortis
                                                                mauris hendrerit ante.</p>
                                                        </div>
                                                    </div>
                                                    {/* <!-- End Single List  -->

                                                    <!-- Start Single List  --> */}
                                                    <div className="resume-single-list">
                                                        <div className="inner">
                                                            <div className="heading">
                                                                <div className="title">
                                                                    <h4>Diploma in Computer Science</h4>
                                                                    <span>Works at Plugin Development (2016 -
                                                                2020)</span>
                                                                </div>
                                                                <div className="date-of-time">
                                                                    <span>5.00/5</span>
                                                                </div>
                                                            </div>
                                                            <p className="description">Maecenas finibus nec sem ut
                                                                imperdiet. Ut tincidunt est ac dolor aliquam sodales.
                                                                Phasellus sed mauris hendrerit, laoreet sem in, lobortis
                                                                mauris hendrerit ante.</p>
                                                        </div>
                                                    </div>
                                                    {/* <!-- End Single List  --> */}

                                                </div>
                                            </div>
                                        </div>
                                        {/* <!-- End Skill List Area  --> */}
                                    </div>
                                </div>
                            </div>
                            {/* <!-- End Single Tab  --> */}

                            {/* <!-- Start Single Tab  --> */}
                            <div className={`tab-pane ${ selected === 2 ? "show active" : ""} fade `} id="professional" role="tabpanel" aria-labelledby="professional-tab">
                                <div className="personal-experience-inner mt--40">
                                    <div className="row row--40">

                                        {/* <!-- Start Single Progressbar  --> */}
                                        <div className="col-lg-6 col-md-6 col-12">
                                            <div className="progress-wrapper">
                                                <div className="content">
                                                    <span className="subtitle">Features</span>
                                                    <h4 className="maintitle">Design Skill</h4>
                                                    {/* <!-- Start Single Progress Charts --> */}
                                                    <div className="progress-charts">
                                                        <h6 className="heading heading-h6">PHOTOSHOT</h6>
                                                        <div className="progress">
                                                            <div className="progress-bar wow fadeInLeft" data-wow-duration="0.5s" data-wow-delay=".3s" role="progressbar" style={{width: "100%"}} aria-valuenow="85" aria-valuemin="0" aria-valuemax="100"><span
                                                            className="percent-label">100%</span></div>
                                                        </div>
                                                    </div>
                                                    {/* <!-- End Single Progress Charts -->

                                                    <!-- Start Single Progress Charts --> */}
                                                    <div className="progress-charts">
                                                        <h6 className="heading heading-h6">FIGMA</h6>
                                                        <div className="progress">
                                                            <div className="progress-bar wow fadeInLeft" data-wow-duration="0.6s" data-wow-delay=".4s" role="progressbar" style={{width: "95%"}} aria-valuenow="85" aria-valuemin="0" aria-valuemax="100"><span
                                                            className="percent-label">95%</span></div>
                                                        </div>
                                                    </div>
                                                    {/* <!-- End Single Progress Charts -->

                                                    <!-- Start Single Progress Charts --> */}
                                                    <div className="progress-charts">
                                                        <h6 className="heading heading-h6">ADOBE XD</h6>
                                                        <div className="progress">
                                                            <div className="progress-bar wow fadeInLeft" data-wow-duration="0.7s" data-wow-delay=".5s" role="progressbar" style={{width: "60%"}} aria-valuenow="85" aria-valuemin="0" aria-valuemax="100"><span
                                                            className="percent-label">60%</span></div>
                                                        </div>
                                                    </div>
                                                    {/* <!-- End Single Progress Charts -->

                                                    <!-- Start Single Progress Charts --> */}
                                                    <div className="progress-charts">
                                                        <h6 className="heading heading-h6">ADOBE ILLUSTRATOR</h6>
                                                        <div className="progress">
                                                            <div className="progress-bar wow fadeInLeft" data-wow-duration="0.8s" data-wow-delay=".6s" role="progressbar" sstyle={{width: "70%"}} aria-valuenow="85" aria-valuemin="0" aria-valuemax="100"><span
                                                            className="percent-label">70%</span></div>
                                                        </div>
                                                    </div>
                                                    {/* <!-- End Single Progress Charts -->

                                                    <!-- Start Single Progress Charts --> */}
                                                    <div className="progress-charts">
                                                        <h6 className="heading heading-h6">DESIGN</h6>
                                                        <div className="progress">
                                                            <div className="progress-bar wow fadeInLeft" data-wow-duration="0.9s" data-wow-delay=".7s" role="progressbar" style={{width: "90%"}} aria-valuenow="85" aria-valuemin="0" aria-valuemax="100"><span
                                                            className="percent-label">90%</span></div>
                                                        </div>
                                                    </div>
                                                    {/* <!-- End Single Progress Charts --> */}

                                                </div>
                                            </div>
                                        </div>
                                        {/* <!-- End Single Progressbar  -->

                                        <!-- Start Single Progressbar  --> */}
                                        <div className="col-lg-6 col-md-6 col-12 mt_sm--60">
                                            <div className="progress-wrapper">
                                                <div className="content">
                                                    <span className="subtitle">Features</span>
                                                    <h4 className="maintitle">Development Skill</h4>
                                                    {/* <!-- Start Single Progress Charts --> */}
                                                    <div className="progress-charts">
                                                        <h6 className="heading heading-h6">HTML</h6>
                                                        <div className="progress">
                                                            <div className="progress-bar wow fadeInLeft" data-wow-duration="0.5s" data-wow-delay=".3s" role="progressbar" style={{width: "85%"}} aria-valuenow="85" aria-valuemin="0" aria-valuemax="100"><span
                                                            className="percent-label">85%</span></div>
                                                        </div>
                                                    </div>
                                                    {/* <!-- End Single Progress Charts -->

                                                    <!-- Start Single Progress Charts --> */}
                                                    <div className="progress-charts">
                                                        <h6 className="heading heading-h6">CSS</h6>
                                                        <div className="progress">
                                                            <div className="progress-bar wow fadeInLeft" data-wow-duration="0.6s" data-wow-delay=".4s" role="progressbar" style={{width: "80%"}} aria-valuenow="85" aria-valuemin="0" aria-valuemax="100"><span
                                                            className="percent-label">80%</span></div>
                                                        </div>
                                                    </div>
                                                    {/* <!-- End Single Progress Charts -->

                                                    <!-- Start Single Progress Charts --> */}
                                                    <div className="progress-charts">
                                                        <h6 className="heading heading-h6">JAVASCRIPT</h6>
                                                        <div className="progress">
                                                            <div className="progress-bar wow fadeInLeft" data-wow-duration="0.7s" data-wow-delay=".5s" role="progressbar" style={{width: "90%"}} aria-valuenow="85" aria-valuemin="0" aria-valuemax="100"><span
                                                            className="percent-label">90%</span></div>
                                                        </div>
                                                    </div>
                                                    {/* <!-- End Single Progress Charts -->

                                                    <!-- Start Single Progress Charts --> */}
                                                    <div className="progress-charts">
                                                        <h6 className="heading heading-h6">SOFTWARE</h6>
                                                        <div className="progress">
                                                            <div className="progress-bar wow fadeInLeft" data-wow-duration="0.8s" data-wow-delay=".6s" role="progressbar" style={{width: "75%"}} aria-valuenow="85" aria-valuemin="0" aria-valuemax="100"><span
                                                            className="percent-label">75%</span></div>
                                                        </div>
                                                    </div>
                                                    {/* <!-- End Single Progress Charts --> */}

                                                    {/* <!-- Start Single Progress Charts --> */}
                                                    <div className="progress-charts">
                                                        <h6 className="heading heading-h6">PLUGIN</h6>
                                                        <div className="progress">
                                                            <div className="progress-bar wow fadeInLeft" data-wow-duration="0.9s" data-wow-delay=".7s" role="progressbar" style={{width: "70%"}} aria-valuenow="85" aria-valuemin="0" aria-valuemax="100"><span
                                                            className="percent-label">70%</span></div>
                                                        </div>
                                                    </div>
                                                    {/* <!-- End Single Progress Charts --> */}

                                                </div>
                                            </div>
                                        </div>
                                        {/* <!-- End Single Progressbar  --> */}

                                    </div>
                                </div>
                            </div>
                            {/* <!-- End Single Tab  --> */}

                            {/* <!-- Start Single Tab  --> */}
                            <div className={`tab-pane ${ selected === 3 ? "show active" : ""} fade`} id="experience" role="tabpanel" aria-labelledby="experience-tab">
                                <div className="personal-experience-inner mt--40">
                                    <div className="row">
                                        {/* <!-- Start Skill List Area  --> */}
                                        <div className="col-lg-6 col-md-12 col-12">
                                            <div className="content">
                                                <span className="subtitle">2007 - 2010</span>
                                                <h4 className="maintitle">Education Quality</h4>
                                                <div className="experience-list">

                                                    {/* <!-- Start Single List  --> */}
                                                    <div className="resume-single-list">
                                                        <div className="inner">
                                                            <div className="heading">
                                                                <div className="title">
                                                                    <h4>Personal Portfolio April Fools</h4>
                                                                    <span>University of DVI (1997 - 2001)</span>
                                                                </div>
                                                                <div className="date-of-time">
                                                                    <span>4.30/5</span>
                                                                </div>
                                                            </div>
                                                            <p className="description">The education should be very
                                                                interactual. Ut tincidunt est ac dolor aliquam sodales.
                                                                Phasellus sed mauris hendrerit, laoreet sem in, lobortis
                                                                mauris hendrerit ante.</p>
                                                        </div>
                                                    </div>
                                                    {/* <!-- End Single List  --> */}

                                                    {/* <!-- Start Single List  --> */}
                                                    <div className="resume-single-list">
                                                        <div className="inner">
                                                            <div className="heading">
                                                                <div className="title">
                                                                    <h4> Examples Of Personal Portfolio</h4>
                                                                    <span>College of Studies (2000 - 2002)</span>
                                                                </div>
                                                                <div className="date-of-time">
                                                                    <span>4.50/5</span>
                                                                </div>
                                                            </div>
                                                            <p className="description">Maecenas finibus nec sem ut
                                                                imperdiet. Ut tincidunt est ac dolor aliquam sodales.
                                                                Phasellus sed mauris hendrerit, laoreet sem in, lobortis
                                                                mauris hendrerit ante.</p>
                                                        </div>
                                                    </div>
                                                    {/* <!-- End Single List  --> */}

                                                    {/* <!-- Start Single List  --> */}
                                                    <div className="resume-single-list">
                                                        <div className="inner">
                                                            <div className="heading">
                                                                <div className="title">
                                                                    <h4>Tips For Personal Portfolio</h4>
                                                                    <span>University of Studies (1997 - 2001)</span>
                                                                </div>
                                                                <div className="date-of-time">
                                                                    <span>4.80/5</span>
                                                                </div>
                                                            </div>
                                                            <p className="description"> If you are going to use a passage.
                                                                Ut tincidunt est ac dolor aliquam sodales.
                                                                Phasellus sed mauris hendrerit, laoreet sem in, lobortis
                                                                mauris hendrerit ante.</p>
                                                        </div>
                                                    </div>
                                                    {/* <!-- End Single List  --> */}

                                                </div>
                                            </div>
                                        </div>
                                        {/* <!-- End Skill List Area  --> */}

                                        {/* <!-- Start Skill List Area 2nd  --> */}
                                        <div className="col-lg-6 col-md-12 col-12 mt_md--60 mt_sm--60">
                                            <div className="content">
                                                <span className="subtitle">2007 - 2010</span>
                                                <h4 className="maintitle">Job Experience</h4>
                                                <div className="experience-list">

                                                    {/* <!-- Start Single List  --> */}
                                                    <div className="resume-single-list">
                                                        <div className="inner">
                                                            <div className="heading">
                                                                <div className="title">
                                                                    <h4>Diploma in Web Development</h4>
                                                                    <span>BSE In CSE (2004 - 2008)</span>
                                                                </div>
                                                                <div className="date-of-time">
                                                                    <span>4.70/5</span>
                                                                </div>
                                                            </div>
                                                            <p className="description">Contrary to popular belief. Ut
                                                                tincidunt est ac dolor aliquam sodales.
                                                                Phasellus sed mauris hendrerit, laoreet sem in, lobortis
                                                                mauris hendrerit ante.</p>
                                                        </div>
                                                    </div>
                                                    {/* <!-- End Single List  --> */}

                                                    {/* <!-- Start Single List  --> */}
                                                    <div className="resume-single-list">
                                                        <div className="inner">
                                                            <div className="heading">
                                                                <div className="title">
                                                                    <h4>The Personal Portfolio Mystery</h4>
                                                                    <span>Job at Rainbow-Themes (2008 - 2016)</span>
                                                                </div>
                                                                <div className="date-of-time">
                                                                    <span>4.95/5</span>
                                                                </div>
                                                            </div>
                                                            <p className="description">Generate Lorem Ipsum which looks. Ut
                                                                tincidunt est ac dolor aliquam sodales.
                                                                Phasellus sed mauris hendrerit, laoreet sem in, lobortis
                                                                mauris hendrerit ante.</p>
                                                        </div>
                                                    </div>
                                                    {/* <!-- End Single List  --> */}

                                                    {/* <!-- Start Single List  --> */}
                                                    <div className="resume-single-list">
                                                        <div className="inner">
                                                            <div className="heading">
                                                                <div className="title">
                                                                    <h4>Diploma in Computer Science</h4>
                                                                    <span>Works at Plugin Development (2016 -
                                                                2020)</span>
                                                                </div>
                                                                <div className="date-of-time">
                                                                    <span>5.00/5</span>
                                                                </div>
                                                            </div>
                                                            <p className="description">Maecenas finibus nec sem ut
                                                                imperdiet. Ut tincidunt est ac dolor aliquam sodales.
                                                                Phasellus sed mauris hendrerit, laoreet sem in, lobortis
                                                                mauris hendrerit ante.</p>
                                                        </div>
                                                    </div>
                                                    {/* <!-- End Single List  --> */}

                                                </div>
                                            </div>
                                        </div>
                                        {/* <!-- End Skill List Area  --> */}
                                    </div>
                                </div>
                            </div>
                            {/* <!-- End Single Tab  --> */}

                            {/* <!-- Start Single Tab  --> */}
                            <div className={`tab-pane ${ selected === 4 ? "show active" : ""} fade`} id="interview" role="tabpanel" aria-labelledby="interview-tab">
                                <div className="personal-experience-inner mt--40">
                                    <div className="row">
                                        {/* <!-- Start Skill List Area  --> */}
                                        <div className="col-lg-6 col-md-12 col-12">
                                            <div className="content">
                                                <span className="subtitle">2007 - 2010</span>
                                                <h4 className="maintitle">Company Experience</h4>
                                                <div className="experience-list">

                                                    {/* <!-- Start Single List  --> */}
                                                    <div data-aos="fade-up" data-aos-duration="500" data-aos-delay="300" data-aos-once="true" className="resume-single-list">
                                                        <div className="inner">
                                                            <div className="heading">
                                                                <div className="title">
                                                                    <h4>Personal Portfolio April Fools</h4>
                                                                    <span>University of DVI (1997 - 2001)</span>
                                                                </div>
                                                                <div className="date-of-time">
                                                                    <span>4.30/5</span>
                                                                </div>
                                                            </div>
                                                            <p className="description">The education should be very
                                                                interactual. Ut tincidunt est ac dolor aliquam sodales.
                                                                Phasellus sed mauris hendrerit, laoreet sem in, lobortis
                                                                mauris hendrerit ante.</p>
                                                        </div>
                                                    </div>
                                                    {/* <!-- End Single List  --> */}

                                                    {/* <!-- Start Single List  --> */}
                                                    <div data-aos="fade-up" data-aos-duration="500" data-aos-delay="500" data-aos-once="true" className="resume-single-list">
                                                        <div className="inner">
                                                            <div className="heading">
                                                                <div className="title">
                                                                    <h4> Examples Of Personal Portfolio</h4>
                                                                    <span>College of Studies (2000 - 2002)</span>
                                                                </div>
                                                                <div className="date-of-time">
                                                                    <span>4.50/5</span>
                                                                </div>
                                                            </div>
                                                            <p className="description">Maecenas finibus nec sem ut
                                                                imperdiet. Ut tincidunt est ac dolor aliquam sodales.
                                                                Phasellus sed mauris hendrerit, laoreet sem in, lobortis
                                                                mauris hendrerit ante.</p>
                                                        </div>
                                                    </div>
                                                    {/* <!-- End Single List  --> */}

                                                    {/* <!-- Start Single List  --> */}
                                                    <div data-aos="fade-up" data-aos-duration="500" data-aos-delay="700" data-aos-once="true" className="resume-single-list">
                                                        <div className="inner">
                                                            <div className="heading">
                                                                <div className="title">
                                                                    <h4>Tips For Personal Portfolio</h4>
                                                                    <span>University of Studies (1997 - 2001)</span>
                                                                </div>
                                                                <div className="date-of-time">
                                                                    <span>4.80/5</span>
                                                                </div>
                                                            </div>
                                                            <p className="description"> If you are going to use a passage.
                                                                Ut tincidunt est ac dolor aliquam sodales.
                                                                Phasellus sed mauris hendrerit, laoreet sem in, lobortis
                                                                mauris hendrerit ante.</p>
                                                        </div>
                                                    </div>
                                                    {/* <!-- End Single List  --> */}

                                                </div>
                                            </div>
                                        </div>
                                        {/* <!-- End Skill List Area  -->

                                        <!-- Start Skill List Area 2nd  --> */}
                                        <div className="col-lg-6 col-md-12 col-12 mt_md--60 mt_sm--60">
                                            <div className="content">
                                                <span className="subtitle">2007 - 2010</span>
                                                <h4 className="maintitle">Job Experience</h4>
                                                <div className="experience-list">

                                                    {/* <!-- Start Single List  --> */}
                                                    <div data-aos="fade-up" data-aos-duration="500" data-aos-delay="500" data-aos-once="true" className="resume-single-list">
                                                        <div className="inner">
                                                            <div className="heading">
                                                                <div className="title">
                                                                    <h4>Diploma in Web Development</h4>
                                                                    <span>BSE In CSE (2004 - 2008)</span>
                                                                </div>
                                                                <div className="date-of-time">
                                                                    <span>4.70/5</span>
                                                                </div>
                                                            </div>
                                                            <p className="description">Contrary to popular belief. Ut
                                                                tincidunt est ac dolor aliquam sodales.
                                                                Phasellus sed mauris hendrerit, laoreet sem in, lobortis
                                                                mauris hendrerit ante.</p>
                                                        </div>
                                                    </div>
                                                    {/* <!-- End Single List  -->

                                                    <!-- Start Single List  --> */}
                                                    <div data-aos="fade-up" data-aos-duration="500" data-aos-delay="700" data-aos-once="true" className="resume-single-list">
                                                        <div className="inner">
                                                            <div className="heading">
                                                                <div className="title">
                                                                    <h4>The Personal Portfolio Mystery</h4>
                                                                    <span>Job at Rainbow-Themes (2008 - 2016)</span>
                                                                </div>
                                                                <div className="date-of-time">
                                                                    <span>4.95/5</span>
                                                                </div>
                                                            </div>
                                                            <p className="description">Generate Lorem Ipsum which looks. Ut
                                                                tincidunt est ac dolor aliquam sodales.
                                                                Phasellus sed mauris hendrerit, laoreet sem in, lobortis
                                                                mauris hendrerit ante.</p>
                                                        </div>
                                                    </div>
                                                    {/* <!-- End Single List  -->

                                                    <!-- Start Single List  --> */}
                                                    <div data-aos="fade-up" data-aos-duration="500" data-aos-delay="900" data-aos-once="true" className="resume-single-list">
                                                        <div className="inner">
                                                            <div className="heading">
                                                                <div className="title">
                                                                    <h4>Diploma in Computer Science</h4>
                                                                    <span>Works at Plugin Development (2016 -
                                                                2020)</span>
                                                                </div>
                                                                <div className="date-of-time">
                                                                    <span>5.00/5</span>
                                                                </div>
                                                            </div>
                                                            <p className="description">Maecenas finibus nec sem ut
                                                                imperdiet. Ut tincidunt est ac dolor aliquam sodales.
                                                                Phasellus sed mauris hendrerit, laoreet sem in, lobortis
                                                                mauris hendrerit ante.</p>
                                                        </div>
                                                    </div>
                                                    {/* <!-- End Single List  --> */}

                                                </div>
                                            </div>
                                        </div>
                                        {/* <!-- End Skill List Area  --> */}
                                    </div>
                                </div>
                            </div>
                            {/* <!-- End Single Tab  --> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* <!-- End Resume Area --> */}
    </>
  )
}

export default Resume