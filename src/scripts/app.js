const toggleButton = document.getElementById('toggleSidebarBtn');
const sidebar = document.getElementById('sidebar');
const overlay = document.getElementById('overlay');

function toggleSidebar() {
    sidebar.classList.toggle('show');
    overlay.classList.toggle('show');
  }

toggleButton.addEventListener('click', toggleSidebar);
overlay.addEventListener('click', toggleSidebar);