import classNames from "classnames/bind";
import Styles from "./DetailsPhone.module.scss";

const cx = classNames.bind(Styles);

function DetailsPhone() {
  return (
    <div className={cx("wrapper")}>
      <div className={cx("product-details")}>
        <div className={cx("product-title")}>
          <h1 className={cx("name")}>
            iPhone 14 Pro Max 128GB | chính hãng VN/A
          </h1>
        </div>
      </div>
    </div>
  );
}

export default DetailsPhone;
