import React from "react";

import { BackTop } from "antd";

function Footer() {
  return (
    <div
      className="container-fluid"
      style={{
        backgroundColor: "#282c34",

        minHeight: "calc(30vh - 100px - 100px)",
        alignItems: "center",
      }}
    >
      <div className="footer">
        <div className="logo">
          <i
            style={{ marginTop: "10px", marginRight: "5px", color: "white" }}
            class="far fa-hand-peace fa-2x"
          ></i>
          <a href="http://localhost:3000/home#/">R&M</a>
        </div>
        <ul
          className="socials"
          style={{
            display: "flex",
            justifyContent: "center",
            listStyle: "none",
            padding: "10px",
          }}
        >
          <li style={{ marginRight: "10px" }}>
            <a href="https://www.facebook.com/">
              <i className="fab fa-facebook-f  fa-2x "></i>
            </a>
          </li>
          <li style={{ marginRight: "10px" }}>
            <a href="https://www.twitter.com/">
              <i className="fab fa-twitter fa-2x"></i>
            </a>
          </li>
          <li style={{ marginRight: "10px" }}>
            <a href="https://www.linkedin.com/">
              <i className="fab fa-linkedin-in fa-2x"></i>
            </a>
          </li>
          <li style={{ marginRight: "10px" }}>
            <a href="https://www.pinterest.com/">
              <i className="fab fa-pinterest-p fa-2x"></i>
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/">
              <i className="fab fa-instagram fa-2x"></i>
            </a>
          </li>
        </ul>
        <div className="copyright" style={{ color: "white" }}>
          Copyright &copy; 2020 R&M{" "}
        </div>
        <BackTop>
          <div className="goTop">
            <i className="fas fa-arrow-circle-up fa-2x"></i>
          </div>
        </BackTop>
      </div>
    </div>
  );
}

export default Footer;
