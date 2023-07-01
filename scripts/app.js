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

function renderImages(data,id) {
  const container = document.getElementById(id);

  data.map((item) => {
    const div = document.createElement("nav-logo");
    const img = document.createElement("img");
    const p = document.createElement("p");

    img.src = item.src;
    p.textContent = item.text;
    // div.classList.add("header-content__right"); // اضافه کردن کلاس به دیو
    div.appendChild(img);
    div.appendChild(p);
    container.appendChild(div);
  });
}

const header_section = [
  {
    src: "images/header-img.svg",
  },
];
const nav_section = [

  {
    src: "images/Interactive-ART.png",
  },
];

const main_section = [
{
  src:"images/main-img.svg",
}
];
const newsletter_section = [
{
  src:"images/right-arrow.svg",
}
];
const comment_person_1 = [
  {
    src:"images/person-1.png",
  }
  ];
  const comment_person_2 = [
    {
      src:"images/person-2.png",
    }
    ];
    const comment_person_3 = [
      {
        src:"images/person-3.png",
      }
      ];
;

// header_Step
renderImages(header_section,"header-js");
renderImages(nav_section,"nav-logo")
renderImages(main_section,"main-js");
renderImages(newsletter_section,"newsletter-img")
renderImages(comment_person_1,"comment_images")
renderImages(comment_person_2,"comment_images2")
renderImages(comment_person_3,"comment_images3")
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


var comment_img_2 = [
  {
    src1: "images/logo-1.svg",
    src2: "images/logo-2.svg",
    src3: "images/logo-3.svg",
    src4: "images/logo-4.svg",
    src5: "images/logo-5.svg",
  },
];

const comment_container = [
  {
    commentText: "",
    commentImg: "images/logo-1.svg",
    commentAuthor: "",
  },
  {
    commentText: "",
    commentImg: "images/logo-2.svg",
    commentAuthor: "",
  },
  {
    commentText: "",
    commentImg: "images/logo-3.svg",
    commentAuthor: "",
  },
  {
    commentText: "",
    commentImg: "images/logo-4.svg",
    commentAuthor: "",
  },
  {
    commentText: "",
    commentImg: "images/logo-5.svg",
    commentAuthor: "",
  },
];
// portfolio
const portfolio_container = [
  {
    commentText: "",
    commentImg: "images/portfolio-1.jpg",
    commentAuthor: "",
  },
  {
    commentText: "",
    commentImg: "images/portfolio-2.jpg",
    commentAuthor: "",
  },
  {
    commentText: "",
    commentImg: "images/portfolio-3.jpg",
    commentAuthor: "",
  },
  {
    commentText: "",
    commentImg: "images/portfolio-4.jpg",
    commentAuthor: "",
  },
  {
    commentText: "",
    commentImg: "images/portfolio-5.jpg",
    commentAuthor: "",
  },
  {
    commentText: "",
    commentImg: "images/portfolio-6.jpg",
    commentAuthor: "",
  },
];
// const comment_person_container = [
//   {
//     commentText: "",
//     commentImg: "images/person-1.png",
//     commentAuthor: "",
//   },
//   {
//     commentText: "",
//     commentImg: "images/person-1.png",
//     commentAuthor: "",
//   },
//   {
//     commentText: "",
//     commentImg: "images/person-1.png",
//     commentAuthor: "",
//   },
// ];
commentRendering(comment_container,"js-photo");
function commentRendering(comment_container,id) {
  var test1 = document.getElementById(id);
  console.log(test1);
  comment_container.map((r) => {
    console.log(r)
    const comment_Text = document.createElement("p");
    comment_Text.innerText = r.commentText;
    const commentAuthor = document.createElement("p");
    commentAuthor.innerHTML = r.commentAuthor;
    const commentImg = document.createElement("img");
    commentImg.src = r.commentImg;
    const commentbox_top = document.createElement("div");
    commentbox_top.appendChild(comment_Text);
    const commentbox_bottom = document.createElement("div");
    commentbox_bottom.appendChild(commentAuthor);
    commentbox_bottom.appendChild(commentImg);
    const commentBox = document.createElement("div");
    commentBox.classList.add("comment-box");

    commentBox.appendChild(commentbox_top);
    commentBox.appendChild(commentbox_bottom);
    test1.appendChild(commentBox)
  });
}

portfolioRendering(portfolio_container,"portfolio-js-picture");
function portfolioRendering(portfolio_container,id) {
  var test1 = document.getElementById(id);
  console.log(test1);
  portfolio_container.map((r) => {
    console.log(r)
    const comment_Text = document.createElement("p");
    comment_Text.innerText = r.commentText;
    const commentAuthor = document.createElement("p");
    commentAuthor.innerHTML = r.commentAuthor;
    const commentImg = document.createElement("img");
    commentImg.src = r.commentImg;
    const commentbox_top = document.createElement("div");
    commentbox_top.appendChild(comment_Text);
    const commentbox_bottom = document.createElement("div");
    commentbox_bottom.appendChild(commentAuthor);
    commentbox_bottom.appendChild(commentImg);
    const commentBox = document.createElement("div");
    commentBox.classList.add("comment-box");

    commentBox.appendChild(commentbox_top);
    commentBox.appendChild(commentbox_bottom);
    test1.appendChild(commentBox)
  });
}
// function CommentPersonRendering(comment_person_container,id) {
//   var test1 = document.getElementById(id);
//   console.log(test1);
//   comment_person_container.map((r) => {
//     console.log(r)
//     const comment_Text = document.createElement("p");
//     comment_Text.innerText = r.commentText;
//     const commentAuthor = document.createElement("p");
//     commentAuthor.innerHTML = r.commentAuthor;
//     const commentImg = document.createElement("img");
//     commentImg.src = r.commentImg;
//     const commentbox_top = document.createElement("div");
//     commentbox_top.appendChild(comment_Text);
//     const commentbox_bottom = document.createElement("div");
//     commentbox_bottom.appendChild(commentAuthor);
//     commentbox_bottom.appendChild(commentImg);
//     const commentBox = document.createElement("div");
//     commentBox.classList.add("comment-box");

//     commentBox.appendChild(commentbox_top);
//     commentBox.appendChild(commentbox_bottom);
//     test1.appendChild(commentBox)
//   });
// }
// CommentPersonRendering(comment_person_container,"comment_images");

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



var portfolio_text = [
  {
    name: "portfolio text",
    text1: "PORTFOLIO",
    text2: "Three Simple Step To Started Working Process",
  },
];



var footer_text = [
  {
    name: "footer text",
    text1: "Create a new generation website for your business.",
    text2: "Copyright © 2018-2019",
    text3: "Interactive ART Company All rights reserved",
  },
];

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
textelement.innerText = comment_text[0]["text4"];
var textelement = document.getElementById("comment_person2");
textelement.innerText = comment_text[0]["text4"];
var textelement = document.getElementById("comment_person3");
textelement.innerText = comment_text[0]["text4"];
var textelement = document.getElementById("portfolio__text");
textelement.innerText = portfolio_text[0]["text1"];
var textelement = document.getElementById("portfolio__title");
textelement.innerText = portfolio_text[0]["text2"];
var textelement = document.getElementById("newsletter__text");
textelement.innerText = footer_text[0]["text1"];
var textelement = document.getElementById("copy-right__text");
textelement.innerText = footer_text[0]["text2"];
var textelement = document.getElementById("copy-right__text2");
textelement.innerText = footer_text[0]["text3"];


const images = [
  { src: "images/portfolio-1.jpg", alt: "car-image", key: 1 },
  { src: "images/portfolio-1.jpg", alt: "car-image", key: 2 },
  { src: "images/portfolio-1.jpg", alt: "car-image", key: 3 },
  { src: "images/portfolio-1.jpg", alt: "car-image", key: 4 },
  { src: "images/portfolio-1.jpg", alt: "car-image", key: 5 },
  { src: "images/portfolio-1.jpg", alt: "car-image", key: 6 },
];
