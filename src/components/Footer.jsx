import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer
      className="border-top border-secondary border-opacity-25 pt-5 pb-4 mt-5"
      style={{ backgroundColor: "#080808" }}
    >
      <div className="container">
        <div className="row g-4">
          <div className="col-lg-4">
            <div className="d-flex align-items-center gap-2 mb-3">
              <span
                className="badge rounded-3 p-2"
                style={{ backgroundColor: "#f97316" }}
              >
                ع
              </span>
              <h5 className="fw-bold mb-0">عدسة</h5>
            </div>
            <p className="text-secondary small">
              مدونة متخصصة في فن التصوير الفوتوغرافي، نشارك معكم أسرار المحترفين
              ونصائح عملية لتطوير مهاراتكم في التصوير.
            </p>
          </div>
          <div className="col-6 col-lg-2">
            <h6 className="fw-bold mb-3">استكشف</h6>
            <ul className="list-unstyled small d-flex flex-column gap-2">
              <li>
                <Link to="/" className="text-secondary text-decoration-none">
                  الرئيسية
                </Link>
              </li>
              <li>
                <Link
                  to="/blog"
                  className="text-secondary text-decoration-none"
                >
                  المدونة
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-secondary text-decoration-none"
                >
                  من نحن
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-6 col-lg-2">
            <h6 className="fw-bold mb-3">التصنيفات</h6>
            <ul className="list-unstyled small d-flex flex-column gap-2">
              <li>
                <Link
                  to="/blog?category=إضاءة"
                  className="text-secondary text-decoration-none"
                >
                  إضاءة
                </Link>
              </li>
              <li>
                <Link
                  to="/blog?category=بورتريه"
                  className="text-secondary text-decoration-none"
                >
                  بورتريه
                </Link>
              </li>
              <li>
                <Link
                  to="/blog?category=مناظر طبيعية"
                  className="text-secondary text-decoration-none"
                >
                  مناظر طبيعية
                </Link>
              </li>
              <li>
                <Link
                  to="/blog?category=تقنيات"
                  className="text-secondary text-decoration-none"
                >
                  تقنيات
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-lg-4">
            <h6 className="fw-bold mb-3">ابق على اطلاع</h6>
            <p className="text-secondary small">
              اشترك للحصول على أحدث المقالات والتحديثات.
            </p>
            <form
              onSubmit={(e) => e.preventDefault()}
              className="d-flex flex-column gap-2"
            >
              <input
                type="email"
                className="form-control form-control-dark"
                placeholder="أدخل بريدك الإلكتروني"
              />
              <button className="btn btn-orange w-100">اشترك</button>
            </form>
          </div>
        </div>
        <hr className="border-secondary border-opacity-25 my-4" />
        <div className="d-flex flex-column flex-md-row justify-content-between text-secondary small">
          <span>
            © 2026 عدسة. صنع بكل{" "}
            <i className="bi bi-heart-fill text-orange"></i> جميع الحقوق محفوظة.
          </span>
          <div className="d-flex gap-3">
            <span>سياسة الخصوصية</span>
            <span>شروط الخدمة</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
