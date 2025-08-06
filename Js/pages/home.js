import { apiGetLendings } from "../api/apiGetLendings.js";


const LendingData = ( lending ) => {
    const lendingData = lending.map( renderTableData );
    const appendRowsHtml = lendingData.join( "" );
}

function ErrorBanner( error ) {
    return `<hgroup>
        <h2>Error Occured ${ error }</h2>
        </hgroup>`
}

export default async function render() {
    const { error, data } = await apiGetLendings();
    if ( error ) {
        document.getElementById( "app" ).innerHTML = ErrorBanner();
        return;
    }
    document.getElementById( "app" ).innerHTML = LendingData( data )
}