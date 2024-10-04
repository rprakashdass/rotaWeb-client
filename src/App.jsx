import './App.css'
import Form from './Form/Form'
import FormStarter from './Form/FormStarter'


import { Route, Routes } from 'react-router-dom';
import Home from './Home';

function App() {

  return (
    <div className='app'>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/form' element={<FormStarter/>} />
        <Route path='/form/1' element={<Form/>}/>
      </Routes>
    </div>
  )

}
 
export default App