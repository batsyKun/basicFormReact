import { useState } from 'react';
import { Link } from 'react-router-dom';
import DogDetails from './DogDetails';
import Agreement from './Agreement';

const Form = () => {
  const [userID, setUserID] = useState(''); 

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    dog_name: '',
    experience: 'no',
    home_info: '',
    other_pets: '',
    why_adopt: '',
    agreement: false,
    selectedDog: '' 
  });
  
  const handleSubmit = async(e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:8000/dogs', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        console.log('Application submitted successfully');
        response.json().then((data) => {
          setUserID(data.id)
          console.log(data)
        })
      } else {
        console.error('Application submission failed');
      }
    } catch (error) {
      console.error('An error occurred:', error);
    }
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const newValue = type === 'checkbox' ? checked : value;
    setFormData((prevData) => ({
      ...prevData,
      [name]: newValue
    }));
  };
    return (
      <>
      <h1>Dog Adoption Application</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Your Name:</label>
        <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required /><br />

        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required /><br />

        <label htmlFor="phone">Phone Number:</label>
        <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} required /><br />

        <label htmlFor="address">Address:</label>
        <input type="text" id="address" name="address" value={formData.address} onChange={handleChange} required /><br />

        <label htmlFor="dog_name">Dog Name of Interest:</label>
        <input type="text" id="dog_name" name="dog_name" value={formData.dog_name} onChange={handleChange} required /><br />

        <label>Experience with Dogs (if any):</label>
        <input type="radio" id="experience_yes" name="experience" value="yes" checked={formData.experience === 'yes'} onChange={handleChange} />
        <label htmlFor="experience_yes">Yes</label>
        <input type="radio" id="experience_no" name="experience" value="no" checked={formData.experience === 'no'} onChange={handleChange} />
        <label htmlFor="experience_no">No</label><br />

        <label htmlFor="home_info">Information about your Home (e.g., yard size, living situation):</label>
        <select id="home_info" name="home_info" value={formData.home_info} onChange={handleChange} required>
          <option value="" disabled>Select an option</option>
          <option value="house">House</option>
          <option value="apartment">Apartment</option>
          <option value="condo">Condo</option>
          <option value="other">Other</option>
        </select><br />

        <label htmlFor="other_pets">Do you have other pets? If yes, please provide details:</label>
        <textarea id="other_pets" name="other_pets" rows="4" value={formData.other_pets} onChange={handleChange}></textarea><br />

        <label htmlFor="why_adopt">Why do you want to adopt a dog? What do you expect from your new companion?:</label>
        <textarea id="why_adopt" name="why_adopt" rows="4" value={formData.why_adopt} onChange={handleChange} required></textarea><br />
        <Agreement handleChange={handleChange} formData={formData} />
        <DogDetails handleChange={handleChange} formData={formData}></DogDetails>

        <input type="submit" value="Submit Application" /><br />
      </form>
      <Link to = {`/userDetails/${userID}`}>
      <button>ViewDetails</button>
      <h1>{userID}</h1>
      </Link>
      </>
    );
  }
  
  export default Form;
  