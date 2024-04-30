import React, { useEffect, useState } from "react";
import UserItem from "../../components/UserItem/UserItem";
import { Link } from "react-router-dom";
import "./Users.css";
import { useDispatch, useSelector } from "react-redux";
import { getUserData, removeUser } from "../../Redux/Store/Users";
import Swal from "sweetalert2";
export default function Users() {
  const dispatch = useDispatch();
  const Users = useSelector((state) => state.Users);
  const [search, setSearch] = useState("");
  const serachResult = [...Users].filter((item) => {
    return (
      search.toLowerCase().includes(item?.firstname.toLowerCase()) ||
      search.toLowerCase().includes(item?.email.toLowerCase())
    );
  });
  console.log(serachResult);
  useEffect(() => {
    dispatch(getUserData("https://redux-cms.iran.liara.run/api/users"));
  }, []);
  const deleteUserHandler = () => {
    if (serachResult.length) {
      Swal.fire({
        title: "آیا از حذف کاربر مطمئن هستید؟",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: " #d33",
        cancelButtonColor: "#3085d6",
        confirmButtonText: "حذف",
        cancelButtonText: "لفو",
      }).then((result) => {
        if (result.isConfirmed) {
          dispatch(removeUser(serachResult[0]?._id));
          Swal.fire({
            title: "Deleted!",
            text: "Your file has been deleted.",
            icon: "success",
          });
        }
      });
    }
  };
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
          <form
            action="#"
            className="form row justify-content-between gap-3 mx-0"
          >
            <div className="form__box-input col-8 px-0">
              <span className="fa fa-search form__icon form__icon-search"></span>

              <input
                type="search"
                name=""
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                id="search"
                placeholder="نام یا ایمیل کاربر را وارد کنید "
                className="form-control form__input"
                required
              />
            </div>
            <button
              type="reset"
              className="btn-custome btn-custome--gray col-3"
              onClick={deleteUserHandler}
            >
              حذف کاربر
            </button>
          </form>

          <div className="users__list-container">
            <div className="users__list users__list-wrapper">
              {search.trim()
                ? serachResult.map((item) => {
                    return <UserItem key={item._id} item={item} />;
                  })
                : Users.map((item) => {
                    return <UserItem key={item._id} item={item} />;
                  })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
