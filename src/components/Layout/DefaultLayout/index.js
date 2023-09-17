import Header from "./Header";
import Footer from "./Footer";
import classNames from "classnames/bind";
import styles from "./DefaultLayout.module.scss";
import BannerHeader from "~/components/BannerHeader";

const cx = classNames.bind(styles);

function DefaultLayout({ children }) {
  return (
    <div className={cx("wrapper")}>
      <BannerHeader />
      <Header />
      <div className={cx("container")}>
        <div className={cx("content")}>{children}</div>
      </div>
      <Footer />
    </div>
  );
}

export default DefaultLayout;
