import React from "react"

export default function Footer() {
    return (
        <nav>
            <div className="container p-5 flex items-center justify-between mt-5">
                <img src="/logo (2).svg" alt="logo" />

                <div className="flex items-center gap-5">
                    <a href="#">Prices</a>
                    <a href="#">About</a>
                    <a href="#">Contacts</a>
                </div>

                <div className="flex items-center gap-5">
                    <img src="Link (1).png" alt="facebook" />
                    <img src="Link (2).png" alt="twitter" />
                </div>
            </div>
            <div className="text-center">
                <p>Copyright © 2021 Amiso. All rights reserved.</p>
            </div>
        </nav>

    )
}