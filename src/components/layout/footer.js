import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import styled from "styled-components";
import {
  FaInstagramSquare,
  FaFacebookSquare,
  FaWhatsappSquare,
  FaCopyright,
} from "react-icons/fa";

export default () => {
  return (
    <>
      <Footer>
        <Container>
          <FooterInfo>
            <Row>
              <Col md={5}>
                <div>
                  <div className="title">About Us</div>
                  <div className="infoText">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Nulla tempor lorem nec erat euismod, ut ullamcorper est
                      condimentum.
                    </p>
                  </div>
                </div>
              </Col>
              <Col md={3}>
                <div>
                  <div className="title">Services</div>
                  <div className="infoText">
                    <span>teste</span>
                    <br />
                    <span>teste</span>
                    <br />
                    <span>teste</span>
                    <br />
                  </div>
                </div>
              </Col>
              <Col md={4}>
                <div>
                  <div className="title">About Us</div>
                  <div className="infoText">
                    <ul>
                      <li>
                        <span>testando</span>
                      </li>
                      <li>
                        <span>testando</span>
                      </li>
                      <li>
                        <span>testando</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </Col>
            </Row>
          </FooterInfo>
          <FooterSocial>
            <FaInstagramSquare />
            <FaFacebookSquare />
            <FaWhatsappSquare />
          </FooterSocial>
          <FooterCopy>
            <FaCopyright />
            Todos os Direitos Reservados
          </FooterCopy>
        </Container>
      </Footer>
    </>
  );
};

const Footer = styled.div`
  background: #111;

  .infoText {
    color: #eee;
    padding: 5px;
  }
`;

const FooterInfo = styled.div`
  .title {
    font-size: 20p;
    font-weight: 600;
    padding: 5px 2px 2px 2px;
    border-bottom: thin solid brown;
    margin: 8px 7px;
    color: brown;
  }
`;
const FooterSocial = styled.div`
  width: 100%;
  color: #eee;
  border-bottom: 4px solid brown;
  padding: 5px;
  svg {
    margin: 2px;
    font-size: 20px;
    :hover {
      cursor: pointer;
      color: brown;
    }
  }
`;
const FooterCopy = styled.div`
  width: 100%;
  color: #eee;
  font-size: small;
  padding: 5px;
  text-align: center;
  margin-top: 3px;
`;
