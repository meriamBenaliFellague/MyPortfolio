
import React from 'react';
import './App.css';

import { FaFacebook } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
import {FaArrowRight} from 'react-icons/fa';
import {FaMobileAlt} from 'react-icons/fa';
import {FaDesktop} from 'react-icons/fa';
import {DiCode} from 'react-icons/di';
import {FaRegAddressBook} from 'react-icons/fa';
import {FaRegEnvelope} from 'react-icons/fa';
import {FaRegMap} from 'react-icons/fa';



function App() {

  return (
    <div className='app'>
      <header>
        <h3>MERIAM</h3>
      </header>
      <div className='home'>
        <div className='cont1'>
          <h4>Hello, <span className='span'>MY NAME IS</span></h4>
          <h1><span className='span'>MERIAM <br></br> </span> <span className='h1'>BENALI-FELLAGUE</span></h1>
          <h4 className='h4'>IAM <span className='D'>Developer</span></h4>
          <p>from Algeria, I'am a computer science student, Ihave a medium in WEB, MOBILE and DESKTOP development</p>
          <a href='https://web.facebook.com/meriam.mimi.02'><FaFacebook className='Fa'/></a>
          <a href='https://www.instagram.com/meriam.meriam_mimi/'><FaInstagram  className='Fa'/></a>
          <a href='https://github.com/meriamBenaliFellague'><FaGithub className='Fa'/></a>
          <br></br>
          <button>Download CV</button>
        </div>
        <div className='cont2'>
          <img src='./assets/profile-img (2).png' alt='profile-img' />
        </div>
      </div>
      <div className='services'>
        <div className='titel'>
          <h2>WHAT I DO</h2>
          <p><span className='span'>MY</span> <span className='D' >Services</span> </p>
        </div>
        <div className='web'>
          <DiCode className='faweb'/><p>WEB DEVELOPMENT</p>
          <h5>Front-End & Back-End</h5>
          <p className='P'>I Develop simple user interface using <span className='lang'>HTML CSS JS & REACT</span> 
           ,and i learn back end to <span className='lang'>NODEJS</span>.</p>
           <p className='p1'>See pricing <a href='https://github.com/meriamBenaliFellague/LoginRegisterPage'><FaArrowRight className='arrow'/></a></p>
        </div>
        <div className='mobile'>
          <FaMobileAlt className='famd'/><p>MOBILE APPLICATION</p>
          <h5>Ui & logic</h5>
          <p className='P'>I Develop user interface
           ,using <span className='lang'>DART</span></p>
           <p className='p'>See pricing <a href='https://github.com/meriamBenaliFellague/TicTacToeGame'><FaArrowRight className='arrow'/></a></p>
        </div>
        <div className='desktop'>
          <FaDesktop className='famd'/><p>DESKTOP APPLICATION</p>
          <h5>Ui & Logic</h5>
          <p className='P'>I Develop user interface
          ,usin <span className='lang'>C#</span>
           </p>
           <p className='p'>See pricing <a href='https://github.com/meriamBenaliFellague/MyFirstDisktopApp-Calculator-'><FaArrowRight className='arrow'/></a> </p>
        </div>
      </div>
      <div className='langtools'>
        <div className='title1'>
          <h2>Language And Tools</h2>
        </div>
        <div className='l1'>
          <img className='react' src='./assets/icons8-react-120.png' alt='react'/>
          <img className='njs' src='./assets/icons8-node-js-144.png' alt='njs'/>
          <img className='html' src='./assets/icons8-html-144.png' alt='html'/>
          <img className='css' src='./assets/icons8-css-144.png' alt='css'/>
        </div>
        <div className='l2'>
          <img className='c2' src='./assets/c-sharp-programming-language-icon.png' alt='C'/>
          <img className='c' src='./assets/icons8-c-144.png' alt='C#'/>
          <img className='js' src='./assets/icons8-js-144.png' alt='js'/>
          <img className='dart' src='./assets/icons8-dart-144.png' alt='DART'/>
        </div>
      </div>
      <div className='footer'>
         <div className='title2'>
          <h2>Contact Me</h2>
          <p><span className='span'>LET'S</span><span className='D'>Talk About Ideas</span></p>
         </div>
         <div className='ct1'>
           <div className='address'>
             <div className='iconad'>
             <FaRegMap/>
           </div>
           <div className='txt1'>
              <p><span className='txt'>Address</span></p>
              <p className='d'>Algeria, Chlef</p>
           </div>
           
          </div>
          <div className='email'>
            <div className='iconem'>
              <FaRegEnvelope/>
            </div>
            <div className='txt2'>
              <p><span className='txt'>Email</span></p>
              <p className='d'>be2430423@gmail.com</p>
            </div>
            
          </div>
          <div className='phone'>
            <div className='iconph'>
              <FaRegAddressBook/>
            </div>
            <div className='txt3'>
              <p><span className='txt'>Phone</span></p>
              <p className='d'>0555003026</p>
            </div>
            
          </div>
          
         </div>
         <form className='ct2'>
          <div className='fr1'>
            <label>YOUR FULL NAME<span className='span'>*</span></label>
              <br></br>
            <input type='text' name='name' placeholder="Your name"></input>
          </div>
          <div className='fr2'>
            <label>YOUR EMAIL ADDRESS<span className='span'>*</span></label>
            <br></br>
            <input type='email' name='email' placeholder="Your email"></input>
          </div>
          <div className='fr3'>
            <label>YOUR SUBJECT<span className='span'>*</span></label>
            <br></br>
            <input type='text' name='subject' placeholder="Your subject"></input>
          </div>
          <div className='fr4'>
            <label>YOUR MESSAGE<span className='span'>*</span></label>
            <br></br>
            <input type='text' name='message' placeholder="Your message"></input>
          </div>
          <div className='fr5'>
            <label><span className='d'>*Accept the terms and conditions</span></label>
            <button type='submit'>SEND MESSAGE</button>
          </div>
         </form> 
      </div>
    </div>
  );
};
export default App;
