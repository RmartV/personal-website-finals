<template>
    <body>
      <section>
        <div class="circle"></div>
  
        <header>
          <ul class="navigation">
            <li><a href="#" id="educationLink">Education</a></li>
            <li><a href="#" id="goalsLink">Goals</a></li>
            <li><a href="#" id="hobbiesLink">Hobbies</a></li>
            <li><a href="#" id="schoolsLink">Schools</a></li>
            <li><RouterLink to="/comments">Comments</RouterLink></li>
          </ul>
        </header>

        <div class="modal" id="aboutModal">
  <div class="modal-content">
      <h2>About Me</h2>
      <p>My name is Ryan Elijah Luar and this is my experience throughout my course. <br> <br> My Experience from my course has a lot of ups and downs. I learned how to code and what are their functions and what are their purposes and also I crammed a lot of subjects during my freshman due to being overwhelmed. But overall, taking IT course is a great choice. <br> I live in Taguig City, I'm Currently 19 years old and I am the youngest member of the family. </p>
      <button class="close-btn">Close</button>
  </div>
</div>

<div class="modal" id="educationModal">
  <div class="modal-content">
      <h2>Education</h2>
      <p>I am currently studying at Asia Pacific College, pursuing a Bachelor of Science in Information Technology, specializing in Mobile and Internet Applications.</p>
      <button class="close-btn">Close</button>
  </div>
</div>

<div class="modal" id="goalsModal">
  <div class="modal-content">
      <h2>Goals in Life</h2>
      <ol class="goals-list">
          <li>To get rich</li>
          <li>To have my dream house and bike</li>
          <li>To graduate college</li>
      </ol>
      <button class="close-btn">Close</button>
  </div>
</div>

<div class="modal" id="hobbiesModal">
  <div class="modal-content">
      <h2>Hobbies & Interests</h2>
      <table class="hobbies-table">
          <thead>
              <tr>
                  <th>Hobbies</th>
                  <th>Interests</th>
              </tr>
          </thead>
          <tbody>
              <tr>
                  <td>Playing Basketball</td>
                  <td>Dancing</td>
              </tr>
              <tr>
                  <td>Riding Motorcycle</td>
                  <td>Exploring</td>
              </tr>
              <tr>
                  <td>Going to the gym</td>
                  <td></td>
              </tr>
          </tbody>
      </table>
      <button class="close-btn">Close</button>
  </div>
</div>

<div class="modal" id="schoolsModal">
  <div class="modal-content">
      <h2>Education & Achievements</h2>
      <table class="schools-table">
          <thead>
              <tr>
                  <th>Education / Achievements</th>
                  <th>Year</th>
              </tr>
          </thead>
          <tbody>
              <tr>
                  <td>Sto Niño Catholic School (Elementary)</td>
                  <td>2015 - 2016</td>
              </tr>
              <tr>
                  <td>Sto Niño Catholic School (JHS)</td>
                  <td>2017 - 2021</td>
              </tr>
              <tr>
                  <td>With Honors (JHS)</td>
                  <td>2020 - 2021</td>
              </tr>
              <tr>
                  <td>Asia Pacific College (SHS)</td>
                  <td>2021 - 2023</td>
              </tr>
              <tr>
                  <td>Asia Pacific College (College)</td>
                  <td>2023 - Current</td>
              </tr>
              <tr>
                  <td>Asia Pacific College Honor Student</td>
                  <td>2023 - 2024</td>
              </tr>
          </tbody>
      </table>
      <button class="close-btn">Close</button>
  </div>
</div>  

 
  
        <div class="content">
          <div class="textBox">
            <h2>Welcome to my Homepage!</h2>
            <p>
              I am a student in Asia Pacific College taking Bachelor of Science in Information Technology specialized in Mobile and Internet Applications ...
              <br />
              <a id="learnMoreLink" href="" class="buttonlearn">Learn more about me!</a>
            </p>
            <ul class="sci">
              <li><a href="https://www.facebook.com/ryanelijah.luar/"><img src="../components/images/efbi.png" alt="Facebook" /></a></li>
              <li><a href="https://www.linkedin.com/in/ryan-elijah-luar-a99171250/"><img src="../components/images/linkedin.png" alt="LinkedIn" /></a></li>
              <li><a href="https://github.com/RyElijah"><img src="../components/images/github1.png" alt="GitHub" /></a></li>
            </ul>
          </div>
  
          <div class="imagebox">
            <swiper :modules="[EffectCards]" effect="cards" :grabCursor="true" :loop="true" class="mySwiper">
              <swiper-slide><img src="../components/images/ryanpic1.jpg" alt="Image 1" /></swiper-slide>
              <swiper-slide><img src="../components/images/ryanpic2.jpg" alt="Image 2" /></swiper-slide>
              <swiper-slide><img src="../components/images/ryanpic3.jpg" alt="Image 3" /></swiper-slide>
              <swiper-slide><img src="../components/images/ryanpic6.jpg" alt="Image 4" /></swiper-slide>
            </swiper>
          </div>
        </div>
      </section>
  
      <Comments />
    </body>
  </template>
  
  <script setup>
  import { Swiper, SwiperSlide } from "swiper/vue";
  import { EffectCards } from "swiper/modules";
  import "swiper/css";
  import "swiper/css/effect-cards";
  import { RouterLink } from 'vue-router';
  
  document.addEventListener("DOMContentLoaded", function () {
    function openModal(modalId) {
      const modal = document.getElementById(modalId);
      if (modal) {
        modal.style.display = "block";
        setTimeout(() => {
          modal.classList.add("show");
        }, 10);
      }
    }
  
    function closeModal(modalId) {
      const modal = document.getElementById(modalId);
      if (modal) {
        modal.classList.remove("show");
        setTimeout(() => {
          modal.style.display = "none";
        }, 300);
      }
    }
  
    // Add event listeners only if elements exist
    const educationLink = document.getElementById("educationLink");
    if (educationLink) {
      educationLink.addEventListener("click", function (event) {
        event.preventDefault();
        openModal("educationModal");
      });
    }
  
    const goalsLink = document.getElementById("goalsLink");
    if (goalsLink) {
      goalsLink.addEventListener("click", function (event) {
        event.preventDefault();
        openModal("goalsModal");
      });
    }
  
    const hobbiesLink = document.getElementById("hobbiesLink");
    if (hobbiesLink) {
      hobbiesLink.addEventListener("click", function (event) {
        event.preventDefault();
        openModal("hobbiesModal");
      });
    }
  
    const schoolsLink = document.getElementById("schoolsLink");
    if (schoolsLink) {
      schoolsLink.addEventListener("click", function (event) {
        event.preventDefault();
        openModal("schoolsModal");
      });
    }
  
    document.querySelectorAll(".close-btn").forEach((button) => {
      button.addEventListener("click", function () {
        const modal = this.closest(".modal");
        if (modal) {
          closeModal(modal.id);
        }
      });
    });
  
    const learnMoreLink = document.getElementById("learnMoreLink");
    if (learnMoreLink) {
      learnMoreLink.addEventListener("click", function (event) {
        event.preventDefault();
        openModal("aboutModal");
      });
    }
  });
  </script>


<style>
/* General Styles */
body {
    background: #A9A9A9;
    margin: 0;
    padding: 0;
}

/* Section Styles */
section {
    position: relative;
    width: 100%;
    min-height: 100vh;
    padding: 80px 20px;
    display: flex;
    justify-content: center;
    background: #A9A9A9;
}

section .circle {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: #E51E2A;
    clip-path: circle(50% at right -20%);
}

/* Header */
header {
    position: fixed;
    top: 0;
    width: 100%;
    padding: 20px 30px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: rgba(0, 0, 0, 0.3);
    z-index: 1000;
}

header .navigation {
    display: flex;
    flex-wrap: wrap;
}

header .navigation li {
    list-style: none;
}

header .navigation li a {
    color: #fff;
    font-weight: 700;
    text-decoration: none;
    margin-left: 20px;
    font-size: 18px;
    font-family: 'Arial Narrow', Arial, sans-serif;
}

/* Content */
.content {
    position: relative;
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    text-align: center;
}

.content .textBox {
    max-width: 600px;
    margin: 80px 70px 80px 80px;
}

.content .textBox h2 {
    color: #fff;
    font-size: 75px;
    margin-bottom: 10px;
    line-height: 1.2em;
    font-weight: 700;
    font-family: Arial, sans-serif;
}

.content .textBox p {
    color: #fff;
    font-size: 28px;
    font-family: Arial, sans-serif;
}

.content .textBox a {
    display: inline-block;
    margin-top: 15px;
    padding: 10px 20px;
    background: #E51E2A;
    color: #fff;
    text-decoration: none;
    border-radius: 40px;
    font-weight: 500;
}

/* Image Box */
.content .imagebox {
    width: 100%;
    max-width: 500px;
}

.content .imagebox img {
    width: 100%;
    height: auto;
    display: block;
    object-fit: cover;
    margin: 0 auto;
}

/* Social Icons */
.sci {
    position: relative;
    display: flex;
    justify-content: center;
    gap: 10px;
    margin-top: 10px;
    padding: 0;
}

.sci li {
    list-style: none;
}

.sci li a {
    background: #000;
    width: 30px;
    height: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 80%;
    transition: all 0.3s ease-in-out;
}

.sci li a:hover {
    background: #333;
    transform: translateY(-5px);
}

.sci li a img {
    filter: invert(1);
    width: 30px;
    height: 30px;
}

/* Swiper Styles */
.swiper {
    width: 100%;
    max-width: 500px;
    height: 500px;
}

.swiper-slide {
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 18px;
    font-size: 18px;
    font-weight: bold;
    color: #fff;
}

.swiper-slide img {
    width: 100%;
    height: auto;
    border-radius: 18px;
}

/* Button */
.buttonlearn {
    display: inline-block;
    padding: 18px 36px;
    background-color: #E51E2A;
    color: #fff;
    font-size: 30px;
    font-weight: bold;
    text-decoration: none;
    border-radius: 40px;
    transition: all 0.3s ease-in-out;
    text-align: center;
    box-shadow: 0 6px 10px rgba(0, 0, 0, 0.15);
    cursor: pointer;
}

.buttonlearn:hover {
    background-color: #c4161f;
    transform: scale(1.1);
    box-shadow: 0 8px 12px rgba(0, 0, 0, 0.2);
}

.buttonlearn:active {
    transform: scale(0.95);
}

/* Modal */
.modal {
    display: none;
    position: fixed;
    z-index: 1000;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    overflow: auto;
    background-color: rgba(0, 0, 0, 0.4);
    opacity: 0;
    transition: opacity 0.3s ease;
    justify-content: center;
    align-items: center;
}

.modal.show {
    opacity: 1;
    display: flex;
}

.modal-content {
    background-color: #f8f8ff;
    border-radius: 22px;
    box-shadow: 0 18px 36px rgba(0, 0, 0, 0.4);
    padding: 30px;
    width: 90%;
    max-width: 850px;
    text-align: center;
    font-family: 'Open Sans', sans-serif;
}

/* Close Button */
.close-btn {
    padding: 10px 20px;
    background-color: #dc3545;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-size: 14px;
    transition: background-color 0.3s ease;
}

.close-btn:hover {
    background-color: #c82333;
}

.close-btn:active {
    background-color: #b01222;
    transform: translateY(1px);
}

/* Goals & Hobbies */
.goals-list, .hobbies-table, .schools-table {
    width: 100%;
    border-collapse: collapse;
    margin-bottom: 20px;
}

.goals-list li, .hobbies-table th, .hobbies-table td, .schools-table th, .schools-table td {
    padding: 15px;
    text-align: center;
    font-size: 16px;
}

.goals-list li {
    background-color: #FAA0A0;
    border-radius: 10px;
    color: #fff;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.goals-list li:hover {
    transform: translateY(-5px);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
}

.schools-table th {
    background-color: #F88379;
    font-weight: 700;
}

/* Responsive Design */
@media (max-width: 768px) {
    section {
        padding: 50px 20px;
    }

    .content {
        flex-direction: column;
        text-align: center;
    }

    .content .textBox {
        max-width: 90%;
    }

    .content .textBox h2 {
        font-size: 32px;
    }

    .content .textBox p {
        font-size: 14px;
    }

    .content .imagebox {
        max-width: 300px;
    }
}

@media (max-width: 600px) {
    .modal-content {
        padding: 20px;
    }
}
</style>
