document.addEventListener('DOMContentLoaded', () => {
  const currentUrl = window.location.pathname;
  const navButtons = document.querySelectorAll('.AppNav_Button');

  navButtons.forEach(navElement => {
    const href = navElement.getAttribute('href');
    
    // Home braucht exakten Match, andere startsWith
    const isActive = href === '/' 
      ? currentUrl === '/' 
      : currentUrl.startsWith(href);
    
    if (isActive) {
      navElement.querySelector('.AppNav_Icon').classList.add('AppNav_Icon-off');
      navElement.querySelector('.AppNav_IconClicked').classList.add('AppNav_IconClicked-on');
    }
  });
});