function toggleClass() {
  let menu = document.querySelector('.right-nav')
  menu.classList.toggle('toggleHam')
}

let hamburger = document.querySelector('.hamIcon')

hamburger.addEventListener('click', toggleClass)
