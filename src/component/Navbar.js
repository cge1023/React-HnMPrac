import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

const Navbar = ({authenticate}) => {
  const menulist = [
    "Women",
    "Divided",
    "Men",
    "Baby",
    "Kids",
    "H&M HOME",
    "Sale",
    "Sustainability",
  ];

  const navigate = useNavigate();

  const goToLogin = () => {
    navigate('/login');
  }

  const goToHome = () => {
    navigate('/');
  }

  return (
    <>
      <div className="login-button" onClick={goToLogin}>
        <FontAwesomeIcon icon={faUser} />
        <div>{authenticate === true ? "로그아웃" : "로그인"}</div>
      </div>

      <div className="nav-section" onClick={goToHome}>
        <img
          width={100}
          src="https://logos-world.net/wp-content/uploads/2020/04/HM-Logo.png"
        />
      </div>

      <div className="menu-area">
        <ul className="menu-list">
          {menulist.map((menu) => (
            <li>{menu}</li>
          ))}
        </ul>

        <div className="search-box">
          <FontAwesomeIcon icon={faSearch} />
          <input type="text" placeholder="Search products"/>
        </div>
      </div>
    </>
  );
};

export default Navbar;
