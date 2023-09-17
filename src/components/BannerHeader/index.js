import styles from "./BannerHeader.module.scss";
import classNames from "classnames/bind";
import img1 from "~/asstes/images/img1.jpg";
import img2 from "~/asstes/images/img2.jpg";
import img3 from "~/asstes/images/img3.jpg";

const cx = classNames.bind(styles);

function BannerHeader() {
  return (
    <div className={cx("wrapper")}>
      <div className={cx("inner")}>
        <img src={img1} />
        <img src={img2} />
        <img src={img3} />
      </div>
    </div>
  );
}

export default BannerHeader;
