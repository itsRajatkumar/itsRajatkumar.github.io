import { useState, useRef, useEffect } from "react"
import { Link } from 'react-router-dom'
import React from 'react'

const Navbar = () => {
	const [open, setOpen] = useState(false)
	const [scrolled, setScrolled] = useState(false)
	
	useEffect(() => {
		window.onscroll = () => {
		  setScrolled(window.pageYOffset < 40 ? false : true);
		  return () => (window.onscroll = null);
		};
	  }, []);
	const toggleNavbar = () => {
		setOpen(!open)
	}
	const ref = useRef();

	useOutsideClick(ref, () => {
		setOpen(!open)
	});
	// const handleOutsideClick = (e)=>{
	// 	if(e.target.parentElement.id != 'inner_div'){
			
	// 	}
	// }
	return (
		<>


			{/* <!-- Start Header --> */}
			<header className={`rn-header haeder-default black-logo-version header--fixed header--sticky ${scrolled ? "sticky" : ""}`}>
				<div className="header-wrapper rn-popup-mobile-menu m--0 row align-items-center">
					{/* <!-- Start Header Left --> */}
					<div className="col-lg-2 col-6">
						<div className="header-left">
							<div className="logo">
								<a href="index.html">
									<img src="../../public/assets/images/logo/logo.png" alt="logo" />
								</a>
							</div>
						</div>
					</div>
					{/* <!-- End Header Left --> */}
					{/* <!-- Start Header Center --> */}
					<div className="col-lg-10 col-6">
						<div className="header-center">
							<nav id="sideNav" className="mainmenu-nav navbar-example2 d-none d-xl-block">
								{/* <!-- Start Mainmanu Nav --> */}
								<ul className="primary-menu nav nav-pills">
									<li className="nav-item"><a className="nav-link smoth-animation active" href="#home">Home</a></li>
									<li className="nav-item"><a className="nav-link smoth-animation" href="#features">Features</a></li>
									<li className="nav-item"><a className="nav-link smoth-animation" href="#portfolio">Portfolio</a></li>
									<li className="nav-item"><a className="nav-link smoth-animation" href="#resume">Resume</a></li>
									{/* <li className="nav-item"><a className="nav-link smoth-animation" href="#clients">Clients</a></li>
									<li className="nav-item"><a className="nav-link smoth-animation" href="#pricing">Pricing</a></li> */}
									<li className="nav-item"><Link className="nav-link" to={"/blog"}>Blog</Link></li>
									<li className="nav-item"><a className="nav-link smoth-animation" href="#contacts">Contact</a></li>
								</ul>
								{/* <!-- End Mainmanu Nav --> */}
							</nav>
							{/* <!-- Start Header Right  --> */}
							<div className="header-right">
								<a className="rn-btn" target="_blank" href="#"><span>Get CV</span></a>
								<div className="hamberger-menu d-block d-xl-none">
									<i id="menuBtn" onClick={()=>{setOpen(!open)}} className="feather-menu humberger-menu"></i>
								</div>
								<div onClick={()=>{setOpen(!open)}} className="close-menu d-block">
									<span className="closeTrigger">
										<i data-feather="x"></i>
									</span>
								</div>
							</div>
							{/* <!-- End Header Right  --> */}

						</div>
					</div>
					{/* <!-- End Header Center --> */}
				</div>
			</header>
			{/* <!-- End Header Area -->
			<!-- Start Popup Mobile Menu  --> */}
			<div  className={`popup-mobile-menu ${open ? "menu-open" :""}` } id="main_div">
				<div  className="inner" id="inner_div">
					<div className="menu-top">
						<div className="menu-header">
							<a className="logo" href="index.html">
								<img src="assets/images/logo/logos-circle.png" alt="Personal Portfolio" />
							</a>
							<div className="close-button">
								<button onClick={()=>{setOpen(!open)}} className="close-menu-activation close "><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="red" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-x"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg></button>
							</div>
						</div>
						<p className="discription">Inbio is a personal portfolio template. You can customize all.</p>
					</div>
					<div className="content">
						<ul className="primary-menu nav nav-pills">
							<li onClick={toggleNavbar} className="nav-item"><a className="nav-link smoth-animation active" href="#home">Home</a></li>
							<li onClick={toggleNavbar} className="nav-item"><a className="nav-link smoth-animation" href="#features">Features</a></li>
							<li onClick={toggleNavbar} className="nav-item"><a className="nav-link smoth-animation" href="#portfolio">Portfolio</a></li>
							<li onClick={toggleNavbar} className="nav-item"><a className="nav-link smoth-animation" href="#resume">Resume</a></li>
							{/* <li onClick={toggleNavbar} className="nav-item"><a className="nav-link smoth-animation" href="#clients">Clients</a></li>
							<li onClick={toggleNavbar} className="nav-item"><a className="nav-link smoth-animation" href="#pricing">Pricing</a></li> */}
							<li onClick={toggleNavbar}className="nav-item"><Link className="nav-link" to={"/blog"}>Blog</Link></li>
							<li onClick={toggleNavbar} className="nav-item"><a className="nav-link smoth-animation" href="#contacts">Contact</a></li>
						</ul>
						{/* <!-- social sharea area --> */}
						<div className="social-share-style-1 mt--40">
							<span className="title">find with me</span>
							<ul className="social-share d-flex liststyle">
								<li className="facebook"><a href="#"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" className="feather feather-facebook">
									<path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
								</svg></a>
								</li>
								<li className="instagram"><a href="#"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" className="feather feather-instagram">
									<rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
									<path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
									<line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
								</svg></a>
								</li>
								<li className="linkedin"><a href="#"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" className="feather feather-linkedin">
									<path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
									<rect x="2" y="9" width="4" height="12"></rect>
									<circle cx="4" cy="4" r="2"></circle>
								</svg></a>
								</li>
							</ul>
						</div>
						{/* {<!-- end -->} */}
					</div>
				</div>
			</div>
			{/* <!-- End Popup Mobile Menu  --> */}

		</>
	)
}

const useOutsideClick = (ref, callback) => {
	const handleClick = e => {
	  if (ref.current && !ref.current.contains(e.target)) {
		callback();
	  }
	};
  
	useEffect(() => {
	  document.addEventListener("click", handleClick);
  
	  return () => {
		document.removeEventListener("click", handleClick);
	  };
	});
  };

export default Navbar