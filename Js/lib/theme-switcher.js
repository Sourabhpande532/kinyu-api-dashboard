
const setTheme = ( themeName ) => {
    document.querySelector( "html" ).setAttribute( "data-theme", themeName )
}

function setInitialTheme() {
    const toggleTheme = document.getElementById( "toggle-theme" );
    const userPreference = window.matchMedia( "(prefers-color-scheme: dark)" ).matches;
    if ( userPreference ) {
        toggleTheme.checked = true;
        setTheme( "dark" )
    } else {
        toggleTheme.checked = false;
        setTheme( "light" )
    }
}


// Function to handle the toggle event 
function themeSwitcher( event ) {
    if ( event.target.checked ) {
        setTheme( "dark" );
    } else {
        setTheme( "light" )
    }
}
export default function main() {
    // Set Initial theme based on system preference;
    setInitialTheme();
    const toggleTheme = document.getElementById( "toggle-theme" );
    toggleTheme.addEventListener( "change", themeSwitcher );
}
