let t1=gsap.timeline();
gsap.from(".nav-left",{
    y:-100,
    duration:0.6,
    delay:0.3
})
t1.from(".nav-right a",{
    y:-100,
    duration:0.6,
    delay:0.3,
    stagger:0.1,
})


t1.from(".hero-left-1st-sec h1",{
    y:200,
    duration:0.7,
    stagger:0.2,
})
t1.from(".hero-left-2nd-sec p",{
    // transform:translateZ(-10),
    duration:0.7,
    opacity:0,
})
t1.from(".hero-left-3rd-sec",{
    opacity:0,
    duration:0.7
})
t1.from(".front-shape",{
    x:100,
    opacity:0,
    duration:0.7,
})
t1.to("#back-shape",{
    rotate:20,
    x:40,
    // y:20,
    opacity:1,
    duration:0.7,
})
t1.from(".fa-brands ",{
    scale:0,
    // z:0,
    duration:0.4,
    stagger:0.2,
})