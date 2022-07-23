let header =  document.getElementById('header');
let navigationHeader = document.getElementById('navbar');
let body = document.getElementById('body');
let showSidebar = false;

function toggleSidebar() {
   showSidebar = !showSidebar;
   if(showSidebar)
   {
      navigationHeader.style.marginLeft = '-10vw'
      navigationHeader.style.animationName = 'showSidebar'
      body.style.filter = 'blur(2px)'
   }
   else 
   {
      navigationHeader.style.marginLeft = '-100vw'
      navigationHeader.style.animationName = ''
   }
   console.log(showSidebar);
}