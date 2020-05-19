import React from 'react';

function Member({details}){
    if (!details) {
        return <h4>Looking for details...</h4>
    }
    return(
        <div>
            <p>Name: {details.name}</p>
            <p>Email: {details.email}</p> 
            <p>Role: {details.role}</p> 
        </div>
    )
}

export default Member;