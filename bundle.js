(()=>{"use strict";var n={676:(n,e,t)=>{t.d(e,{Z:()=>h});var i=t(81),r=t.n(i),o=t(645),a=t.n(o),l=t(667),s=t.n(l),d=new URL(t(835),t.b),c=new URL(t(108),t.b),m=a()(r());m.push([n.id,"@import url(https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,400;1,100&display=swap);"]),m.push([n.id,"@import url(https://fonts.googleapis.com/css2?family=Anton&display=swap);"]),m.push([n.id,"@import url(https://fonts.googleapis.com/css2?family=Montserrat:wght@500&display=swap);"]);var g=s()(d),p=s()(c);m.push([n.id,"@font-face {\n  font-family: 'Uni Sans Heavy CAPS';\n  src: url("+g+") format('woff2'),\n    url("+p+") format('woff');\n  font-weight: 900;\n  font-style: normal;\n  font-display: swap;\n}\n\n* {\n  -webkit-box-sizing: border-box;\n  box-sizing: border-box;\n  font-family: 'Uni Sans Heavy CAPS';\n}\n\n:root {\n  --lightest-green: #5ccc11;\n  --dark-green: #0e4f1f;\n  --light-dark: #292522;\n  --dark: #1c1917;\n  --darkest: #000000;\n  --white-highlight: #f9f9f9;\n  --light-grey: #ccc;\n  --grey-grey: #595959;\n  --highlight-color: #fa923f;\n  --highlight-light-color: #fbc79e;\n  --highlight-cyan: #8df7e6;\n  --highlight-danger-color: #ff0000;\n  --highlight-red: #ff5454;\n}\n\nhtml,\nbody {\n  width: 100%;\n  margin: 0px;\n  padding: 0px;\n}\n\nhtml {\n  height: 100%;\n  background-color: var(--dark);\n  font-size: 100%;\n}\n\nbody {\n  font-family: 'Montserrat', sans-serif;\n  -webkit-box-sizing: border-box;\n  box-sizing: border-box;\n}\n\n@supports (display: grid) {\n  body {\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box;\n    display: -ms-grid;\n    display: grid;\n    -ms-grid-rows: 3.5rem auto fit-content(8rem);\n    grid-template-rows: 3.5rem auto fit-content(8rem);\n    height: 100%;\n    padding-top: 0;\n    grid-template-areas:\n      'header'\n      'main'\n      'footer';\n  }\n}\n\nmain {\n  -ms-grid-row: 2;\n  -ms-grid-column: 1;\n  transition: margin-left 1s;\n  grid-area: main;\n}\n\n.backdrop {\n  position: fixed;\n  z-index: 100;\n  height: 100vh;\n  width: 100vw;\n  background-color: rgba(0, 0, 0, 0.5);\n  top: 0;\n  left: 0;\n  -webkit-transition: opacity 0.2s linear;\n  -o-transition: opacity 0.2s linear;\n  transition: opacity 0.2s linear;\n  opacity: 0;\n  display: none;\n}\n\n.main-header {\n  background-color: var(--darkest);\n  padding: 0.125rem 0.5rem;\n  width: 100%;\n  top: 0;\n  left: 0;\n  z-index: 2;\n  position: fixed;\n  display: flex;\n  -webkit-box-align: center;\n  -ms-flex-align: center;\n  align-items: center;\n  -webkit-box-pack: justify;\n  -ms-flex-pack: justify;\n  justify-content: space-between;\n}\n\n.toggle-button {\n  width: 3rem;\n  background: transparent;\n  border: none;\n  cursor: pointer;\n  padding-top: 0;\n  padding-bottom: 0;\n  vertical-align: middle;\n  display: none;\n}\n\n.toggle-button__bar {\n  width: 100%;\n  height: 0.2rem;\n  background-color: var(--white-highlight);\n  display: block;\n  margin: 0.6rem 0;\n}\n\n.main-header__brand svg {\n  vertical-align: middle;\n}\n\n.main-header-corporate-brand {\n  display: flex;\n  cursor: pointer;\n  align-items: center;\n  text-decoration: none;\n}\n\n.main-header-corporate-brand h1 {\n  font-family: 'Uni Sans Heavy CAPS';\n  font-size: 1.2rem;\n  color: var(--white-highlight);\n}\n\n.main-header-corporate-brand span {\n  font-family: 'Uni Sans Heavy CAPS';\n  font-size: 3rem;\n  color: var(--white-highlight);\n}\n\n.main-nav {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n}\n\n.main-nav__items {\n  margin: 0;\n  padding: 0;\n  list-style: none;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n}\n\n.main-nav__item {\n  margin: 0 1rem;\n}\n\n.main-nav__item a {\n  text-decoration: none;\n  color: var(--white-highlight);\n  font-weight: bold;\n  padding: 0.1875rem 0;\n}\n\n.main-nav__item a:hover,\n.main-nav__item a:active {\n  color: var(--white-highlight);\n  border-bottom: 5px solid var(--white-highlight);\n}\n\n.main-nav__item--cta {\n  margin-right: 0.1rem;\n  -webkit-animation: bounce 0.3s infinite alternate;\n  -moz-animation: bounce 0.3s infinite alternate;\n  animation: bounce 0.3s infinite alternate;\n\n  -webkit-animation-iteration-count: 6;\n  -moz-animation-iteration-count: 6;\n  animation-iteration-count: 6;\n}\n\n.main-nav__item--cta a {\n  color: var(--white-highlight);\n  background: var(--highlight-color);\n  padding: 0.5rem 1rem;\n  border-radius: 8px;\n}\n\n.main-nav__item--cta a:hover,\n.main-nav__item--cta a:active {\n  color: var(--highlight-color);\n  background: var(--white-highlight);\n  border: none;\n}\n\n.footerprincipal {\n  -ms-grid-row: 3;\n  -ms-grid-column: 1;\n  background: var(--darkest);\n  color: var(--white-highlight);\n  width: 100%;\n  margin-top: 3rem;\n  padding-top: 1rem;\n  grid-area: footer;\n  bottom: 0;\n}\n\n.signature {\n  position: relative;\n  overflow: hidden;\n}\n\n.signature p {\n  cursor: default;\n  margin: 0;\n  -moz-transform: translateX(100%);\n  -webkit-transform: translateX(100%);\n  transform: translateX(100%);\n  -moz-animation: slide-left-signature 9.5s linear infinite;\n  -webkit-animation: slide-left-signature 9.5s linear infinite;\n  animation: slide-left-signature 9.5s linear infinite;\n}\n\n.signature span {\n  font-family: 'Montserrat';\n}\n\n.footerprincipal__links {\n  list-style: none;\n  padding: 0px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n  -ms-flex-direction: row;\n  flex-direction: row;\n  -webkit-box-pack: center;\n  -ms-flex-pack: center;\n  justify-content: center;\n}\n\n.footerprincipal__link {\n  margin: 0 3rem;\n}\n\n.footerprincipal__link a {\n  color: var(--white-highlight);\n  text-decoration: none;\n}\n\n.footerprincipal__link a:hover,\n.footerprincipal__link a:active {\n  color: var(--light-grey);\n}\n\n.footerprincipal p {\n  text-align: right;\n}\n\n.button {\n  background-color: var(--darkest);\n  color: var(--white-highlight);\n  font: inherit;\n  border: 1.5px solid var(--darkest);\n  padding: 0.5rem;\n  border-radius: 8px;\n  font-weight: bold;\n  cursor: pointer;\n  outline: none;\n}\n\n.button:hover,\n.button:active {\n  background: var(--white-highlight);\n  color: var(--darkest);\n}\n\n.button:focus {\n  outline: none;\n}\n\n.button[disabled] {\n  cursor: not-allowed;\n  border: var(--grey-grey);\n  background: var(--light-grey);\n  color: var(--grey-grey);\n}\n\n.open {\n  display: block !important;\n  opacity: 1 !important;\n}\n\n.open-modal {\n  display: block !important;\n  opacity: 1 !important;\n  background: var(--white-highlight) !important;\n}\n\n.selected a {\n  color: var(--grey-grey);\n  pointer-events: none;\n}\n\n.reveal-upwards {\n  position: relative;\n  transform: translateY(150px);\n  opacity: 0;\n  transition: 2s all ease;\n}\n\n.reveal-upwards.active {\n  transform: translateY(0);\n  opacity: 1;\n}\n\n.reveal-sideways {\n  position: relative;\n  transform: translateX(-300px);\n  opacity: 0;\n  transition: 2s all ease;\n}\n\n.reveal-sideways.active {\n  transform: translateY(0);\n  opacity: 1;\n}\n\n.sidebar {\n  height: 100%;\n  width: 0;\n  position: fixed;\n  z-index: 101;\n  top: 0;\n  left: 0;\n  background-color: var(--light-dark);\n  overflow-x: hidden;\n  transition: 1s;\n  padding-top: 60px;\n}\n\n.sidebar a {\n  padding: 8px 8px 8px 32px;\n  margin-bottom: 0.5rem;\n  text-decoration: none;\n  color: var(--white-highlight);\n  display: block;\n  transition: 0.3s;\n}\n\n.sidebar a.selected {\n  color: var(--grey-grey);\n  pointer-events: none;\n  background: none !important;\n}\n\n.sidebar a:hover {\n  color: var(--highlight-color);\n}\n\n.sidebar .closebtn {\n  position: absolute;\n  top: 0;\n  right: 25px;\n  font-size: 36px;\n  margin-left: 50px;\n}\n\n#get-started-link {\n  width: 50%;\n  text-align: center;\n  margin-left: 1.5rem;\n  padding: 1rem 0rem;\n  border-radius: 8px;\n  background: var(--highlight-color);\n}\n\n#get-started-link:hover {\n  color: var(--darkest);\n}\n\n@media (max-width: 40rem) {\n  .main-nav {\n    display: none;\n  }\n\n  .toggle-button {\n    display: inline-block;\n  }\n\n  .footerprincipal {\n    width: 100%;\n  }\n\n  .footerprincipal__links {\n    list-style: none;\n    position: center;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    margin-bottom: 4rem;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n    -ms-flex-direction: column;\n    flex-direction: column;\n    -webkit-box-align: center;\n    -ms-flex-align: center;\n    align-items: center;\n  }\n\n  .footerprincipal__link {\n    margin-top: 3rem;\n  }\n}\n\n@media (max-width: 647.43px) {\n  .main-nav__item--cta a,\n  .mobile-nav__item--cta a {\n    color: var(--white-highlight);\n    background: var(--highlight-color);\n    padding: 0.5rem;\n    border-radius: 8px;\n  }\n}\n\n@keyframes fadeIn {\n  0% {\n    opacity: 0;\n  }\n\n  50% {\n    opacity: 0.5;\n  }\n\n  100% {\n    opacity: 1;\n  }\n}\n@-webkit-keyframes bounce {\n  to {\n    -webkit-transform: scale(1.1);\n  }\n}\n@-moz-keyframes bounce {\n  to {\n    -moz-transform: scale(1.1);\n  }\n}\n@keyframes bounce {\n  to {\n    transform: scale(1.1);\n  }\n}\n\n@-moz-keyframes slide-left-signature {\n  0% {\n    -moz-transform: translateX(100%);\n  }\n  100% {\n    -moz-transform: translateX(-100%);\n  }\n}\n@-webkit-keyframes slide-left-signature {\n  0% {\n    -webkit-transform: translateX(100%);\n  }\n  100% {\n    -webkit-transform: translateX(-100%);\n  }\n}\n@keyframes slide-left-signature {\n  0% {\n    -moz-transform: translateX(100%);\n    -webkit-transform: translateX(100%);\n    transform: translateX(100%);\n  }\n  100% {\n    -moz-transform: translateX(-100%);\n    -webkit-transform: translateX(-100%);\n    transform: translateX(-100%);\n  }\n}\n",""]);const h=m},363:(n,e,t)=>{t.d(e,{Z:()=>l});var i=t(81),r=t.n(i),o=t(645),a=t.n(o)()(r());a.push([n.id,".testimonial {\n  font-size: 1.2rem;\n  padding: 0 20px;\n}\n\n.testimonial:first-of-type {\n  margin-top: 3rem;\n}\n\n.testimonial__image-container {\n  width: 100%;\n  max-width: 40rem;\n  box-shadow: 3px 3px 5px 3px rgba(0, 0, 0, 0.3);\n  margin-top: 30px;\n  transform: skew(6deg);\n  overflow: hidden;\n}\n\n#customer-1:hover .testimonial__image-container {\n  animation: flip-customer 1.3s ease-out forwards;\n}\n\n#customer-2:hover .testimonial__image-container {\n  animation: flip-customer 1.3s ease-out forwards;\n}\n\n#customer-3:hover .testimonial__image-container {\n  animation: flip-customer 1.3s ease-out forwards;\n}\n\n#customer-1:active .testimonial__image-container {\n  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n  -webkit-user-select: none;\n  -webkit-touch-callout: none;\n}\n\n#customer-2:active .testimonial__image-container {\n  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n  -webkit-user-select: none;\n  -webkit-touch-callout: none;\n}\n\n#customer-3:active .testimonial__image-container {\n  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n  -webkit-user-select: none;\n  -webkit-touch-callout: none;\n}\n\n.testimonial__image {\n  width: 100%;\n  vertical-align: top;\n  transform: skew(6deg);\n  transform: scale(1);\n  -webkit-backface-visibility: hidden;\n}\n\n.testimonial__info {\n  text-align: right;\n  padding: 0.9rem;\n}\n\n#customer-2.testimonial {\n  text-align: right;\n}\n\n#customer-2 .testimonial__info {\n  text-align: left;\n}\n\n.testimonial__name {\n  margin: 0.2rem;\n  color: var(--highlight-red);\n  text-align: justify;\n  cursor: default;\n  font-size: 2.5rem;\n}\n\n.testimonial__subtitle {\n  margin: 0;\n  font-size: 1.1rem;\n  font-family: 'Montserrat';\n  text-align: justify;\n  margin-bottom: 12px;\n  cursor: default;\n  color: var(--light-grey);\n}\n\n.testimonial__subtitle a {\n  color: inherit;\n  font-family: 'Montserrat';\n  text-decoration: none;\n}\n\n.testimonial__subtitle a:hover,\n.testimonial__subtitle a:active {\n  color: var(--white-highlight);\n}\n\n.testimonial__text {\n  margin: 0.2rem;\n  text-align: justify;\n  font-family: 'Montserrat';\n  color: var(--white-highlight);\n  cursor: default;\n}\n\n@keyframes flip-customer {\n  0% {\n    transform: rotateY(0) skew(6deg);\n  }\n\n  50% {\n    transform: rotateY(160deg) skew(6deg);\n  }\n\n  100% {\n    transform: rotateY(360deg) skew(6deg);\n  }\n}\n\n@media (min-width: 40rem) {\n  .testimonial {\n    margin: 3rem auto;\n    max-width: 1500px;\n    gap: 1rem;\n    display: flex;\n    align-items: center;\n    justify-content: space-around;\n    font-size: 1.2rem;\n    padding: 0 20px;\n  }\n\n  .testimonial__image-container {\n    width: 60%;\n  }\n\n  .testimonial__info {\n    display: inline-block;\n    vertical-align: middle;\n    width: 30%;\n  }\n}\n\n@media (max-width: 638.29px) {\n  #customer-2 {\n    display: flex;\n    flex-direction: column-reverse;\n  }\n\n  .testimonial__text {\n    text-align: left;\n  }\n}\n",""]);const l=a},770:(n,e,t)=>{t.d(e,{Z:()=>g});var i=t(81),r=t.n(i),o=t(645),a=t.n(o),l=t(667),s=t.n(l),d=new URL(t(257),t.b),c=a()(r()),m=s()(d);c.push([n.id,"* {\n  box-sizing: border-box;\n}\n\nli {\n  list-style-type: none;\n\n  text-transform: italic;\n}\n\nbody {\n  font-family: 'Montserrat', sans-serif;\n  box-sizing: border-box;\n  margin: 0;\n}\n\n#product-overview {\n  background: linear-gradient(to top, rgba(80, 68, 18, 0.6) 10%, transparent),\n    url("+m+") 30% 30% / cover no-repeat border-box;\n  width: 100vw;\n  height: 52vh;\n  box-sizing: border-box;\n  position: relative;\n}\n\n#product-overview h1 {\n  color: var(--white-highlight);\n  font-family: 'Uni Sans Heavy CAPS';\n  font-size: 1.625rem;\n  position: absolute;\n  bottom: 9%;\n  left: 3%;\n  margin-left: 50px;\n  cursor: default;\n}\n\n.section-title {\n  color: var(--light-grey);\n  font-family: inherit;\n  text-align: center;\n  cursor: default;\n}\n\n.plan__list {\n  cursor: default;\n  width: 100%;\n  text-align: center;\n}\n\n.plan__title {\n  font-family: 'Montserrat';\n  font-size: 1.5rem;\n}\n\n.plan {\n  background-color: var(--highlight-light-color);\n  text-align: center;\n  padding: 1rem;\n  margin: 0.5rem 0.5rem;\n  width: 100%;\n}\n\n.plan__description {\n  font-family: 'Montserrat';\n}\n\n\n.plan--highlighted {\n  background-color: var(--highlight-color);\n  color: var(--white-highlight);\n}\n\n.plan__annotation {\n  background-color: var(--darkest);\n  color: var(--white-highlight);\n  box-shadow: 2px 2px 2px 2px rgba(0, 0, 0, 0.5);\n  border-radius: 0.5rem;\n  padding: 0.5rem;\n\n  -webkit-animation: bounce 0.32s infinite alternate;\n  -moz-animation: bounce 0.32s infinite alternate;\n  animation: bounce 0.32s infinite alternate;\n\n  -webkit-animation-iteration-count: 10;\n  -moz-animation-iteration-count: 10;\n  animation-iteration-count: 10;\n}\n\n.plan__price {\n  color: var(--grey-grey);\n}\n\n.plan--highlighted {\n  box-shadow: 2px 2px 2px 2px rgba(0, 0, 0, 0.5);\n}\n\n.plan--highlighted .plan__title {\n  color: var(--darkest);\n}\n\n.plan--highlighted .plan__price {\n  color: var(--white-highlight);\n}\n\n.plan__features {\n  list-style: none;\n  margin: 0;\n  margin-bottom: 20px;\n  padding: 0;\n}\n\n.plan__features li {\n  margin: 0.5rem 0px;\n}\n\n.plan__feature {\n  font-family: 'Montserrat';\n}\n\n#key-features {\n  background: var(--highlight-color);\n  margin-top: 5rem;\n  padding: 1rem;\n}\n\n#key-features .section-title {\n  color: var(--darkest);\n  margin: 2rem;\n}\n\n.key-feature__list {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n  text-align: center;\n  vertical-align: middle;\n}\n\n.key-feature {\n  display: block;\n  margin: auto;\n}\n\n.key-feature__image {\n  background: var(--highlight-cyan);\n  width: 128px;\n  border: 2px solid var(--grey-grey);\n  border-radius: 50%;\n  height: 128px;\n  margin: auto;\n  padding: 1.25rem;\n}\n\n.key-feature__description {\n  text-align: center;\n  font-weight: bold;\n  color: var(--darkest);\n  font-size: 1.25rem;\n  cursor: default;\n}\n\n.modal {\n  box-sizing: border-box;\n  position: fixed;\n  z-index: 200;\n  display: none;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  width: 450px;\n  max-width: calc(100% - 40px);\n  max-height: calc(100% - 40px);\n}\n\n.modal__header {\n  height: 45px;\n  padding: 30px 30px;\n  margin-bottom: 5rem;\n}\n\n.modal__header h1 {\n  text-align: center;\n  cursor: default;\n  margin-top: 0;\n  margin-right:0;\n  margin-bottom: 2rem;\n  margin-left: 0;\n}\n\n.modal__content {\n  text-align: center;\n  display: flex;\n  gap: 0.5rem;\n  justify-content: center;\n  margin-bottom: 3rem;\n}\n\n.modal__actions {\n  text-align: center;\n}\n\n.modal__action {\n  border: 1px solid var(--highlight-light-color);\n  background: var(--highlight-light-color);\n  text-decoration: none;\n  color: var(--white-highlight);\n  font: inherit;\n  padding: 1rem 2.5rem;\n  cursor: pointer;\n}\n\n.modal__action:hover,\n.modal__action:active {\n  background: var(--highlight-color);\n  border-color: var(--highlight-color);\n}\n\n.modal__action--negative {\n  background: var(--darkest);\n  border-color: var(--darkest);\n}\n\n@media (max-width: 40rem) and (min-height: 40rem) {\n  #product-overview {\n    height: 60vh;\n    background-position: 50% 25%;\n  }\n}\n\n@media (min-width: 40rem) {\n  .plan {\n    display: inline-block;\n    width: 30%;\n    vertical-align: middle;\n    min-width: 13rem;\n    max-width: 25rem;\n  }\n\n  .key-feature {\n    display: inline-block;\n    width: 30%;\n    vertical-align: top;\n    max-width: 25rem;\n  }\n}\n\n@media (max-width: 640px) {\n  .plan {\n    margin: 0.75rem 0rem;\n  }\n}\n",""]);const g=c},825:(n,e,t)=>{t.d(e,{Z:()=>f});var i=t(81),r=t.n(i),o=t(645),a=t.n(o),l=t(667),s=t.n(l),d=new URL(t(995),t.b),c=new URL(t(256),t.b),m=new URL(t(401),t.b),g=a()(r()),p=s()(d),h=s()(c),u=s()(m);g.push([n.id,"@font-face {\n  font-family: 'AnonymousPro';\n  src: url("+p+") format('truetype');\n}\n\n@font-face {\n  font-family: 'AnonymousPro';\n  src: url("+h+") format('truetype');\n  font-weight: 700;\n}\n\nbody {\n  font-family: 'Montserrat', sans-serif;\n  box-sizing: border-box;\n}\n\n.plan__options {\n  display: flex;\n  align-content: center;\n  align-items: center;\n  flex-direction: column;\n}\n\n.background {\n  background: url("+u+") center/cover;\n  filter: grayscale(20%);\n  width: 100vw;\n  height: 100vh;\n  background-repeat: no-repeat;\n  top: 3.75rem;\n  position: fixed;\n  z-index: -1;\n}\n\n.plan__option {\n  margin-top: 2.5rem;\n  background: var(--highlight-light-color);\n  border: 4px solid var(--highlight-color);\n  width: 80%;\n  min-width: 40%;\n  position: relative;\n  overflow: hidden;\n}\n\n.plan__option a {\n  text-decoration: none;\n  padding: 1.25rem;\n  display: block;\n}\n\n.plan__option a h1 {\n  color: var(--darkest);\n  margin-left: 1.25rem;\n}\n\n.plan__option a h2 {\n  color: var(--grey-grey);\n  margin-left: 1.25rem;\n}\n\n.plan__option a p {\n  font-size: 1rem;\n  margin-left: 1rem;\n  padding: 1rem;\n  color: var(--darkest);\n  width: 90%;\n  background: var(--white-highlight);\n  font-family: 'Montserrat', 'anonymousPro', sans-serif;\n  font-weight: 400;\n}\n\n.plan__option:hover {\n  border: 6px solid var(--white-highlight) !important;\n}\n\n#plan__badge {\n  position: absolute;\n  top: 3vh;\n  right: 4.5vw;\n  margin: 1.2rem;\n  font-size: 0.8rem;\n  color: var(--white-highlight);\n  background: var(--darkest);\n  padding: 0.5rem;\n  transform: rotateZ(45deg) translateX(5.2rem) translateY(-11rem);\n  transform-origin: 1rem 1rem;\n  width: 12rem;\n  text-align: center;\n}\n\n#plus {\n  margin-top: 5rem;\n}\n\n#free h1 {\n  color: var(--dark-green);\n  font-weight: bold;\n}\n\n#premium {\n  background-color: var(--darkest);\n  border: 4px solid var(--darkest);\n}\n\n#premium h1 {\n  color: var(--white-highlight);\n}\n\n#premium p {\n  font-family: 'anonymousPro', sans-serif;\n  font-weight: 100;\n  font-style: 'italic';\n}\n\n@media (min-width: 1200px) and (max-width: 2400px) {\n  .plan__option {\n    width: 60%;\n  }\n}\n\n@media (max-width: 1910px) {\n  #plan__badge {\n    top: 0vh;\n    right: 2.2vw;\n    width: 17rem;\n  }\n}\n\n@media (max-width: 1900px) {\n  #plan__badge {\n    right: 2vw;\n  }\n}\n\n@media (max-width: 1850px) {\n  #plan__badge {\n    right: 2.2vw;\n  }\n}\n\n@media (max-width: 1600px) {\n  #plan__badge {\n    right: 2.6vw;\n  }\n}\n\n@media (max-width: 1434px) {\n  #plan__badge {\n    right: 3.6vw;\n  }\n}\n\n@media (max-width: 1110px) {\n  #plan__badge {\n    right: 3.8vw;\n  }\n}\n\n@media (max-width: 1055px) {\n  #plan__badge {\n    right: 5.8vw;\n  }\n}\n\n@media (max-width: 618px) {\n  #plan__badge {\n    top: -1vh;\n    right: 2.8vw;\n    width: 19rem;\n  }\n}\n\n@media (max-width: 523px) {\n  #plan__badge {\n    right: 3.8vw;\n  }\n}\n",""]);const f=g},614:(n,e,t)=>{t.d(e,{Z:()=>l});var i=t(81),r=t.n(i),o=t(645),a=t.n(o)()(r());a.push([n.id,"body {\n  font-family: 'UniSans';\n}\n\nmain {\n  padding-top: 1rem;\n}\n\n.signup-container {\n  border: 3px solid var(--white-highlight);\n  width: calc(100% - 50px);\n  max-width: 600px;\n  margin: 0 auto;\n  margin-top: 5rem;\n  border-radius: 10px;\n  display: flex;\n  flex-direction: column;\n  animation: fadeIn 1.5s ease-in;\n}\n\n.signup-controls {\n  width: calc(100% - 200px);\n  min-width: 200px;\n  display: flex;\n  margin: 0 auto;\n}\n\n.signup-form {\n  padding: 1rem;\n  display: flex;\n  flex-direction: column;\n}\n\n.signup-title {\n  text-align: center;\n  cursor: default;\n  font-size: 1.8rem;\n  color: var(--white-highlight);\n}\n\n.signup-title {\n  margin-top: 2rem;\n}\n\n.signup-form label {\n  font-weight: bold;\n  color: var(--white-highlight);\n}\n\n.signup-form input,\nselect,\noption {\n  display: block;\n  font-family: 'Montserrat';\n}\n\n.signup-form label {\n  margin-bottom: 0.5rem;\n  text-align: justify;\n}\n\n.signup-form input,\n.signup-form select {\n  display: block;\n  border: 1px solid var(--light-grey);\n  border-radius: 5px;\n  padding: 0.2rem 0.5rem;\n  margin-bottom: 0.75rem;\n}\n\n\n.signup-form input.blurred {\n  border: 2px solid var(--lightest-green);\n}\n\n.signup-form input[id*='terms'],\n.signup-form input[id*='terms'] + label {\n  display: inline-block;\n  vertical-align: middle;\n}\n\n.signup-form input:not([type='checkbox']),\n.signup-form select {\n  font: 'Montserrat';\n}\n\n.signup-form input:focus {\n  outline: none;\n  background-color: var(--white-highlight);\n  border: 2px solid var(--highlight-color);\n}\n\n.signup-form input.blurred:invalid {\n  background: var(--highlight-light-color);\n  border: 2px solid var(--highlight-danger-color);\n}\n\n.button-control {\n  display: flex;\n  justify-content: center;\n}\n\n.signup-form button[type='submit'] {\n  padding: 1rem 2rem;\n  margin-top: 1rem;\n  display: block;\n}\n\n.signup-form__checkbox label {\n  text-align: justify;\n}\n\n.signup-checkbox-controls {\n  margin-top: 0.75rem;\n  display: flex;\n  flex-direction: row;\n  gap: 1rem;\n  align-items: center;\n}\n\n#agree-terms a:hover {\n  color: var(--white-highlight);\n}\n\n#signupButton:valid {\n  background-color: var(--highlight-color);\n  color: var(--darkest);\n  animation: bounce 0.3s alternate ease-out 4;\n}\n\n#dummy-message {\n  color: var(--white-highlight);\n}\n\n#dummy-message {\n  cursor: default;\n}\n\n#dummy-message span {\n  color: var(--highlight-color);\n}\n\n.round {\n  position: relative;\n}\n\n.round label {\n  background-color: var(--white-highlight);\n  border: 1px solid var(--light-grey);\n  text-align: justify;\n  border-radius: 5px;\n  cursor: pointer;\n  height: 22px;\n  left: 0;\n  position: absolute;\n  top: 0;\n  width: 22px;\n}\n\n.signup-checkbox-controls label a {\n  text-decoration: none;\n  font-weight: bold;\n  color: var(--grey-grey);\n}\n\n.round label:after {\n  border: 2px solid var(--white-highlight);\n  border-top: none;\n  border-right: none;\n  content: '';\n  height: 2px;\n  left: 4px;\n  opacity: 0;\n  position: absolute;\n  top: 8px;\n  transform: rotate(-45deg);\n  width: 12px;\n}\n\n.round input[type='checkbox']:checked + label {\n  background-color: var(--highlight-color);\n  border-color: var(--highlight-color);\n}\n\n.round input[type='checkbox']:checked + label:after {\n  opacity: 1;\n}\n",""]);const l=a},645:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",i=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),i&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),i&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,i,r,o){"string"==typeof n&&(n=[[null,n,void 0]]);var a={};if(i)for(var l=0;l<this.length;l++){var s=this[l][0];null!=s&&(a[s]=!0)}for(var d=0;d<n.length;d++){var c=[].concat(n[d]);i&&a[c[0]]||(void 0!==o&&(void 0===c[5]||(c[1]="@layer".concat(c[5].length>0?" ".concat(c[5]):""," {").concat(c[1],"}")),c[5]=o),t&&(c[2]?(c[1]="@media ".concat(c[2]," {").concat(c[1],"}"),c[2]=t):c[2]=t),r&&(c[4]?(c[1]="@supports (".concat(c[4],") {").concat(c[1],"}"),c[4]=r):c[4]="".concat(r)),e.push(c))}},e}},667:n=>{n.exports=function(n,e){return e||(e={}),n?(n=String(n.__esModule?n.default:n),/^['"].*['"]$/.test(n)&&(n=n.slice(1,-1)),e.hash&&(n+=e.hash),/["'() \t\n]|(%20)/.test(n)||e.needQuotes?'"'.concat(n.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):n):n}},81:n=>{n.exports=function(n){return n[1]}},379:n=>{var e=[];function t(n){for(var t=-1,i=0;i<e.length;i++)if(e[i].identifier===n){t=i;break}return t}function i(n,i){for(var o={},a=[],l=0;l<n.length;l++){var s=n[l],d=i.base?s[0]+i.base:s[0],c=o[d]||0,m="".concat(d," ").concat(c);o[d]=c+1;var g=t(m),p={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==g)e[g].references++,e[g].updater(p);else{var h=r(p,i);i.byIndex=l,e.splice(l,0,{identifier:m,updater:h,references:1})}a.push(m)}return a}function r(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,r){var o=i(n=n||[],r=r||{});return function(n){n=n||[];for(var a=0;a<o.length;a++){var l=t(o[a]);e[l].references--}for(var s=i(n,r),d=0;d<o.length;d++){var c=t(o[d]);0===e[c].references&&(e[c].updater(),e.splice(c,1))}o=s}}},569:n=>{var e={};n.exports=function(n,t){var i=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!i)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");i.appendChild(t)}},216:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},565:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},795:n=>{n.exports=function(n){var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var i="";t.supports&&(i+="@supports (".concat(t.supports,") {")),t.media&&(i+="@media ".concat(t.media," {"));var r=void 0!==t.layer;r&&(i+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),i+=t.css,r&&(i+="}"),t.media&&(i+="}"),t.supports&&(i+="}");var o=t.sourceMap;o&&"undefined"!=typeof btoa&&(i+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),e.styleTagTransform(i,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},589:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}},108:(n,e,t)=>{n.exports=t.p+"assets/fonts/UniSansHeavyCAPS.woff"},835:(n,e,t)=>{n.exports=t.p+"assets/fonts/UniSansHeavyCAPS.woff2"},256:(n,e,t)=>{n.exports=t.p+"assets/fonts/anonymousPro-Bold.ttf"},995:(n,e,t)=>{n.exports=t.p+"assets/fonts/anonymousPro-Regular.ttf"},257:(n,e,t)=>{n.exports=t.p+"assets/images/freedom.jpg"},401:(n,e,t)=>{n.exports=t.p+"assets/images/plan.jpg"}},e={};function t(i){var r=e[i];if(void 0!==r)return r.exports;var o=e[i]={id:i,exports:{}};return n[i](o,o.exports,t),o.exports}t.m=n,t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var i in e)t.o(e,i)&&!t.o(n,i)&&Object.defineProperty(n,i,{enumerable:!0,get:e[i]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),(()=>{var n;t.g.importScripts&&(n=t.g.location+"");var e=t.g.document;if(!n&&e&&(e.currentScript&&(n=e.currentScript.src),!n)){var i=e.getElementsByTagName("script");i.length&&(n=i[i.length-1].src)}if(!n)throw new Error("Automatic publicPath is not supported in this browser");n=n.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=n})(),t.b=document.baseURI||self.location.href,t.nc=void 0,(()=>{var n=t(379),e=t.n(n),i=t(795),r=t.n(i),o=t(569),a=t.n(o),l=t(565),s=t.n(l),d=t(216),c=t.n(d),m=t(589),g=t.n(m),p=t(770),h={};h.styleTagTransform=g(),h.setAttributes=s(),h.insert=a().bind(null,"head"),h.domAPI=r(),h.insertStyleElement=c(),e()(p.Z,h),p.Z&&p.Z.locals&&p.Z.locals;var u=t(363),f={};f.styleTagTransform=g(),f.setAttributes=s(),f.insert=a().bind(null,"head"),f.domAPI=r(),f.insertStyleElement=c(),e()(u.Z,f),u.Z&&u.Z.locals&&u.Z.locals;var b=t(676),v={};v.styleTagTransform=g(),v.setAttributes=s(),v.insert=a().bind(null,"head"),v.domAPI=r(),v.insertStyleElement=c(),e()(b.Z,v),b.Z&&b.Z.locals&&b.Z.locals;var y=t(825),x={};x.styleTagTransform=g(),x.setAttributes=s(),x.insert=a().bind(null,"head"),x.domAPI=r(),x.insertStyleElement=c(),e()(y.Z,x),y.Z&&y.Z.locals&&y.Z.locals,t.p,t.p,t.p,t.p,t.p,t.p,t.p,t.p,t.p,t.p,t.p,t.p,t.p,t(108),t(835),t(256),t(995);for(var w=document.querySelector(".backdrop"),k=document.querySelector(".modal"),_=document.querySelector(".modal__action--negative"),S=document.querySelectorAll(".plan button"),z=document.querySelector(".toggle-button"),E=document.querySelector(".closebtn"),L=(document.querySelector(".mobile-nav"),document.querySelector(".main-nav__item--cta")),A=(S=document.querySelectorAll(".plan button"),0);A<S.length;A++)S[A].addEventListener("click",(function(){k.classList.add("open-modal"),w.style.display="block",setTimeout((function(){w.classList.add("open")}),20)}));function T(){k&&k.classList.remove("open-modal"),w.style.display="none",setTimeout((function(){w.classList.remove("open")}),10)}function Z(){for(var n=document.querySelectorAll(".reveal-upwards"),e=0;e<n.length;e++){var t=window.innerHeight;n[e].getBoundingClientRect().top<t-150?n[e].classList.add("active"):n[e].classList.remove("active")}}_&&_.addEventListener("click",T),z.addEventListener("click",(function(){document.getElementById("mySidebar").style.width="260px",document.querySelector("main").style.marginLeft="260px"})),E.addEventListener("click",(function(){document.getElementById("mySidebar").style.width="0px",document.querySelector("main").style.marginLeft="0px"})),window.addEventListener("DOMContentLoaded",Z),window.addEventListener("scroll",Z),window.addEventListener("scroll",(function(){const n=document.querySelectorAll(".reveal-sideways");for(var e=0;e<n.length;e++){const t=window.innerHeight;n[e].getBoundingClientRect().top<t-150?n[e].classList.add("active"):n[e].classList.remove("active")}})),w.addEventListener("click",(function(){T()})),L&&(L.addEventListener("animationstart",(function(n){})),L.addEventListener("animationend",(function(n){})),L.addEventListener("animationiteration",(function(n){})))})(),(()=>{var n=t(379),e=t.n(n),i=t(795),r=t.n(i),o=t(569),a=t.n(o),l=t(565),s=t.n(l),d=t(216),c=t.n(d),m=t(589),g=t.n(m),p=t(614),h={};h.styleTagTransform=g(),h.setAttributes=s(),h.insert=a().bind(null,"head"),h.domAPI=r(),h.insertStyleElement=c(),e()(p.Z,h),p.Z&&p.Z.locals&&p.Z.locals;const u=document.getElementById("checkbox"),f=document.getElementById("signupButton"),b=document.querySelectorAll("input");let v=document.getElementById("first-name"),y=document.getElementById("last-name"),x=document.getElementById("email"),w=document.getElementById("password");for(let n of b)n.addEventListener("focus",(()=>{n.classList.remove("blurred")})),n.addEventListener("blur",(()=>{n.classList.add("blurred")}));function k(n){let e=document.getElementById("signupButton");e.disabled=!0,""!==n.value&&""!==v.value&&""!==y.value&&""!==w.value&function(n){return!!/^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/.test(n)}(x.value)&&(u.checked?e.disabled=!1:e.disabled=!0)}window.validate=k,f&&f.addEventListener("click",(function(){let n=document.createElement("span");n.innerHTML="WARNING: ";let e=document.createElement("p"),t=document.createTextNode("This is a dummy form, so no data is actually sent by its submission.");e.appendChild(n),e.appendChild(t),document.getElementById("dummy-message").appendChild(e),setTimeout((()=>{e.parentElement.removeChild(e)}),2e3)})),u&&u.addEventListener("click",(function(){u.value,u.value,k(u)})),w&&(v.addEventListener("keyup",k.bind(void 0)),y.addEventListener("keyup",k.bind(void 0)),email.addEventListener("keyup",k.bind(void 0)),w.addEventListener("keyup",k.bind(void 0)))})()})();