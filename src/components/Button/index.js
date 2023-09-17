import classNames from "classnames/bind";
import styles from "./Button.module.scss";
import { Link } from "react-router-dom";

const cx = classNames.bind(styles);

function Button({
  to,
  href,
  primary = false,
  outline = false,
  medium = false,
  large = false,
  leftIcon,
  topIcon,
  children,
  onClick,
  ...passProps
}) {
  let Comp = "button";
  const props = { onClick, ...passProps };

  if (to) {
    props.to = to;
    Comp = Link;
  } else if (href) {
    props.href = href;
    Comp = "a";
  }

  const classes = cx("wrapper", {
    primary,
    outline,
    medium,
    large,
  });

  return (
    <Comp className={classes} {...props}>
      {leftIcon && <span className={cx("left-icon")}>{leftIcon}</span>}
      {topIcon && <span className={cx("top-icon")}>{topIcon}</span>}
      <span className={cx("title")}>{children}</span>
    </Comp>
  );
}

export default Button;
