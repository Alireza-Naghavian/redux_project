import React from "react";
import { useDispatch } from "react-redux";
import { removeCourse } from "../../Redux/Store/courses";
import Swal from "sweetalert2";

export default function CourseBox({ course }) {
  const courseId = course._id
  const dispatch = useDispatch();
  const deleteHandler = async () => {
    Swal.fire({
      title: "آیا از حذف مطمئن هستید؟",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: " #d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "حذف",
      cancelButtonText: "لفو",
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(removeCourse(course._id));
        Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success",
        });
      }
    });
  };
  return (
    <div className="products__item">
      <img
        src="/img/store/redux.png"
        alt="product-img-1"
        className="products__img"
      />
      <div className="products__details w-100">
        <div className="products__info">
          <h3 className="products__name ">{course?.title}</h3>
          <p className="products__short-desc">{course?.desc}</p>
        </div>
        <div className="products__tags">
          <div className="products__boxes">
            <div className="products__price-box">
              <span className="fa fa-wallet"></span>

              <span className="product__teg-text">قیمت :</span>
              <span className="product__teg-text products__price-value">
                {course?.price}
              </span>
            </div>
            <div className="products__category-box">
              <span className="fa fa-folder"></span>

              <span className="product__teg-text">دسته بندی:</span>
              <span className="product__teg-text products__category">
                {course?.category}
              </span>
            </div>
            <div className="products__shop-box">
              <span className="fa fa-users"></span>

              <span className="product__teg-text">تعداد فروش :</span>
              <span className="product__teg-text products__sell">
                {course?.registersCount}
              </span>
            </div>
          </div>
          <div className="products__btns">
            <button className="btn btn-danger btn-lg" onClick={deleteHandler}>
              حذف
            </button>
            <button className="btn btn-info btn-lg">ویرایش</button>
          </div>
        </div>
      </div>

      <div className="product__discount-Box">30%</div>
    </div>
  );
}
