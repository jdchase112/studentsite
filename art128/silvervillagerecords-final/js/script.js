document.addEventListener('DOMContentLoaded', function () {

    // OPEN AND CLOSE THE SITE NAV WHEN YOU CLICK ON THE MENU BUTTON

    const siteMenu = document.querySelector(".site-navigation");
    const menuButton = document.querySelector(".menu-button");

    menuButton.onclick = () => {

        // IF NAV IS CLOSED, THEN OPEN IT, ELSE CLOSE IT
        if (siteMenu.getAttribute("data-navstate") === "open") {
            siteMenu.setAttribute("data-navstate", "closed");
        } else {
            siteMenu.setAttribute("data-navstate", "open");
        }
    };

    // REMOVE THE DATA-NAVSTATE ATTRIBUTE ON WINDOW RESIZE
    window.addEventListener('resize', (event) => {
        siteMenu.removeAttribute('data-navstate');
    });

});