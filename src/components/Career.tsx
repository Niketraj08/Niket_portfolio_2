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
                <h4>Full Stack Developer Intern</h4>
                <h5>Codsoft</h5>
              </div>
              <h3>2025</h3>
            </div>
            <p>
              Successfully developed and deployed 2+ full-stack applications using React.js, focusing on clean code and modularity. Built secure backend systems with Node.js and MongoDB, and translated complex Figma wireframes into responsive, high-performance user interfaces.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Web Developer</h4>
                <h5>Astra Coginx Solutions Pvt. Ltd.</h5>
              </div>
              <h3>2025</h3>
            </div>
            <p>
              Contributed to the development of Mpro, an enterprise-scale insurance operations platform. Focused on building reusable UI components with React.js and supported the backend team in migrating core services to Node.js microservices, ensuring seamless platform performance.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Full Stack Developer </h4>
                <h5>Astra Coginx Solutions Pvt. Ltd.</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
              Building Solid, a proprietary low-code platform using React.js,
              Node.js, NestJS. Delivering production-ready CMS-based projects
              including e-commerce, CRM, and import-export automation systems.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
