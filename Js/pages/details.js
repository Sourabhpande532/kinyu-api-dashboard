import { apiGetLendingDetails } from "../api/apiGetLendingDetails.js";
import { apiDeleteLending } from "../api/apiDeleteLending.js"
const getHash = () => {
    const lendingId = window.location.hash.replace( "#", "" );
    return Number( lendingId )
}

const deleteSuccessfully = () => {
    return `<article>
    <h3>Details has been deleted Successfully</h3>
    <a href="/index.html">Back to Home</a>
    </article>`
}

const removeLendings = async () => {
    const id = getHash();
    const { error } = await apiDeleteLending( id );
    if ( error ) {
        document.getElementById( "app" ).innerHTML = ErrorBanner( error );
        return;
    } else {
        document.getElementById( "app" ).innerHTML = deleteSuccessfully()
    }
}

const removeClickHandler = () => {
    const removeElement = document.getElementById( "remove-details" );
    removeElement.addEventListener( "click", removeLendings );
}


function LendingIndividualData( { who, type, when, details } ) {
    // const onlyTime = when.split("T")[0]
    return `<article>
        <header><h2>${ who }</h2></header>
        <p>${ type }</p>
        <p>${ details }</p>
        <p>${ when.split( "T" )[0] }</p>
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
    removeClickHandler();
}