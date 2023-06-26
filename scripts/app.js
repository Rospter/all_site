let menu = document.querySelector(".menu");
let menuBtn = document.querySelector(".header__icon");
let menuBtnIcon = document.querySelector(".header__icon i");

menuBtn.addEventListener("click", function () {
  if (menuBtnIcon.classList.contains("fa-bars")) {
    menu.style.left = "0";
    menuBtnIcon.classList = "fa fa-times";
  } else {
    menu.style.left = "-256px";
    menuBtnIcon.classList = "fa fa-bars";
  }
});

// New...

var image1 = "../images/header-img.svg";
var element1 = document.getElementById("right_image");
element1.src = image1;

// 2

var image2 = "../images/Interactive-ART.png";
var element2 = document.getElementById("nav_logos");
element2.src = image2;

// 3
var image3 = "../images/main-img.svg";
var element3 = document.getElementById("main_img");
element3.src = image3;

// person_img

var image3 = "../images/person-1.png";
var element3 = document.getElementById("person_1");
element3.src = image3;
var image4 = "../images/person-2.png";
var element4 = document.getElementById("person_2");
element4.src = image4;
var image5 = "../images/person-3.png";
var element5 = document.getElementById("person_3");
element5.src = image5;

// logo_img

var image6 = "../images/logo-1.svg";
var element6 = document.getElementById("logo_1");
element6.src = image6;
var image7 = "../images/logo-2.svg";
var element7 = document.getElementById("logo_2");
element7.src = image7;
var image8 = "../images/logo-3.svg";
var element8 = document.getElementById("logo_3");
element8.src = image8;
var image9 = "../images/logo-4.svg";
var element9 = document.getElementById("logo_4");
element9.src = image9;
var image10 = "../images/logo-5.svg";
var element10 = document.getElementById("logo_5");
element10.src = image10;

// portfolio_img

var image11 = "../images/portfolio-1.jpg";
var element11 = document.getElementById("portfolio_1");
element11.src = image11;
var image12 = "../images/portfolio-2.jpg";
var element12 = document.getElementById("portfolio_2");
element12.src = image12;
var image13 = "../images/portfolio-3.jpg";
var element13 = document.getElementById("portfolio_3");
element13.src = image13;
var image14 = "../images/portfolio-4.jpg";
var element14 = document.getElementById("portfolio_4");
element14.src = image14;
var image15 = "../images/portfolio-5.jpg";
var element15 = document.getElementById("portfolio_5");
element15.src = image15;
var image16 = "../images/portfolio-6.jpg";
var element16 = document.getElementById("portfolio_6");
element16.src = image16;

// footer

var image17 = "../images/right-arrow.svg";
var element17 = document.getElementById("right_arrow");
element17.src = image17;

// All Text

var text = "Home";
var text2 = "about";
var text3 = "How it work";
var text4 = "Clients";
var text5 = "Portfolio";
//
var header_link_text = "Contact us";
var header_content_title = "Create a new generation website for your business";
var header_content_title2 =
  " There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't";
var header_content_link = "See our works";
var works_text = "HOW IT WORK";
var works_title = "Three Simple Step To Started Working Process";
var works_content_text = "Research Project";
var works_content_text2 =
  "There are many variations of passages of Lorem Ipsum available";
var works_content_text1_2 = "Targeting";
var works_content_text2_2 =
  "There are many variations of passages of Lorem Ipsum available";
var works_content_text1_3 = "Research Project";
var works_content_text2_3 =
  "There are many variations of passages of Lorem Ipsum available";
var person_comment_title = "You’re in a good hand";
var person_comment_text =
  "There are many variations of passages of Lorem Ipsum available, but the majority have suffered.";
var comment_body =
  " Life before Company was very chaotic we got a lot of phone calls, a lot of mistyped orders. So with Company, the abilityto see the order directly from the customer makes it so streamlined.";
var comment_person = "Martin Jones, Creative Cons";
var portfolio_text = "PORTFOLIO";
var portfolio_title = "Three Simple Step To Started Working Process";
var newsletter_text = "Create a new generation website for your business.";
var copy_right_text = "Copyright © 2018-2019";
var copy_right_text2 = "Interactive ART Company All rights reserved";
var textelement = document.getElementById("menu__link_js");
textelement.innerText = text;
//
var textelement = document.getElementById("menu__link2_js");
textelement.innerText = text2;
var textelement = document.getElementById("menu__link3_js");
textelement.innerText = text3;
var textelement = document.getElementById("menu__link4_js");
textelement.innerText = text4;
var textelement = document.getElementById("menu__link5_js");
textelement.innerText = text5;
//
var textelement = document.getElementById("header_link_js");
textelement.innerText = header_link_text;
var textelement = document.getElementById("header_content_title");
textelement.innerText = header_content_title;
var textelement = document.getElementById("header_content_title2");
textelement.innerText = header_content_title2;
var textelement = document.getElementById("header-content__link_js");
textelement.innerText = header_link_text;
var textelement = document.getElementById("header-content__link2_js");
textelement.innerText = header_content_link;
var textelement = document.getElementById("works_text");
textelement.innerText = works_text;
var textelement = document.getElementById("works__title");
textelement.innerText = works_title;
var textelement = document.getElementById("works-content__title");
textelement.innerText = works_content_text;
var textelement = document.getElementById("works-content__text");
textelement.innerText = works_content_text2;
var textelement = document.getElementById("works-content__title2");
textelement.innerText = works_content_text1_2;
var textelement = document.getElementById("works-content__text2");
textelement.innerText = works_content_text2_2;
var textelement = document.getElementById("works-content__title3");
textelement.innerText = works_content_text1_3;
var textelement = document.getElementById("works-content__text3");
textelement.innerText = works_content_text2_3;
var textelement = document.getElementById("person-comments__title");
textelement.innerText = person_comment_title;
var textelement = document.getElementById("person-comments__text");
textelement.innerText = person_comment_text;
var textelement = document.getElementById("comment__body");
textelement.innerText = comment_body;
var textelement = document.getElementById("comment__body2");
textelement.innerText = comment_body;
var textelement = document.getElementById("comment__body3");
textelement.innerText = comment_body;
var textelement = document.getElementById("comment_person");
textelement.innerText = comment_person;
var textelement = document.getElementById("comment_person2");
textelement.innerText = comment_person;
var textelement = document.getElementById("comment_person3");
textelement.innerText = comment_person;
var textelement = document.getElementById("portfolio__text");
textelement.innerText = portfolio_text;
var textelement = document.getElementById("portfolio__title");
textelement.innerText = portfolio_title;
var textelement = document.getElementById("newsletter__text");
textelement.innerText = newsletter_text;
var textelement = document.getElementById("copy-right__text");
textelement.innerText = copy_right_text;
var textelement = document.getElementById("copy-right__text2");
textelement.innerText = copy_right_text2;
