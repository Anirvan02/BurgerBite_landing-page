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
