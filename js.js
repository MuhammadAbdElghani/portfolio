let navbar = document.querySelector(".navbar"),
    menuBtn = document.querySelector(".menu-btn"),
    menu = document.querySelector(".menu"),
    scrollBtn = document.querySelector(".scroll-up-btn")

window.addEventListener("scroll", ()=>{
    if(window.scrollY > 20){
        navbar.classList.add("sticky");
    }
    
    else{
        navbar.classList.remove("sticky");
    }
    
    if(window.scrollY > 500){
        scrollBtn.classList.add("show");
    }
    
    else{
        scrollBtn.classList.remove("show");
    }
})


scrollBtn.addEventListener("click", ()=>{
    scrollTo(0,0);
})






menuBtn.addEventListener("click", ()=>{
    menu.classList.toggle("active")
    
    if(menuBtn.children[0].classList[1] === "fa-bars"){
        
        menuBtn.innerHTML = `<i class="fas fa-times"></i>`
        
    }
    
    else if(menuBtn.children[0].classList[1] == "fa-times"){
        
        menuBtn.innerHTML = `<i class="fas fa-bars"></i>`
        
    }
})


let sections = document.querySelectorAll("section"),
    links = document.querySelectorAll(".navbar .menu li");
    

links.forEach(link =>{
    link.addEventListener("click", ()=>{
        document.querySelector(".navbar .menu").classList.remove("active");
        
        if(menuBtn.children[0].classList[1] === "fa-bars"){
        
            menuBtn.innerHTML = `<i class="fas fa-times"></i>`
            
        }
        
        else if(menuBtn.children[0].classList[1] == "fa-times"){
            
            menuBtn.innerHTML = `<i class="fas fa-bars"></i>`
            
        }
        
        let target = link.dataset.position;
        
        console.log(target);
        
        sections.forEach(section =>{
            if(section.classList.contains(target)){
                section.scrollIntoView({
                    behavior : "smooth"
                })
            }
        })
        
    })
})


var typed = new Typed(".typing", {
    strings : ["UI UX Designer", "Freelancer"],
    typeSpeed : 100,
    backSpeed : 60,
    loop : true
})

var typed = new Typed(".typing-2", {
    strings : ["UI UX Designer", "Freelancer"],
    typeSpeed : 100,
    backSpeed : 60,
    loop : true
})