import React, { useState } from "react";
import { useDispatch } from "react-redux";
import Swal from "sweetalert2";
import { removeUser } from "../../Redux/Store/Users";


export default  function UserItem({item}) {
  const dispatch = useDispatch();
  const [isShowModal,setIsShowModal] = useState(false);
const deleteHandler = ()=>{
  Swal.fire({
    title: "آیا از حذف مطمئن هستید؟",
  icon: "warning",
  showCancelButton: true,
  confirmButtonColor: " #d33",
  cancelButtonColor: "#3085d6",
  confirmButtonText: "حذف",
  cancelButtonText : "لفو"
}).then((result) => {
  if (result.isConfirmed) {
    dispatch(removeUser(item?._id))
    Swal.fire({
      title: "Deleted!",
      text: "Your file has been deleted.",
      icon: "success"
    });
  }
  })
}
  return (<>
       <div
        className={`modal ${isShowModal ? "show-modal" : "hidden-modal"}`}
        id="show-info-modal"
      >
        <div className="modal-dialog modal-dialog-scrollable modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title">جزئیات</h4>
              <button
                type="button"
                className="btn-close py-0"
                data-bs-dismiss="modal"
              ></button>
            </div>

            <div className="modal-body position-relative">
              <form action="#" className="form row mx-0">
                <div className="form__box-input col-12 px-2">
                  <input
                    type="text"
                    name=""
                    id="firstname"
                    value={`نام: ${item.firstname}`}
                    className="form-control form__input input-user-firstname"
                    readonly
                  />
                  <label htmlFor="firstname" className="form__label my-0">
                    نام
                  </label>
                </div>

                <div className="form__box-input col-12 px-2">
                  <input
                    type="text"
                    name=""
                    value={`نام خانوادگی: ${item.lastname}`}
                    id="lastname"
                    className="form-control form__input input-user-lastname"
                    readonly
                  />
                  <label htmlFor="lastname" className="form__label my-0">
                    نام خانوادگی
                  </label>
                </div>

                <div className="form__box-input col-12 px-2">
                  <input
                    lang="en"
                    type="text"
                    name=""
                    value={`نام کاربری: ${item.username}`}
                    id="username"
                    className="form-control form__input input-user-username"
                    readonly
                  />
                  <label htmlFor="username" className="form__label my-0">
                    نام کاربری
                  </label>
                </div>

                <div className="form__box-input col-12 px-2">
                  <input
                    lang="en"
                    type="email"
                    name=""
                    value={`ایمیل: ${item.email}`}
                    id="email"
                    className="form-control form__input input-user-email"
                    readonly
                  />
                  <label htmlFor="email" className="form__label my-0" lang="en">
                    ایمیل
                  </label>
                </div>

                <div className="form__box-input col-12 px-2">
                  <input
                    type="text"
                    name=""
                    id="text"
                    value={`شهر: ${item.city}`}
                    className="form-control form__input input-user-password"
                    readonly
                  />
                  <label htmlFor="password"  className="form__label my-0">
                    
                    شهر
                  </label>
                </div>
                <div className="form__box-input col-12 px-2">
                  <input
                    type="text"
                    name=""
                    value={`سن: ${item.age}`}
                    id="count-product"
                    className="form-control form__input input-user-product"
                    readonly
                  />
                  <label htmlFor="count-product" className="form__label my-0">
                    سن
                  </label>
                </div>
              </form>
            </div>

            <div className="modal-footer">
              <button
                className="btn btn-danger btn-lg"
                data-bs-dismiss="modal"
                onClick={() => setIsShowModal(false)}
              >
                بستن
              </button>
            </div>
          </div>
        </div>
      </div>

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
        <button className="btn-custome btn-custome__blue" onClick={()=>setIsShowModal(true)}>اطلاعات</button>
        <button className="btn-custome btn-custome__red"onClick={deleteHandler}>حذف</button>
      </div>
    </div>
          </>
  );
}
