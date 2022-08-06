const topIcon=document.querySelector(".ri-arrow-up-line")
window.onscroll=()=>{
  this.scrollY > 150
  ? topIcon.style.display='block'
  : topIcon.style.display='none';
  this.scrollY >700?document.querySelector("nav ul li a").classList.remove('activ'):document.querySelector("nav ul li a").classList.add('activ')
}

const sections = document.querySelectorAll("section[id]");
window.addEventListener("scroll", () => {
  let scrollY = window.pageYOffset;
  sections.forEach((section) => {
    const sectionHeight = section.offsetHeight,
      sectionTop = section.offsetTop - 60,
      sectionId = section.getAttribute("id");
    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document
        .querySelector(".home a[href*=" + sectionId + "] ")
        .classList.add("activ");
    } else {
      document
        .querySelector(".home a[href*=" + sectionId + "] ")
        .classList.remove("activ");
    }
  });
});


let swiper = new Swiper(".produits", {
    grabCursor:true,
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
});

const sr=ScrollReveal( {
 origin:'top',
 distance:'60px',
 duration:2500,
 delay:400,
 rest:true
})
sr.reveal(`.homeSection .text, footer .column`)
sr.reveal(`.homeImgs`, {delay:600,origin:'bottom'})
sr.reveal(`.new .column, .card, .brands img `, {interval:100})
sr.reveal(`.men`, {origin:'right'})
sr.reveal(`.Women`, {origin:'left'})

const dark=document.getElementById('dark')
dark.onclick=()=>{
  if(dark.classList.contains('ri-moon-line')){
    dark.removeAttribute('class')
    dark.setAttribute('class',"ri-sun-line")
    document.body.classList.add('darkMood')
  }else{
    dark.removeAttribute('class')
    dark.setAttribute('class',"ri-moon-line")
    document.body.classList.remove('darkMood')
  }
}