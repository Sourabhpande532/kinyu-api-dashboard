import { apiGetLendingDetails } from "../api/apiGetLendingDetails.js";
import { apiDeleteLending } from "../api/apiDeleteLending.js"
const getHash = () => {
    const lendingId = window.location.hash.replace( "#", "" );
    return Number( lendingId )
}

const deleteSuccessfully = () => {
    return `<article>
    <h3>Details has been deleted Successfully</h3>
    </article>`
}

const removeLendings = () => {
    const id = getHash();
    const { error,data } = apiDeleteLending( id );
    if ( error ) {
        document.getElementById( "app" ).innerHTML = ErrorBanner();
        return;
    } else {
        document.getElementById( "app" ).innerHTML = deleteSuccessfully()
    }
}

const removeKinyuDetails = () => {
    const removeElement = document.getElementById( "remove-details" );
    removeElement.addEventListener( "click", removeLendings );
}


function LendingIndividualData( { id, who, type, when, details } ) {
    return `<article>
        <header>${ who }</header>
        <p>${ type }</p>
        <p>${ details }</p>
        <p>${ when }</p>
        <footer>
            <button id="remove-details">Remove</button>
        </footer>
    </article>`
}
function ErrorBanner( error ) {
    return `<article>
  <hgroup> 
    <h2>Error Occured</h2>
    <p>${ error.message }</p>
  </hgroup>
  </article>
  `;
}
export default async function render() {
    const id = getHash();
    const { error, data } = await apiGetLendingDetails( id );
    if ( error ) {
        document.getElementById( "app" ).innerHTML = ErrorBanner( error );
        return
    }
    const appendLendingData = LendingIndividualData( data )
    document.getElementById( "app" ).innerHTML = appendLendingData;
    removeKinyuDetails();
}