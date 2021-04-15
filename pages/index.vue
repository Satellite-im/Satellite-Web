<template>
  <div class="landing">
    <div class="main">
      <div class="container header">
        <a href="#" class="logo">
          <img src="~/assets/images/g232333.png" alt="logo" />
        </a>
        <div class="menus">
          <a href="#keyfeatures" class="menu-item active"> Key Features </a>
          <a href="#about" class="menu-item"> About </a>
          <a href="#earlyaccess" class="menu-item"> Early Access </a>
          <a href="#team" class="menu-item"> Team </a>
        </div>
        <a href="#" class="bars" @click.prevent="toggleSideBar = true">
          <i class="fas fa-bars"></i>
        </a>
        <div class="burger-bar" :class="{ open: toggleSideBar }">
          <a href="#" class="close" @click.prevent="toggleSideBar = false">
            <i class="fas fa-times"></i>
          </a>
          <div class="bar">
            <a href="#" class="item active"> key features </a>
            <a href="#" class="item"> customizable </a>
            <a href="#" class="item"> token </a>
            <a href="#" class="item"> road map </a>
            <a href="#" class="item"> team </a>
          </div>
        </div>
      </div>
      <div class="container">
        <div class="welcome">
          <div class="description">
            <h3 class="label white">
              Freedom,<br />
              Now In 4K
            </h3>
            <p>
              Satellite gives you peace of mind with end-to-end <br>
               encryption without sacrificing quality. <br>
               Stream in 4k, chat in 500kbs+, share 10GB files.
            </p>
            <div class="columns mt-5">
              <div class="column">
                <a href="http://eepurl.com/htF8cf" target="_blank" class="button is-fullwidth button-download"
                  >Sign Up</a
                >
              </div>
              <div class="column">
                <a href="https://satellite.im" class="button is-fullwidth is-custom-white-outline"
                  >Open in Browser</a
                >
              </div>
            </div>
          </div>
          <div class="illustration">
            <div class="main-illustration">
              <img src="~/assets/images/phone.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="meet-satellite">
      <div class="container">
        <h3 class="label dark has-text-centered">Meet Satellite</h3>
        <div class="meets">
          <div class="meet">
            <div class="icon">
              <i class="far fa-comment-alt"></i>
            </div>
            <h3>Feature Rich Chat</h3>
          </div>
          <div class="meet">
            <div class="icon">
              <i class="fas fa-lock"></i>
            </div>
            <h3>E2E Encryption</h3>
          </div>
          <div class="meet">
            <div class="icon">
              <i class="fas fa-mobile-alt"></i>
            </div>
            <h3>Cross-Platform</h3>
          </div>
          <div class="meet">
            <div class="icon">
              <i class="fas fa-coins"></i>
            </div>
            <h3>Painless Payments</h3>
          </div>
        </div>
      </div>
    </div>

    <br>
    <br>
    <br>
    <br>
    <br>
    <br>

    <div class="partners">
      <h3 class="label has-text-centered">Powered By</h3>
      <div class="container">
        <a href="http://textile.io/" target="_blank"  class="partner">
          <img src="~/assets/images/logo-textile.png" alt="vim" />
        </a>
        <a href="https://polygon.technology/" target="_blank" class="partner">
          <img src="~/assets/images/logo-polygon.png" alt="rect" />
        </a>
        <a href="https://www.jacketriver.com/" target="_blank"  class="partner">
          <img src="~/assets/images/logo-jacketriver.webp" alt="rect" />
        </a>
        <a href="https://knobs.it/en/knobs-en/" target="_blank"  class="partner">
          <img src="~/assets/images/logo-knobs.png" alt="rect" />
        </a>
      </div>
    </div>

    <div class="contect-anytime-anywhere">
      <div class="container">
        <h3 class="label white">Connect, anytime, anywhere.</h3>
        <img
          class="phonestack"
          src="~/assets/images/phonestack.png"
          alt="phonestack"
        />
        <img
          class="phonestack-mobile"
          src="~/assets/images/g1030.png"
          alt="phonestack"
        />
      </div>
    </div>
    

    <div class="satellite" id="about">
      <div class="container">
        <div class="we-just-work-better">
          <div class="illustration">
            <img src="~/assets/images/drone.png" alt="" />
          </div>
          <div class="description">
            <h3 class="label dark">No Compromises</h3>
            <p>
              Satellite is built using serverless technology with peer 2 peer workflows. Everything is encrypted 
              so your data only gets read by who you intend it to. We store files on a distributed network so redundancy
              comes built in along with large file storage.
            </p>
            <br />
            <p>
              All these things come without compromises to your experience.
            </p>
          </div>
        </div>
      </div>
      <div class="container">
        <div class="satellite-perks">
          <div class="description">
            <h3 class="label dark">Multi-Platform</h3>
            <p>
              Chat from anywhere, from desktop and beyond Satellite has you covered. Satellite is also built to be offline-first 
              so whether you have a good connection or not you can be sure you get your message out there! Our mobile app installs
              as a PWA during Early Access so setup is quick, and you get updates immediately.
            </p>
            <br />
            <a href="#" class="button is-custom mt-5">Try the Alpha</a>
          </div>
          <div class="illustration">
            <img src="~/assets/images/computers.png" alt="computers" />
          </div>
        </div>
      </div>
    </div>

    <div class="feature" id="keyfeatures">
      <h1 class="label light">Key Features</h1>
      <div class="phone">
        <div class="left">
          <div class="feature-description">
            <h3>Easy Installation</h3>
            <p>Satellite installs with one click.</p>
          </div>
          <div class="feature-description">
            <h3>Multi Platform chat</h3>
            <p>Chat anywhere with our cross platform app.</p>
          </div>
          <div class="feature-description">
            <h3>Easy File sharing</h3>
            <p>Share up to 10GB files instantly with friends.</p>
          </div>
        </div>
        <div class="right">
          <div class="feature-description">
            <h3>Built-in Payments</h3>
            <p>Send money between friends instantly.</p>
          </div>

          <div class="feature-description">
            <h3>High Quality Streaming</h3>
            <p>Stream at up to 4k</p>
          </div>

          <div class="feature-description">
            <h3>Serverless</h3>
            <p>Your data goes straight to your friends, nobody tracking in the middle.</p>
          </div>
        </div>
        <div class="image-feature"></div>
      </div>
      <div class="container">
        <div class="features">
          <div class="feature-description">
            <h3>Easy Installation</h3>
            <p>Satellite installs with one click.</p>
          </div>
          <div class="feature-description">
            <h3>Multi Platform chat</h3>
            <p>Chat anywhere with our cross platform app.</p>
          </div>
          <div class="feature-description">
            <h3>Easy File sharing</h3>
            <p>Share up to 10GB files instantly with friends.</p>
          </div>
        </div>
      </div>
    </div>

    <div class="join-alpha-out-team" id="earlyaccess">
      <div class="container">
        <div class="join-alpha">
          <div class="description">
            <h3 class="label dark">Early Access</h3>
            <p>
              Satellite is nearing our early access beta! If you'd like to get started ahead of the curve
              you can join our mailing list and get notified of releases. You can give Satellite a try
              right now but expect some bugs and please understand it is not representative of our final product.
            </p>
            <br />
            <p>
              Satellite installs as a PWA which makes it very easy to get started, just navigate to https://satellite.im on your 
              phone to get started.
            </p>
            <div class="columns mt-5">
              <div class="column">
                <a href="http://eepurl.com/htF8cf" class="button is-custom is-fullwidth"
                  >Sign Up</a
                >
              </div>
              <div class="column">
                <a href="https://satellite.im" class="button is-custom-outline is-fullwidth"
                  >Try Pre-Release</a
                >
              </div>
            </div>
          </div>
          <div class="chat-ilustration">
            <img src="~/assets/images/chat.png" alt="chat" />
          </div>
        </div>
      </div>
      <div class="container" id="team">
        <div class="our-team">
          <div class="descrption">
            <h3 class="label dark">Our Team</h3>
            <p class="mb-5">
              Satellite is full of passionate open-source developers as well as our in house team which both work hard to build
              a different kind of chat platform.
            </p>
            <a href="https://github.com/satellite-im" class="button is-custom">GitHub</a>
          </div>
        </div>
        <slider class="slider-wrapper" />
      </div>
    </div>


    <div class="footer">
      <div class="container">
        <div class="columns mb-6">
          <div class="column is-one-quarter">
            <h3 class="mb-3 has-text-weight-bold">Socials</h3>
            <ul>
              <li class="mb-2">
                <a href="https://twitter.com/Satellite_im"> Twitter </a>
              </li>
              <li class="mb-2">
                <a href="https://github.com/Satellite-im"> GitHub </a>
              </li>
              <li class="mb-2">
                <a href="https://gitcoin.co/grants/1695/vault74-a-fast-painless-decentralized-chat"> Gitcoin </a>
              </li>
            </ul>
          </div>
          <div class="column is-one-quarter">
            <h3 class="mb-3 has-text-weight-bold">Other sites</h3>
            <ul>
              <li class="mb-2">
                <a href="https://app.satellite.im">The App </a>
              </li>
            </ul>
          </div>
          <div class="column is-one-quarter">
            <h3 class="mb-3 has-text-weight-bold">Careers</h3>
            <ul>
              <li class="mb-2">
                <a href="mailto:matt.wisniewski@jacketriver.com">Contact Us</a>
              </li>
            </ul>
          </div>
          <div class="column"></div>
        </div>
        <div class="columns is-vcentered location-socials">
          <div class="column is-one-quarter wrapper-location">
            <span class="location has-text-weight-bold">United States</span>
          </div>
          <div class="column is-justify-content-flex-end is-flex gray-line">
            <div class="socials mb-3">
              <a href="https://twitter.com/Satelite_im" class="social mr-3">
                <i class="fab fa-twitter-square"></i>
              </a>
              <a href="https://www.linkedin.com/company/75854802" class="social mr-3">
                <i class="fab fa-linkedin"></i>
              </a>
              <a href="https://github.com/Satellite-im" class="social">
                <i class="fab fa-github"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Slider from "@/components/Slider";
export default {
  name: "Landing",

  components: {
    Slider,
  },

  data() {
    return {
      toggleSideBar: false,
    };
  },
};
</script>

<style>
::-webkit-scrollbar {
  display: block !important;
}

#app {
  position: relative !important;
}

html {
  overflow: auto !important;
  overflow-y: auto !important;
  overflow-x: auto !important;
}

body {
  background: #fff;
}
</style>

<style scoped>
/* common */
.label {
  font-size: 3rem;
  color: #3a3870;
  font-weight: bold;
  font-family: "Space Mono", monospace;
}

.label.dark {
  color: #16161e;
}

.label.light {
  color: #d0cce1;
}

.label.white {
  color: #fff;
}

.button.is-custom {
  background-color: #3a3870;
  color: #fff;
  border: none;
  min-height: 40px;
  font-size: 12px;
  padding-left: 35px;
  padding-right: 35px;
}

.button.button-download {
  color: #3a3870;
  min-height: 40px;
  font-size: 12px;
}

.button.is-custom-outline {
  color: #3a3870;
  border: 1px solid #3a3870;
  background-color: transparent;
  min-height: 40px;
  font-size: 12px;
}

.button.is-custom-white-outline {
  color: #fff;
  border: 1px solid #fff;
  background-color: transparent;
  min-height: 40px;
  font-size: 12px;
}

.button.is-custom,
.button.is-custom-outline {
  font-family: "Space Mono", monospace;
}
/* footer */
.footer {
  background-color: #323261;
  color: #fff;
  padding: 50px 0;
}

.footer a {
  color: #fff;
}

.footer h3 {
  font-family: "Space Mono", monospace;
}

.footer .socials a {
  color: #e1e1f4;
}

.footer ul li {
  font-size: 14px;
}

.footer .location {
  background-color: #fff;
  font-family: "Space Mono", monospace;
  display: inline-block;
  color: #323261;
  padding: 5px 15px;
  min-width: 250px;
  z-index: 2;
  position: relative;
  border-right: 5px solid #323261;
}

.footer .gray-line {
  position: relative;
  transform: translateY(-30px);
}

.footer .gray-line:after {
  content: "";
  border-bottom: 1px solid #999;
  position: absolute;
  left: 0;
  right: 15px;
  bottom: 0;
}

/* partners */
.partners {
  background-color: #e8e8fa;
  padding: 50px 300px 100px;
  position: relative;
}

.partners .container {
  display: grid;
  grid-template-columns: 3fr 3fr 3fr;
  grid-gap: 40px;
}

.partners .partner {
  display: flex;
  align-items: center;
  justify-content: center;
}

.partners:after {
  top: -150px;
  left: 0;
  right: 0;
  position: absolute;
  content: "";
  display: block;
  width: 100%;
  height: 150px;
  background-image: url("~/assets/images/g1072.png");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
}

.partners .label {
  margin-bottom: 50px;
}

.partners .partner img {
  width: 270px;
}

/* join-alpha-out-team */
.join-alpha-out-team {
  padding-bottom: 150px;
}
.join-alpha-out-team p {
  color: #16161e;
}

.join-alpha {
  margin-bottom: 100px;
  display: flex;
}

.join-alpha .chat-ilustration,
.join-alpha .description {
  width: 50%;
}

.join-alpha .description {
  padding-left: 50px;
  padding-right: 50px;
}

.join-alpha .label {
  white-space: nowrap;
}

.our-team {
  display: flex;
}

.our-team .descrption,
.our-team .slider-wrapper {
  width: 50%;
}

.our-team .descrption {
  margin-left: 0px;
}

.chat-ilustration {
  margin-left: 100px;
}

.chat-ilustration img {
  width: 100%;
  height: 100%;
  max-width: 400px;
  object-fit: cover;
}

.our-team .slider {
  display: flex;
  padding: 0 35px;
}

.our-team .slick-slide {
  width: 200px;
  height: 300px;
  border-radius: 10px;
  background-color: #e8e8fa;
  padding: 25px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  margin-right: 15px;
}

.our-team .slick-slide .avatar {
  width: 100px;
  height: 100px;
  background-color: #fff;
  border-radius: 50%;
  margin-bottom: 20px;
  color: #16161e;
  display: flex;
  justify-content: center;
  align-items: center;
}

.our-team .avatar i {
  font-size: 3rem;
}

.our-team .slick-slide .name {
  font-family: "Space Mono", monospace;
  color: #16161e;
}

.our-team .slick-slide .job {
  text-align: center;
  font-size: 14px;
  position: relative;
}

.our-team .slick-slide .job:after {
  content: "";
  position: absolute;
  left: 50%;
  transform: translate(-50%);
  background-color: #3a3870;
  height: 2px;
  width: 70px;
  border-radius: 5px;
  bottom: -5px;
}

.our-team .socials {
  margin-top: 15px;
  display: flex;
  justify-content: center;
}

.our-team .socials .social {
  color: #16161e;
}

.our-team .slider-wrapper {
  position: relative;
  display: flex;
  justify-content: flex-end;
  overflow: hidden;
}

.our-team .slider-wrapper .next,
.our-team .slider-wrapper .prev {
  width: 30px;
  height: 30px;
  display: inline-block;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  transform-origin: center center;
  z-index: 1;
}

.our-team .slider-wrapper .prev img,
.our-team .slider-wrapper .next img {
  object-fit: contain;
  width: 100%;
  height: 100%;
}

.our-team .slider-wrapper .prev {
  left: 0px;
}

.our-team .slider-wrapper .next {
  right: 0px;
}

/* feature */
.feature {
  display: flex;
  justify-content: center;
  background-image: url(~/assets/images/g66.png);
  background-size: 50%;
  background-position: center center;
  background-repeat: no-repeat;
  margin-bottom: 150px;
  position: relative;
  flex-direction: column;
  align-items: center;
  background-color: #323360;
}

.feature .image-feature {
  background-image: url(~/assets/images/g3032.png);
  background-size: contain;
  background-position: center center;
  background-repeat: no-repeat;
  min-height: 550px;
}

.feature .label {
  margin: 0;
}

.feature:after {
  top: -179px;
  left: 0;
  right: 0;
  position: absolute;
  content: "";
  display: block;
  width: 100%;
  height: 180px;
  background-image: url("~/assets/images/g976.png");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
}

.feature:before {
  bottom: -149px;
  left: 0;
  right: 0;
  position: absolute;
  content: "";
  display: block;
  width: 100%;
  height: 150px;
  background-image: url("~/assets/images/g986.png");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
}

.feature .phone {
  width: 400px;
  margin: 150px auto 50px;
  transform: translateY(-80px);
  position: relative;
}

.feature .phone img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.feature .phone .left,
.feature .phone .right {
  position: absolute;
  top: -30px;
  bottom: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  max-width: 250px;
}

.feature .phone .left {
  left: -250px;
  text-align: right;
  padding-right: 15px;
}

.feature .phone .right {
  right: -250px;
  padding-left: 15px;
}

.feature .feature-description,
.features .feature-description {
  color: #fff;
  font-size: 14px;
}

.feature .feature-description h3,
.features .feature-description h3 {
  font-family: "Space Mono", monospace;
  font-weight: bold;
}

.features {
  display: none;
}

.features .feature-description {
  font-size: 18px;
  margin-bottom: 20px;
  padding-left: 25px;
}

.features .feature-description h3 {
  margin-bottom: 10px;
  position: relative;
}

.features .feature-description p {
  line-height: 20px;
}

.features .feature-description h3:before {
  position: absolute;
  content: "";
  display: inline-block;
  left: -530px;
  width: 500px;
  top: 50%;
  transform: translateY(-50%);
  border: 2px solid #d0cde1;
}

.features .feature-description h3:after {
  position: absolute;
  content: "";
  display: inline-block;
  left: -35px;
  top: 50%;
  width: 15px;
  height: 15px;
  border-radius: 50%;
  background-color: #d0cde1;
  transform: translateY(-50%);
}

/* satellite perks */
.satellite {
  margin-bottom: 250px;
}

.satellite .we-just-work-better {
  margin-bottom: 150px;
}

.we-just-work-better,
.satellite-perks {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 100px;
  align-items: center;
}

/* connect anytime anywhere */
.contect-anytime-anywhere {
  margin-bottom: 100px;
  background-color: #16161e;
  padding-top: 50px;
  overflow: hidden;

  background-image: url(~/assets/images/g85.png);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
}

.contect-anytime-anywhere .label {
  text-align: center;
  margin-bottom: 100px;
}

.contect-anytime-anywhere .phonestack {
  z-index: 0;
  position: relative;
}

.contect-anytime-anywhere .phonestack-mobile {
  display: none;
}

.contect-anytime-anywhere .container:before,
.contect-anytime-anywhere .container:after {
  content: "";
  position: absolute;
  z-index: 2;
  bottom: -100px;
  left: 0;
  width: 100%;
  height: 100px;
  right: 0;
  box-shadow: 0px 0 130px rgba(0, 0, 0, 1);
}

.contect-anytime-anywhere .container:before {
  top: -150px;
  bottom: unset;
}

/* meets */
.meet-satellite {
  margin-bottom: 80px;
}

.meet-satellite .label {
  margin-bottom: 50px;
}

.meets {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 30px;
}

.meets .meet {
  border-radius: 10px;
  background-color: #e8e8fa;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 40px 20px;
  flex-direction: column;
  color: #16161e;
}

.meets .meet:last-child {
  margin-right: 0;
}

.meets .meet .icon {
  font-size: 3rem;
}

.meets .meet h3 {
  margin-top: 25px;
  font-family: "Space Mono", monospace;
  color: #16161e;
}

/* main */
.main {
  background-color: #323261;
  background-image: url(~/assets/images/background.png);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 0 0;
  position: relative;
  margin-bottom: 150px;
}

.main p {
  color: #fff;
}

.main .main-illustration {
  max-width: 320px;
}

.main .main-illustration img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.contect-anytime-anywhere .container:after {
  content: "";
  position: absolute;
  z-index: 2;
  bottom: -100px;
  left: 0;
  width: 100%;
  height: 100px;
  right: 0;
  box-shadow: 0px 0 130px rgba(0, 0, 0, 1);
}

.main:after {
  bottom: -149px;
  left: 0;
  right: 0;
  position: absolute;
  content: "";
  display: block;
  width: 100%;
  height: 150px;
  background-image: url("~/assets/images/g952.png");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
}

/* header */
.header {
  padding: 15px 0 50px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.main .menus {
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
}

.main .menus .menu-item {
  text-transform: uppercase;
  color: #fff;
  font-family: "Space Mono", monospace;
  font-weight: 600;
  font-size: 14px;
  padding-bottom: 3px;
  margin-right: 50px;
}

.main .menus .menu-item.active {
  border-bottom: 4px solid #b0bae2;
}

.main .welcome {
  display: flex;
  justify-content: space-around;
  align-items: center;
}

.main .welcome .description {
  margin-bottom: 50px;
}

.main .bars {
  display: none;
}

.main .logo {
  width: 75px;
  height: 75px;
  display: inline-block;
}

.main .logo img {
  object-fit: cover;
}

.main .bars {
  color: #fff;
  font-size: 33px;
}

/* burger bar */
.burger-bar {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  width: calc(100vw / 2);
  background-color: #3a3870;
  z-index: 100;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  padding: 20px;
  padding-top: 40px;
  transition: all 0.3s;
  transform: translateX(100vw);
  opacity: 0;
}

.burger-bar.open {
  transform: translateX(0);
  opacity: 1;
}

.burger-bar .bar {
  display: flex;
  flex-direction: column;
}

.burger-bar .bar a {
  text-transform: uppercase;
  color: #fff;
  font-family: "Space Mono", monospace;
  font-weight: 600;
  font-size: 14px;
  margin-bottom: 10px;
  width: fit-content;
}

.burger-bar .bar a.active {
  border-bottom: 4px solid #d0cce1;
}

.burger-bar .close {
  color: #fff;
  position: fixed;
  right: 20px;
  top: 15px;
}
/* burger bar - end */

@media (max-width: 768px) {
  .container {
    padding-left: 30px;
    padding-right: 30px;
  }

  .button {
    padding-top: 25px;
    padding-bottom: 25px;
    border-radius: 10px;
  }

  /* main */
  .main .header {
    padding-bottom: 25px;
  }

  .main .header .bars {
    display: inline-block;
  }

  .main {
    background-size: 200%;
  }

  .main .welcome {
    flex-direction: column;
  }

  .main .header .menus {
    display: none;
  }

  .main .main-illustration {
    max-width: unset;
  }

  /* end - main */

  /* meet-satellite */
  .meet-satellite .meets {
    grid-template-columns: 1fr;
    grid-gap: 10px;
  }

  .meet-satellite .meets .meet {
    margin: 0;
    margin-bottom: 20px;
  }

  .meet-satellite .meets .meat:last-child {
    margin-bottom: 0;
  }
  /* end meet-satellite */

  /* contect-anytime-anywhere */
  .contect-anytime-anywhere {
    background-size: 200%;
  }

  .contect-anytime-anywhere .phonestack {
    display: none;
    margin: 0 auto;
  }

  .contect-anytime-anywhere .phonestack-mobile {
    display: block;
    margin: 0 auto;
  }

  .contect-anytime-anywhere .label {
    margin-bottom: 30px;
  }

  .contect-anytime-anywhere .container {
    padding: 0;
  }
  /* end - contect-anytime-anywhere */

  /* satellite */
  .satellite {
    margin-bottom: 130px;
  }

  .satellite .we-just-work-better,
  .satellite .satellite-perks {
    grid-template-columns: 1fr;
    grid-gap: 50px;
  }

  .satellite .we-just-work-better .label,
  .satellite .satellite-perks .label {
    font-size: 30pt;
  }

  .satellite .satellite-perks {
    display: flex;
    flex-direction: column-reverse;
  }

  .satellite .illustration {
    margin-bottom: 30px;
  }

  .satellite .we-just-work-better {
    margin-bottom: 100px;
  }
  /* end - satellite */

  .partners {
    padding: 0;
  }

  /* feature */
  .feature .phone .left {
    max-width: unset;
    display: none;
  }

  .feature .label {
    font-size: 35px;
  }

  .feature .image-feature {
    background-image: url(~/assets/images/g3034.png);
    background-size: contain;
    background-position: center center;
    background-repeat: no-repeat;
    width: 230px;
  }

  .feature .phone .left,
  .feature .phone .right {
    display: none;
  }

  .join-alpha .label {
    white-space: normal;
  }

  .feature .phone {
    width: unset;
  }

  .feature {
    background-size: 150%;
    background-position: center 25%;
    margin-bottom: 70px;
  }

  .features {
    display: flex;
    flex-direction: column;
  }
  /* end - feature */

  /* join-alpha-out-team */
  .join-alpha {
    flex-direction: column-reverse;
  }

  .join-alpha .description,
  .join-alpha .chat-ilustration {
    width: 100%;
    margin: 0;
  }

  .join-alpha .description {
    margin-top: 15px;
    padding: 0;
  }

  .our-team {
    flex-direction: column;
  }

  .our-team .descrption,
  .our-team .slider-wrapper {
    width: 100%;
    margin: 0;
    margin-top: 30px;
  }

  .our-team .button.is-custom {
    width: 100%;
  }

  .our-team .slider-wrapper .slider {
    padding-right: 0;
    padding-left: 0;
  }

  .our-team .slider-wrapper .slider .slick-slide {
    margin-right: 25px;
    width: calc(100vw - 110px);
  }

  .our-team .slider-wrapper .prev {
    left: -8px;
  }

  .our-team .slider-wrapper .next {
    right: -8px;
  }
  /* end - join-alpha-out-team */

  /* partners */
  .partners {
    padding-bottom: 50px;
  }

  .partners .label {
    font-size: 2.5rem;
  }

  .partners .container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 20px;
  }
  /* end - partners */

  /* footer */
  .footer h3,
  .footer ul li {
    text-align: center;
  }

  .footer h3 {
    font-size: 1.3rem;
    margin-bottom: 0 !important;
  }

  .footer ul li {
    font-size: 1.1rem;
  }

  .footer .socials {
    width: 100%;
    display: flex;
    justify-content: center;
    margin-bottom: 0 !important;
  }

  .footer .socials .social {
    font-size: 1.5rem;
  }

  .footer .location {
    width: 100%;
    text-align: center;
  }

  .footer .location-socials {
    flex-direction: column-reverse;
    display: flex;
  }

  .footer .gray-line:after {
    left: -110px;
    right: -110px;
  }

  .footer .wrapper-location {
    padding: 0;
  }

  .footer .button.is-custom {
    width: 100%;
  }
  /* end - footer */

  .button {
    font-size: 16px !important;
  }

  .footer {
    display: flex;
  }
}

@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) and (-webkit-min-device-pixel-ratio: 1) {
  .feature {
    background-size: 100%;
    background-position: center 5%;
  }

  .join-alpha .chat-ilustration {
    display: flex;
    justify-content: center;
  }
}
</style>