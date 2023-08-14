import { useState } from 'react'
import './App.css'

function App() {

  return (
    <>
    <h1>Dog Adoption Application</h1>
    <form action="URL" method="post">
        <label for="name">Your Name:</label>
        <input type="text" id="name" name="name" required></input><br></br>
        <label for="email">Email:</label>
        <input type="email" id="email" name="email" required></input><br></br>
        <label for="phone">Phone Number:</label>
        <input type="tel" id="phone" name="phone" required></input><br></br>
        <label for="address">Address:</label>
        <input type="text" id="address" name="address" required></input><br></br>
        <label for="dog_name">Dog Name of Interest:</label>
        <input type="text" id="dog_name" name="dog_name" required></input><br></br>
        <label>Experience with Dogs (if any):</label>
        <input type="radio" id="experience_yes" name="experience" value="yes"></input><br></br>
        <label for="experience_yes">Yes</label>
        <input type="radio" id="experience_no" name="experience" value="no"></input><br></br>
        <label for="experience_no">No</label>
        <label for="home_info">Information about your Home (e.g., yard size, living situation):</label>
        <select id="home_info" name="home_info" required>
            <option value="" disabled selected>Select an option</option>
            <option value="house">House</option>
            <option value="apartment">Apartment</option>
            <option value="condo">Condo</option>
            <option value="other">Other</option>
        </select>
        <label for="other_pets">Do you have other pets? If yes, please provide details:</label>
        <textarea id="other_pets" name="other_pets" rows="4"></textarea><br></br>
        <label for="why_adopt">Why do you want to adopt a dog? What do you expect from your new companion?:</label>
        <textarea id="why_adopt" name="why_adopt" rows="4" required></textarea><br></br>
        <label for="agreement">I agree to the terms and conditions:</label>
        <input type="checkbox" id="agreement" name="agreement" required></input><br></br>
        <input type="submit" value="Submit Application"></input><br></br>
    </form>
    </>
  )

}

export default App
