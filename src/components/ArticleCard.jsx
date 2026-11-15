import { Link } from "react-router-dom";

export default function ArticleCard({ article, horizontal = false }) {
  if (horizontal) {
    return (
      <div className="custom-card overflow-hidden mb-4">
        <div className="row g-0 align-items-center">
          <div className="col-md-5 position-relative">
            <span className="badge bg-warning text-dark position-absolute top-0 end-0 m-3 rounded-pill">
              <i className="bi bi-star-fill me-1"></i> مميز
            </span>
            <img
              src={article.image}
              alt={article.title}
              className="img-fluid w-100"
              style={{ height: "270px", objectFit: "cover" }}
            />
          </div>
          <div className="col-md-7 p-4">
            <div className="d-flex align-items-center gap-3 mb-2 small text-secondary">
              <span className="badge-pill-dark py-1 px-3">
                {article.category}
              </span>
              <span>
                <i className="bi bi-clock me-1"></i> {article.readTime}
              </span>
            </div>
            <h4 className="fw-bold mb-3">
              <Link
                to={`/blog/${article.slug}`}
                className="text-white text-decoration-none"
              >
                {article.title}
              </Link>
            </h4>
            <p className="text-secondary mb-4">{article.excerpt}</p>
            <div className="d-flex justify-content-between align-items-center">
              <div className="d-flex align-items-center gap-2">
                <img
                  src={article.author.avatar}
                  alt={article.author.name}
                  className="rounded-circle"
                  width="38"
                  height="38"
                />
                <div>
                  <div className="small fw-bold">{article.author.name}</div>
                  <div
                    className="text-secondary"
                    style={{ fontSize: "0.75rem" }}
                  >
                    {article.date}
                  </div>
                </div>
              </div>
              <Link
                to={`/blog/${article.slug}`}
                className="text-orange text-decoration-none fw-bold small"
              >
                اقرأ المقال <i className="bi bi-arrow-left ms-1"></i>
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="custom-card h-100 d-flex flex-column overflow-hidden">
      <div className="position-relative">
        <span className="badge bg-dark bg-opacity-75 text-white position-absolute top-0 end-0 m-3 rounded-pill px-3 py-2">
          {article.category}
        </span>
        <img
          src={article.image}
          alt={article.title}
          className="w-100"
          style={{ height: "210px", objectFit: "cover" }}
        />
      </div>
      <div className="p-4 d-flex flex-column flex-grow-1">
        <div className="text-secondary small mb-2">
          <i className="bi bi-clock me-1"></i> {article.readTime} •{" "}
          {article.date}
        </div>
        <h5 className="fw-bold mb-2">
          <Link
            to={`/blog/${article.slug}`}
            className="text-white text-decoration-none"
          >
            {article.title}
          </Link>
        </h5>
        <p className="text-secondary small flex-grow-1">{article.excerpt}</p>
        <hr className="border-secondary border-opacity-25" />
        <div className="d-flex justify-content-between align-items-center">
          <div className="d-flex align-items-center gap-2">
            <img
              src={article.author.avatar}
              alt={article.author.name}
              className="rounded-circle"
              width="34"
              height="34"
            />
            <div>
              <div className="small fw-bold">{article.author.name}</div>
              <div className="text-secondary" style={{ fontSize: "0.7rem" }}>
                {article.author.role}
              </div>
            </div>
          </div>
          <Link
            to={`/blog/${article.slug}`}
            className="btn btn-sm rounded-circle"
            style={{
              backgroundColor: "rgba(249,115,22,0.15)",
              color: "#f97316",
            }}
          >
            <i className="bi bi-chevron-left"></i>
          </Link>
        </div>
      </div>
    </div>
  );
}
