const tabs = document.querySelectorAll('.tab');
const panels = document.querySelectorAll('.panel');
const btn = document.getElementById('menu-btn');
const menu = document.getElementById('menu');
const logo = document.getElementById('logo');

// Hamburguer Button Toggle
const navToggle = () => {
    btn.classList.toggle('open');
    menu.classList.toggle('flex');
    menu.classList.toggle('hidden');

    if (menu.classList.contains('flex')) {
        logo.setAttribute('src', './images/logo-bookmark-footer.svg');
    } else {
        logo.setAttribute('src', './images/logo-bookmark.svg');
    }
};

const onTabClick = (e) => {
    // Deactivate all tabs
    tabs.forEach((tab) => {
        tab.children[0].classList.remove(
            'border-softRed',
            'border-b-4'
        )
    });

    // Hide all panels
    panels.forEach((panel) => panel.classList.add('hidden'));

    // Activate tab and panel based on target
    e.target.classList.add('border-softRed', 'border-b-4');
    
    const panelName = e.target.getAttribute('data-target');
    document.getElementById('panels')
        .getElementsByClassName(panelName)[0]
        .classList.remove('hidden');
};

// Tabs menu event 
tabs.forEach((tab) => tab.addEventListener('click', onTabClick));

// Hamburguer Button event
btn.addEventListener('click', navToggle);


