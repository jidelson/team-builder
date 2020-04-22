import React from 'react'

function Member({details}) {
    if (!details) {
        return <h3>Working to find the info!</h3>
    }
    return (
        <div>
            <h2>{details.name}</h2>
            <p>Email: {details.email}</p>
            <p>Role: {details.role}</p>
        </div>
    )
}

export default Member;