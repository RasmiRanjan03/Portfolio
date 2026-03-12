import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>MERN Stack Developer</h4>
                <h5>Intern at CTTC,BBSR</h5>
              </div>
              <h3>2024</h3>
            </div>
            <p>
              Built multiple full-stack web applications using MongoDB, Express.js, React.js, and Node.js. Implemented authentication systems, REST APIs, and responsive UI for scalable applications.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>AI & ML Developer</h4>
                <h5>Complete AIML course in CTTC</h5>
              </div>
              <h3>2025</h3>
            </div>
            <p>
              Developed intelligent applications integrating Machine Learning concepts, including an AI-powered library management system with OCR for automated book data extraction.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Full Stack & AI Developer
</h4>
                <h5>ClimaCare</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
              Building innovative solutions including **ClimaCare**, a sustainability-focused platform featuring smart waste management with a dustbin finder, AI-based prediction of upcoming diseases for healthcare awareness, and carbon emission prediction with actionable solutions to reduce environmental impact.

            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
