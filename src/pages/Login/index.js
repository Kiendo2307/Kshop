import classNames from "classnames/bind";
import styles from "./Login.module.scss";

import logoLogin from "~/asstes/images/logoLogin.jpg";
import gg from "~/asstes/images/gg.jpg";
import zl from "~/asstes/images/zl.jpg";
import { useState } from "react";
import { toast } from "react-toastify";
import { loginApi } from "~/services/UserServices";
import { json } from "react-router-dom";
import axios from "axios";

const cx = classNames.bind(styles);

function Login() {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  const handleLogin = async () => {
    alert("me");
    if (!email || !pass) {
      toast.error("Vui lòng nhập SĐT/Email và Password");
      return;
    }

    let res = await loginApi(email, pass);

    if (res && res.token) {
      localStorage.setItem("token", res.token);
    }
  };

  return (
    <div className={cx("wrapper")}>
      <div className={cx("inner")}>
        <div className={cx("title-login")}>Đăng nhập</div>
        <div className={cx("login-form-container")}>
          <img className={cx("logoLogin")} src={logoLogin} alt="logo" />
          <div className={cx("login-form")}>
            <input
              className={cx("input1")}
              placeholder="Nhập số điện thoại/email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
            <input
              type="password"
              className={cx("input2")}
              placeholder="Nhập mật khẩu"
              value={pass}
              onChange={(event) => setPass(event.target.value)}
            />
            <div className={cx("forgot")}>
              <p className={cx("forgotPass")}>Quên mật khẩu?</p>
            </div>
            <button
              className={cx("btn-login")}
              disabled={email && pass ? false : true}
              onClick={() => handleLogin()}
            >
              Đăng nhập
            </button>

            <div className={cx("orLogin")}>
              <p style={{ margin: "5px 5px", whiteSpace: "nowrap" }}>
                hoặc đăng nhập bằng
              </p>
            </div>
            <div className={cx("social")}>
              <div className={cx("btn-social")}>
                <img className={cx("img-social")} src={gg} alt="Google" />
                <p>Google</p>
              </div>
              <div className={cx("btn-social")}>
                <img className={cx("img-social")} src={zl} alt="Zalo" />
                <p>Zalo</p>
              </div>
            </div>
            <div className={cx("register")}>
              <p
                style={{
                  color: "#777",
                  fontSize: "14px",
                  marginRight: "5px",
                }}
              >
                Bạn chưa có tài khoản?
              </p>
              <p
                style={{
                  color: "#e0052b",
                  fontSize: "14px",
                  fontWeight: "600",
                  cursor: "pointer",
                }}
              >
                Đăng ký ngay
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
