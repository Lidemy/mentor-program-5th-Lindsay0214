import React, { useState, useEffect, useContext } from "react";
import { FaBars } from "react-icons/fa";
import {
  Nav,
  NavbarContainer,
  NavLogo,
  MobileIcon,
  NavBtn,
  NavBtnLink,
  AfterLogin,
  NavMenu,
  NavItem,
  NavLinks,
} from "./SubNavbarElements.js";
import { IconContext } from "react-icons/lib";
import { animateScroll as scroll } from "react-scroll";
import { setAuthToken } from "../../utils.js";
import { AuthContext } from "../../contexts.js";
import { useHistory } from "react-router";

const SubNavbar = ({ toggle }) => {
  const [scrollNav, setScrollNav] = useState(false);
  const history = useHistory();
  const { user, setUser } = useContext(AuthContext);

  const handleLogout = () => {
    setAuthToken("");
    setUser(null);
    history.push("/");
  };

  const changeNav = () => {
    if (window.scrollY >= 80) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeNav);
  }, []);

  const toggleHome = () => {
    scroll.scrollToTop();
  };

  return (
    <>
      <IconContext.Provider value={{ color: "#fff" }}>
        <Nav scrollNav={scrollNav}>
          <NavbarContainer>
            <NavLogo to="/" onClick={toggleHome}>
              Beverage
            </NavLogo>
            <MobileIcon onClick={toggle}>
              <FaBars />
            </MobileIcon>

            <NavMenu>
              <NavItem>
                <NavLinks to="/about">About</NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks to="/comments">Comments</NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks to="/article">Articles</NavLinks>
              </NavItem>
            </NavMenu>

            {!user && (
              <NavBtn>
                <NavBtnLink to="/sign-in">登入</NavBtnLink>
              </NavBtn>
            )}
            <AfterLogin>
              {user && (
                <NavBtn>
                  <NavBtnLink to="/new-post">發佈文章</NavBtnLink>
                </NavBtn>
              )}
              {user && (
                <NavBtn>
                  <NavBtnLink onClick={handleLogout}>登出</NavBtnLink>
                </NavBtn>
              )}
            </AfterLogin>
          </NavbarContainer>
        </Nav>
      </IconContext.Provider>
    </>
  );
};

export default SubNavbar;
