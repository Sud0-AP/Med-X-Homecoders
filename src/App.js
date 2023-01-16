import './App.css';
import Landingpage from './pages/Landingpage';
import UserProfile from './pages/UserProfile';
import Navbar from './components/Navbar';
import Doctors from './pages/Doctors';
import BookAppointment from './pages/BookAppointment';
import AboutUs from './pages/AboutUs';
import Appointments from './pages/Appointments';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import { useState, useEffect } from 'react';
import { ethers } from 'ethers';
import appointments from './abis/Appointments.json';
import patients from './abis/Patients.json';


function App() {

  const [provider,setProvider] = useState(null)
  const [account, setAccount] = useState(null)
  const [AppointmentsContract, setAppointments] = useState(null)
  const [PatientsContract, setPatients] = useState(null)

  const loadBlockchainData = async()=>{
    const provider = new ethers.providers.Web3Provider(window.ethereum)
    setProvider(provider)

    const network = await provider.getNetwork()

    const AppointmentsContract = new ethers.Contract(
      "0x5fbdb2315678afecb367f032d93f642f64180aa3",
      appointments,
      provider
    );
    setAppointments(AppointmentsContract)

    const PatientsContract = new ethers.Contract(
      "0x5fbdb2315678afecb367f032d93f642f64180aa3",
      patients,
      provider
    ); 
    setPatients(PatientsContract)

    window.ethereum.on("accountsChanged", async () => {
      const accounts = await window.ethereum.request({
        method: "eth_requestAccounts",
      });
      const account = ethers.utils.getAddress(accounts[0]);
      setAccount(account);
    });
  }

  useEffect(()=>{
    loadBlockchainData()
  },[])
  

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar account={account} setAccount={setAccount} />
        <Routes>
          <Route path="/" element={<Landingpage />} />
          <Route path="doctors" element={<Doctors provider={provider} AppointmentsContract={AppointmentsContract} PatientsContract={PatientsContract}/>} />
          <Route path="aboutus" element={<AboutUs />} />
          <Route
            path="userprofile"
            element={<UserProfile account={account} setAccount={setAccount} />}
          />
          <Route path="appointments" element={<Appointments />} />
          <Route path="userprofile" element={<UserProfile />} />
          <Route path="bookappointment" element={<BookAppointment />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
