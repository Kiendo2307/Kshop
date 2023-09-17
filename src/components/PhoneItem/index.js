import styles from "./PhoneItem.module.scss";
import classNames from "classnames/bind";
import ip14pr from "~/asstes/images/ip14pr.jpg";

const cx = classNames.bind(styles);

function PhoneItem() {
  return (
    <div className={cx("wrapper")}>
      <img
        className={cx("search-avatar")}
        src={ip14pr}
        alt="iPhone14 Pro Max"
      />
      <div className={cx("search-infor")}>
        <p className={cx("search-name-item")}>
          iPhone14 Pro Max 128GB | Chính hãng VN/A
        </p>
        <div className={cx("search-price-item")}>
          <p className={cx("search-price-special")}>26.250.000</p>
          <p className={cx("search-price-old")}>29.990.000</p>
        </div>
      </div>
    </div>
  );
}

export default PhoneItem;
