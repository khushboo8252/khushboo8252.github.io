const Home = () => {
    const downloadResume = () => {
      // Replace 'resume.pdf' with the actual path to your resume file
      const resumeFilePath = 'image/Resume.pdf';
  
      // Create a link element
      const link = document.createElement('a');
      link.href = resumeFilePath;
  
      // Specify the name of the downloaded file
      link.download = 'your_resume.pdf';
  
      // Append the link to the document body
      document.body.appendChild(link);
  
      // Trigger a click on the link to start the download
      link.click();
  
      // Remove the link from the document body
      document.body.removeChild(link);
    };
    return (
      <div id="home" className="home-container">
        <div className="left-section">
          <h1 className='heading1'>Hello  <img style={{width:"50px",height:"50px"}} src="https://media.tenor.com/yWSRmymbuBkAAAAC/waving-hi.gif" alt="animation hello" />,</h1>
          <h1 className='heading2'>I'am Khushboo</h1>
          <h1 className='heading3'>Full-Stack Developer</h1>
          <p className='home-para'>Creative thinker to achieve modern business requirements using technical
            solutions. Ability to develop production-ready code using HTML, CSS, JavaScript, Node.js, React,
            MongoDB,Mongo Atlas,and Express.js  with expressive user experience.
          </p>
          <button className="resume-button" onClick={downloadResume}> Resume</button>
          <div className="social-icons">
            <a href="https://www.linkedin.com/in/khushboo-kumari-23814225b/" target="_blank" rel="noopener noreferrer">
              <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAk1BMVEUAd7f///8Ac7UAdbYAcbQAbrMAe7q52OqWutihx+Dq9fpZp9Grx+BvqdBpo8x/rNHD3ez2+fxtsNZQoc00ksUYg76x0OVJmMikzOMyisCNvdwAerlHlMbU6PPi8PfK4u+IttdInsw3jcNensqav9u20OWCutqw1ejS4O7e6fJ5ttm93e0Shr/k8fdUmMg6iL+Yx+GUfaM3AAAIEElEQVR4nO2de3eiPhPHQybgSisFFRQQsdLf2ovavv9X94Cu1nqB4VaZPPn+sWd3zwH5MGGSTDITpp3KcVbD0dhlVOWOR8OV4/xgYid/N70HpguAez9nDQEInT145lVC05twQZnuIBB8csJ4JLStkN/72RoTDy37nHDqS2G/g0D405+EgSETXyYwglPCIJQNMEUMg2/CqXQWzATG9EBo+zICpoi+vSc0LXHvZ2lJwjJ3hJ6EH+FeEHoZoTmRpx88F5+YKaEnL2CK6GnMeZD1K8wkHhzmMFm/wkyQ8q30ez9Fq9JXbChzI02b6ZCNZG6kaTMdsbHkhGNGN2SBk+x8Sv+PAgCeinQ8LkcpnLFeTpJku/RdOeJypwKuu8mL14uj+SaKbe9xsBZSQXKePMbz01iyGf83kCgAKZY/4sgHSHsiiRl5+OVc8mVyVq4E41rgy/l1vp2eyTtWYKMbBvynd+KxSDDe8wE1re9SdjjAFkWAGSJhK/LBFR96LmdBNyAJ27diwLTbSKgSgtvDAGra/JMoIgxwgJr2RZMQ3AhLqPkk/an4iwbUVhTHNsARfvSoJcF2yp9LAGoBQSPq02Kub73RIwQo00g1Z0zO1/Dn4vHaKSG9ZlrGk2ayya3xiH45wldyNtSRI7YjIbnht/5ajjCiNocCQE0rvvVGrs8XZQnX1AjLt9J7P3FZ6V45wldyPb4IShLS6w+HpcY02pQcIazLjdoG5Hp8JvAz/FQmOUeTEr6XIeyRa6RZMy1DSHJ/nP5RopGSXGfj4xImJNcbZgKGjmNERLc4wgwbyKAa1ocwwPWJU+Pej1pV4KIGp5TzGWAdFwNGE7qAqT/1C0c284RiV/gt7tr5gNGMNmCKCF6eu7HX1AGziE1ws6XO+8R3YvwTTPqba3ymlxDt6S8ExvaS0fESl0sCmK0lGp/J9GSE46wGn9QCpAWCVMZyNAymq+B9NDaA/G6vK4LUlELouhCcy/L9KSkpKcmrXU+U9U9w/Jc0ynJWgIWGm+nz8zP90zCMMPvPFjmzXvCWbufP8Lyrboz2uAg/l1vr/atnx9EmHUI58yj+WE3/WtulG966qrb4Mnm6qWR5/d2Cux3cvsqaGZfRR86N2SD4iK7O1Zx49fI0Y21EZcFYxDl79Tfxy7VtiZD05jmzSjPqn6+Jg5j98a7THRVlmTqNMxrTonBb73IBXzxfnW2dKv4xbgcxLsLbv5q4P2m4rXJEPPGiNgqwvAyNf/o6Mb2Y9QpfyRFy2mgWC4wRS2yb5Kyd8hHmUQ8+CkQYlNtC9643Z0duYX77z9lLFV+YBz1u9UtKLVRmmo8a6yPFAvOD/bPtULjtVPvFHG6U3C+wk9NY3SfxB0VoVCbk65Lb5w6IXkNx9rYJUxdTCTCVPWtkQa9VQpEOJgrCzXmKGskPaNeG4Fe24A6xid2Q7drQLbWT/FJ2A0Zs14ZVvOgPefWN2CphUg9Py7LmaluxTcK/iKFdkd5q1/FqkxA9Es2TVzfw3iZhI3KG9QC7T6hFNVMfu0+oDaUnnNfb6UKAUKtXrowC4abWdJgCofZcp08kQVhr8y4JQqdOr0+DcFijmZIgrJUYSINwU6M2Ig1Cs0auBw1C7ZEIoTOP7WxZrVQAfKe4+sjt9wij4MlKZr7rL2fWYlpychxVnwj/FmE8WDLBgcOubiG4y3IBgBof4u8QviXu2SYyzlzU2sdB5ysnHSO0ry2XgUhKmPGx063UY9cfTyT4TGSvsqv5BcL+zXVrkaCDVdXzIdon7OXsItHR+YFR5WWa1gnns5yXD7BC3uZiGbozhM4gdzGX+9gbPVV1pm0TFnkIjk2BrBzeb5lwU3Q+CrqS01fVVe+WCYudvIvIu9rdqWqidbuE5qC4bSHdaa9qJKNdwtfifhq2uJnGR9UOsV3CfrED3B9pVKy4k4QmJtCJXAmPqlbHaZVwg9nYBKgnSEcOFbuLVglRtULEAJWKvNl2kRC1pMK3qF1vTicJUVX6YInrEavmy7dKiJrTYZ1pFwlN3IIKstKv1cFWiitDCAauXpXVQRt+4SY88EiWELk6LegSIgu+IAkHXSRUNixF2EkbKkL6hI1+h50klN+GilARdp9QeRpFqAgVYfuEytMoQkV4f0L1HSpCRagI2ydUnkYRKkJF2D6h8jSKUBHen1B9h4pQESrC9gmVp1GEivD+hOo7VISKUBG2T6g8jSJUhIqwfULlaRShIsTdfoHJ/nthdAm5hSm+sahXV7+AEJdEWrVsBPiI7L/5eWYcrk4AsqAj7iVXzgNm4qm4mb6c5/MC5lj2APvSDUybr36SAIT9goR4x1tf3BzGRcVznB66CAKfFeZYOl6NCvTABr1oY95S1Ftcq2bAZ9N4fvMic24HJWogcL+fdzMzsoN1nQKfINxZYt3SbH39cwJjfPsia+uXOr2Js2XOzcre7eov5OjWvXdlyW5fVe6R8m9W9m5KSl2TZOfBXshlNWqbUhCM2UhywhGrV9C88xJDtqpTC7v70lfMkfroYkj5HGQ8iKbEg8M0r5GTrzoq7mlMM2ufRdNd8YmZEmpeEydfdVIQelpGaBbVLiQrkR3emBLWqN/abe3rL2WEl+eISiEwdrXs2D6MI+GnCOH+VDdWN1LVVcHh8M9/hNrUb+O05LsJhH8ot3gg1GwrlKdf5KF1DEAeCTXTm3Ap7AiCT7zvGO83Ycb4wHRBOm4FIHT24J3GsE8JNc1xVsPRuGpF3vvLHY+GK+fnMsT/AGVwtGamRw9dAAAAAElFTkSuQmCC" alt="LinkedIn" />
            </a>
            <a href="https://github.com/khushboo8252" target="_blank" rel="noopener noreferrer">
              <img src="data:image/png;base64,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" alt="GitHub" />
            </a>
          </div>
        </div>
        <div className="right-section">
          <img src="./image/Profile .png" alt="Your Photo" />
        </div>
      </div>
    );
  }
  export default Home;