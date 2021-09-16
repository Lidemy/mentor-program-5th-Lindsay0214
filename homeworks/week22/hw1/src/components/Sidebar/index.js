import React, { useContext } from "react";
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarWrapper,
  SidebarMenu,
  SidebarLink,
  SideBtnWrap,
  SidebarRoute,
} from "./SidebarElements";
import { setAuthToken } from "../../utils.js";
import { useHistory } from "react-router";
import { AuthContext } from "../../contexts.js";

const Sidebar = ({ isOpen, toggle }) => {
  const { user, setUser } = useContext(AuthContext);
  const history = useHistory();

  const handleLogout = () => {
    setAuthToken("");
    setUser(null);
    history.push("/");
  };

  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink to="about" onClick={toggle}>
            關於
          </SidebarLink>
          <SidebarLink to="store" onClick={toggle}>
            店家
          </SidebarLink>
          <SidebarLink to="order" onClick={toggle}>
            訂單
          </SidebarLink>
          <SidebarLink to="signup" onClick={toggle}>
            註冊
          </SidebarLink>
        </SidebarMenu>
        <SideBtnWrap>
          {!user && <SidebarRoute to="/sign-up">註冊</SidebarRoute>}
          <br />
          {!user && <SidebarRoute to="/sign-in">登入</SidebarRoute>}
          {user && <SidebarRoute to="/new-post">發佈文章</SidebarRoute>}
          <br />
          {user && <SidebarRoute onClick={handleLogout}>登出</SidebarRoute>}
        </SideBtnWrap>
      </SidebarWrapper>
    </SidebarContainer>
  );
};

export default Sidebar;
