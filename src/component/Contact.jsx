import React,{useState} from 'react';

const Contact = () => {
    const [formData, setFormData] = useState({
      name: '',
      email: '',
      message: '',
    });
  
    // Handle form input changes
    const handleInputChange = (e) => {
      const { name, value } = e.target;
      setFormData({
        ...formData,
        [name]: value,
      });
    };
  
    // Handle form submission
    const handleSubmit = (e) => {
      e.preventDefault();
      // You can add your form submission logic here
      console.log('Form data submitted:', formData);
      // Reset the form after submission if needed
      setFormData({
        name: '',
        email: '',
        message: '',
      });
    };
    return (
      <div id="contact" className="contact-container">
        <h2 className='contact-heading'>Contact Me</h2>
        <p className='contact-para'>Feel free to reach out to me using the information below:</p>
        
        <div className="contact-details">
          <p><img className="contact-img" src="data:image/png;base64,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" alt="email" />Email: khushbooranjan8252@gmail.com</p>
          <p><img className="contact-img" src="data:image/png;base64,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" alt="phone" />Phone: 8252932969</p>
          <p><img className="contact-img" src="data:image/png;base64,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" alt="" />LinkedIn: <a href="https://www.linkedin.com/in/khushboo-kumari-23814225b/" target="_blank" rel="noopener noreferrer">Khushboo Kumari</a></p>
          <p><img  className="contact-img"src="data:image/png;base64,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" alt="" /> GitHub: <a href="https://github.com/khushboo8252" target="_blank" rel="noopener noreferrer">khushboo8252</a></p>
        </div>
        <div className='container-form'>
       <div className='left-side'> <img className ="form-img" style={{width:"500px",height:"300px"}}src="https://www.omnimed.com/hubfs/R%C3%A9sultat-jpg.jpeg" alt="image" /></div>
        <div className='right-side'>
        <form onSubmit={handleSubmit}>
          <label>
            Name:
            <input
              type="text"
              name="name"
              placeholder='Enter Name'
              value={formData.name}
              onChange={handleInputChange}
              required
            />
          </label>
          <br /><br />
          <label>
            Email:
            <input
              type="email"
              name="email"
              placeholder='Enter Email'
              value={formData.email}
              onChange={handleInputChange}
              required
            />
          </label>
          <br /><br />
          <label>
            Message:
            <textarea
              name="message"
              placeholder='Your message'
              value={formData.message}
              onChange={handleInputChange}
              required
            />
          </label>
          <br /><br />
          <button type="send message">send message</button>
        </form>
        </div>
        </div>
        <div className='contact-end'>
          <h4>Designed and build by ❤️Khushboo Kumari, 2023 All right reserved.</h4>
        </div>
      </div>
     
    );
  }
  
 export default Contact; 
  
  