import styles from "./Footer.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

function Footer() {
  return (
    <footer className={cx("wrapper")}>
      <div className={cx("inner")}>
        <div className={cx("column-footer")}>
          <div className={cx("column")}>
            <div className={cx("title")}>
              <p>Tổng đài hỗ trợ miễn phí</p>
            </div>
            <div className={cx("content")}>
              <ul className={cx("list-link")}>
                <div>
                  Gọi mua hàng <strong>1800.2064</strong>
                  <a> (7h30 - 22h00)</a>
                </div>
                <div>
                  Gọi khiếu nại <strong>1800.2063</strong>
                  <a> (8h00 - 21h30)</a>
                </div>
                <div>
                  Gọi bảo hành <strong>1800.2044</strong>
                  <a> (8h00 - 21h00)</a>
                </div>
              </ul>
            </div>
          </div>
          <div className={cx("pay-gate")}>
            <div className={cx("title")}>
              <p>Phương thức thanh toán</p>
            </div>
            <div className={cx("pay-gate-way")}>
              <ul className={cx("list-link")} style={{ display: "flex" }}>
                <li className={cx("icon")}>
                  <a href="">
                    <img
                      style={{ width: 48, height: 30 }}
                      src="https://cdn2.cellphones.com.vn/x35,webp/media/logo/payment/alepay-logo.png"
                    />
                  </a>
                </li>
                <li className={cx("icon")}>
                  <a href="">
                    <img
                      style={{ width: 48, height: 30 }}
                      src="https://cdn2.cellphones.com.vn/x35,webp/media/logo/payment/zalopay-logo.png"
                    />
                  </a>
                </li>
                <li className={cx("icon")}>
                  <a href="">
                    <img
                      style={{ width: 48, height: 30 }}
                      src="https://cdn2.cellphones.com.vn/x35,webp/media/logo/payment/vnpay-logo.png"
                    />
                  </a>
                </li>
                <li className={cx("icon")}>
                  <a href="">
                    <img
                      style={{ width: 48, height: 30 }}
                      src="https://cdn2.cellphones.com.vn/x35,webp/media/logo/payment/moca-logo.png"
                    />
                  </a>
                </li>
                <li className={cx("icon")}>
                  <a href="">
                    <img
                      style={{ width: 48, height: 30 }}
                      src="https://cdn2.cellphones.com.vn/x35,webp/media/logo/payment/onepay-logo.png"
                    />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className={cx("column-footer")}>
          <div className={cx("title")}>
            <p>Thông tin và chính sách</p>
          </div>
          <div className={cx("content")}>
            <ul className={cx("list-link")}>
              <li>Mua hàng và thanh toán online</li>
              <li>Mua hàng trả góp online</li>
              <li>Chính sách giao hàng</li>
              <li>Tra điểm Smember</li>
              <li>Xem ưu đãi Smember</li>
              <li>Tra thông tin bảo hành</li>
              <li>Tra cứu hoá đơn điện tử</li>
              <li>Thông tin hoá đơn mua hàng</li>
              <li>Trung tâm bảo hành chính hãng</li>
              <li>Quy định về việc sao lưu dữ liệu</li>
            </ul>
          </div>
        </div>

        <div className={cx("column-footer")}>
          <div className={cx("title")}>
            <p>Dịch vụ và thông tin khác</p>
          </div>
          <div className={cx("content")}>
            <ul className={cx("list-link")}>
              <li>Khách hàng doanh nghiệp (B2B)</li>
              <li>Ưu đãi thanh toán</li>
              <li>Quy chế hoạt động</li>
              <li>Chính sách bảo hành</li>
              <li>Liên hệ hợp tác kinh doanh</li>
              <li>Tra thông tin bảo hành</li>
              <li>Tuyển dụng</li>
              <li>Dịch vụ bảo hành điện thoại</li>
              <li>Dịch vụ bảo hành mở rộng</li>
            </ul>
          </div>
        </div>

        <div className={cx("column-footer")}>
          <div className={cx("title")}>
            <p>Kết nối với CellphoneS</p>
          </div>
          <div className={cx("content")}>
            <ul className={cx("list-link")} style={{ display: "flex" }}>
              <li className={cx("icon")}>
                <a href="">
                  <img
                    style={{ width: 48, height: 30 }}
                    src="https://cdn2.cellphones.com.vn/44x,webp/media/logo/social/cellphones-youtube.png"
                  />
                </a>
              </li>
              <li className={cx("icon")}>
                <a href="">
                  <img
                    style={{ width: 48, height: 30 }}
                    src="https://cdn2.cellphones.com.vn/44x,webp/media/logo/social/cellphones-facebook.png"
                  />
                </a>
              </li>
              <li className={cx("icon")}>
                <a href="">
                  <img
                    style={{ width: 48, height: 30 }}
                    src="https://cdn2.cellphones.com.vn/44x,webp/media/logo/social/cellphones-instagram.png"
                  />
                </a>
              </li>
              <li className={cx("icon")}>
                <a href="">
                  <img
                    style={{ width: 48, height: 30 }}
                    src="https://cdn2.cellphones.com.vn/44x,webp/media/logo/social/cellphones-tiktok.png"
                  />
                </a>
              </li>
              <li className={cx("icon")}>
                <a href="">
                  <img
                    style={{ width: 48, height: 30 }}
                    src="https://cdn2.cellphones.com.vn/44x,webp/media/logo/social/cellphones-zalo.png"
                  />
                </a>
              </li>
            </ul>
          </div>

          <div className={cx("title")}>
            <p>Website thành viên</p>
          </div>
          <div className={cx("box")}>
            <div className={cx("crop-member")}>
              <p>Hệ thống bảo hành sửa chữa Điện thoại - Máy tính</p>

              <a href="">
                <img
                  className={cx("img-box")}
                  src="https://cdn2.cellphones.com.vn/x30,webp/media/logo/corp-members/dienthoaivui.png"
                />
              </a>
            </div>
            <div className={cx("crop-member")}>
              <p>Trung tâm bảo hành uỷ quyền apple</p>

              <a href="">
                <img
                  className={cx("img-box")}
                  src="https://cdn2.cellphones.com.vn/x30,webp/media/logo/corp-members/dienthoaivui-asp.png"
                />
              </a>
            </div>
            <div className={cx("crop-member")}>
              <p>Kênh thông tin giải trí công nghệ cho giới trẻ</p>

              <a href="">
                <img
                  style={{ width: 73, height: 30 }}
                  src="https://cdn2.cellphones.com.vn/x30,webp/media/logo/corp-members/schanel.png"
                />
              </a>
            </div>
            <div className={cx("crop-member")}>
              <p>Trang thông tin công nghệ mới nhất</p>

              <a href="">
                <img
                  style={{ width: 103, height: 30 }}
                  src="https://cdn2.cellphones.com.vn/x30,webp/media/logo/corp-members/sforum.png"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
