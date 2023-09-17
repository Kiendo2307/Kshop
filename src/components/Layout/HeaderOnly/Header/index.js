import classNames from "classnames/bind";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faList,
  faMapMarker,
  faPhone,
  faShoppingBag,
  faTruck,
  faUser,
} from "@fortawesome/free-solid-svg-icons";

import styles from "./Header.module.scss";
import logo2 from "~/asstes/images/logo2.png";

import Button from "~/components/Button";
import Search from "~/components/Search";

const cx = classNames.bind(styles);

function Header() {
  return (
    <header className={cx("wrapper")}>
      <div className={cx("inner")}>
        <img className={cx("logo")} src={logo2} />

        <div className={cx("action-left")}>
          <Button primary medium leftIcon={<FontAwesomeIcon icon={faList} />}>
            Danh mục
          </Button>

          <Button
            primary
            large
            leftIcon={<FontAwesomeIcon icon={faMapMarker} />}
          >
            <div className={cx("title-button")}>
              <h5>Xem giá tại</h5>
              <h4>Hà Nội</h4>
            </div>
          </Button>
        </div>
        <Search />
        <div className={cx("action-right")}>
          <Button outline large leftIcon={<FontAwesomeIcon icon={faPhone} />}>
            <h4>Gọi mua hàng</h4>
            <h4>1900 2828</h4>
          </Button>
          <Button
            outline
            large
            leftIcon={<FontAwesomeIcon icon={faMapMarker} />}
          >
            <h4>Cửa hàng</h4>
            <h4>gần bạn</h4>
          </Button>
          <Button outline large leftIcon={<FontAwesomeIcon icon={faTruck} />}>
            <h4>Tra cứu</h4>
            <h4>đơn hàng</h4>
          </Button>
          <Button outline leftIcon={<FontAwesomeIcon icon={faShoppingBag} />}>
            <h4>Giỏ</h4>
            <h4>hàng</h4>
          </Button>
          <Button primary topIcon={<FontAwesomeIcon icon={faUser} />}>
            Đăng nhập
          </Button>
        </div>
      </div>
    </header>
  );
}

export default Header;
