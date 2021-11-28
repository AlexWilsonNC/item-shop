const modal = document.getElementById('entry-modal');
const drop = document.getElementById('dropdown-content');
const clicker = document.getElementById('nav-collapse');
const filterList = document.getElementById('filter-list');
const filter = document.getElementById('filter-p');
const sortList = document.getElementById('sort-list');
const sort = document.getElementById('sort-p');
const prodBg = document.getElementById('drop-prod-bg');

closeModal = () => {
    modal.style.display = 'none';
}

function dropdown() {
    if (drop.style.opacity == 0) {
        drop.style.display = 'flex';
        setTimeout(() => {
            drop.style.opacity = 1;
        }, 0)
    } else {
        drop.style.opacity = 0;
        setTimeout(() => {
            drop.style.display = 'none';
        }, 350)
    }
}

function filterdown() {
    if (filterList.style.opacity == 0) {
        filterList.style.display = 'flex';
        setTimeout(() => {
            filterList.style.opacity = 1;
        }, 0)
    } else {
        filterList.style.opacity = 0;
        setTimeout(() => {
            filterList.style.display = 'none';
        }, 350)
    }
}

function sortdown() {
    if (sortList.style.opacity == 0) {
        sortList.style.display = 'flex';

        setTimeout(() => {
            sortList.style.opacity = 1;
        }, 0)
    } else {
        sortList.style.opacity = 0;
        setTimeout(() => {
            sortList.style.display = 'none';
        }, 350)
    }
}

function dropProdFtd() {
    if (prodBg.style.height == '85px') {
        prodBg.style.height = '250px';
        prodBg.classList.remove = 'fa-angle-down';
        prodBg.classList.add = 'fa-angle-up';
    } else (prodBg.style.height = '85px');
}

clicker.addEventListener('click', dropdown);
filter.addEventListener('click', filterdown);
sort.addEventListener('click', sortdown);
