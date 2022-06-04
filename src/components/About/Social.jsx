import React from 'react'
import { FaInstagram } from "react-icons/fa";
import {
    AiFillGithub,
    AiOutlineTwitter,
  } from "react-icons/ai";
  import { FaLinkedinIn } from "react-icons/fa";
import { Row } from "react-bootstrap";

const Social = () => {
    return (
        <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>Connect With Me</h1>
            <ul className="footer-icons">
                <li className="social-icons">
                    <a className="social-icons-si"
                        href="https://github.com/itsrajatkumar"
                        style={{ color: "white" }}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <AiFillGithub />
                    </a>
                </li>
               
                <li className="social-icons">
                    <a className="social-icons-si"
                        href="https://twitter.com/iam_rkprajapati"
                        style={{ color: "white" }}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <AiOutlineTwitter />
                    </a>
                </li>
               
                <li className="social-icons">
                    <a className="social-icons-si"
                        href="https://www.linkedin.com/in/thisisrajatkumar/"
                        style={{ color: "white" }}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <FaLinkedinIn />
                    </a>
                </li>
               
                <li className="social-icons">
                    <a className="social-icons-si"
                        href="https://www.instagram.com/thisisrajatkumar"
                        style={{ color: "white" }}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <FaInstagram />
                    </a>
                </li>
               
            </ul>
        </Row>

    )
}

export default Social