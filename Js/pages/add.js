const AddForms = () => {
  return `
    <h2>What did you lend recently</h2>
    <hr/>
    <form>
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

export default function add() {
  document.getElementById("app").innerHTML = AddForms();
}
