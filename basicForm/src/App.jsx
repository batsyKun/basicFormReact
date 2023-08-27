import './App.css'
import Form from './Form'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import UserDetails from './UserDetails';
// import DogDetails from './DogDetails';

function App() {

  return (
      <Router>
          <Routes>
            <Route path='/' element={<Form />} />
            <Route path='/userDetails/:id' element={<UserDetails/>}/>
            {/* <Route path='/DogDetails' element={<DogDetails />}/> */}
          </Routes>
    </Router>
  )

}

export default App
