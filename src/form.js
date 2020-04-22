import React, { useState } from 'react';
import './App.css';

function TeamForm(props){
    const {
        values,
        onInputChange,
        onSubmit,
    } = props

    return (
        <form className='teamContainer'>
            <h2>Team Member Form</h2>
            <label>Name:&nbsp;
                <input
                name='name'
                type='text'
                />
            </label>

            <label>Email:&nbsp;
               <input 
               name='email'
               type='text' 
               />
            </label>

            <label>Role:&nbsp;
               <input 
               name='role'
               type='text' 
               />
            </label>

        </form>
    )
}

export default TeamForm;