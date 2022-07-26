

let header = document.getElementById('header');
let navigationHeader = document.getElementById('navbar');
let mainContent = document.getElementById('main-content');
let showSidebar = false;

function toggleSidebar() {
   showSidebar = !showSidebar;
   if (showSidebar) {
      navigationHeader.style.marginLeft = '-10vw'
      navigationHeader.style.animationName = 'showSidebar'
      mainContent.style.filter = 'blur(2px)'
      mainContent.style.overflow = 'hidden'
   }
   else {
      navigationHeader.style.marginLeft = '-100vw'
      navigationHeader.style.animationName = ''
      mainContent.style.filter = ''
   }
   console.log(showSidebar);
}

function closeSidebar() {
   if (showSidebar) {
      toggleSidebar();
   }
}


window.addEventListener('resize', () => {
   if (window.innerWidth > 720 && showSidebar) {
      toggleSidebar();
   }
});

