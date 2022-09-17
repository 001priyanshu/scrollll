// import logo from './logo.svg';
// import './App.css';

import JustReleased from "./components/JustReleased";
import Trending from "./components/Trending";
import Artist from "./components/Artist";
import { BrowserRouter, Routes , Route} from "react-router-dom";

function App() {
  return (
   <>
   <BrowserRouter>
   <Routes>
     <Route path='/trending' element={ < Trending /> }/>
     <Route path='/just-released' element={ < JustReleased /> }/>
     <Route path='/artist' element={ < Artist /> }/>
   </Routes>
   </BrowserRouter>
   </>
  );
}

export default App;
