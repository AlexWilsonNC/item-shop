const modal = document.getElementById('entry-modal');
const drop = document.getElementById('dropdown-content');
const clicker = document.getElementById('nav-collapse');

closeModal = () => {
    modal.style.display = 'none';
}

function dropdown() {
    if (drop.style.opacity == 0) {
        drop.style.opacity = 1;
    } else {
        drop.style.opacity = 0;
    }
}

clicker.addEventListener('click', dropdown);