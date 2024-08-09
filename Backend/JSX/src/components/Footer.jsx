import React from 'react';
export function Footer() {
    let year = new Date().getFullYear();
    return (
        <>
            <footer>
                <hr />
                <p>
                    Made with ❤️ by <a href="https://github.com/kirbytran12324">Kirbymoto</a>
                     ⓒ {year}
                </p>
            </footer>
        </>
    )
}