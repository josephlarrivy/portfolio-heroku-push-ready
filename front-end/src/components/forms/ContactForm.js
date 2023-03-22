import { useState } from "react";
import ApiRequest from "../../api";


import './ContactForm.css'

const ContactForm = () => {

  const INITIAL_STATE = {
    'name': '',
    'email': '',
    'message': '',
  }

  const [formData, setFormData] = useState(INITIAL_STATE)
  // const navigate = useNavigate();

  const handleChange = evt => {
    const { name, value } = evt.target;
    setFormData(data => ({
      ...data,
      [name]: value
    }));
  };

  const handleSubmit = async (evt) => {
    evt.preventDefault();
    const request = await ApiRequest.sendMessage(formData)
    setFormData(INITIAL_STATE)
  }


  return (
    // <form onSubmit={handleSubmit}>
    <form onSubmit={handleSubmit}>

    <div className="name-container">
      <label htmlFor="name" className="col-md-6">Name: </label>
      <br></br>
      <input
        required
        id={formData.name}
        type="text"
        name="name"
        // placeholder="name"
        value={formData.name}
        onChange={handleChange}
        className="name-input"
      />
    </div>
        
    <div className="email-container">
      <label htmlFor="email" className="col-md-6">Email: </label>
      <br></br>
      <input
        required
        id={formData.email}
        type="text"
        name="email"
        // placeholder="email"
        value={formData.email}
        onChange={handleChange}
        className="email-input"
      />
    </div>
        
    <div className="message-container">
      <label htmlFor="message" className="col-md-6">Message: </label>
      <br></br>
      <textarea
        required
        id={formData.message}
        type="textarea"
        name="message"
        // placeholder="message"
        value={formData.message}
        onChange={handleChange}
        className="message-input"
      />
    </div>
        

        <button className="submit-button">Submit</button>
    </form>
  )
}

export default ContactForm;