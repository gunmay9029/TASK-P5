
import { useState } from "react";
import "./NewPost.css";

const initialForm = {
  title: "",
  description: "",
  abstract: "",
  articleText: "",
  tags: "",
};

function NewPost() {
  const [postType, setPostType] = useState("Question");
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [message, setMessage] = useState("");

  function handleTypeChange(event) {
    setPostType(event.target.value);
    setForm(initialForm);
    setErrors({});
    setMessage("");
  }

  function handleChange(event) {
    const { name, value } = event.target;

    setForm((previous) => ({
      ...previous,
      [name]: value,
    }));

    setErrors((previous) => ({
      ...previous,
      [name]: "",
    }));

    setMessage("");
  }

  function validateForm() {
    const nextErrors = {};
    const tags = form.tags
      .split(",")
      .map((tag) => tag.trim())
      .filter(Boolean);

    if (!form.title.trim()) {
      nextErrors.title = "Please enter a title.";
    } else if (form.title.trim().length < 5) {
      nextErrors.title = "The title must contain at least 5 characters.";
    } else if (form.title.trim().length > 150) {
      nextErrors.title = "The title cannot exceed 150 characters.";
    }

    if (postType === "Question") {
      if (!form.description.trim()) {
        nextErrors.description = "Please describe your problem.";
      } else if (form.description.trim().length < 10) {
        nextErrors.description =
          "Please provide at least 10 characters.";
      }
    } else {
      if (!form.abstract.trim()) {
        nextErrors.abstract = "Please enter an abstract.";
      } else if (form.abstract.trim().length < 10) {
        nextErrors.abstract =
          "The abstract must contain at least 10 characters.";
      }

      if (!form.articleText.trim()) {
        nextErrors.articleText = "Please enter your article text.";
      } else if (form.articleText.trim().length < 20) {
        nextErrors.articleText =
          "The article text must contain at least 20 characters.";
      }
    }

    if (!form.tags.trim()) {
      nextErrors.tags = "Please enter at least one tag.";
    } else if (tags.length > 3) {
      nextErrors.tags = "You can add a maximum of 3 tags.";
    } else if (tags.some((tag) => tag.length > 30)) {
      nextErrors.tags = "Each tag must be 30 characters or fewer.";
    } else if (new Set(tags.map((tag) => tag.toLowerCase())).size !== tags.length) {
      nextErrors.tags = "Please remove duplicate tags.";
    } else if (tags.some((tag) => !/^[a-zA-Z0-9+#.-]+$/.test(tag))) {
      nextErrors.tags =
        "Tags can contain letters, numbers, spaces are not allowed within a tag, and + # . or -.";
    }

    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  }

  function handleSubmit(event) {
    event.preventDefault();
    setMessage("");

    if (!validateForm()) {
      setMessage("Please correct the highlighted fields before posting.");
      return;
    }

    window.alert(
      `${postType} validated successfully! This demonstration does not publish posts to a server.`
    );

    setMessage(
      `${postType} details passed validation. No post was published.`
    );
  }

  return (
    <main className="new-post-page">
      <section className="new-post-card">
        <header className="new-post-heading">
          <p className="new-post-eyebrow">DEV@Deakin Community</p>
          <h1>New Post</h1>
          <p>
            Ask a question or share an article with the community.
          </p>
        </header>

        <form onSubmit={handleSubmit} noValidate>
          <fieldset className="post-type-fieldset">
            <legend>Select Post Type</legend>

            <label className="post-type-option">
              <input
                type="radio"
                name="postType"
                value="Question"
                checked={postType === "Question"}
                onChange={handleTypeChange}
              />
              Question
            </label>

            <label className="post-type-option">
              <input
                type="radio"
                name="postType"
                value="Article"
                checked={postType === "Article"}
                onChange={handleTypeChange}
              />
              Article
            </label>
          </fieldset>

          <section className="post-form-section">
            <h2>What do you want to ask or share?</h2>

            <p className="post-form-intro">
              {postType === "Question"
                ? "Describe your problem so other people can help you."
                : "Share an informative article with the community."}
            </p>

            <div className="post-form-field">
              <label htmlFor="post-title">Title</label>
              <input
                id="post-title"
                name="title"
                type="text"
                value={form.title}
                onChange={handleChange}
                placeholder={
                  postType === "Question"
                    ? "Start your question with how, what, why, etc."
                    : "Enter a descriptive title"
                }
                maxLength={150}
                aria-invalid={Boolean(errors.title)}
                aria-describedby={errors.title ? "title-error" : undefined}
              />
              {errors.title && (
                <p className="post-field-error" id="title-error">
                  {errors.title}
                </p>
              )}
            </div>

            {postType === "Question" ? (
              <div className="post-form-field">
                <label htmlFor="post-description">
                  Describe your problem
                </label>
                <textarea
                  id="post-description"
                  name="description"
                  value={form.description}
                  onChange={handleChange}
                  placeholder="Explain your question or problem..."
                  rows={9}
                  aria-invalid={Boolean(errors.description)}
                  aria-describedby={
                    errors.description ? "description-error" : undefined
                  }
                />
                {errors.description && (
                  <p className="post-field-error" id="description-error">
                    {errors.description}
                  </p>
                )}
              </div>
            ) : (
              <>
                <div className="post-form-field">
                  <label htmlFor="post-abstract">Abstract</label>
                  <textarea
                    id="post-abstract"
                    name="abstract"
                    value={form.abstract}
                    onChange={handleChange}
                    placeholder="Enter a short summary of your article"
                    rows={3}
                    aria-invalid={Boolean(errors.abstract)}
                    aria-describedby={
                      errors.abstract ? "abstract-error" : undefined
                    }
                  />
                  {errors.abstract && (
                    <p className="post-field-error" id="abstract-error">
                      {errors.abstract}
                    </p>
                  )}
                </div>

                <div className="post-form-field">
                  <label htmlFor="post-article-text">Article Text</label>
                  <textarea
                    id="post-article-text"
                    name="articleText"
                    value={form.articleText}
                    onChange={handleChange}
                    placeholder="Write your article here..."
                    rows={8}
                    aria-invalid={Boolean(errors.articleText)}
                    aria-describedby={
                      errors.articleText
                        ? "article-text-error"
                        : undefined
                    }
                  />
                  {errors.articleText && (
                    <p className="post-field-error" id="article-text-error">
                      {errors.articleText}
                    </p>
                  )}
                </div>
              </>
            )}

            <div className="post-form-field">
              <label htmlFor="post-tags">Tags</label>
              <input
                id="post-tags"
                name="tags"
                type="text"
                value={form.tags}
                onChange={handleChange}
                placeholder="Add up to 3 tags, separated by commas, e.g. Java"
                aria-invalid={Boolean(errors.tags)}
                aria-describedby={errors.tags ? "tags-error" : undefined}
              />
              <p className="post-field-hint">
                Enter up to three tags separated by commas.
              </p>
              {errors.tags && (
                <p className="post-field-error" id="tags-error">
                  {errors.tags}
                </p>
              )}
            </div>
          </section>

          {message && (
            <p
              className={
                Object.keys(errors).length > 0
                  ? "post-status post-status-error"
                  : "post-status post-status-success"
              }
              role="status"
              aria-live="polite"
            >
              {message}
            </p>
          )}

          <div className="post-submit-row">
            <button type="submit" className="post-submit-button">
              Post
            </button>
          </div>
        </form>
      </section>
    </main>
  );
}

export default NewPost;
