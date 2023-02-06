gsap.to(".over-v",{
    ease: Expo.easeInOut,
    width: "35%",
    duration:3,
    stagger:2
});

gsap.to(".front-v",{
    ease: Expo.easeInOut,
    width: "18%",
    duration:6,
    stagger:3
});

gsap.to(".back-v",{
    ease: Expo.easeInOut,
    width: "18%",
    duration:6,
    stagger:3
});

gsap.to(".p-headline h3",{
    // ease: Expo.easeInOut,
    stagger:4.5,
    top:0
});
gsap.to(".p-headline h3",{
    delay:2,
    // ease: Expo.easeInOut,
    duration:6,
    stagger:4.5,
    top:"100px"
});