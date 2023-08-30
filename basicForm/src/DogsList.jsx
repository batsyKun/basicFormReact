
const DogsList = ({dogs, handleChange, formData}) => {

    return ( 
        
        <div>
            {dogs ? (
                <div className="Dog">
                    <input type="radio" 
                        name="selectedDog"
                        id={`dog-${dogs.name}`}
                        value={dogs.name}
                        disabled={!dogs.isAvailable}
                        checked={formData.selectedDog === dogs.name} 
                        onChange={handleChange}/>
                        

                    <label htmlFor={`dog-${dogs.name}`}>
                    <img src={dogs.image} alt={dogs.name} />
                    <h2>{dogs.name}</h2>
                    <p>Breed: {dogs.breed}</p>
                    <p>Age: {dogs.age} years</p>
                    <p>Gender: {dogs.gender}</p>
                    <p>Size: {dogs.size}</p>
                    <p>Color: {dogs.color}</p>
                    <p>Description: {dogs.description}</p>
                    {dogs.isAvailable ? <p>Available</p> : <p>Not Available</p>}
                    </label>
                </div>
            ) : (
                // <p>Loading...</p>
                <></>
            )}
        </div>
    );
}
 
export default DogsList;
