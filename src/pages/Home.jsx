import { Link } from "react-router-dom";
import { articlesData, categories } from "../data/articles";
import ArticleCard from "../components/ArticleCard";

export default function Home() {
  const featuredArticles = articlesData.filter((a) => a.featured);
  const latestArticles = articlesData.slice(3, 6);

  return (
    <div>
      {/* Hero Section */}
      <section className="hero-grid-bg py-5 text-center">
        <div className="container py-5">
          <span className="badge-pill-dark d-inline-block mb-4">
            • مرحباً بك في عدسة
          </span>
          <h1 className="display-3 fw-bold mb-3">
            اكتشف <span className="text-orange">فن</span>
            <br />
            التصوير الفوتوغرافي
          </h1>
          <p
            className="text-secondary lead mx-auto mb-4"
            style={{ maxWidth: "600px" }}
          >
            انغمس في أسرار المحترفين ونصائح عملية لتطوير مهاراتك في التصوير.
          </p>
          <div className="d-flex justify-content-center gap-3 mb-5">
            <Link to="/blog" className="btn btn-orange">
              استكشف المقالات <i className="bi bi-arrow-left ms-1"></i>
            </Link>
            <Link to="/about" className="btn btn-outline-dark-custom">
              <i className="bi bi-info-circle me-1"></i> اعرف المزيد
            </Link>
          </div>

          {/* الإحصائيات */}
          <div
            className="row g-3 justify-content-center"
            style={{ maxWidth: "750px", margin: "0 auto" }}
          >
            {[
              { icon: "bi-journal-text", num: "+50", label: "مقالة" },
              { icon: "bi-people", num: "+10 ألف", label: "قارئ" },
              { icon: "bi-folder", num: "4", label: "تصنيفات" },
              { icon: "bi-pen", num: "6", label: "كاتب" },
            ].map((stat, idx) => (
              <div className="col-6 col-md-3" key={idx}>
                <div className="custom-card p-3">
                  <i className={`bi ${stat.icon} text-orange fs-4`}></i>
                  <h4 className="fw-bold text-orange mt-2 mb-0">{stat.num}</h4>
                  <small className="text-secondary">{stat.label}</small>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* مقالات مختارة */}
      <section className="container py-5">
        <div className="d-flex justify-content-between align-items-end mb-4">
          <div>
            <span className="badge-pill-dark mb-2 d-inline-block">• مميز</span>
            <h2 className="fw-bold mb-1">مقالات مختارة</h2>
            <p className="text-secondary mb-0">محتوى منتقى لبدء رحلة تعلمك</p>
          </div>
          <Link to="/blog" className="btn btn-orange btn-sm">
            عرض الكل <i className="bi bi-chevron-left"></i>
          </Link>
        </div>
        {featuredArticles.map((article) => (
          <ArticleCard key={article.id} article={article} horizontal />
        ))}
      </section>

      {/* استكشف حسب الموضوع (يربط مع Query Params في الـ Router) */}
      <section className="container py-5">
        <div className="text-center mb-5">
          <span className="badge-pill-dark mb-2 d-inline-block">
            • التصنيفات
          </span>
          <h2 className="fw-bold">استكشف حسب الموضوع</h2>
          <p className="text-secondary">اعثر على محتوى مصمم حسب اهتماماتك</p>
        </div>
        <div className="row g-3">
          {categories.map((cat, idx) => (
            <div className="col-6 col-md-4 col-lg-3" key={idx}>
              <Link
                to={`/blog?category=${encodeURIComponent(cat.name)}`}
                className="text-decoration-none"
              >
                <div className="custom-card p-4 text-end">
                  <div
                    className="d-inline-flex p-3 rounded-3 mb-3"
                    style={{ backgroundColor: "rgba(249,115,22,0.12)" }}
                  >
                    <i className={`bi ${cat.icon} text-orange fs-4`}></i>
                  </div>
                  <h5 className="text-white fw-bold mb-1">{cat.name}</h5>
                  <small className="text-secondary">{cat.count} مقالات</small>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* أحدث المقالات */}
      <section className="container py-5">
        <div className="d-flex justify-content-between align-items-end mb-4">
          <div>
            <span className="badge-pill-dark mb-2 d-inline-block">
              • الأحدث
            </span>
            <h2 className="fw-bold mb-1">أحدث المقالات</h2>
            <p className="text-secondary mb-0">محتوى جديد طازج من المطبعة</p>
          </div>
          <Link to="/blog" className="text-orange text-decoration-none fw-bold">
            عرض جميع المقالات <i className="bi bi-arrow-left"></i>
          </Link>
        </div>
        <div className="row g-4">
          {latestArticles.map((article) => (
            <div className="col-md-4" key={article.id}>
              <ArticleCard article={article} />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
