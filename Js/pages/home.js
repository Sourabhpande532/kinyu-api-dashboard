import { apiGetLendings } from "../api/apiGetLendings.js";

const renderTableData = ( eachData ) => {
    const { id, who, type, details } = eachData;
    return `<tr>
        <td>${ who }</td>
        <td>${ type }</td>
        <td>${ details }</td>
        <td><a href="details#${ id }">View</a></td>
    </tr>`
}

const LendingData = ( lending ) => {
    const lendingData = lending.map( renderTableData );
    const appendRowsHtml = lendingData.join( "" );
    return `<table>
        <thead>
            <tr>
                <th>Who</th>
                <th>Type</th>
                <th>Details</th>
                <th>View</th>
            </tr>
        </thead>
        <tbody>
         ${ appendRowsHtml }
        </tbody>
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
        document.getElementById( "app" ).innerHTML = ErrorBanner();
        return;
    }
    document.getElementById( "app" ).innerHTML = LendingData( data )
}