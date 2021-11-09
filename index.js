const modal = document.getElementById('entry-modal');
const drop = document.getElementById('dropdown-content');

closeModal = () => {
    modal.style.display = 'none';
}

dropdown = () => {
    if (drop.style.display === 'none') {
    drop.style.display = 'flex';
    drop.style.flexDirection = 'column';
    } else {
        drop.style.display = 'none';
    }
}