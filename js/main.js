const goTopBtn = document.querySelector('.back-to-top')

goTopBtn.addEventListener('click', goTop)
window.addEventListener('scroll', trackScroll)

function trackScroll(){
   const offSet = window.scrollY
   const coords = document.documentElement.clientHeight
   if (offSet > coords){
      goTopBtn.classList.add('back-to-top--show')
   } else {
      goTopBtn.classList.remove('back-to-top--show')
   }
}

function goTop(){
   if (window.scrollY > 0){
      window.scrollBy(0 , -75)
      setTimeout(goTop, 0)
   }
}