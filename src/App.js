import React from 'react';
import Navbar from './components/general/Navbar';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/pages/homePg';
import Life from './components/pages/lifePg';
import Entertainment from './components/pages/entertainPg';
import ExplorePg from './components/landmark/explorePg';
import LandmarkMap from './components/landmark/LandmarkMap';
import ArtworkMap from './components/landmark/ArtworkMap';
import Quizzes from './components/pages/quizzesPg';
import SlangQuiz from './components/pages/slangQuizPg';
import EnglishQuiz from './components/pages/englishQuiz';
import Bank from './components/pages/bankPg';
// import Footer from "./components/general/Footer";
import VocabPg from './components/pages/VocabPg';
import WriteCheck from './components/pages/WriteCheckPg';
import Diet from './components/pages/dietPg';
import { RecipeReq } from "./components/recipe/recipeReqHandler";
import { MenuPlanner } from './components/menuplan/menuplanHandler';
import PTV from './components/pages/ptvPg';
import ScrollToTop from "./components/general/scrollToTop.js"
import Transport from './components/pages/tranportPg';
import MusicMap from './components/landmark/MusicMap';
function App() {
  return (
    <div className='App'>
    <Router>
      <ScrollToTop/>
      <Navbar />
      <Routes>
        <Route path='/' exact element={<Home/>} />
        <Route path='/life' element={<Life/>} />
        <Route path='/entertainments' element={<Entertainment/>} />
        <Route path='/explore-melb' element={<ExplorePg/>} />
        <Route path='/landmark-map' element={<LandmarkMap/>} />
        <Route path='/artwork-map' element={<ArtworkMap/>} />
        <Route path='/music-map' element={<MusicMap/>} />
        <Route path='/slang' element={<SlangQuiz/>} />
        <Route path='/english-quiz' element={<EnglishQuiz/>} />
        <Route path='/catch-keyword' element={<VocabPg />}/>
        <Route path='/writing' element={<WriteCheck />}/>
        <Route path='/diet' element={<Diet/>} />
        <Route path='/recipe' element={<RecipeReq/>} />
        <Route path='/ptv' element={<PTV/>} />
        <Route path='/bank' element={<Bank/>} />
        <Route path='/meal-plan' element={<MenuPlanner/>} />
        <Route path='/transport' element={<Transport/>} />\
      </Routes>
    </Router>

    {/* <div><Footer/></div> */}
    
    </div>
  );
}

export default App;
