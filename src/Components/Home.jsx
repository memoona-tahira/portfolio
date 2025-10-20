function Home() {
  return (
    <div>
     <div id="home" className="home">
      <h1>Hi, I’m Memoona 👋</h1>
      <p>Frontend Developer | React | Node.js | MongoDB  | Angular  | Laravel  | MariaDB </p>
      <p className="tagline">
        I love building modern web applications that are clean, fast, and user-friendly.
      </p>
      <div className="hero-buttons">
      <a href="#projects" className="button">View My Work</a>
      <a
          href="/cv.pdf"
          download
          className="button button-resume"
        >
          Download Resume
        </a>
        </div>

    </div>
    </div>
  );
}

export default Home;
