// Elementos del DOM
const menuContainer = document.getElementById('menu');

// Renderizar el menú con submenús
function renderMenu() {
  menuContainer.innerHTML = '';
  menuData.menu.forEach(item => {
    const menuItem = document.createElement('div');
    menuItem.classList.add('menu-item');

    const enlace = document.createElement('a');
    enlace.textContent = item.nombre;
    enlace.href = item.enlace;
    enlace.addEventListener('click', () => {
      window.location.href = item.enlace; // Redirige a la URL
    });
    menuItem.appendChild(enlace);

    // Renderizar submenús si existen
    if (item.submenus && item.submenus.length > 0) {
      const submenu = document.createElement('div');
      submenu.classList.add('submenu');
      item.submenus.forEach(subItem => {
        const subEnlace = document.createElement('a');
        subEnlace.textContent = subItem.nombre;
        subEnlace.href = subItem.enlace;
        subEnlace.addEventListener('click', () => {
          window.location.href = subItem.enlace; // Redirige a la URL
        });
        submenu.appendChild(subEnlace);
      });
      menuItem.appendChild(submenu);
    }

    menuContainer.appendChild(menuItem);
  });
}

// Renderizado inicial
renderMenu();