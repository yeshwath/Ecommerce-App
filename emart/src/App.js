import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import LandingPage from '../src/stores/pages/LandingPage';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import MobilePage from './stores/pages/MobilePage';
import ComputerPage from './stores/pages/ComputerPage';
import WatchPage from './stores/pages/WatchPage';
import MenPage from './stores/pages/MenPage';
import WomanPage from './stores/pages/WomanPage';
import FurniturePage  from './stores/pages/FurniturePage';
import KitchenPage from './stores/pages/KitchenPage';
import FridgePage from './stores/pages/FridgePage';
import AcPage from './stores/pages/AcPage';
import TvPage from './stores/pages/TvPage';
import SpeakerPage from './stores/pages/SpeakerPage';
import MobileSingle from './stores/singles/MobileSingle';
import UserCart from './stores/userCart';
function App() {
  return (
    
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path='/mobiles' element= {<MobilePage />} />
        <Route path='/computers' element= {<ComputerPage />} />
        <Route path='/watch' element= {<WatchPage />} />
        <Route path='/men' element= {<MenPage />} />
        <Route path='/Woman' element= {<WomanPage />} />
        <Route path='/furniture' element= {<FurniturePage />} />
        <Route path='/kitchen' element= {<KitchenPage />} />
        <Route path='/fridge' element= {<FridgePage />} />
        <Route path='/ac' element= {<AcPage />} />
        <Route path='/tv' element= {<TvPage />} />
        <Route path='/speaker' element= {<SpeakerPage />} />
        <Route path='/mobiles/:id' element = {<MobileSingle />} />
        <Route path='/cart' element = {<UserCart />} />



        












        


        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
