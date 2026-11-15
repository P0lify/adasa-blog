import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <section
      className="hero-grid-bg d-flex align-items-center justify-content-center text-center py-5"
      style={{ minHeight: "80vh" }}
    >
      <div className="container py-4" style={{ maxWidth: "600px" }}>
        {/* رقم 404 الكبير المتدرج */}
        <h1
          className="fw-bolder mb-3 user-select-none"
          style={{
            fontSize: "clamp(6rem, 15vw, 9.5rem)",
            lineHeight: 1,
            background: "linear-gradient(180deg, #f97316 0%, #c2410c 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          404
        </h1>

        {/* الأيقونة الدائرية البرتقالية */}
        <div className="d-flex justify-content-center mb-4">
          <div
            className="d-flex align-items-center justify-content-center rounded-circle position-relative"
            style={{
              width: "84px",
              height: "84px",
              backgroundColor: "rgba(249, 115, 22, 0.1)",
              border: "1px solid rgba(249, 115, 22, 0.3)",
            }}
          >
            <i className="bi bi-emoji-frown text-orange fs-1"></i>
            {/* النقطة البرتقالية الصغيرة أعلى اليمين */}
            <span
              className="position-absolute rounded-circle"
              style={{
                width: "12px",
                height: "12px",
                backgroundColor: "#f97316",
                top: "4px",
                right: "6px",
              }}
            ></span>
          </div>
        </div>

        {/* العنوان والوصف */}
        <h2 className="fw-bold text-white mb-3">عفواً! الصفحة غير موجودة</h2>
        <p className="text-secondary mb-4 px-3">
          الصفحة التي تبحث عنها غير موجودة أو تم نقلها. دعنا نعيدك إلى المسار
          الصحيح.
        </p>

        {/* أزرار التنقل */}
        <div className="d-flex flex-wrap justify-content-center gap-3 mb-5">
          <Link
            to="/"
            className="btn btn-orange d-inline-flex align-items-center gap-2 px-4 py-2"
          >
            <i className="bi bi-house-door"></i>
            <span>الذهاب للرئيسية</span>
          </Link>
          <Link
            to="/blog"
            className="btn btn-outline-dark-custom d-inline-flex align-items-center gap-2 px-4 py-2"
          >
            <i className="bi bi-journal-text"></i>
            <span>تصفح المقالات</span>
          </Link>
        </div>

        {/* خط فاصل وروابط مفيدة */}
        <hr
          className="border-secondary border-opacity-25 mx-auto mb-4"
          style={{ maxWidth: "350px" }}
        />

        <div>
          <p className="text-secondary small mb-2">قد تجد هذه مفيدة:</p>
          <div className="d-flex justify-content-center align-items-center gap-2 small">
            <Link to="/blog" className="text-orange text-decoration-none">
              المدونة
            </Link>
            <span className="text-secondary">•</span>
            <Link to="/about" className="text-orange text-decoration-none">
              من نحن
            </Link>
            <span className="text-secondary">•</span>
            <Link to="/" className="text-orange text-decoration-none">
              الخصوصية
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
