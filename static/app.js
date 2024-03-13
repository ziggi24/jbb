console.log('connected!')

 
// function to get each tab details
const tabs = document.querySelectorAll('[data-tab-value]')
const tabInfos = document.querySelectorAll('[data-tab-info]')

tabs.forEach(tab => {
    tab.addEventListener('click', (e) => {
        const target = document.querySelector(tab.dataset.tabValue);
        tabInfos.forEach(tabInfo => {
            tabInfo.classList.remove('active')
        })
        tabs.forEach(tab => {
            tab.classList.remove('active')
        })  
        e.target.classList.add('active');
        target.classList.add('active');
    })
})