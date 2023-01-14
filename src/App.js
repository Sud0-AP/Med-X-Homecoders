import './App.css';
import Landingpage from './pages/Landingpage';
import UserProfile from './pages/UserProfile';
import Navbar from './components/Navbar';
import Doctors from './pages/Doctors';
import BookAppointment from './pages/BookAppointment';
import AboutUs from './pages/AboutUs';
import Appointments from './pages/Appointments';
import {BrowserRouter, Routes, Route} from 'react-router-dom'


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Landingpage/>} />
        <Route path='doctors' element={<Doctors/>} />
        <Route path='aboutus' element={<AboutUs/>} />
        <Route path='userprofile' element={<UserProfile/>} />
        <Route path='appointments' element={<Appointments/>} />
        <Route path='userprofile' element={<UserProfile/>} />
        <Route path='bookappointment' element={<BookAppointment/>} />
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
