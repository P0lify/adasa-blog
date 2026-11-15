import { Link, NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <nav
      className="navbar navbar-expand-lg py-3 border-bottom border-secondary border-opacity-25 sticky-top"
      style={{
        backgroundColor: "rgba(10, 10, 10, 0.9)",
        backdropFilter: "blur(10px)",
      }}
    >
      <div className="container">
        {/* الشعار */}
        <Link
          className="navbar-brand d-flex align-items-center gap-2 text-white"
          to="/"
        >
          <div
            className="d-flex align-items-center justify-content-center rounded-circle"
            style={{ width: 40, height: 40, backgroundColor: "#f97316" }}
          >
            <i className="bi bi-camera-fill text-white"></i>
          </div>
          <div>
            <div className="fw-bold lh-1">عدسة</div>
            <small className="text-orange" style={{ fontSize: "0.7rem" }}>
              عالم التصوير الفوتوغرافي
            </small>
          </div>
        </Link>

        <button
          className="navbar-toggler border-secondary"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#mainNav"
        >
          <i className="bi bi-list text-white fs-3"></i>
        </button>

        {/* روابط التنقل (Routing) */}
        <div
          className="collapse navbar-collapse justify-content-center"
          id="mainNav"
        >
          <div className="nav-pill-container d-flex flex-column flex-lg-row gap-1 my-3 my-lg-0">
            <NavLink
              to="/"
              end
              className={({ isActive }) =>
                `nav-pill-link ${isActive ? "active" : ""}`
              }
            >
              الرئيسية
            </NavLink>
            <NavLink
              to="/blog"
              className={({ isActive }) =>
                `nav-pill-link ${isActive ? "active" : ""}`
              }
            >
              المدونة
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                `nav-pill-link ${isActive ? "active" : ""}`
              }
            >
              من نحن
            </NavLink>
          </div>
        </div>

        {/* زر البدء */}
        <div className="d-none d-lg-flex align-items-center gap-3">
          <Link to="/blog" className="text-secondary text-decoration-none">
            <i className="bi bi-search fs-5"></i>
          </Link>
          <Link to="/blog" className="btn btn-orange btn-sm px-4 py-2">
            ابدأ القراءة
          </Link>
        </div>
      </div>
    </nav>
  );
}
