import { apiGetLendings } from "../api/apiGetLendings.js";


const renderData = ()=>{
    // 
}

function LendingData( lending ) {
    const renderTableData = lending.map( renderData );
    const rowHtmlData = renderTableData.join( "" );
    return `<table>
        <thead>
            <tr>
                <th>Who</th>
                <th>Type</th>
                <th>Details</th>
                <th>Action</th>
            </tr>
        </thead>
    </table>`
}

function ErrorBanner( error ) {
    return `<hgroup>
        <h2>Error Occured ${ error }</h2>
        </hgroup>`
}
export default async function render() {
    const { error, data } = await apiGetLendings();
    if ( error ) {
        document.getElementById( "app" ).innerHTML = ErrorBanner( error )
        return;
    }
    document.getElementById( "app" ).innerHTML = LendingData( data )
}