import React from 'react'
import {useLocation} from 'react-router'

export default function Contact() {
    const location = useLocation();
    console.log(location)

    return (
        <div>
            <h1 className='text-4xl font-semibold text-center pt-10'>
                Contact us. {location.state?.txt}
            </h1></div>
    )
}
