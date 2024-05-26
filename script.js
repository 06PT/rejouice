function scroll() {
  gsap.registerPlugin(ScrollTrigger);

  const locoScroll = new LocomotiveScroll({
    el: document.querySelector(".main"),
    smooth: true,

    // for tablet smooth
    tablet: { smooth: true },

    // for mobile
    smartphone: { smooth: true },
  });
  locoScroll.on("scroll", ScrollTrigger.update);

  ScrollTrigger.scrollerProxy(".main", {
    scrollTop(value) {
      return arguments.length
        ? locoScroll.scrollTo(value, 0, 0)
        : locoScroll.scroll.instance.scroll.y;
    },
    getBoundingClientRect() {
      return {
        top: 0,
        left: 0,
        width: window.innerWidth,
        height: window.innerHeight,
      };
    },

    // follwoing line is not required to work pinning on touch screen

    /* pinType: document.querySelector(".smooth-scroll").style.transform
    ? "transform"
    : "fixed"*/
  });
}
scroll();

function cursor1() {
  var page1 = document.querySelector(".page1-content");
  var cursor = document.querySelector(".cursor");

  page1.addEventListener("mousemove", function (val) {
    gsap.to(cursor, {
      x: val.x,
      y: val.y,
    });
  });

  page1.addEventListener("mouseenter", function () {
    gsap.to(cursor, {
      scale: 1,
      opacity: 1,
    });
  });
  page1.addEventListener("mouseleave", function () {
    gsap.to(cursor, {
      scale: 0,
      opacity: 0,
    });
  });
}
cursor1();

function page2Animation() {
  var tl = gsap.timeline();
    tl.to(".bound .boundelem",{
        y: '-10%',
        stagger: 0.25,
        delay:1,
        duration: 1,
        opacity:1,
        scrollTrigger: {
            trigger: ".page2",
            scroller: ".main",
            start: "top 40%",
            end: "top 37%",
            scrub: 2
        }
    })
    tl.to(".belem",{
      x: '-1%',
      delay:1,
      duration: 1,
      opacity:1,
      scrollTrigger: {
          trigger: ".page2",
          scroller: ".main",
          start: "top 40%",
          end: "top 37%",
          scrub: 2
        }
    })
}
page2Animation();



var tl = gsap.timeline()
tl.from(".loader h3",{
  x:70,
  opacity:0,
  duration:1,
  stagger:0.8
})
tl.to(".loader h3",{
  y:-30,
  opacity:0,
  stagger:0.1,
  duration:0.8
})
tl.to(".loader",{
  opacity:0,
  y:-1000,
  duration:1 
 })
tl.to(".loader",{
  display:none
})
tl.from(".page1-content h1",{
  y:100,
  opacity:0, 
  stagger:0.1
})

