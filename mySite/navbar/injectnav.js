// Load and insert the navigation bar into the placeholder element
document.addEventListener('DOMContentLoaded', function() {
    const navbarPlaceholder = document.getElementById('navbar-placeholder');
    const xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
      if (this.readyState === 4 && this.status === 200) {
        navbarPlaceholder.innerHTML = xhr.responseText;
      }
    };
    xhr.open('GET', '../navbar/navbar.html', true);
    xhr.send();
  });
  