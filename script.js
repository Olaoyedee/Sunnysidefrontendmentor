const toggle = document.querySelector('.toggle')
const bar = document.querySelector('.bar')
const navLinks = document.querySelector('.nav-links')
const close = document.querySelector('.close')



//NAV BAR FUNCTIONALITY
bar.addEventListener('click', openNav)

// close.addEventListener('click', closeNav)

function openNav(){
navLinks.classList.toggle('reveal')


// navLinks.classList.add('reveal')
// close.classList.add('display')
// bar.classList.add('hide')

}

//

// function closeNav(){
//     navLinks.classList.remove('reveal')
//     close.classList.remove('display')
//     bar.classList.remove('hide')
// }





