import { AtomRouter } from "./lib/atom-router.js"
import home from "./pages/home.js"
import details from "./pages/details.js"
import add from "./pages/add.js"
const router = new AtomRouter( { rootId: "app", debug: false } )

router.add( [
    { url: "/index.html", handler: home },
    { url: "/details", handler: details },
    { url: "/add", handler: add }
] )

export default router;