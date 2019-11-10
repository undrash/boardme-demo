

import "../style/dashboard.scss";

console.log( "Dasboard" );


const optionsBtn                             = document.getElementById( "dashboard-more-btn" );
const dashboardSidePanel                     = document.getElementById( "dashboard-side-panel" );
const dashboardSidePanelCloseBtn             = document.getElementById( "side-panel-close-btn" );

const sideMenuBtn                            = document.getElementById( "mini-menu-btn" );
const sideBarNavPanel                            = document.getElementById( "sidebar-nav" );





optionsBtn.addEventListener( "click", () => {

    dashboardSidePanel.classList.add("visible");

});

dashboardSidePanelCloseBtn.addEventListener( "click", () => {

    dashboardSidePanel.classList.remove("visible");

});


sideMenuBtn.addEventListener( "click", () => {

    sideBarNavPanel.classList.add("visible");

});

