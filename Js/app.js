import router from "./route.js";
import lendingAPIs from "./api/lendings.mock.server.js"
import themeSwitcher from "./lib/theme-switcher.js"
themeSwitcher()
router.start();
lendingAPIs();

