import React from "react"

export default function Navbar() {
    return (
        <nav>
            <div className="container p-5 flex items-center justify-between">
                <img src="/logo (2).svg" alt="logo" />

                <div className="flex items-center gap-5">
                    <a href="#">Prices</a>
                    <a href="#">About</a>
                    <a href="#">Contacts</a>
                </div>
            </div>
        </nav>

    )
}