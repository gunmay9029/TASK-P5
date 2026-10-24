
import TutorialCard from "./TutorialCard";
import photo2 from "../assets/photo2.png";
import photo3 from "../assets/photo3.png";
import photo4 from "../assets/photo4.png";

const tutorials = [
  {
    id: 1,
    title: "Getting Started with Web Development",
    description:
      "Learn the basics of HTML, CSS, and JavaScript to build and style your first interactive website.",
    image: photo2,
    imageAlt: "Web development tutorial",
    rating: 5,
    author: "DEV@Deakin Community",
  },
  {
    id: 2,
    title: "Introduction to Python Programming",
    description:
      "Understand variables, conditions, loops, and functions through simple programming examples.",
    image: photo3,
    imageAlt: "Python programming tutorial",
    rating: 4,
    author: "DEV@Deakin Community",
  },
  {
    id: 3,
    title: "Understanding Data Visualisation",
    description:
      "Explore how charts and graphs can help turn raw data into clear and meaningful insights.",
    image: photo4,
    imageAlt: "Data visualisation tutorial",
    rating: 5,
    author: "DEV@Deakin Community",
  },
];

function FeaturedTutorials() {
  return (
    <section className="featured-section" id="tutorials">
      <div className="featured-heading">
        <p className="section-label">LEARN BY DOING</p>

        <h2>
          Featured <em>Tutorials</em>
        </h2>

        <p>
          Build your skills through approachable tutorials and practical
          guides from the DEV@Deakin community.
        </p>
      </div>

      <div className="featured-grid">
        {tutorials.map((tutorial) => (
          <TutorialCard tutorial={tutorial} key={tutorial.id} />
        ))}
      </div>
    </section>
  );
}

export default FeaturedTutorials;
