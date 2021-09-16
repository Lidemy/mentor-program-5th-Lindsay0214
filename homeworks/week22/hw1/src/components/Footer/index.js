import React from "react";
import { animateScroll as scroll } from "react-scroll";
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";
import {
  FooterContainer,
  FooterWrap,
  FooterLinksContainer,
  FooterLinksWrapper,
  FooterLinkItems,
  FooterLink,
  Logo,
  SocialMedia,
  SocialMediaWrap,
  SocialLogo,
  WebsiteRights,
  SocialIconLink,
} from "./FooterElements";
import logo from "../../images/小怪物@_工作區域 1 複本.png";

const Footer = () => {
  const toggleHome = () => {
    scroll.scrollToTop();
  };

  const sendMail = () => {
    const mailto: string =
      "mailto:lliny0214tw@icloud.com?subject=網站意見回饋&body=歡迎寫下對這個網站的評價與可改善處";
    window.location.href = mailto;
  };

  return (
    <FooterContainer>
      <FooterWrap>
        <FooterLinksContainer>
          <FooterLinksWrapper>
            <FooterLinkItems>
              <FooterLink to="/pay">歐付寶付款</FooterLink>
              <FooterLink to="/">Google Map</FooterLink>
              <FooterLink onClick={sendMail}>意見回饋</FooterLink>
            </FooterLinkItems>
            <Logo src={logo} />
            <FooterLinkItems>
              <FooterLink to="/about">關於我</FooterLink>
              <FooterLink to="/article" onClick={toggleHome}>
                文章版
              </FooterLink>
              <FooterLink to="/comments">留言版</FooterLink>
            </FooterLinkItems>
          </FooterLinksWrapper>
        </FooterLinksContainer>

        <SocialMedia>
          <SocialMediaWrap>
            <SocialLogo to="/" onClick={toggleHome}>
              Beverage
            </SocialLogo>
            <WebsiteRights>
              Beverage © {new Date().getFullYear()} All rights reserved.
            </WebsiteRights>
            <SocialLogo>
              <SocialIconLink
                href="https://www.facebook.com/"
                target="_blank"
                aria-label="Facebook"
              >
                <FaFacebook />
              </SocialIconLink>
              <SocialIconLink
                href="https://www.instagram.com/"
                target="_blank"
                aria-label="Instagram"
              >
                <FaInstagram />
              </SocialIconLink>
              <SocialIconLink
                href="https://www.youtube.com/"
                target="_blank"
                aria-label="Youtube"
              >
                <FaYoutube />
              </SocialIconLink>
            </SocialLogo>
          </SocialMediaWrap>
        </SocialMedia>
      </FooterWrap>
    </FooterContainer>
  );
};

export default Footer;
