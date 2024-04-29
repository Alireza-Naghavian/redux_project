import React from "react";

export default function UserItem({item}) {
  return (
    <div className="uesrs__item">
      <div className="users__info">
        <img
          src="/img/admin/profile/banana.png"
          alt="photo user"
          className="users__img"
        />
        <div className="users__details">
          <p className="users__name my-0 " >{item?.firstname} {item?.lastname}</p>
          <p lang="en" className="users__email">
          {item?.email}
          </p>
        </div>
      </div>
      <div className="users__btns">
        <button className="btn-custome btn-custome--gray">پیام ها</button>
        <button className="btn-custome btn-custome__blue">اطلاعات</button>
        <button className="btn-custome btn-custome__red">حذف</button>
      </div>
    </div>
  );
}
