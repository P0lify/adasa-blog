import { Link } from "react-router-dom";

export default function About() {
  return (
    <div className="container py-5 text-center" style={{ maxWidth: "750px" }}>
      <span className="badge-pill-dark mb-3 d-inline-block">• من نحن</span>
      <h1 className="fw-bold display-5 mb-4">
        نشارك شغف <span className="text-orange">التصوير</span> مع العالم
      </h1>
      <p className="text-secondary lead mb-4">
        "عدسة" هي منصة عربية تهدف إلى تمكين المصورين العرب من خلال محتوى تعليمي
        احترافي يغطي الإضاءة، التكوين، المعدات، وتقنيات التصوير الحديثة.
      </p>
      <Link to="/blog" className="btn btn-orange">
        ابدأ القراءة الآن
      </Link>
    </div>
  );
}
