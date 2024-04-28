import React from "react";
import UserItem from "../../components/UserItem/UserItem";
import { Link } from "react-router-dom";
import "./Users.css";
export default function Users() {
  return (
    <div className="col-8 content px-0">
      <div className="content__wrapper">
        <ul className="content__tabs">
          <li className="content__tab">
            <Link to="/users" className="content__tab-link">
              <span className="fa fa-user"></span>
              کاربران
            </Link>
          </li>
          <li className="content__tab">
            <Link to="/infos" className="content__tab-link">
              <span className="fa fa-book"></span>
              اطلاعات
            </Link>
          </li>
          <li className="content__tab">
            <Link to="/courses" className="content__tab-link">
              <span className="fa fa-store"></span>
              دوره‌ها
            </Link>
          </li>

          <li className="content__tab">
            <Link to="/articles" className="content__tab-link">
              <span className="fa fa-newspaper"></span>
              وبلاگ
            </Link>
          </li>
        </ul>

        <div className="users">
          <form action="#" className="form row justify-content-between gap-3 mx-0">
            <div className="form__box-input col-8 px-0">
              <span className="fa fa-search form__icon form__icon-search"></span>

              <input
                type="search"
                name=""
                id="search"
                placeholder="نام یا ایمیل کاربر را وارد کنید "
                className="form-control form__input"
                required
              />
            </div>
            <button type="reset" className="btn-custome btn-custome--gray col-3">
              حذف کاربر
            </button>
          </form>

          <div className="users__list-container">
            <div className="users__list users__list-wrapper">
              <UserItem />
              <UserItem />
              <UserItem />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
