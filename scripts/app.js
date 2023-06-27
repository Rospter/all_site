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

// header_Step
var header_img = [
  {
    name: "header_img",
    src: "../images/header-img.svg",
  },
  {
    name: "Interactive_img",
    src: "../images/Interactive-ART.png",
  },
];
var header_text = [
  {
    name: "nav text",
    text1: "Home",
    text2: "about",
    text3: "How it work",
    text4: "Clients",
    text5: "Portfolio",
    text6: "Contact us",
    text7: "See our works",
  },
  {
    name: "header text",
    text1: "Create a new generation website for your business",
    text2:
      " There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't",
  },
];

// Main_Step

var main_img = [
  {
    name: "main img",
    src: "../images/main-img.svg",
  },
];

var main_text = [
  {
    name: "main text",
    text1: "HOW IT WORK",
    text2: "Three Simple Step To Started Working Process",
    text3: "Research Project",
    text4: "There are many variations of passages of Lorem Ipsum available",
    text5: "Targeting",
  },
];

// Comment_ Step

var comment_img = [
  {
    name: "comment img",
    src1: "../images/person-1.png",
    src2: "../images/person-2.png",
    src3: "../images/person-3.png",
  },
  {
    name: "logo",
    src1: "../images/logo-1.svg",
    src2: "../images/logo-2.svg",
    src3: "../images/logo-3.svg",
    src4: "../images/logo-4.svg",
    src5: "../images/logo-5.svg",
  },
];

var comment_text = [
  {
    name: "comment text",
    text1: "You’re in a good hand",
    text2:
      "There are many variations of passages of Lorem Ipsum available, but the majority have suffered.",
    text3:
      " Life before Company was very chaotic we got a lot of phone calls, a lot of mistyped orders. So with Company, the abilityto see the order directly from the customer makes it so streamlined.",
    text4: "Martin Jones, Creative Cons",
  },
];




// Portfolio_step



var portfolio_img = [

  {
    name:"portfolio img",
    src1:"../images/portfolio-1.jpg",
    src2:"../images/portfolio-2.jpg",
    src3:"../images/portfolio-3.jpg",
    src4:"../images/portfolio-4.jpg",
    src5:"../images/portfolio-5.jpg",
    src6:"../images/portfolio-6.jpg",

  },

];

var portfolio_text = [

  {
    name:"portfolio text",
    text1:"PORTFOLIO",
    text2:"Three Simple Step To Started Working Process",
  }
];

var footer_img = [

  {
    name:"footer img",
    src:"../images/right-arrow.svg",
  }
];

var footer_text = [

  {
    name:"footer text",
    text1:"Create a new generation website for your business.",
    text2:"Copyright © 2018-2019",
    text3:"Interactive ART Company All rights reserved",
  }
];
var element1 = document.getElementById("right_image");
element1.src = header_img[0]["src"];

// 2
var element2 = document.getElementById("nav_logos");
element2.src = header_img[1]["src"];

// 3
var element3 = document.getElementById("main_img");
element3.src = main_img[0]["src"];

// person_img

var element3 = document.getElementById("person_1");
element3.src = comment_img[0]["src1"];
var element4 = document.getElementById("person_2");
element4.src = comment_img[0]["src2"];
var element5 = document.getElementById("person_3");
element5.src = comment_img[0]["src3"];

// logo_img

var element6 = document.getElementById("logo_1");
element6.src = comment_img[1]["src1"];
var element7 = document.getElementById("logo_2");
element7.src = comment_img[1]["src2"];
var element8 = document.getElementById("logo_3");
element8.src = comment_img[1]["src3"];
var element9 = document.getElementById("logo_4");
element9.src = comment_img[1]["src4"];
var element10 = document.getElementById("logo_5");
element10.src = comment_img[1]["src5"];

// portfolio_img


var element11 = document.getElementById("portfolio_1");
element11.src = portfolio_img[0]['src1'];
var element12 = document.getElementById("portfolio_2");
element12.src = portfolio_img[0]['src2'];
var element13 = document.getElementById("portfolio_3");
element13.src = portfolio_img[0]['src3'];
var element14 = document.getElementById("portfolio_4");
element14.src = portfolio_img[0]['src4'];
var element15 = document.getElementById("portfolio_5");
element15.src = portfolio_img[0]['src5'];
var element16 = document.getElementById("portfolio_6");
element16.src = portfolio_img[0]['src6'];

// footer

var element17 = document.getElementById("right_arrow");
element17.src = footer_img[0]['src'];

// All Text

//

var textelement = document.getElementById("menu__link_js");
textelement.innerText = header_text[0]["text1"];
//
var textelement = document.getElementById("menu__link2_js");
textelement.innerText = header_text[0]["text2"];
var textelement = document.getElementById("menu__link3_js");
textelement.innerText = header_text[0]["text3"];
var textelement = document.getElementById("menu__link4_js");
textelement.innerText = header_text[0]["text4"];
var textelement = document.getElementById("menu__link5_js");
textelement.innerText = header_text[0]["text5"];
//
var textelement = document.getElementById("header_link_js");
textelement.innerText = header_text[0]["text6"];
var textelement = document.getElementById("header_content_title");
textelement.innerText = header_text[1]["text1"];
var textelement = document.getElementById("header_content_title2");
textelement.innerText = header_text[1]["text2"];
var textelement = document.getElementById("header-content__link_js");
textelement.innerText = header_text[0]["text6"];
var textelement = document.getElementById("header-content__link2_js");
textelement.innerText = header_text[0]["text7"];
var textelement = document.getElementById("works_text");
textelement.innerText = main_text[0]["text1"];
var textelement = document.getElementById("works__title");
textelement.innerText = main_text[0]["text2"];
var textelement = document.getElementById("works-content__title");
textelement.innerText = main_text[0]["text3"];
var textelement = document.getElementById("works-content__text");
textelement.innerText = main_text[0]["text4"];
var textelement = document.getElementById("works-content__title2");
textelement.innerText = main_text[0]["text5"];
var textelement = document.getElementById("works-content__text2");
textelement.innerText = main_text[0]["text4"];
var textelement = document.getElementById("works-content__title3");
textelement.innerText = main_text[0]["text3"];
var textelement = document.getElementById("works-content__text3");
textelement.innerText = main_text[0]["text4"];
var textelement = document.getElementById("person-comments__title");
textelement.innerText = comment_text[0]["text1"];
var textelement = document.getElementById("person-comments__text");
textelement.innerText = comment_text[0]["text2"];
var textelement = document.getElementById("comment__body");
textelement.innerText = comment_text[0]["text3"];
var textelement = document.getElementById("comment__body2");
textelement.innerText = comment_text[0]["text3"];
var textelement = document.getElementById("comment__body3");
textelement.innerText = comment_text[0]["text3"];
var textelement = document.getElementById("comment_person");
textelement.innerText = comment_text[0]['text4'];
var textelement = document.getElementById("comment_person2");
textelement.innerText = comment_text[0]['text4'];
var textelement = document.getElementById("comment_person3");
textelement.innerText = comment_text[0]['text4'];
var textelement = document.getElementById("portfolio__text");
textelement.innerText = portfolio_text[0]['text1'];
var textelement = document.getElementById("portfolio__title");
textelement.innerText = portfolio_text[0]['text2'];
var textelement = document.getElementById("newsletter__text");
textelement.innerText = footer_text[0]['text1'];
var textelement = document.getElementById("copy-right__text");
textelement.innerText = footer_text[0]['text2'];
var textelement = document.getElementById("copy-right__text2");
textelement.innerText = footer_text[0]['text3'];
