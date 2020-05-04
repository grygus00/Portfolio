new fullpage("#fullPage", {
  autoScrolling: true,
  navigation: true,
  licenseKey: "r5?XkoI^s7",
});

var wag1 = bodymovin.loadAnimation({
  container: document.getElementById("welcome"),
  render: "svg",
  autoplay: false,
  path: "anime/welcome.json",
  name: 'stopForSecond',
});
var sign1 = bodymovin.loadAnimation({
  container: document.getElementById("sign"),
  render: "svg",
  autoplay: false,
  path: "anime/Neon_sign.json",
  name: 'stopForSecond',
});

var work = bodymovin.loadAnimation({
  container: document.getElementById("working"),
  render: "canvas",
  loop: true,
  autoplay: true,
  path: "anime/work1.json",
});
var nr = bodymovin.loadAnimation({
  container: document.getElementById("reading"),
  render: "canvas",
  autoplay: true,
  loop: true,
  path: "anime/reading1.json",
});

var opacity = 0;
var myopacity = 0;

function MyFadeFunction() {
  if (myopacity < 1) {
    myopacity += 0.075;
    setTimeout(function () {
      MyFadeFunction();
    }, 150);
  }
  document.getElementById("neon1").style.opacity = myopacity;
  bodymovin.play('stopForSecond');
}
function MyFadeFunction2() {
  if (myopacity < 1) {
    myopacity += 0.075;
    setTimeout(function () {
      MyFadeFunction2();
    }, 200);
  }
  document.getElementById("neon2").style.opacity = myopacity;
}
function MyFadeFunction3() {
  if (myopacity < 1) {
    myopacity += 0.2;
    setTimeout(function () {
      MyFadeFunction3();
    }, 160);
  }
  document.getElementById("sign2").style.opacity = myopacity;
  document.getElementById("neon3").style.opacity = myopacity;
}

setTimeout(function () {
  MyFadeFunction();
}, 2100);
setTimeout(function () {
  opacity = 0;
  myopacity = 0;
  MyFadeFunction2();
}, 4000);
setTimeout(
  function () {
    opacity = 0;
    myopacity = 0;
    MyFadeFunction3();
  }, 6000
);


