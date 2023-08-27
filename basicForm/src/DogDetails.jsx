import { useEffect, useState } from "react";
import DogsList from "./DogsList";
const DogDetails = ({ handleChange, formData }
    ) => {
    const [dogs, setDogs] = useState(null);

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await fetch('http://localhost:3000/dogs');
                const data = await response.json();
                setDogs(data);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        }

        fetchData();
    }, []);

    return (
        
        <div>
            {dogs && (
                <div className="dog-Details" >
                    <DogsList handleChange={handleChange} formData={formData} dogs={dogs[1]} />
                    <DogsList handleChange={handleChange} formData={formData} dogs={dogs[2]} />
                    <DogsList handleChange={handleChange} formData={formData} dogs={dogs[3]} />
                    <DogsList handleChange={handleChange} formData={formData} dogs={dogs[4]} />
                    <DogsList handleChange={handleChange} formData={formData} dogs={dogs[5]} />
                    <DogsList handleChange={handleChange} formData={formData}  dogs={dogs[6]} />
                </div>
            )}
        </div>
    );
    

};

export default DogDetails;
