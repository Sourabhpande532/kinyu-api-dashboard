import { apiGetLendings } from "../api/apiGetLendings.js";

const getHash = () => {
    const urlId = window.location.hash.replace( "#", "" );
    return Number( urlId );
};
function DetailsPage( data ) {
    // const { id, who, type, details, when } = data;
    return `<article>
        <header>${ data.who }</header>
        <body>
            <p>${ data.type }</p>
            <p>${ data.details }</p>
            <p>${ data.when }</p>
        </body>
        <footer>
            <button>Remove</button>
        </footer>
    </article>`
}

export default async function render() {
    const { error, data } = await apiGetLendings();
    const lendingId = getHash();
    const getLendingId = ( lending ) => {
        return lending.id === lendingId;
    };
    const eachLendingData = data.find( getLendingId );
    document.getElementById( "app" ).innerHTML = DetailsPage( eachLendingData );
}
