function Contact() {
  return (
    <div id="contact" className="contact">
      <h2>Contact Me</h2>
      <p className="contact-subtitle">Interested in working together? Let's get in touch!</p>
      
      <div className="contact-info">
        <div className="contact-item">
          <span className="contact-icon">📧</span>
          <div className="contact-details">
            <strong>Email:</strong>
            <a href="mailto:memoona.tahira@gmail.com">memoona.tahira@gmail.com</a>
          </div>
        </div>
        
        <div className="contact-item">
          <span className="contact-icon">📱</span>
          <div className="contact-details">
            <strong>Phone:</strong>
            <a href="tel:+46707282609">+46 707 28 26 09</a>
          </div>
        </div>
        
        <div className="contact-item">
          <span className="contact-icon">📍</span>
          <div className="contact-details">
            <strong>Location:</strong>
            <span>Stockholm, Sweden</span>
          </div>
        </div>
        
        <div className="contact-item">
          <span className="contact-icon">💼</span>
          <div className="contact-details">
            <strong>LinkedIn:</strong>
            <a href="https://www.linkedin.com/in/memoona-tahira-a325411bb" target="_blank" rel="noopener noreferrer">
              Connect with me
            </a>
          </div>
        </div>
        
        <div className="contact-item">
          <span className="contact-icon">💻</span>
          <div className="contact-details">
            <strong>GitHub:</strong>
            <a href="https://github.com/memoona-tahira" target="_blank" rel="noopener noreferrer">
              @memoona-tahira
            </a>
          </div>
        </div>
      </div>
      
      <a href="mailto:memoona.tahira@gmail.com" className="button contact-button">
        Send Email
      </a>
    </div>
  );
}

export default Contact;