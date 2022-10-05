const tabs = document.querySelectorAll('[data-tab-target]');
const tabContent = document.querySelectorAll('[data-tab-content]');

tabs.forEach(tab =>{
    tab.addEventListener('click', ()=>{
        const target = document.querySelector(tab.dataset.tabTarget);
        tabs.forEach(tab =>{
            tab.classList.remove('active');
        })
        tabContent.forEach(content =>{
            content.classList.remove('active');
        });
        target.classList.add('active');
        tabContent.classList.add('active');
    })
});