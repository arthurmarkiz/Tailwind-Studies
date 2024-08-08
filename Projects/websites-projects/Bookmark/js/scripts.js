const tabs = document.querySelectorAll('.tab');
const panels = document.querySelectorAll('.panel');

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

