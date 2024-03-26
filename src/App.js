import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './Component/Header/Header';
import Contact from './Component/Contact/Contact';
import Contactlist from './Component/Contactlist/Contactlist';
import Editcontact from './Component/Editcontact/Editcontact';

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Contact />}/>
          <Route path="contactlist" element={<Contactlist />}/>
          <Route path="editcontact/:id" element={<Editcontact />}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
