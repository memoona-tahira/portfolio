function Footer(){
    return(
        <div>
            <footer className="footer">
      <p>© {new Date().getFullYear()} Memoona | All Rights Reserved</p>
      <div className="footer-links">
        <a href="#home">Home</a>
         <a href="#about">About</a>
         <a href="#projects">Projects</a>
          <a href="#skills">Skills</a>
         <a href="#contact">Contact</a>
      </div>
    </footer>

        </div>
    );
}


export default Footer;