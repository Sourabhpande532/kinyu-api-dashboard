
const AddForms = ()=>{
    return `<div>
    <h2>What did you lend recently</h2>
    <hr/>
    <form>
    <input type="text" id="toWhom" placeholder="who"/>
    </form>
    </div>`
}

export default function add(){
document.getElementById("app").innerHTML = AddForms()
}