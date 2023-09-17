import classNames from "classnames/bind";
import styles from "./Home.module.scss";

import Menutree from "./Menutree";
import ImageSlider from "./ImageSlider";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

import { FreeMode, Pagination } from "swiper/modules";
import ProductCard from "~/components/ProductCard";
import img4 from "~/asstes/images/img4.jpg";
import img7 from "~/asstes/images/img7.jpg";

const cx = classNames.bind(styles);

function Home() {
  const slides = [
    {
      url: "https://cdn2.cellphones.com.vn/690x300,webp,q100/https://dashboard.cellphones.com.vn/storage/sliding-fold-th9-ver1.png",
      title: "xiaomi",
    },
    {
      url: "https://cdn2.cellphones.com.vn/690x300,webp,q100/https://dashboard.cellphones.com.vn/storage/bts-apple-sliding.png",
      title: "samsung",
    },
  ];

  return (
    <div className={cx("wrapper")}>
      <div className={cx("menu-block-top")}>
        <div style={{ display: "flex" }}>
          <div>
            <Menutree />
          </div>

          <div className={cx("sliding-banner")}>
            <div className={cx("slider-banner")}>
              <ImageSlider slides={slides} />
            </div>
          </div>
          <div className={cx("right-banner")}>
            <a href="" className={cx("right-banner-item")}>
              <img className={cx("item-right")} src={img7} alt="img" />
            </a>
            <a href="" className={cx("right-banner-item")}>
              <img
                className={cx("item-right")}
                src="https://cdn2.cellphones.com.vn/690x300,webp,q10/https://dashboard.cellphones.com.vn/storage/ipadth7-new.png"
                alt="img"
              />
            </a>
            <a href="" className={cx("right-banner-item")}>
              <img
                className={cx("item-right")}
                src="https://cdn2.cellphones.com.vn/690x300,webp,q10/https://dashboard.cellphones.com.vn/storage/asus%20tuf.jpg"
                alt="img"
              />
            </a>
          </div>
        </div>
        <div className={cx("hozi-banner")}>
          <a>
            <img className={cx("img-hozi-banner")} src={img4} />
          </a>
        </div>
      </div>
      <div className={cx("product-list")}>
        <h2 className={cx("product-list-title")}>Điện thoại nổi bật nhất</h2>
        <div className={cx("product-list-tag")}>
          {/* <Button
            style={{
              backgroundColor: "#f3f4f6",
              color: "#444",
            }}
          >
            iPhone
          </Button> */}
        </div>
      </div>

      <div className={cx("product")}>
        <Swiper
          slidesPerView={5}
          spaceBetween={30}
          freeMode={true}
          pagination={{
            clickable: true,
          }}
          modules={[FreeMode, Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>
            <ProductCard />
          </SwiperSlide>
          <SwiperSlide>
            <ProductCard />
          </SwiperSlide>
          <SwiperSlide>
            <ProductCard />
          </SwiperSlide>
          <SwiperSlide>
            <ProductCard />
          </SwiperSlide>
          <SwiperSlide>
            <ProductCard />
          </SwiperSlide>
          <SwiperSlide>
            <ProductCard />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}

export default Home;
