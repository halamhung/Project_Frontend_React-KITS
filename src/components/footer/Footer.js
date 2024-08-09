import React, { useState } from "react";
import { Col, Container, Row, List } from "reactstrap";
import "./footer.css";

export default function Footer() {
  const [isPolicyOpen, setIsPolicyOpen] = useState(false);

  const togglePolicyDropdown = () => {
    setIsPolicyOpen(!isPolicyOpen);
  };

  return <>
    <footer className="footer">
      <Container >
        <Row>
          <Col lg={3}>
            <div className="footer-block">
              <h4>Giới thiệu</h4>
              <List className="list-infomation">
                <div>
                  <p style={{ margin: 0, lineHeight: "21px", wordBreak: "break-word" }}>
                    Chất lượng là trên hết, phong cách là mãi mãi. Đến với
                    <span className="highlight"> Teespace</span>, trải nghiệm dịch vụ và sản phẩm thời thượng
                  </p>
                </div>

                <li>
                  <i class="fa fa-mobile-phone" aria-hidden="true"></i>
                  <a rel="nofollow" href="tel:02871006789">02871006789</a>
                </li>
                <li>
                  <i class="fa-solid fa-envelope"></i>
                  <a rel="nofollow" href="mailto:halamhung2001@gmail.com">halamhung2001@gmail.com</a>
                </li>
                <li>
                  <i class="fa fa-clock" aria-hidden="true"></i>
                  <a rel="nofollow">Giờ mở cửa : 08:30 - 22:00</a>
                </li>
              </List>
            </div>
          </Col>
          <Col lg={3}>
            <div className="footer-block">
              <h4>Chính sách</h4>
              <List className="list-service">
                <li>Hướng dẫn đặt hàng</li>
                <li>Thông tin chuyển khoản</li>

                <li>
                  <div className="infomation-drop" onClick={togglePolicyDropdown}>
                    <div className="policy-text">
                      <p>Chính sách</p>
                    </div>
                    <i
                      className={`fa fa-chevron-${isPolicyOpen ? "up" : "down"}`}
                      aria-hidden="true"
                    ></i>
                  </div>
                  {isPolicyOpen && (
                    <div className="dropdown-content">
                      <li>Chính sách bảo mật</li>
                      <li>Chính sách đổi trả</li>
                      <li>Chính sách bảo hành</li>
                    </div>
                  )}
                </li>
              </List>
            </div>
          </Col>
          <Col lg={3}>
            <div className="footer-block">
              <h4>Danh sách cửa hàng</h4>
              <List className="list-store">
                <li>
                  <div className="store-location">
                    <i className="fa fa-map-marker" aria-hidden="true"></i>
                    <div className="store-name">297/3 Tô Hiến Thành, Phường 13, Quận 10, TP Hồ Chí Minh</div>
                  </div>
                </li>
                <li>
                  <div className="store-location">
                    <i className="fa fa-map-marker" aria-hidden="true"></i>
                    <div className="store-name">Số 26 phố Lê Đại Hành, Phường Lê Đại Hành, Quận Hai Bà Trưng, TP Hà Nội</div>
                  </div>
                </li>
                <li>
                  <div className="store-location">
                    <i className="fa fa-map-marker" aria-hidden="true"></i>
                    <div className="store-name">Số 35 Trần Phú, Phường Cái Khế, Quận Ninh Kiều, TP Cần Thơ, Cần Thơ</div>
                  </div>
                </li>
                <li>
                  <div className="store-location">
                    <i className="fa fa-map-marker" aria-hidden="true"></i>
                    <div className="store-name">135 Hai Bà Trưng, Bến Nghé, Quận 1</div>
                  </div>
                </li>
              </List>
            </div>
          </Col>
          <Col lg={3}>
            <div className="footer-block">
              <h4>Kết nối với Teespace</h4>
              <List className="list-infomation">
                <li>About Us</li>
                <li>Press</li>
                <li>Careers</li>
                <li>Blog</li>
              </List>
            </div>
          </Col>
        </Row>
      </Container >

    </footer >

  </>;
}
