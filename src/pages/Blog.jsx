import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { articlesData, categories } from "../data/articles";
import ArticleCard from "../components/ArticleCard";

export default function Blog() {
  const [searchParams, setSearchParams] = useSearchParams();
  const activeCategory = searchParams.get("category") || "جميع المقالات";
  const [searchQuery, setSearchQuery] = useState("");
  const [isListView, setIsListView] = useState(false);

  const handleCategoryChange = (catName) => {
    if (catName === "جميع المقالات") {
      setSearchParams({});
    } else {
      setSearchParams({ category: catName });
    }
  };

  const filteredArticles = articlesData.filter((article) => {
    const matchesCat =
      activeCategory === "جميع المقالات" || article.category === activeCategory;
    const matchesSearch =
      article.title.includes(searchQuery) ||
      article.excerpt.includes(searchQuery);
    return matchesCat && matchesSearch;
  });

  return (
    <div className="container py-5">
      {/* Header */}
      <div className="text-center mb-5">
        <span className="badge-pill-dark mb-3 d-inline-block">• مدونتنا</span>
        <h1 className="display-4 fw-bold">
          استكشف <span className="text-orange">مقالاتنا</span>
        </h1>
        <p className="text-secondary">
          اكتشف الدروس والرؤى وأفضل الممارسات للتطوير الحديث
        </p>
      </div>

      {/* شريط البحث وأزرار الفلترة */}
      <div className="row g-3 align-items-center mb-4">
        <div className="col-lg-4">
          <input
            type="text"
            className="form-control form-control-dark"
            placeholder="ابحث في المقالات..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        <div className="col-lg-8 d-flex flex-wrap gap-2 justify-content-lg-end">
          {["جميع المقالات", ...categories.map((c) => c.name)].map((cat) => (
            <button
              key={cat}
              onClick={() => handleCategoryChange(cat)}
              className={`btn btn-sm rounded-pill px-3 py-2 ${
                activeCategory === cat
                  ? "btn-orange"
                  : "btn-outline-dark-custom"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* عداد المقالات وتبديل العرض Grid / List */}
      <div className="d-flex justify-content-between align-items-center mb-4">
        <span className="text-secondary small">
          عرض {filteredArticles.length} مقالات
        </span>
        <div className="btn-group">
          <button
            onClick={() => setIsListView(false)}
            className={`btn btn-sm ${!isListView ? "btn-orange" : "btn-outline-secondary"}`}
          >
            <i className="bi bi-grid-fill"></i>
          </button>
          <button
            onClick={() => setIsListView(true)}
            className={`btn btn-sm ${isListView ? "btn-orange" : "btn-outline-secondary"}`}
          >
            <i className="bi bi-list"></i>
          </button>
        </div>
      </div>

      {/* عرض المقالات */}
      {filteredArticles.length === 0 ? (
        <div className="text-center py-5 text-secondary">
          لا توجد مقالات مطابقة لبحثك.
        </div>
      ) : isListView ? (
        filteredArticles.map((article) => (
          <ArticleCard key={article.id} article={article} horizontal />
        ))
      ) : (
        <div className="row g-4">
          {filteredArticles.map((article) => (
            <div className="col-md-6 col-lg-4" key={article.id}>
              <ArticleCard article={article} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
