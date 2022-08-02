// ----------- Require data github api ----------------

// Link API GITHUB
const GITHUB_API = "https://api.github.com/users/";

let main = document.querySelector('.github-api');

async function getMyRepos() {
   // Repos
   const respRepo = await fetch('https://api.github.com/users/PedroBVictor/repos');
   const respDataRepo = await respRepo.json();
   console.log(respDataRepo)

   respDataRepo.map(item => {
      let divE = document.createElement('div');
      divE.innerHTML = `
         <div class='repo-container'>
            <h3>${item.name}</h3>
            <a class='link-repo' href="${item.html_url}" target='_blank'>${item.html_url}</a>
            <span>Data: ${Intl.DateTimeFormat('pt-br').format(new Date(item.created_at))}</span>
         </div>
      `
      divE.classList.add('repos')
      main.appendChild(divE)
   })

}

getMyRepos();
