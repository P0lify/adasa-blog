import { useParams, Link } from "react-router-dom";
import { articlesData } from "../data/articles";

export default function ArticleDetails() {
  const { slug } = useParams();
  const article = articlesData.find((a) => a.slug === slug);

  if (!article) {
    return (
      <div className="container py-5 text-center">
        <h2>المقال غير موجود</h2>
        <Link to="/blog" className="btn btn-orange mt-3">
          العودة للمدونة
        </Link>
      </div>
    );
  }

  return (
    <div className="container py-5" style={{ maxWidth: "850px" }}>
      <Link
        to="/blog"
        className="text-orange text-decoration-none mb-4 d-inline-block"
      >
        <i className="bi bi-arrow-right me-1"></i> العودة إلى المدونة
      </Link>

      <div className="mb-3">
        <span className="badge-pill-dark me-2">{article.category}</span>
        <span className="text-secondary small">
          {article.readTime} • {article.date}
        </span>
      </div>

      <h1 className="fw-bold display-5 mb-4">{article.title}</h1>

      <div className="d-flex align-items-center gap-3 mb-4">
        <img
          src={article.author.avatar}
          alt={article.author.name}
          className="rounded-circle"
          width="48"
          height="48"
        />
        <div>
          <div className="fw-bold">{article.author.name}</div>
          <small className="text-secondary">{article.author.role}</small>
        </div>
      </div>

      <img
        src={article.image}
        alt={article.title}
        className="w-100 rounded-4 mb-5"
        style={{ maxHeight: "450px", objectFit: "cover" }}
      />

      <div className="custom-card p-4 p-md-5 lh-lg fs-5 text-light">
        <p className="lead text-orange fw-semibold">{article.excerpt}</p>
        <hr className="border-secondary border-opacity-25 my-4" />
        <p>{article.content}</p>
      </div>
    </div>
  );
}
