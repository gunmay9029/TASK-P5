
function TutorialCard({ tutorial }) {
  return (
    <article className="featured-card">
      <img
        className="featured-card-image"
        src={tutorial.image}
        alt={tutorial.imageAlt}
      />

      <div className="featured-card-content">
        <p className="featured-card-category">FEATURED TUTORIAL</p>

        <h3>{tutorial.title}</h3>

        <p className="featured-card-description">
          {tutorial.description}
        </p>

        <div
          className="rating"
          aria-label={`Rating: ${tutorial.rating} out of 5 stars`}
        >
          <span aria-hidden="true">{"★".repeat(tutorial.rating)}</span>
          <span className="rating-number">{tutorial.rating}.0</span>
        </div>

        <p className="card-author">
          By <strong>{tutorial.author}</strong>
        </p>
      </div>
    </article>
  );
}

export default TutorialCard;
