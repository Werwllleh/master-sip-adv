const overlay = document.querySelector('.overlay');
const header = document.querySelector('.header');
const headerMobileButton = document.querySelector('.header__mobile-button');
const headerMobileWrap = document.querySelector('.header-mobile-wrap');

if (header && overlay) {

  if (headerMobileButton && headerMobileWrap) {
    headerMobileButton.addEventListener('click', () => {
      if (header.classList.contains('mobile-is-active')) {
        closeMobileHeader()
      } else {
        blockWrap(true)
        overlay.classList.add('active')
        header.classList.add('mobile-is-active')
      }
    })
  }

}

function closeMobileHeader() {
  const header = document.querySelector('.header');

  if (header && header.classList.contains('mobile-is-active')) {
    header.classList.remove('mobile-is-active')
    overlay.classList.remove('active')
    blockWrap(false)
  }
}

if (overlay) {
  overlay.addEventListener('click', () => {
    closeMobileHeader()
  })
}

window.addEventListener('resize', () => {
  if (window.innerWidth >= 768) {
    closeMobileHeader()
  }
})
