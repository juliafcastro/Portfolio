const cursor = document.querySelector('.cursor')

document.addEventListener('mousemove', function(info){
    cursor.style.left = info.clientX + 'px'
    cursor.style.top = info.clientY + 'px'
})

function toggleMenu() {
    const menu = document.querySelector("header ul");
    menu.classList.toggle("ativo");
}
