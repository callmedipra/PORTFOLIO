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

let h1s=document.querySelectorAll(".skill-container-heading h1");
let ps=document.querySelectorAll(".skill-container-wrapper p");
let skills=document.querySelector(".skills");
console.log(skills);
let education=document.querySelector(".education");
let index=0;
let animating=false;
let btn=document.querySelector(".arrow-down");
btn.addEventListener("click",function(){
    if(!animating)
    {
        animating=true;
        gsap.to(h1s[index],{
            top:'-=100%',
            onComplete:function(){
                gsap.set(this._targets[0],{
                    top:100,
                })
                animating=false;
            }
        })
    
        
        index===h1s.length -1 ? (index=0) : index++;
        console.log(h1s[index]);
        gsap.to(h1s[index],{
            top:'-=100%',
        })
        if(index==0){
            skills.style.display="block";
            education.style.display="none";
        }
        else{
            education.style.display="block";
            skills.style.display="none";
        }
    }
})