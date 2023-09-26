const body = document.querySelector('body');
const switchButton = document.querySelector('.theme-switch');
switchButton.addEventListener('click',(event)=>{
    body.classList.toggle('dark-mode');
})