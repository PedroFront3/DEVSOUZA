const btn = document.querySelector('.toggle');
const side = document.querySelector('.side-menu');
const background = document.querySelector('.background');

btn.addEventListener('click', () => {
     side.classList.toggle('active');
     btn.classList.toggle('active');
     background.classList.toggle('active');
     
});

background.addEventListener('click', () => {
     side.classList.remove('active');
     btn.classList.remove('active');
     background.classList.remove('active');
     
});
