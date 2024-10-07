import './styles/App.css'
import Form from './Form/Form'
import FormStarter from './Form/'


import { Route, Routes } from 'react-router-dom';
import Home from './Home';
import Events from './Events/';

function App() {

  return (
    <div className=''>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/qr-desk' element={<Events/>} />
        <Route path='/form' element={<FormStarter/>} />
        <Route path='/form/1' element={<Form/>}/>
      </Routes>
    </div>
  )

}
 
export default App