console.log('JavaScript file is loaded');
const menuBtn = document.getElementById('menu-btn');
const menu = document.getElementById('menu');

console.log("js init")

menuBtn.addEventListener('click', () => {
    menu.classList.toggle('hidden');
});