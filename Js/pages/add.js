import { apiAddLending } from "../api/apiAddLendings.js";

const AddForms = () => {
  return `
    <h2>What did you lend recently</h2>
    <hr/>
    <form id="formHandler">
    <input type="text" id="toWhom" placeholder="who"/>
    <select id="selectedCategory">
    <option value="" selected disabled>---Select---</option>
    <option>Book</option>
    <option>Money</option>
    <option>Tool</option>
    <option>Other</option>
    </select>
    <input type="datetime-local" id="loan_date"/>
    <input type="text" placeholder="Additional Details"
    id="details_loan"/>
    <button type="submit">Add Lendings</button>
    </form>
    <p id="result"></p>
    `;
};
const handleClickHandler = async(event)=>{
  event.preventDefault();
    const whoInputElement = document.getElementById("toWhom");
    const selectCategoryElement = document.getElementById("selectedCategory");
    const dateTimeElement = document.getElementById("loan_date");
    const detailsElement = document.getElementById("details_loan");
    const resultElement = document.getElementById("result");

    const payload = {
      who: whoInputElement.value,
      type: selectCategoryElement.value,
      details: detailsElement.value,
      when: dateTimeElement.value,
    }
    const {error} = await apiAddLending(payload)
    if(!error){
    resultElement.innerHTML = `Add data Successfully!`
    resultElement.style.color = "green"
    document.getElementById("formHandler").reset()
    }else{
      resultElement.innerText = "Error, lending data."
      resultElement.style.color = "red"
    }
}
export default function add() {
  document.getElementById("app").innerHTML = AddForms();
  const removeElement = document.getElementById("formHandler");
  removeElement.addEventListener("submit",handleClickHandler);
}
