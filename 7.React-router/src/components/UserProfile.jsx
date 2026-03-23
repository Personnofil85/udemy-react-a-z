import React from 'react'
import { useParams } from 'react-router-dom'

export default function UserProfile() {
    const {id} = useParams();
    console.log(id)

    return (
        <div><p className="text-4xl font-semibold text-center pt-10">Your profile : {id}</p></div>
    )
}
