
import ArticleCard from "./ArticleCard";
import photo1 from "../assets/photo1.png";
import photo2 from "../assets/photo2.png";
import photo3 from "../assets/photo3.png";

const articles = [
  {
    id: 1,
    title: "Exploring the World of Artificial Intelligence",
    description:
      "Discover how artificial intelligence is changing the way we learn, work, and solve everyday problems.",
    image: photo1,
    imageAlt: "Featured article about artificial intelligence",
    rating: 5,
    author: "DEV@Deakin Community",
  },
  {
    id: 2,
    title: "Why Data Science Matters",
    description:
      "Learn how data analysis helps people discover patterns, understand information, and make better decisions.",
    image: photo2,
    imageAlt: "Featured article about data science",
    rating: 4,
    author: "DEV@Deakin Community",
  },
  {
    id: 3,
    title: "Building Better Digital Experiences",
    description:
      "Explore the ideas behind creating useful, accessible, and engaging websites for different audiences.",
    image: photo3,
    imageAlt: "Featured article about digital experiences",
    rating: 5,
    author: "DEV@Deakin Community",
  },
];

function FeaturedArticles() {
  return (
    <section className="featured-section" id="articles">
      <div className="featured-heading">
        <p className="section-label">READ · DISCOVER · THINK</p>

        <h2>
          Featured <em>Articles</em>
        </h2>

        <p>
          Explore ideas, insights, and practical knowledge from the
          DEV@Deakin community.
        </p>
      </div>

      <div className="featured-grid">
        {articles.map((article) => (
          <ArticleCard article={article} key={article.id} />
        ))}
      </div>
    </section>
  );
}

export default FeaturedArticles;
