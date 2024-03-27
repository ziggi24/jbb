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

const queryString = window.location.search;
console.log(queryString);

if(queryString) {
    //if the url params exist, get the value of the key param out of queryString, and use that to select which tab to have open by default
    const activeTab = queryString.split('=')[1];
    console.log(activeTab);
    if(activeTab != "tab_1" && activeTab != "tab_2" && activeTab != "tab_3" && activeTab != "tab_4") {
        const target = document.querySelector("#tab_1");
        console.log(target);
        tabInfos.forEach(tabInfo => {
            tabInfo.classList.remove('active')
        })
        tabs.forEach(tab => {
            tab.classList.remove('active')
        })
        target.classList.add('active');
    }
    else {
        const target = document.querySelector("#"+activeTab);
        console.log(target);
        tabInfos.forEach(tabInfo => {
            tabInfo.classList.remove('active')
        })
        tabs.forEach(tab => {
            tab.classList.remove('active')
        })
        target.classList.add('active');
    }
    
}

