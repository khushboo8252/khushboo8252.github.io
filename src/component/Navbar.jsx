
import {  animateScroll as scroll } from 'react-scroll';
const Navbar = () => {
    const downloadResume = () => {
      const resumeFilePath = '/image/Resume.pdf';
      const link = document.createElement('a');
      link.href = resumeFilePath;
      link.download = 'resume.pdf';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    };
  
    const scrollToTop = () => {
      scroll.scrollToTop();
    };
  
    return (
      <nav className="navbar">
        <div className='navbar-left' onClick={scrollToTop}>
          <img style={{width:"60px",height:"60px"}} src="https://i.pinimg.com/originals/31/cd/58/31cd588617453838f221c9a5030fe126.png" alt="logo" />
        </div>
        <ul>
          <li>
            <a href='#home'>Home</a>
          </li>
          <li>
          <a href='#about'>About</a>
          </li>
          <li>
          <a href='#skills'>Skills</a>
          </li>
          <li>
          <a href='#projects'>Projects</a>
          </li>
          <li>
          <a href='#github'>GitHub</a>
          </li>
          <li>
          <a href='#contact'>Contact</a>
          </li>
          <li>
            <a href="#resume" onClick={downloadResume}>
              Resume
            </a>
          </li>
        </ul>
      </nav>
    );
  };

  export default Navbar;