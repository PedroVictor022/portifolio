// API GITHUB - 
let my_photo = document.querySelector('#my_photo');
async function createAvatar() {
   const userData = await fetch('https://api.github.com/users/PedroVictor022');
   const resp = await userData.json();

   my_photo.innerHTML = `<img class='my_photo' src="${resp.avatar_url}"/>` 
}

createAvatar();

let btnDark = document.querySelector('#btnColorMode');

btnDark.innerHTML = '<p>Mode</p>'