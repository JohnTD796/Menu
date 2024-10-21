import './index.css'
import { Outlet } from 'react-router-dom';
import Nav from './components/nav/nav';

function App() {

  return (
    <div>
      <Nav />
      <div className='flex justify-center'>
        <Outlet />
      </div>
    </div>
  )
}

export default App
