//Scale Navigation Down
anime({
  targets: ".nav",
  scale: 0,
  duration: 0.1,
  loop: false,
  autoplay: true,
});

//Timeline for logo to move up & navigation to move in / out
var moveIn = anime.timeline({
  easing: "spring(1, 80, 10, 0)",
  autoplay: false,
  duration: 0.1,
});

//Timelie Move In
moveIn
  .add({
    targets: ".logo",
    translateY: -190,
    duration: 0.1,
    autoplay: false,
  })
  .add(
    {
      targets: ".portfolio",
      translateY: 190,
      duration: 0.1,
      autoplay: false,
    },
    0
  )
  .add(
    {
      targets: ".nav-wrapper .nav",
      scale: 1,
      borderRadius: ["50%", "0%"],
      easing: "linear",
    },
    400
  )
  .add(
    {
      targets: ".nav-wrapper .nav li",
      translateX: 0,
      delay: anime.stagger(500),
      opacity: 1,
    },
    800
  );

var moveOut = anime.timeline({
  easing: "easeOutExpo",
  duration: 0.1,
});

//Timelie Move Out
moveOut
  .add({
    targets: ".nav",
    scale: 0,
    borderRadius: ["0%", "50%"],
  })
  .add({
    targets: ".logo",
    translateY: 0,
    duration: 1,
    autoplay: false,
  })
  .add({
    targets: ".portfolio",
    translateY: 0,
  });

//Changing hamburger / bars Move In / Move Out Execution
const barsBtn = document.querySelector(".bars");
let menuOpen = false;
barsBtn.addEventListener("click", () => {
  if (!menuOpen) {
    moveIn.play();
    barsBtn.classList.add("change");
    menuOpen = true;
  } else {
    moveOut.play();
    barsBtn.classList.remove("change");
    menuOpen = false;
  }
});

//Blending nav out when clicking link
let linkBtn = document.querySelectorAll("li a");
for (i = 0; i < linkBtn.length; i++) {
  let link = linkBtn[i];
  link.addEventListener("click", () => {
    moveOut.play();
    barsBtn.classList.remove("change");
    menuOpen = false;
  });
}

//Work paragraph comes in / up
// $(document).on('scroll', function() {
//   $(".workexperience").lettering();
// });

// $(document).ready(function() {
//   animation();
// }, 1000);

// function animation() {
//   var title1 = new TimelineMax();
//   title1.staggerFromTo(".workexperience", 2.5,
//   {ease: Back.easeOut.config(1.7), opacity: 0, bottom: -280},
//   {ease: Back.easeOut.config(1.7), opacity: 1, bottom: 0}, 0.05);
// }

//Back to top
// const backToTop = document.querySelector('.back-to-top')
// backToTop.addEventListener('click', () => {
//     window.anime({
//         targets: document.scrollingElement,
//         duration: 700,
//         easing: 'linear',
//         scrollTop: 0
//     })
// })

//Counting pixel
window.onscroll = function (e) {
  // console.log(window.scrollY); // Value of scroll Y in px
  var docHeight = document.querySelector(".wrapper").offsetHeight;
  var winHeight = window.innerHeight;
  var contentVisibilityHeight =
    docHeight > winHeight
      ? docHeight - winHeight
      : document.body.scrollHeight - winHeight;
  //   var scrollPercent = Math.min(
  //     (100 * window.scrollY) / contentVisibilityHeight,
  //     100
  //   );
  // document.querySelector('.back-to-top span').innerHTML = Math.round(scrollPercent) + '%'
};

//Work Collection
var buttons = document.getElementsByClassName("learn-more");
var buttonsCount = buttons.length;
for (var i = 0; i < buttonsCount; i += 1) {
  buttons[i].addEventListener("click", function () {
    var workCollection = this.nextElementSibling;

    if (workCollection.style.zIndex === "-1") {
      workCollection.style.zIndex = "5";
      this.style.zIndex = "-1";
    } else {
      workCollection.style.zIndex = "-1";
      this.style.zIndex = "9";
    }
  });
}

var closeButtons = document.getElementsByClassName("close-icon");

for (var i = 0; i < closeButtons.length; i += 1) {
  closeButtons[i].addEventListener("click", function () {
    var workCollection = this.parentNode;
    if (workCollection.style.zIndex == "5") {
      workCollection.style.zIndex = "-1";
      workCollection.previousElementSibling.style.zIndex = "9";
    } else {
      workCollection.style.zIndex = "5";
      workCollection.previousElementSibling.style.zIndex = "-1";
    }
  });
}

//svg Mauri Hook animation-----------------------
anime({
  targets: ".project-description-image    svg path",
  strokeDashoffset: [anime.setDashoffset, 0],
  easing: "easeInOutQuad",
  duration: 7000,
  direction: "alternate",
  autoplay: true,
  loop: true,
});

//Type writer Contact page
// set up text to print, each item in array is new line
// var aText = new Array(
//     "Here you can",
//     "send me an",
//     "e-mail"
// );
// var iSpeed = 50; // time delay of print out
// var iIndex = 0; // start printing array at this posision
// var iArrLength = aText[0].length; // the length of the text array
// var iScrollAt = 3; // start scrolling up at this many lines

// var iTextPos = 0; // initialise text position
// var sContents = ''; // initialise contents variable
// var iRow; // initialise current row
// let myTypewriter = false

// function typewriter() {
//     sContents = ' ';
//     iRow = Math.max(0, iIndex - iScrollAt);
//     var destination = document.getElementById("typedtext");

//     while (iRow < iIndex) {
//         sContents += aText[iRow++] + '<br />';
//     }
//     destination.innerHTML = sContents + aText[iIndex].substring(0, iTextPos) + "_";
//     if (iTextPos++ == iArrLength) {
//         iTextPos = 0;
//         iIndex++;
//         if (iIndex != aText.length) {
//             iArrLength = aText[iIndex].length;
//             setTimeout("typewriter()", 500);
//         }
//     } else {
//         setTimeout("typewriter()", iSpeed);
//     }
//     myTypewriter = true
// }

// window.addEventListener('scroll', () => {
//     const scrollable = document.documentElement.scrollHeight - window.innerHeight
//     const scrolled = window.scrollY

//     if (Math.floor(scrolled) == scrollable){
//         typewriter();
//     }
// });

const elementMobile = document.querySelector(".text-animation-mobile");
const lettersHtmlMobile = elementMobile.textContent.replace(
  /\S/g,
  '<span class="letter">$&</span>'
);

elementMobile.innerHTML = `<div class="letters">${lettersHtmlMobile}</div><span class="cursor"></span>`;
elementMobile.style.display = "block";

const lettersMobile = Array.from(elementMobile.querySelectorAll(".letter"));
const TYPE_AFTER_MSMobile = 0;
const JUMP_AFTER_MSMobile = 150;

const blinkMobile = anime({
  targets: ".text-animation-mobile .cursor",
  loop: false,
  duration: 750,
  opacity: [{ value: [1, 1] }, { value: [0, 0] }],
});

var tlMobile = anime.timeline({
  loop: false,
  autoplay: false,
  opacity: 0,
});
tlMobile.add(
  {
    targets: ".text-animation-mobile .cursor",
    translateX: lettersMobile.map((letter, i) => ({
      value: letter.offsetLeft + letter.offsetWidth,
      duration: 1,
      delay: i === 0 ? 0 : JUMP_AFTER_MSMobile,
    })),
  },
  TYPE_AFTER_MSMobile
);
tlMobile.add(
  {
    targets: ".text-animation-mobile .letter",
    opacity: [0, 1],
    duration: 0.1,
    delay: anime.stagger(JUMP_AFTER_MSMobile),
    changeBegin: () => {
      blinkMobile.reset();
      blinkMobile.pause();
    },
    changeComplete: () => {
      blinkMobile.restart();
    },
  },
  TYPE_AFTER_MSMobile
);
tlMobile.add({
  targets: ".text-animation-mobile",
  opacity: 1,
  duration: 1000,
  delay: 500,
  easing: "easeOutExpo",
});

var s2Mobile = $(".text-animation-mobile").offset().top;

$(document).on("scroll", function () {
  var scrollTop = $(document).scrollTop();
  //tl.duration
  //tl.seek(2000)
  //progress %
  //500 is how much scrolling you want to map
  //400 early staert
  var progress = (scrollTop - s2Mobile + 1200) / 500;
  tlMobile.seek(tlMobile.duration * progress);
});

const elementEmial = document.querySelector(".text-animation-email");
const lettersHtmlEmial = elementEmial.textContent.replace(
  /\S/g,
  '<span class="letter">$&</span>'
);
elementEmial.innerHTML = `<div class="letters">${lettersHtmlEmial}</div><span class="cursor"></span>`;
elementEmial.style.display = "block";

const lettersEmial = Array.from(elementEmial.querySelectorAll(".letter"));
const TYPE_AFTER_MSEmial = 0;
const JUMP_AFTER_MSEmial = 150;

const blinkEmial = anime({
  targets: ".text-animation-email .cursor",
  loop: false,
  duration: 750,
  opacity: [{ value: [1, 1] }, { value: [0, 0] }],
});

var tlEmial = anime.timeline({
  loop: false,
  autoplay: false,
  opacity: 0,
});
tlEmial.add(
  {
    targets: ".text-animation-email .cursor",
    translateX: lettersEmial.map((letter, i) => ({
      value: letter.offsetLeft + letter.offsetWidth,
      duration: 1,
      delay: i === 0 ? 0 : JUMP_AFTER_MSEmial,
    })),
  },
  TYPE_AFTER_MSEmial
);
tlEmial.add(
  {
    targets: ".text-animation-email .letter",
    opacity: [0, 1],
    duration: 0.1,
    delay: anime.stagger(JUMP_AFTER_MSEmial),
    changeBegin: () => {
      blinkEmial.reset();
      blinkEmial.pause();
    },
    changeComplete: () => {
      blinkEmial.restart();
    },
  },
  TYPE_AFTER_MSEmial
);
tlEmial.add({
  targets: ".text-animation-email",
  opacity: 1,
  duration: 1000,
  delay: 500,
  easing: "easeOutExpo",
});

var s2Emial = $(".text-animation-email").offset().top;

$(document).on("scroll", function () {
  var scrollTop = $(document).scrollTop();
  //tl.duration
  //tl.seek(2000)
  //progress %
  //500 is how much scrolling you want to map
  //400 early staert
  var progress = (scrollTop - s2Emial + 1200) / 500;
  tlEmial.seek(tlEmial.duration * progress);
});
