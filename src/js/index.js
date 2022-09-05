import '../assets/css/index.css';
import '../assets/css/customers.css';
import '../assets/css/common.css';
import '../assets/css/packages.css';

import customer1 from '../assets/images/customer-1.jpg';
import customer2 from '../assets/images/customer-2.jpg';
import customer3 from '../assets/images/customer-3.jpg';

import snapshot from '../assets/images/HostCorps.png';

import '../assets/fonts/UniSansHeavyCAPS.woff';
import '../assets/fonts/UniSansHeavyCAPS.woff2';
import '../assets/fonts/anonymousPro-Bold.ttf';
import '../assets/fonts/anonymousPro-Regular.ttf';

var backdrop = document.querySelector('.backdrop');
var modal = document.querySelector('.modal');
var modalNoButton = document.querySelector('.modal__action--negative');
var selectPlanButtons = document.querySelectorAll('.plan button');
var toggleButton = document.querySelector('.toggle-button');
var closeBtn = document.querySelector('.closebtn')
var mobileNav = document.querySelector('.mobile-nav');
var ctaButton = document.querySelector('.main-nav__item--cta');
var selectPlanButtons = document.querySelectorAll('.plan button');


for (var i = 0; i < selectPlanButtons.length; i++) {
  selectPlanButtons[i].addEventListener('click', function () {
    modal.classList.add('open-modal');
    backdrop.style.display = 'block';
    setTimeout(function () {
      backdrop.classList.add('open');
    }, 20);
  });
}

if (modalNoButton) {
  modalNoButton.addEventListener('click', closeModal);
}

function closeModal() {
  if (modal) {
    modal.classList.remove('open-modal');
  }
  backdrop.style.display = 'none';
  setTimeout(function () {
    backdrop.classList.remove('open');
  }, 10);
}

function revealUpwards() {
  var reveals = document.querySelectorAll('.reveal-upwards');

  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 150;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add('active');
    } else {
      reveals[i].classList.remove('active');
    }
  }
}

function revealSideways() {
  const reveals = document.querySelectorAll('.reveal-sideways');

  for (var i = 0; i < reveals.length; i++) {
    const windowHeight = window.innerHeight;
    const elementTop = reveals[i].getBoundingClientRect().top;
    const elementVisible = 150;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add('active');
    } else {
      reveals[i].classList.remove('active');
    }
  }
}

function openNavigation() {
  document.getElementById('mySidebar').style.width = '260px';
  document.querySelector('main').style.marginLeft = '260px';
}

function closeNavigation() {
  document.getElementById('mySidebar').style.width = '0px';
  document.querySelector('main').style.marginLeft = '0px';
}


toggleButton.addEventListener('click', openNavigation);


closeBtn.addEventListener('click', closeNavigation);

window.addEventListener('DOMContentLoaded', revealUpwards);

window.addEventListener('scroll', revealUpwards);

window.addEventListener('scroll', revealSideways);

backdrop.addEventListener('click', function () {
  closeModal();
});

if (ctaButton) {
  ctaButton.addEventListener('animationstart', function (event) {});

  ctaButton.addEventListener('animationend', function (event) {});

  ctaButton.addEventListener('animationiteration', function (event) {});
}
