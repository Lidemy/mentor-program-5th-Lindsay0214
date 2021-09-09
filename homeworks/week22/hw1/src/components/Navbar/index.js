import React, { useState, useEffect, useContext } from "react";
import { FaBars } from "react-icons/fa";
import {
  Nav,
  NavbarContainer,
  NavLogo,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
  NavBtn,
  NavBtnLink,
  AfterLogin,
} from "./NavbarElements.js";
import { IconContext } from "react-icons/lib";
import { animateScroll as scroll } from "react-scroll";
import { setAuthToken } from "../../utils.js";
import { AuthContext } from "../../contexts.js";
import { useHistory } from "react-router";

const Navbar = ({ toggle }) => {
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
                <NavLinks
                  to="about"
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact="true"
                  offset={-80}
                  activeClass="active"
                >
                  關於
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks
                  to="store"
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact="true"
                  offset={-80}
                  activeClass="active"
                >
                  店家
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks
                  to="order"
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact="true"
                  offset={-80}
                  activeClass="active"
                >
                  訂單
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks
                  to="signup"
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact="true"
                  offset={-80}
                  activeClass="active"
                >
                  註冊
                </NavLinks>
              </NavItem>
            </NavMenu>
            <div style={{ display: "flex" }}>
              {!user && (
                <NavBtn>
                  <NavBtnLink to="/sign-in">登入</NavBtnLink>
                </NavBtn>
              )}
              {!user && (
                <NavBtn>
                  <NavBtnLink to="/sign-up">註冊</NavBtnLink>
                </NavBtn>
              )}
            </div>
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

export default Navbar;
