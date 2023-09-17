import classNames from "classnames/bind";
import styles from "./Search.module.scss";

import { useState, useEffect } from "react";
import Tippy from "@tippyjs/react/headless";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass, faXmark } from "@fortawesome/free-solid-svg-icons";

import { Wrapper as PopperWrapper } from "~/components/Popper";
import PhoneItem from "~/components/PhoneItem";

const cx = classNames.bind(styles);

function Search() {
  const [searchResult, setSearchResult] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [showResult, setShowResult] = useState(true);

  const handleHideResult = () => {
    setShowResult(false);
  };

  const handleClear = () => {
    setSearchValue("");
    setSearchResult([]);
  };

  useEffect(() => {
    setTimeout(() => {
      setSearchResult([1, 2, 3]);
    }, 0);
  }, []);
  return (
    <Tippy
      interactive
      visible={showResult && searchResult.length > 0}
      render={(attrs) => (
        <div className={cx("search-result")} tabIndex="-1" {...attrs}>
          <PopperWrapper>
            <p className={cx("search-title")}>Sản phẩm gợi ý</p>
            <PhoneItem />
            <PhoneItem />
            <PhoneItem />
          </PopperWrapper>
        </div>
      )}
      onClickOutside={handleHideResult}
    >
      <div className={cx("search")}>
        <button className={cx("button-search")}>
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </button>
        <input
          value={searchValue}
          placeholder="Bạn cần tìm gì?"
          spellCheck={false}
          onChange={(e) => setSearchValue(e.target.value)}
          onFocus={() => setShowResult(true)}
        />
        <button className={cx("clear-search")} onClick={handleClear}>
          <FontAwesomeIcon icon={faXmark} />
        </button>
      </div>
    </Tippy>
  );
}

export default Search;
