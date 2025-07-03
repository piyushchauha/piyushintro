import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS CSS
import 'bootstrap/dist/css/bootstrap.min.css';import 'bootstrap/dist/js/bootstrap.bundle.min'; // Import Bootstrap's JavaScript bundle
import '../Assets/css/aos.css'; // Re-import AOS CSS for clarity in React context
import '../Assets/css/line-awesome.min.css'; // Import Line Awesome CSS
import '../Assets/css/style.css'; // Import your custom style.css

// Import images
import profile from '../Assets/images/Profile.jpeg';
// import project1 from '../Assets/images/project-1.jpg';
// import project2 from '../Assets/images/project-2.png';
// import project3 from '../Assets/images/project-3.png';
// import project4 from '../Assets/images/project-4.png';
import carvistahome from '../Assets/images/carvistahome.png';
import amazonhome from '../Assets/images/amazonhome.png';
import Reactjs from '../Assets/images/Reactjs.png'
import Nodejs from '../Assets/images/Nodejs.png'
import ExpressJS from '../Assets/images/Expressjs.png'
import Mongodb from '../Assets/images/Mongodb.png'
import Html from '../Assets/images/Html.png'
import Css from '../Assets/images/Css.png'
import Redux from '../Assets/images/Redux.png'
import Mui from '../Assets/images/Mui.png'
import tcssoftskill from '../Assets/images/Chauhan_Piyush_tcs softskill_page-0001.jpg'
import tatacybersecurity from '../Assets/images/Piyush Chauhan Cybersecurity Analyst Job Simulation_page-0001.jpg'
import Piyushchauhancv from '../Assets/Pdf/piyushchauhancv.pdf';
// NO LONGER NEEDED if using Bootstrap's native ScrollSpy
// import ScrollSpy from 'react-scrollspy';

const Homepage = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
    // Initialize Bootstrap's scrollspy.
    // Ensure window.bootstrap is available before attempting to use it.
      if (window.bootstrap) {
      // Remove the 'const scrollSpy =' part
      new window.bootstrap.ScrollSpy(document.body, {
        target: '.navbar',
        offset: 70
      });

      // Clean up function if component unmounts (Bootstrap 5's ScrollSpy doesn't
      // have an explicit 'dispose' method often used for simple unmounts)
      // If you notice issues with ScrollSpy on re-renders/unmounts,
      // consider a more complex cleanup or using a React-specific scrollspy library.
      return () => {
        // You generally don't need to explicitly dispose Bootstrap 5's ScrollSpy
        // unless you're dynamically adding/removing elements.
      };
    } else {
      console.warn("Bootstrap JavaScript not fully loaded. ScrollSpy may not function correctly.");
    }
  }, []);

  return (
    <div id="content-wrapper">
      {/* NAV BAR */}
      <nav className="navbar navbar-expand-lg navbar-dark fixed-top">
        <div className="container flex-lg-column">
          {/* FIX: Change href="#" to href="#home" or "/" for proper navigation */}
          <a className="navbar-brand mx-lg-auto mb-lg-4" href="#home">
            <span className="fw-bold h3 d-block d-lg-none">Piyush Chauhan</span>
            <img
              src={profile}
              className="d-none d-lg-block rounded-circle profilepic"
              alt="Piyush Chauhan"
            />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto flex-lg-column text-lg-center">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#home">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#services">Skills</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#work">Work</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#certifications">Certifications</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#about">About</a>
              </li>
              
             
            </ul>
          </div>
        </div>
      </nav>
      {/* //NAV BAR */}

      {/* HOME SECTION */}
      <section id="home" className="full-hight px-lg-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-10">
              <h1 className="text-uppercase display-4 fw-bold" data-aos="fade-up">
                I'm  Piyush Chauhan, a skilled
                <span className="text-brand"> Mern Stack developer</span>
              </h1>
              <p
                className="lead mt-2 mb-3 fs-3"
                data-aos="fade-up"
                data-aos-delay="300"
              >
                I'm delighted to have you here. Explore my work and discover the
                world of innovative solutions I've crafted.
              </p>
              <div data-aos="fade-up" data-aos-delay="600">
          <a href="#work" className="btn btn-brand fw-bold me-4">
            EXPLORE MY WORK
          </a>
          <a href="tel:+918200933298" className="custom-link num me-4">
            Call: +91 8200933298
          </a>
          <a href="mailto:piyushchauhan840@gmail.com" className="custom-link email">
            Email: piyushchauhan840@gmail.com
          </a>
        </div>
            </div>
          </div>
        </div>
      </section>
      {/* //HOME SECTION */}

      {/* SERVICES */}
    <section id="services" className="full-hight px-lg-5">
  <div className="container">
    <div className="row p-4"  style={{display:'flex',justifyContent:'center'}}>
      <div className="col-md-8 "data-aos="fade-up">
        <h1 >My Skills</h1>
      </div>
    </div>

    <div className="row gy-4">
      {/* ReactJS */}
      <div className="col-md-3" data-aos="fade-up">
        <div className="bg-base p-4 rounded-4 shadow-effect text-center skill-card">
          <div className="centered-img-container">
            <img src={Reactjs} alt="ReactJS" />
          </div>
          <h5 className="mt-3">ReactJS</h5>
        </div>
      </div>

      {/* NodeJS */}
      <div className="col-md-3" data-aos="fade-up" data-aos-delay="100">
        <div className="bg-base p-4 rounded-4 shadow-effect text-center skill-card">
          <div className="centered-img-container">
            <img src={Nodejs} alt="NodeJS" />
          </div>
          <h5 className="mt-3">NodeJS</h5>
        </div>
      </div>

      {/* ExpressJS */}
      <div className="col-md-3" data-aos="fade-up" data-aos-delay="200">
        <div className="bg-base p-4 rounded-4 shadow-effect text-center skill-card">
          <div className="centered-img-container">
            <img src={ExpressJS} alt="ExpressJS" />
          </div>
          <h5 className="mt-3">ExpressJS</h5>
        </div>
      </div>

      {/* MongoDB */}
      <div className="col-md-3" data-aos="fade-up" data-aos-delay="300">
        <div className="bg-base p-4 rounded-4 shadow-effect text-center skill-card">
          <div className="centered-img-container">
            <img src={Mongodb} alt="MongoDB" />
          </div>
          <h5 className="mt-3">MongoDB</h5>
        </div>
      </div>

      {/* HTML */}
      <div className="col-md-3" data-aos="fade-up">
        <div className="bg-base p-4 rounded-4 shadow-effect text-center skill-card">
          <div className="centered-img-container">
            <img src={Html} alt="HTML" />
          </div>
          <h5 className="mt-3">HTML</h5>
        </div>
      </div>

      {/* CSS */}
      <div className="col-md-3" data-aos="fade-up" data-aos-delay="100">
        <div className="bg-base p-4 rounded-4 shadow-effect text-center skill-card">
          <div className="centered-img-container">
            <img src={Css} alt="CSS" />
          </div>
          <h5 className="mt-3">CSS</h5>
        </div>
      </div>

      {/* Redux */}
      <div className="col-md-3" data-aos="fade-up" data-aos-delay="200">
        <div className="bg-base p-4 rounded-4 shadow-effect text-center skill-card">
          <div className="centered-img-container">
            <img src={Redux} alt="Redux" />
          </div>
          <h5 className="mt-3">Redux</h5>
        </div>
      </div>

      {/* MUI */}
      <div className="col-md-3" data-aos="fade-up" data-aos-delay="300">
        <div className="bg-base p-4 rounded-4 shadow-effect text-center skill-card">
          <div className="centered-img-container">
            <img src={Mui} alt="MUI" />
          </div>
          <h5 className="mt-3">MUI</h5>
        </div>
      </div>
    </div>
  </div>
</section>


      {/* //SERVICES */}

    {/* WORK */}
<section id="work" className="full-hight px-lg-5">
  <div className="container gy-4">
    <div className="row p-4">
      <div className="col-md-8 mx-auto text-center" data-aos="fade-up">
        <h1>My  Projects</h1>
      </div>
    </div>
    {/* Monster Gym Project */}
    <div className="row gy-4">
      {/* CarVista Project */}
      <div className="col-12 col-md-10 col-lg-8 mx-auto mb-5" data-aos="fade-up">
        <div className="card rounded-4 bg-base shadow-effect">
          <div className="img rounded-4">
            <img src={carvistahome} className="rounded-4 w-100" alt="CarVista Project" />
          </div>
          <div className="card-content p-3">
            <h4>CarVista – Buy & Sell Cars Platform</h4>
            <p className="text-white">
Developed a comprehensive full-stack web application inspired by Cars24 using the MERN stack (MongoDB, Express.js, React, Node.js).
Key features include dynamic car listings, real-time car price estimation, test drive booking functionality, and inspection scheduling. The platform also incorporates a secure, role-based admin dashboard for efficient management of users, car inventories, and transactional workflows.

            </p>
            <a
              href="https://carvistafront-iwxb.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="custom-link btn btn-brand mt-2"
            >
              View Live
            </a>
          </div>
        </div>
      </div>
    
       <div className="col-12 col-md-10 col-lg-8 mx-auto mb-5" data-aos="fade-up">
        <div className="card rounded-4 bg-base shadow-effect" >
          <div className="img rounded-4">
            <img src={amazonhome} className="rounded-4 w-100" alt="Amazon frontpage ui " />
          </div>
          <div className="card-content p-3">
            <h4>Amazon-Front page UI</h4>
            <p className="text-white">
             This project is a static replica of Amazon’s front page, created using pure HTML and CSS. It mimics the basic layout and appearance of the Amazon India home screen, focusing on the user interface without any JavaScript or backend integration.
The purpose of the project is to practice layout structuring, flexbox/grid systems, and modern CSS styling by recreating a complex and widely used e-commerce homepage.
            </p>
            <a
              href="https://amazon-nq9h-git-main-piyushchauhas-projects.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="custom-link btn btn-brand mt-2"
            >
              View Live
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
{/* CERTIFICATIONS */}
<section id="certifications" className="full-hight px-lg-5">
  <div className="container gy-4" >
    <div className="row p-4" style={{display:'flex',justifyContent:'center'}}>
      <div className="col-md-8" data-aos="fade-up">
        <h1>CERTIFICATIONS</h1>
      </div>
    </div>

    <div className="row gy-3 h6" style={{display:'flex',justifyContent:'center'}}>
      {/* Certification 1 */}
      <div className="col-lg-4" data-aos="fade-up" data-aos-delay="300">
        <div className="p-4 shadow-effect bg-base py-4 rounded-4 text-center">
          <div className="mb-3">
            <i className="las la-certificate fs-2"></i>
          </div>
          <img
            src={tatacybersecurity}
            alt="Tata Cybersecurity anlyst stimulation course"
            className="img-fluid rounded mb-3"
            style={{ maxHeight: '180px', objectFit: 'cover' }}
          />
          <p>
            Completed the <strong>Cybersecurity	Analyst	Job	Simulation</strong> issued by Tata
          </p>
          <div className="person">
            <h3>Issued by: Tata</h3>
            <p>June 2025</p>
          </div>
        </div>
      </div>

     
      {/* Certification 3 */}
      <div className="col-lg-4" data-aos="fade-up" data-aos-delay="900">
        <div className="p-4 shadow-effect bg-base py-4 rounded-4 text-center">
          <div className="mb-3">
            <i className="las la-certificate fs-2"></i>
          </div>
          <img
            src={tcssoftskill}
            alt="TCS Softskills"
            className="img-fluid rounded mb-3"
            style={{ maxHeight: '180px', objectFit: 'cover' }}
          />
          <p>
            Completed <strong>TCS ION Career Edge-Young Professionals</strong> 
          </p>
          <div className="person">
            <h3>Issued by: TCSION</h3>
            <p>sept 2023</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

{/* //CERTIFICATIONS */}

      {/* ABOUT */}
    <section id="about" className="full-hight px-lg-5">
  <div className="container gy-4">
    <div className="row p-4" style={{display:'flex',justifyContent:'center'}}>
      <div className="col-md-8" data-aos="fade-up">
        <h1>Education</h1>
      </div>
    </div>

    <div className="row mb-4 gy-4">
      {/* Internship Card */}
      <div className="col-md-4" data-aos="fade-up" data-aos-delay="100">
        <div className="bg-base p-4 rounded-4 shadow-effect h-100 d-flex flex-column justify-content-between">
          <div>
            <h5 className="mb-3">MERN Stack Developer Intern</h5>
            <p><strong>Company:</strong> Brainsquare Technology</p>
            <p><strong>Duration:</strong> 7 months</p>
          </div>
        </div>
      </div>

      {/* College Card */}
      <div className="col-md-4" data-aos="fade-up" data-aos-delay="200">
        <div className="bg-base p-4 rounded-4 shadow-effect h-100 d-flex flex-column justify-content-between">
          <div>
            <h5 className="mb-3">Shree Chimanbhai Patel Institute of Computer Applications</h5>
            <p><strong>Duration:</strong> 2022 – 2025</p>
            <p><strong>Total CGPA:</strong> 7.7</p>
          </div>
        </div>
      </div>

      {/* School Card */}
      <div className="col-md-4" data-aos="fade-up" data-aos-delay="300">
        <div className="bg-base p-4 rounded-4 shadow-effect h-100 d-flex flex-column justify-content-between">
          <div>
            <h5 className="mb-3">Divine Life School</h5>
            <p><strong>X:</strong> 73.8%</p>
            <p><strong>XII:</strong> 78.5%</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

      {/* //ABOUT */}


     

      {/* FOOTER */}
      <footer className="px-lg-5 py-4">
        <div className="container m-4">
          <div className="row justify-content-between gy-4">
            <div className="col-auto mb-0">
              <p>Designed By Piyush Chauhan</p>
            </div>
            <div className="social-icons col-auto">
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"><i className="lab la-linkedin-in"></i></a>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer"><i className="lab la-github"></i></a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><i className="lab la-instagram"></i></a>
            </div>
          </div>
        </div>
      </footer>
      {/* //FOOTER */}
      <a
  href={Piyushchauhancv}
  target="_blank"
  rel="noopener noreferrer"
  className="floating-resume-btn"
  title="Check Resume"
>
  <i className="las la-file-alt me-2"></i> Check Resume
</a>
    </div>
  );
};

export default Homepage;
