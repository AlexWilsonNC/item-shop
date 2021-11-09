const modal = document.getElementById('entry-modal');
const drop = document.getElementById('dropdown-content');
const clicker = document.getElementById('nav-collapse');

closeModal = () => {
    modal.style.display = 'none';
}

function dropdown() {
    if (drop.style.visibility === 'hidden') {
        drop.style.visibility = 'visible';
    } else {
        drop.style.visibility = 'hidden';
    }
}

clicker.addEventListener('click', dropdown);