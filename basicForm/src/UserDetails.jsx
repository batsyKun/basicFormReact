import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const UserDetails = () => {
  const { id } = useParams(); 
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:8000/dogs/${id}`)
      .then(response => response.json())
      .then(data => {
        setUserData(data); 
        console.log(data)
      });
  }, [id]);
    return ( 
        <div>
      {userData ? (
 <div>
 <h2>User Details</h2>
 <p><strong>Name:</strong> {userData.name}</p>
 <p><strong>Email:</strong> {userData.email}</p>
 <p><strong>Phone:</strong> {userData.phone}</p>
 <p><strong>Address:</strong> {userData.address}</p>
 <p><strong>Dog Name of Interest:</strong> {userData.dog_name}</p>
 <p><strong>Experience with Dogs:</strong> {userData.experience}</p>
 <p><strong>Home Info:</strong> {userData.home_info}</p>
 <p><strong>Other Pets:</strong> {userData.other_pets}</p>
 <p><strong>Why Adopt:</strong> {userData.why_adopt}</p>
 <p><strong>Agreement:</strong> {userData.agreement ? 'Agreed' : 'Not Agreed'}</p>
 <p><strong>Selected Dog</strong> {userData.selectedDog}</p>
</div>      ) : (
        <p>Loading user data...</p>
      )}
    </div>
  );
};

 
export default UserDetails;