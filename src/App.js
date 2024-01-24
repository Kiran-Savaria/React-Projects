import sitelogo from './images/newlogo.svg';
import './App.css';
import profilePic from './images/kiran.jpg';
import html from './images/html-5.svg';
import css from './images/css-3.svg';
import js from './images/javascript.svg';
import reactsvg from './images/react-1.svg';
import docker from './images/docker.svg';
import figma from './images/figma.svg';
import { PersonFill, InfoLg, Files, JournalText } from 'react-bootstrap-icons';


function Mybutton(){
  return(
    <a href='https://www.linkedin.com/in/kiran-b-savaria-454408123/' className='connect'>Let's Connect</a>
  );
}

const menuitems = ['Intro', 'About', 'Projects'];

const listItems = menuitems.map((menuitem) => {
  return (
     <li>{menuitem}</li>
  );
});

const skilllogos = [html, css, js, figma, docker, reactsvg];

const skillsLogo = skilllogos.map((skilllogo) => {
  return (
    <img src={skilllogo} alt='logo' className='logos' />
  );
});

function Homepage(){
  return (
  <div className='container light'>
    <header>
      <div className='container-boxed'>
        <img src={sitelogo} alt="logo" className='logo'/>
        <div className='heading-alt'>
          <ul className='menubar'>
            {listItems}
          </ul>
          <Mybutton />
        </div>
      </div>
    </header>
    
    <div className='heading'>
      <div className='boxed-container'>
        <div className='section-title col-2'>
          <h5>INTRODUCTION</h5>
          <hr className='divider'/>
          <PersonFill className='sectionIcon'/>
        </div>

        <div className='mainContentArea col-8'>
          <div className='profilePicHolder'></div>
          <div className='content'>
              <h1>Kiran Savaria</h1>
              <h4> Frontend/UIUX Developer with a 5-year track record, <br/> dedicated to crafting immersive and compelling <br/> user experiences.</h4>
              <h2>Key Skills:</h2>
              <span>
                {skillsLogo}
              </span>
          </div>
        </div>
      </div>
    </div>

    <div className='aboutSection'>
      <div className='rightContent boxed-container'>
        <div className='ContentArea'>
          <h1 className='centered'>About Me</h1>
          <h2>Basic Intro</h2>
          <p>
             My expertise lies mostly in web designing and development, building customer-centric, 
             immersive and innovative solutions in a most effective way and deliver it to the customers.
             Modern Problems doesn't necessarily require modern solutions, my approach is to hollistically 
             understand the current business trend and find the underlying problem and deliver the best 
             possible outcome to emphasize the market reach.
          </p>
        </div>
        <div className='section-title-alt'>
            <h5>ABOUT ME</h5>
            <hr className='divider'/>
            <InfoLg className='sectionIcon'/>
        </div>
      </div>
    </div>

   <div className='projectSection'>
     <div className='section-title'>
            <h5>PROJECTS</h5>
            <hr className='divider'/>
            <Files className='sectionIcon'/>
     </div>
      <div className='boxed-container'>
        <div>
          <h1 className='centered'>Projects</h1>
          <div className='projectsHolder'>
            <div> <a href='./projects/weatherApp.js'>Link 1</a>  </div>
            <div> Link 2 </div>
            <div> Link 3 </div>
          </div>
        </div>
      </div>
   </div>

   <div className='articleSection'>
     <div className='section-title-alt'>
            <h5>ARTICLES</h5>
            <hr className='divider'/>
            <JournalText className='sectionIcon'/>
     </div>
      <div className='boxed-container'>
        <div>
          <h1 className='centered'>Articles</h1>
          <div className='projectsHolder'>
            <div> <a href='https://medium.com/@kiransavaria/approach-to-redesign-jio-saavn-app-ui-for-better-usability-ux-case-study-7544cddc7bb5?source=social.linkedin'>Link 1</a></div>
            <div> Link 2 </div>
            <div> Link 3 </div>
          </div>
        </div>
      </div>
   </div>

    <div className='footer'>
      <p className='centered'>© 2023 Kiran Savaria. All Rights Reserved.</p>
    </div>
  </div>
  );
}

export default Homepage;