// Animation simple au défilement pour les cartes de projet
const observerOptions = {
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";
        }
    });
}, observerOptions);

document.querySelectorAll('.project-card').forEach(card => {
    card.style.opacity = "0";
    card.style.transform = "translateY(30px)";
    card.style.transition = "all 0.6s ease-out";
    observer.observe(card);
});

// JS SCRIPT pour page photographe //
document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Conversion du scroll vertical en scroll horizontal sur le conteneur
    const scrollContainer = document.getElementById('scroll-container');
    scrollContainer.addEventListener('wheel', (e) => {
        e.preventDefault();
        scrollContainer.scrollLeft += e.deltaY;
    });

    // 2. Gestion du Widget Musique
    const musicBtn = document.getElementById('music-toggle');
    const musicDropdown = document.getElementById('music-dropdown');
    const playlistItems = document.querySelectorAll('#playlist li');
    const currentSongLabel = document.getElementById('current-song');

    musicBtn.addEventListener('click', () => {
        musicDropdown.classList.toggle('hidden');
    });

    playlistItems.forEach(item => {
        item.addEventListener('click', () => {
            playlistItems.forEach(i => i.classList.remove('active'));
            item.classList.add('active');
            currentSongLabel.textContent = item.querySelector('span').textContent + ' - ' + item.querySelector('small').textContent;
            musicDropdown.classList.add('hidden');
        });
    });

    // 3. Gestion de l'ouverture du Panneau de Détail (Drawer)
    const cards = document.querySelectorAll('.card');
    const drawer = document.getElementById('detail-drawer');
    const closeDrawerBtn = document.getElementById('close-drawer');
    const drawerTag = document.getElementById('drawer-tag');
    const drawerTitle = document.getElementById('drawer-title');
    const drawerBody = document.getElementById('drawer-body');

    cards.forEach(card => {
        card.addEventListener('click', () => {
            drawerTag.textContent = card.dataset.tag || card.dataset.month;
            drawerTitle.textContent = card.dataset.title;
            drawerBody.textContent = card.dataset.content;
            drawer.classList.remove('hidden');
        });
    });

    closeDrawerBtn.addEventListener('click', () => {
        drawer.classList.add('hidden');
    });
});