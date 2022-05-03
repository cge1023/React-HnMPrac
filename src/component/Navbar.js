import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const Navbar = ({ authenticate }) => {
  // const [val, setVal] = useState();

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
    navigate("/login");
  };

  const goToHome = () => {
    navigate("/");
  };

  const search = (event) => {
    if (event.key === "Enter") {
      // 입력한 검색어를 읽어와서
      let keyword = event.target.value;
      // url을 바꿔준다.
      console.log("key press", event.key);
    }
  };

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
          <input
            type="text"
            placeholder="Search products"
            onKeyPress={(event) => search(event)}
          />
        </div>
      </div>
    </>
  );
};

export default Navbar;
