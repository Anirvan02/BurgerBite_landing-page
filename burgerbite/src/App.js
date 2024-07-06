import React from 'react';
import './App.css';

function Header() {
  return (
    <header className="header">
      <a href="#" className="logo">
        <img src="images/logo 1.png" alt="" />
      </a>
      <nav class="navbar">
        <div id="close" class="fas fa-times"></div>
          <a href="#" class="nav_item">Home</a>
          <a href="#About" class="nav_item">About</a>
          <a href="#Menu" class="nav_item">Menu</a>
          <a href="#Contact" class="nav_item">Contact</a>
      </nav>
      <div id="menu" class="fas fa-bars"></div>
    </header>
  );
}

function Home() {
  return (
    <div className="home">
      <div class="content">
            <h1 class="title"><span>Your</span> ultimate <span>burger</span> destination!</h1>
            <p class="description">Indulge your taste buds at our burger paradise; Where every bite is a flavorful adventure. Learn more about us!</p>
            <a href="#About" class="btn">About us</a>
        </div>
        <div class="image">
            <img src="images/home.png" alt="" data-speed="-3" class="move"/>
        </div>
    </div>
  );
}

function About() {
  return (
    <div className="about" id="About">
      <h1 class="abt-heading">&mdash; ABOUT US &mdash;</h1>
        <div class="abt-image">
            <img src="images/Hamburger.jpg"/>
            <img src="images/Burger n fries.jpg"/>
            <img src="images/Beef burger.jpg"/>
        </div>
        <div class="abt-content">
            <h3>What makes our Burger special?</h3>
            <p> What makes our burger truly special is the meticulous attention we pay to every ingredient and detail that goes into crafting it. 
                    We start with the finest quality, locally sourced meat, ensuring that every patty is not only succulent but also ethically and sustainably raised. 
                    Our secret blend of spices, hand-selected for their unique flavor profiles, is then expertly seasoned into the meat, creating a mouthwatering 
                    sensation that sets our burger apart.</p>
            <p> But it doesn't stop there; our commitment to excellence extends to our freshly baked brioche buns, which are made daily by skilled 
                    artisans to ensure that perfect combination of softness and crispiness that elevates every bite. Explore our menu now!</p>
            <a href="#Menu" class="abt-btn">Explore menu</a>
        </div>
    </div>
  );
}

function Menu() {
  return (
    <div>
      <div className="heading" id="Menu">
        <h1>SAVOR THE FLAVOR</h1>
        <h3>&mdash; MENU &mdash;</h3>
      </div>
      <div className="menu">
      <div class="food-items">
            <img src="images/Burger n fries.jpg"/>
            <div class="details">
                <div class="details-sub">
                    <h5>Burger & Fries</h5>
                    <h5 class="price"> ₹230 </h5>
                </div>
                <p>An ultimate and juicy food combo, grilled patty topped with fresh ingredients, accompanied by crispy, golden fries.</p>
                <button>Order item</button>
            </div>
        </div>
        <div class="food-items">
            <img src="images/Hamburger.jpg"/>
            <div class="details">
                <div class="details-sub">
                    <h5>Smoky Hamburger</h5>
                    <h5 class="price"> ₹200 </h5>
                </div>
                <p>A juicy, grilled patty, smoky and savory. Topped with melted cheese and fresh ingredients, it's a flavor explosion in every bite.</p>
                <button>Order item</button>
            </div>
        </div>
        <div class="food-items">
            <img src="images/cheeseburger.png"/>
            <div class="details">
                <div class="details-sub">
                    <h5>Cheese Burger</h5>
                    <h5 class="price"> ₹150 </h5>
                </div>
                <p>A perfectly grilled patty draped in melted cheese, topped with fresh ingredients, creating a timeless flavor symphony in every bite.</p>
                <button>Order item</button>
            </div>
        </div>
        <div class="food-items">
            <img src="images/Beef burger.jpg"/>
            <div class="details">
                <div class="details-sub">
                    <h5>Beef Burger</h5>
                    <h5 class="price"> ₹220 </h5>
                </div>
                <p>A succulent, expertly grilled patty that's the epitome of burger perfection, creating a delicious masterpiece with every mouthwatering bite.</p>
                <button>Order item</button>
            </div>
        </div>
        <div class="food-items">
            <img src="images/Rajma burger.png"/>
            <div class="details">
                <div class="details-sub">
                    <h5>Rajma (Kidney beans) Burger</h5>
                    <h5 class="price"> ₹180 </h5>
                </div>
                <p>A delightful blend of spiced rajma patty, fresh veggies, and zesty sauces, crafting a delectable vegetarian delight in every bite.</p>
                <button>Order item</button>
            </div>
        </div>
        <div class="food-items">
            <img src="images/Lamb burger.png"/>
            <div class="details">
                <div class="details-sub">
                    <h5>Lamb Burger</h5>
                    <h5 class="price"> ₹200 </h5>
                </div>
                <p>A perfectly seasoned lamb meat patty , grilled to perfection, and garnished with fresh ingredients for an exquisite taste in every bite.</p>
                <button>Order item</button>
            </div>
        </div>
      </div>
      <a href="#" className="btn">
        See More
      </a>
    </div>
  );
}

function Contact() {
  return (
    <div className="contact-container" id="Contact">
      <h1>&mdash; CONTACT US &mdash;</h1>
        <div class="contact-info">
            <p>Phone: +123-456-7890</p>
            <p>Email: example@email.com</p>
        </div>
        <div class="links">
            <a href="">Terms of Service</a>
            <a href="">Privacy Policy</a>
            <a href="">Help and Support</a>
        </div>
        <div class="social-icons">
            <a href="#"><i class="fa-brands fa-facebook"></i></a>
            <a href="#"><i class="fa-brands fa-twitter"></i></a>
            <a href="#"><i class="fa-brands fa-instagram"></i></a>
            <a href="#"><i class="fa-brands fa-linkedin"></i></a>
        </div>
        <div class="copyright">
            <p>Made with 💛 by Anirvan Pandey</p>
        </div>
    </div>
  );
}

function App() {
  window.onload = function(){ 
    let navbar = document.querySelector('.header .navbar')

    document.querySelector('#menu').onclick = () =>{
      navbar.classList.add('active');
    }
  
    document.querySelector('#close').onclick = () =>{
      navbar.classList.remove('active');
    }
    
    gsap.from('.logo', {opacity: 0, duration: 1, delay: 1, y:10})
    gsap.from('.navbar .nav_item', {opacity: 0, duration: 1, delay: 1, y:30, stagger: 0.2})
    gsap.from('.title', {opacity: 0, duration: 1, delay: 1, y:30})
    gsap.from('.description', {opacity: 0, duration: 1, delay: 1, y:30})
    gsap.from('.btn', {opacity: 0, duration: 1, delay: 1, y:30})
    gsap.from('.image', {opacity: 0, duration: 1, delay: 1, y:30})
    gsap.from('#menu', {opacity: 0, duration: 1, delay: 1, y:10})
  };
 
  return (
    <div>
      <Header />
      <Home />
      <About />
      <Menu />
      <Contact />
    </div>
  );
}

export default App;