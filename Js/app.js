import router from "./route.js";
import lendingAPIs from "./api/lendings.mock.server.js"
import themeSwitcher from "./lib/theme-switcher.js"
router.start();
lendingAPIs();

function showThemeOnRender(){
    themeSwitcher()
}

document.addEventListener("DOMContentLoaded", showThemeOnRender)