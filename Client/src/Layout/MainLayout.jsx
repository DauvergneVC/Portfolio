import React from "react"
import { Outlet } from "react-router";


export default function MainLayout (/*{children}*/) {
    return(
        <>
            <header>
                <NavBar/>
            </header>

            <main>
                {/* Component from react router */}
                <Outlet />
            </main>

            <footer>
                <Footer/>
            </footer>
        </>
    )
}

function NavBar () {
    return (
        <div>
            <h1>Vicente Dauvergne</h1>
        </div>
    )
}

function Footer () {
    return(
        <div>
            <h2>Vicente Dauvergne</h2>
        </div>
    )
}