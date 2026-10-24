
function ArticleCard({ article }) {
  return (
    <article className="featured-card">
      <img
        className="featured-card-image"
        src={article.image}
        alt={article.imageAlt}
      />

      <div className="featured-card-content">
        <p className="featured-card-category">FEATURED ARTICLE</p>

        <h3>{article.title}</h3>

        <p className="featured-card-description">
          {article.description}
        </p>

        <div
          className="rating"
          aria-label={`Rating: ${article.rating} out of 5 stars`}
        >
          <span aria-hidden="true">{"★".repeat(article.rating)}</span>
          <span className="rating-number">{article.rating}.0</span>
        </div>

        <p className="card-author">
          By <strong>{article.author}</strong>
        </p>
      </div>
    </article>
  );
}

export default ArticleCard;
