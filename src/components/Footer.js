import { Container, Row, Col } from "react-bootstrap";
import { MailchimpForm } from "./MailchimpForm";
import logo from "../assets/img/logo.svg";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";

import linkedin from '../assets/img/nav-icon1.svg';
import github from "../assets/img/github.png";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <MailchimpForm />
          <Col size={12} sm={6} href="/">
          <span><h1 className="Utkarsh">U⬆karsh</h1></span>
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
          <div className="social-icon">
                <a href="https://www.linkedin.com/in/urs-utkarsh/" target="_blank"><img src={linkedin} alt="" /></a>
                <a href="https://github.com/utkarshg9981" target="_blank"><img src={github} alt="" /></a>
                <a href="https://www.instagram.com/urs_utkarsh__?igsh=NmZkdjB3bmJvbmw0" target="_blank"><img src={navIcon3} alt="" /></a>
              </div>
            <p>Copyright 2024. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
