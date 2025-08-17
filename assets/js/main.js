(function(){
  const btn = document.querySelector('[data-menu-btn]');
  const drawer = document.querySelector('[data-drawer]');
  if(!btn || !drawer) return;
  btn.addEventListener('click', () => {
    const open = drawer.getAttribute('data-open') === 'true';
    drawer.setAttribute('data-open', String(!open));
    drawer.style.display = !open ? 'block' : 'none';
  });
})();
