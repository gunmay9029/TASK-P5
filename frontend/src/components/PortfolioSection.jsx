
import personalImage from "../assets/personal.png";
import project1Image from "../assets/project1.png";
import project2Image from "../assets/project2.png";
import photo1 from "../assets/photo1.png";
import photo2 from "../assets/photo2.png";
import photo3 from "../assets/photo3.png";
import photo4 from "../assets/photo4.png";

const projects = [
  {
    number: "PROJECT 01",
    title: "Hackathon Web Platform",
    description:
      "A complete web platform created for a university hackathon, combining front-end and back-end development to create a functional experience.",
    tags: ["HTML", "CSS", "JavaScript", "Backend"],
    image: project1Image,
    alt: "Hackathon web platform project",
  },
  {
    number: "PROJECT 02",
    title: "Hackathon Innovation Project",
    description:
      "A hands-on hackathon project combining hardware and software, with teamwork, leadership, and innovation involved in developing a prototype.",
    tags: ["Leadership", "Hardware", "Innovation"],
    image: project2Image,
    alt: "Hackathon innovation project",
  },
];

const galleryImages = [
  { src: photo1, alt: "Portfolio gallery image 1" },
  { src: photo2, alt: "Portfolio gallery image 2" },
  { src: photo3, alt: "Portfolio gallery image 3" },
  { src: photo4, alt: "Portfolio gallery image 4" },
];

function PortfolioSection() {
  return (
    <>
      <section id="about" className="about-section">
        <p className="section-label">01 — ABOUT</p>

        <div className="about-container">
          <div className="profile-wrap">
            <img
              src={personalImage}
              alt="Gunmay Sehgal"
              className="profile-pic"
            />
          </div>

          <div className="about-text">
            <p className="small-title">A LITTLE ABOUT ME</p>

            <h2>
              Building ideas into <em>digital experiences.</em>
            </h2>

            <p>
              Hi, I'm Gunmay Sehgal. I'm currently pursuing a Bachelor of
              Engineering in AI/ML at Chitkara University. I enjoy exploring
              technology, developing practical solutions, and turning creative
              ideas into useful projects.
            </p>

            <div className="stats">
              <div>
                <strong>AI/ML</strong>
                <span>Focus Area</span>
              </div>

              <div>
                <strong>Web</strong>
                <span>Development</span>
              </div>

              <div>
                <strong>Build</strong>
                <span>Learn • Create</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="work" className="allprojects">
        <p className="section-label">02 — SELECTED WORK</p>

        <h2 className="work-title">
          Things I've <em>built.</em>
        </h2>

        <div className="projects-grid">
          {projects.map((project) => (
            <article className="project-card" key={project.number}>
              <img src={project.image} alt={project.alt} />

              <div className="project-info">
                <span>{project.number}</span>
                <h3>{project.title}</h3>
                <p>{project.description}</p>

                <div className="tag-row">
                  {project.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="gallery-section" id="gallery">
        <p className="section-label">03 — MOMENTS</p>

        <h2>
          Behind the <em>build.</em>
        </h2>

        <div className="gallery-grid">
          {galleryImages.map((image) => (
            <img key={image.alt} src={image.src} alt={image.alt} />
          ))}
        </div>
      </section>
    </>
  );
}

export default PortfolioSection;
