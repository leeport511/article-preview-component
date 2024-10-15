const activeStateMobile = document.getElementById('active-state-mobile');
const activeStateDesktop = document.getElementById('active-state-desktop');

const button = document.getElementById('principal-btn')
const activeStateBtn = document.getElementById('act-st-btn')


button.addEventListener('click', () => {
      activeStateMobile.classList.toggle('hidden');
      activeStateDesktop.classList.toggle('hidden');
      
})

activeStateBtn.addEventListener('click', () => {
      activeStateMobile.classList.toggle('hidden');
      activeStateDesktop.classList.toggle('hidden');
     
      
})