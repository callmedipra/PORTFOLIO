let tl=gsap.timeline();
tl.from(".nav",{
    opacity:0,
    duration:0.3,
})
tl.from(".nav-left h1,.nav-right a",{
    y:-100,
    duration:0.8,
    delay:0.3,
})

tl.from(".hero-left-1st-sec h1",{
    y:200,
    duration:0.7,
    stagger:0.2,
})
tl.from(".hero-left-2nd-sec p",{
    // transform:translateZ(-10),
    duration:0.7,
    opacity:0,
})
tl.from(".hero-left-3rd-sec",{
    opacity:0,
    duration:0.7
})
tl.from(".front-shape",{
    x:100,
    opacity:0,
    duration:0.7,
})
tl.to("#back-shape",{
    rotate:20,
    x:40,
    // y:20,
    opacity:1,
    duration:0.7,
})
tl.from(".fa-brands ",{
    scale:0,
    // z:0,
    duration:0.4,
    stagger:0.2,
})

gsap.from(".container-heading h1",{
    opacity:0,
    y:100,
    duration:0.6,
    scrollTrigger:{
        trigger:".container-heading h1",
        scroller:"body",
        markers:true,
        start:"top 50%"
    }
})
gsap.from(".container-paragraph p",{
    opacity:0,
    x:300,
    duration:0.6,
    scrollTrigger:{
        trigger:".container-paragraph p",
        scroller:"body",
        markers:true,
        start:"top 29.5%"
    }
})
gsap.from(".skill-container-heading h1",{
    opacity:0,
    y:100,
    duration:0.6,
    scrollTrigger:{
        trigger:".skill-container-heading h1",
        scroller:"body",
        markers:true,
        start:"top 80%"
    }
})
gsap.from(".skill-container-wrapper",{
    opacity:0,
    x:300,
    duration:0.6,
    scrollTrigger:{
        trigger:".skill-container-wrapper",
        scroller:"body",
        markers:true,
        start:"top 65%"
    }
})

let h1s=document.querySelectorAll(".skill-container-heading h1");
let ps=document.querySelectorAll(".skill-container-wrapper p");
let skills=document.querySelector(".skills");
let education=document.querySelector(".education");
let arrayofright=[skills,education];
let indexforleft=0;
let indexforright=0;
let animating=false;
let btn=document.querySelector(".arrow-down");
btn.addEventListener("click",function(){
    // Setting animation for the left side
    if(!animating)
    {
        animating=true;
        gsap.to(h1s[indexforleft],{
            top:'-=100%',
            onComplete:function(){
                gsap.set(this._targets[0],{
                    top:100,
                })
                animating=false;
            }
        })
    
        
        indexforleft===h1s.length -1 ? (indexforleft=0) : indexforleft++;
        console.log(h1s[indexforleft]);
        gsap.to(h1s[indexforleft],{
            top:'-=100%',
        })
        // Setting animation for right side too!
        animating=true;
        gsap.to(arrayofright[indexforright],{
            top:'-=100%',
            onComplete:function(){
                gsap.set(this._targets[0],{
                    top:100,
                })
                animating=false;
            }
        })
    
        
        indexforright===arrayofright.length -1 ? (indexforright=0) : indexforright++;
        gsap.to(arrayofright[indexforright],{
            top:'-=100%',
        })
    }
})


