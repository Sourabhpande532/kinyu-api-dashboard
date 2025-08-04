import {AtomRouter} from "./lib/atom-router.js"
import home from "./pages/home.js"
const router = new AtomRouter( { rootId: "app", debug: false } )

router.add([
    {url:"/index.html",handler:home}
])

export default router;