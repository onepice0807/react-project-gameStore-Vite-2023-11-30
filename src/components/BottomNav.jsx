import { useLocation, useNavigate } from "react-router-dom";
import styled, { keyframes } from "styled-components";
import { IoIosArrowBack } from "react-icons/io";
import Logo from "./../assets/Logo.png";
import WebFont from "webfontloader";
import { useEffect, useState } from "react";

WebFont.load({
  // 구글폰트적용
  google: {
    families: ["Roboto:400,700"],
  },
});

const BottomNav = () => {
  const navigate = useNavigate(); // useNavigate 함수를 사용합니다.
  const location = useLocation(); // 현재 경로를 얻기 위해 useLocation hook 사용
  const [showMainNav, setShowMainNav] = useState(false);

  useEffect(() => {
    // 페이지가 새로고침 되면 현재 경로에 따라 showMainNav 상태를 설정합니다.
    if (location.pathname.includes("/aipin")) {
      setShowMainNav(true);
    } else {
      setShowMainNav(false);
    }
  }, [location]); // location이 변경될 때마다 재실행

  // 메인 홈으로 이동
  const goToHome = () => {
    setShowMainNav(false);
    navigate("/");
  };

  // aipin 페이지로 이동
  const goToAiPin = () => {
    setShowMainNav(true);
    navigate("/aipin");
  };

  // 다른 Path에서 이동하고 aipin Path에 있으면 가만있는 함수
  const goToAiPinPath = () => {
    const paths = ["/trust", "/cosmos", "/tech-details"];
    const shouldNavigate = paths.some((path) =>
      location.pathname.includes(path)
    );

    if (shouldNavigate) {
      navigate("/aipin");
    }
  };

  const getNavLinkClass = (rootPath) => {
    const isExactMatch = location.pathname === rootPath;
    const isSubpath = location.pathname.startsWith(`${rootPath}/`);

    if (isExactMatch) {
      // 정확한 경로에 대해서만 값을 반환
      return "active";
    }

    // '/aipin/'로 시작하는 하위 경로에 대해서는 'active' 클래스를 반환하지 않음(기존에 둘다 같이 반환되는 문제가 있어서 수정)
    if (isSubpath && rootPath === "/aipin") {
      return "";
    }

    // 그 외의 '/aipin'이 아닌 다른 rootPath로 시작하는 버튼에 대해서는 값을 반환
    return isSubpath ? "active" : "";
  };

  return (
    <NavWrapper>
      <div className="brand">
        <Image src={Logo} alt="Logo" />
      </div>
      <Nav show={!showMainNav}>
        {/* 세컨드 Navigation 링크 */}
        <NavButton onClick={() => goToAiPin()}>ai pin</NavButton>
        <NavLink className={getNavLinkClass("/shop")} href="/shop">
          shop
        </NavLink>
        <NavLink className={getNavLinkClass("/about-us")} href="/about-us">
          about us
        </NavLink>
        <NavLink className={getNavLinkClass("/support")} href="/support">
          support
        </NavLink>
        <NavLink className={getNavLinkClass("/account")} href="/account">
          account
        </NavLink>
      </Nav>
      <Nav show={showMainNav}>
        {/* 메인 Navigation 링크 */}
        <NavButton onClick={() => goToHome()}>
          <IoIosArrowBack />
          menu
        </NavButton>
        <NavLink
          className={getNavLinkClass("/aipin")}
          onClick={() => goToAiPinPath()}
          href="/aipin"
        >
          ai pin
        </NavLink>
        <NavLink
          className={getNavLinkClass("/aipin/trust")}
          href="/aipin/trust"
        >
          trust
        </NavLink>
        <NavLink
          className={getNavLinkClass("/aipin/cosmos")}
          href="/aipin/cosmos"
        >
          cosmos
        </NavLink>
        <NavLink
          className={getNavLinkClass("/aipin/tech-details")}
          href="/aipin/tech-details"
        >
          tech details
        </NavLink>
      </Nav>
    </NavWrapper>
  );
};

export default BottomNav;

const Image = styled.img`
  height: 30px;
`;

const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

const fadeOut = keyframes`
  from { opacity: 1; }
  to { opacity: 0; }
`;

const NavWrapper = styled.div`
  background: #000;
  color: #fff;
  padding: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  bottom: 0;
  width: 98%;
  height: 40px;
  z-index: 3;
`;

const Nav = styled.nav`
  display: flex;
  position: absolute;
  font-size: larger;
  right: 0;
  margin: auto;
  justify-content: center;
  animation: ${(props) => (props.show ? fadeIn : fadeOut)} 0.6s linear;
  transition: visibility 0.6s linear;
  visibility: ${(props) => (props.show ? "visible" : "hidden")};
`;

const NavLink = styled.a`
  text-decoration: none;
  margin: 0 10px;
  cursor: pointer;
  font-size: larger;
  margin-right: 15px;
  padding-top: 9px;
  color: #4b4b4b;
  text-decoration: none; // 보통의 경우의 스타일
  &.active {
    color: white;
    font-weight: bold; // 선택되어서 해당링크로 갔을때의 스타일
  }
  &:hover {
    color: white;
    transition: 0.5s;
  }
`;

const NavButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  font-size: larger;
  padding: 10px;
  color: #4b4b4b;
  text-decoration: none; // 보통의 경우의 스타일
  &.active {
    color: white;
    font-weight: bold; // 선택되어서 해당링크로 갔을때의 스타일
  }
  &:hover {
    color: white;
    transition: 0.5s;
  }
`;
