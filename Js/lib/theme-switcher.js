
const setTheme = ( themeName ) => {
    document.querySelector( "html" ).setAttribute( "data-theme", themeName )
}

function themeSwitcher( event ) {
    if ( event.target.checked ) {
        setTheme( "dark" );
    } else {
        setTheme( "light" )
    }
}
export default function main() {
    const toggleTheme = document.getElementById( "toggle-theme" );

    toggleTheme.addEventListener( "change", themeSwitcher );
}
