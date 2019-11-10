

import "../style/items.scss";

console.log( "Items" );

const listBtn                               = document.getElementById( "items-list-btn" );
const cardsBtn                              = document.getElementById( "items-card-btn" );
const tableContent                          = document.getElementById( "items-table-content" );

const sideMenuBtn                            = document.getElementById( "mini-menu-btn" );
const sideBarNavPanel                            = document.getElementById( "sidebar-nav" );

cardsBtn.addEventListener( "click", () => {

    tableContent.classList.add("cards");

    cardsBtn.classList.add("active");

    listBtn.classList.remove("active");

});


listBtn.addEventListener( "click", () => {

    tableContent.classList.remove("cards");

    cardsBtn.classList.remove("active");

    listBtn.classList.add("active");

});

sideMenuBtn.addEventListener( "click", () => {

    sideBarNavPanel.classList.add("visible");

});