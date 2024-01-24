import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Homepage from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import WeatherApp from './projects/weatherApp';
import ChangeBackground from './projects/changeBackground';
import ProductDetail from './projects/productDetail';
import FindIp from './projects/findip';
import GeneratePassword from './projects/generatePassword';
import CountryFlag from './projects/countryFlags';
import ColorPallete from './projects/colorapallete';
import NutritionData from './projects/nutrition';
import BibleVerse from './projects/generateVerse';
import Timer from './projects/timer';
import Counter from './projects/counter';
import AdviceGenerator from './projects/advice';
import QuizGenerator from './projects/quiz';
import Getimages from './projects/images';
import Postcard from './projects/postcard';

function PortfolioApp(){
    return(
      <BrowserRouter>
        <Routes>
          <Route path='/' element={ <Homepage /> }> </Route>
          <Route path='/weather' element={ <WeatherApp/> } />
          <Route path='/changebg' element={ <ChangeBackground/> } />
          <Route path='/productDetail' element={ <ProductDetail /> } />
          <Route path='/findip' element={ <FindIp /> } />
          <Route path='/generatepassword' element={ <GeneratePassword /> } />
          <Route path='/countryflags' element={ <CountryFlag /> } />
          <Route path='/colorpallete' element={ <ColorPallete /> } />
          <Route path='/nutrition' element={ <NutritionData /> } />
          <Route path='/generateverse' element={ <BibleVerse /> } />
          <Route path='/timer' element={ <Timer/> } />
          <Route path='/counter' element={ <Counter /> } />
          <Route path='/getquiz' element={ <QuizGenerator /> } />
          <Route path='/getadvice' element={ <AdviceGenerator/> } />
          <Route path='/getimages' element={ <Getimages/> } />
          <Route path='/postcard' element={ <Postcard/> } />
        </Routes>
      </BrowserRouter>
    );
}

export default PortfolioApp;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(  <PortfolioApp /> );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
