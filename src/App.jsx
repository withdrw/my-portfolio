import './App.css';
import './assets/logo.svg'
import semi from './assets/semi circle.svg'
import squiggly from './assets/squiggly.svg'
import triangle from './assets/triangle.svg'
import logo from './assets/syed-zaidi-logo.png'
import adjust from './assets/adjust-solid.svg'
import netflix from './assets/Screenshot_2023-03-29_160447.png'
import ecom from './assets/Screenshot_2023-03-29_160803.png'
import forum from './assets/Screenshot_2023-03-29_160931.png'
import  emailjs  from '@emailjs/browser';
import reactIMG from './assets/react4.png'


function App() {

  const scaleFactor = 1/20;
  let isModalOpen = false;
  let contrastToggle = false; 

 
  
  function toggleContrast(){
    contrastToggle = !contrastToggle;
    if ( contrastToggle) {
        document.body.classList += "dark-theme"
    }
    else  {
        document.body.classList.remove("dark-theme")
    }
}




function contact(event){
  event.preventDefault();
  const loading = document.querySelector('.modal__overlay--loading')
  const success = document.querySelector('.modal__overlay--success')
  loading.classList +=  " modal__overlay--visible"

  emailjs.sendForm(
      'service_oqv9az3', 
      'template_szpuk9m',
      event.target,
      '9I-PqnWEOw6bFzT02'
  ).then(() =>{
      loading.classList.remove("modal__overlay--visible");
      success.classList += "modal__overlay--visible";
  }).catch(() => {
      loading.classList.remove("modal__overlay--visible");
      alert( 
          'The email service is temporarily unavailable. Please contact me on my email'
      );
  })
  // console.log(success)
  // console.log(loading)
}




  function moveBackground(event){
    const shapes = document.querySelectorAll(".shape")
    const x = event.clientX * scaleFactor; 
    const y = event.clientY * scaleFactor;

    for (let i = 0; i < shapes.length; ++i){
        const isOdd = i % 2 !==0;
        const boolInt = isOdd ? -1 : 1;
        shapes[i].style.transform = `translate(${x *boolInt }px, ${y * boolInt}px)`
    }}


    function toggleModal(event){
      event.preventDefault()
      if (isModalOpen) { 
          isModalOpen = false;
          return document.body.classList.remove("modal--open");
      }
      isModalOpen = true;
      document.body.classList += " modal--open";
      
  }


  return (
    <div className="App">
      <section id="landing-page" onMouseMove={(event) => moveBackground(event)} >
      <nav>
        <figure>
          <img id="personal-logo" src={logo} alt="" />
        </figure>
        <ul className="anchor__links">
          <li className="nav__link" onClick={(event) => toggleModal(event)}>
            <a
              className="nav__link--anchor link__hover-effect link__hover-effect--black"
              href="/"
              >About</a
            >
          </li>
          <li className="nav__link" >
            <a
              className="nav__link--anchor link__hover-effect link__hover-effect--black"
              href="#projects"
              >Projects</a
            >
          </li>
          <li className="nav__link" onClick={(event) => toggleModal(event)}>
            <a
              className="nav__link--anchor link__hover-effect link__hover-effect--black"
              href="/"
              >Contact</a
            >
          </li>

          <div className='contrast' onClick={() => toggleContrast()}>
                <img className='contrast__img' src={adjust} alt="" />
          </div>
          
            
        </ul>
      </nav>

      <header className="header">
        <div className="header__content">
          <h1 className="title">Hey</h1>
          <h1 className="title title--secondary">I'm Syed</h1>
          <p className="header__para">
            I'm a <b className="orange">Frontend Software Engineer </b>with a strong
            passion for building web applications with great user experiences.
            <br />
            Here's a bit more <b className="orange click"  onClick={(event) => toggleModal(event)}>about me.</b>
          </p>
        </div>
      </header>
      <a href="/">
      <button className="mail__btn click" onClick={(event) => toggleModal(event)}> <i className="fas fa-envelope"></i> </button>
      </a>
      <a href="#projects" className="scroll">
        <div className="scroll__icon click"></div>
      </a>
      <div className="modal">
      <div className="modal__half modal__about"><h3 className="modal__title modal__subtitle--about">Here's a bit about me.
      </h3>
      <h4 className="modal__sub-title modal__subtitle--about">Frontend software engineer
      </h4>
      <p className="modal__para">
        I'm a 22 year-old Pakistani <b className="orange"> frontend software engineer</b> with a strong passion for developing websites with great <b className="orange"> user experiences. </b>
        I currently just work on basic websites that are easy to walkthrough, also learning from other frontend engineers on how to solve <b className="orange"> harder problems and get a better understanding. </b>
      </p>
      <div className="modal__languages">
        <figure className="modal__language">
          <img className="modal__language--img" src="https://cdn-icons-png.flaticon.com/512/732/732190.png" alt="" />
          <span className="language__name">CSS</span>
        </figure>
        <figure className="modal__language">
          <img className="modal__language--img" src="https://cdn-icons-png.flaticon.com/512/5968/5968292.png" alt=""/>
          <span className="language__name">JS</span>
        </figure>
        <figure className="modal__language">
          <img className="modal__language--img" src="https://cdn-icons-png.flaticon.com/512/1216/1216733.png" alt="" />
          <span className="language__name">HTML</span>
        </figure>
        <figure className="modal__language">
          <img className="modal__language--img" src="https://cdn-icons-png.flaticon.com/512/1216/1216733.png" alt="" />
          <span className="language__name">Next JS</span>
        </figure>
        <figure className="modal__language">
          <img className="modal__language--img" src={reactIMG} alt="" />
          <span className="language__name">React </span>
        </figure>
      </div>
      </div>
      <div className="modal__half modal__contact">
        <i className="fas fa-times modal__exit click "  onClick={(event) => toggleModal(event)}></i>

        <h3 className="modal__title modal__title--contact">
          Let's have a chat !
        </h3>
        
        <h3 className="modal__sub-title modal__sub-title--contact">
          I'm currently open for new opportunities.
        </h3>
        <form id="contact__form" onSubmit={(e) => contact(e)}>
          <div className="form__item">
            <label className="form__item--label">Name</label>
            <input type="text" name="user_name" className="input" />
          </div>
          <div className="form__item">
            <label className="form__item--label">Email</label>
            <input type="email" name="user_email" className="input" />
          </div>
          <div className="form__item">
            <label className="form__item--label">Message</label>
          <textarea className="input " name="message" id="" cols="30" rows="10"></textarea> 
          </div>
          <button id="contact__submit" className="form__submit">Send it my way</button>
        </form>
        <div className="modal__overlay modal__overlay--loading">
          <i className="fas fa-spinner"></i>
        </div>
        <div className="modal__overlay modal__overlay--success">
          Thanks for the message ! Looking forward to speaking with you soon.
        </div>
      </div>
    </div>
    <img src={semi} className="shape shape--0" alt=''/>
    <img src={semi} className="shape shape--1" alt=''/>
    <img src={squiggly} className="shape shape--2" alt=''/>
    <img src={semi} className="shape shape--3" alt='' />
    <img src={triangle} className="shape shape--4" alt='' />
    <img src={semi} className="shape shape--5" alt='' />
    <img src={squiggly} className="shape shape--6" alt=''/>
    <img src={semi} className="shape shape--7" alt='' />
    <img src={semi} className="shape shape--8" alt='' />
    </section> 

    <section id="projects">
      <div className="conatiner">
        <div className="row">
          <h1 className="section__title">
            Here are some of my <span className="orange"> projects.</span>
          </h1>
          <ul className="project__list">
            <li className="project">
            <div className="project__wrapper">
              <img src={netflix} className="project__img"  alt="" />
              <div className="project__wrapper--bg"></div>
              <div className="project__description">
                <h3 className="project__description--title">
                  Netflix clone
                </h3>
                <h4 className="project__description--sub-title">
                  HTML, CSS, JavaScript
                </h4>
                <p className="project__description--para">
                  A simple Netflix clone , getting backend data from the Netflix AND Youtube API to show the movies and trailers. Also first time adding a checkout / pay option using Stripe.
                </p>
              </div>
            </div>
            </li>
            <li className="project">
            <div className="project__wrapper">
              <img src={ecom} className="project__img"  alt="" />
              <div className="project__wrapper--bg"></div>
              <div className="project__description">
                <h3 className="project__description--title">
                 E-commerce Project
                </h3>
                <h4 className="project__description--sub-title">
                  HTML, CSS, JavaScript.
                </h4>
                <p className="project__description--para">
                  A simple website that gets backend data to let users look for certain books , the prices and the ratings. 
                </p>
              </div>
            </div>
            </li>
            <li className="project">
            <div className="project__wrapper">
              <img src={forum} className="project__img"  alt="" />
              <div className="project__wrapper--bg"></div>
              <div className="project__description">
                <h3 className="project__description--title">
                 Forum 
                </h3>
                <h4 className="project__description--sub-title">
                  HTML, CSS, JavaScript.
                </h4>
                <p className="project__description--para">
                  A forum like Reddit , to let users chat and discuss different kind of topics, using the firebase library to store user accounts and information.
                </p>
              </div>
            </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
    <footer>
      <div className="container">
        <div className="row footer__row">
        <figure>
          <img src="./assets/logo.svg" className="footer__logo--img" alt="" / >
        </figure>
        <div className="footer__social--list">
          <a target="blank" href="https://github.com/withdrw" className="
          footer__social--link 
          link__hover-effect
          link__hover-effect--white">
          Github
          </a>
          <a target="blank" href="https://LinkedIn.com" className="
        footer__social--link
        link__hover-effect
        link__hover-effect--white
          ">
          LinkedIn
          </a>
          <a target="blank" href="https://gmail.com" className="
          footer__social--link 
          link__hover-effect
          link__hover-effect--white
          ">
          Email
          </a>
        </div>
        <div className="footer__copyright">Copyright 2022</div>
      </div>
    </div>
    </footer>
    </div>
  );
}

export default App;
