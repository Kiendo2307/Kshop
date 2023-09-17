import classNames from "classnames/bind";
import styles from "./ProductCard.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

const cx = classNames.bind(styles);

function ProductCard() {
  return (
    <div className={cx("wrapper")}>
      <img
        className={cx("img-card")}
        src="https://cdn2.cellphones.com.vn/358x358,webp,q100/media/catalog/product/t/_/t_m_18.png"
        alt="iPhone14"
      />
      <div className={cx("card-body")}>
        <div className={cx("card-title")}>
          <h4 style={{ position: "relative", left: "10px" }}>
            iPhone 14 Pro Max 128GB | Chính hãng VN/A
          </h4>
        </div>
        <div className={cx("card-price")}>
          <p className={cx("price-show")}>26.250.000</p>
          <p className={cx("price-through")}>29.990.000</p>
        </div>
        <div className={cx("card-desc")}>
          <p className={cx("desc")}>
            Nhận ngay ưu đãi YouTube Premium dành cho chủ sở hữu Samsung Galaxy
            và
          </p>
        </div>
      </div>
      <div className={cx("card-btn")}>
        <span style={{ color: "#777", fontSize: "1.2rem" }}>
          Yêu thích &nbsp;
        </span>
        <FontAwesomeIcon icon={faHeart} />
      </div>
    </div>
  );
}

export default ProductCard;

// const [items, setItems] = useState([]);

// useEffect(() => {
//   getAllProducts().then((res) => {
//     setItems(res.products);
//     console.log(res.products);
//   });
// }, []);
// return (
//   <div>
//     <List
//       renderItem={(product, index) => {
//         return (
//           <Card
//             title={product.title}
//             key={index}
//             cover={
//               <Image className={cx("itemCardImg")} src={product.thumbnail} />
//             }
//           ></Card>
//         );
//       }}
//       dataSource={items}
//     ></List>
//   </div>
// );
