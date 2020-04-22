import React, { useState } from 'react';
import './App.css';

function TeamForm(props){
 const {
     values,
     onInputChange,
     onSubmit
 } = props

    return (
        <form className='teamContainer'>
            
            <label>Name:&nbsp;
                <input
                // value = {values.name}
                // onChange = {onInputChange}
                name='name'
                type='text'
                />
            </label>

            <label>Email:&nbsp;
               <input 
                // value = {values.email}
                // onChange = {onInputChange}
               name='email'
               type='text' 
               />
            </label>

            <label>Role:&nbsp;
               <input 
                // value = {values.role}
                // onChange = {onInputChange}
               name='role'
               type='text' 
               />
            </label>

            <div>
            <button onClick={onSubmit}>Submit</button>
            </div>  
        </form>
    )
}

export default TeamForm;