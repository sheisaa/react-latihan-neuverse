import React from 'react'

export default function SectionHero() {
    return (
        <div className='container grid grid-cols-2 items-center justify-center p-5'>
            <div>
                <h1 className='text-5xl'>Landing page for your online service</h1>
                <p className='mt-5'>Sed ea enim et expedita quo. Sint consequuntur nobis expedita mollitia voluptatem aut est a quia.</p>
                <button className='bg-green-500 text-white p-2 mt-5 rounded'>Learn More</button>
            </div>
            <div>
                <img src="hero-illustration (1).png" alt="hero" />
            </div>
        </div>
    )
}
