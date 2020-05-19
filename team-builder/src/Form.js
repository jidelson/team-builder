import React from 'react';

function Form(props) {
    const {
        values,
        onInputChange,
        onSubmit
    } = props


return (

    <form>
        <div>

            <label>
                Name:&nbsp;
                <input 
                type='text'
                placeholder='Type your name here'
                maxLength='100'
                name='name'
                value={values.name}
                onInput={onInputChange}
                />
            </label>

            <label>
                Email: &nbsp;
                <input 
                type='text'
                placeholder='Type your email here'
                maxLength='50'
                name='email'
                value={values.email}
                onInput={onInputChange}
                />
            </label>

            <label>
                Role:&nbsp;
               <select name='role' value={values.role} onInput={onInputChange}>
                    <option value=''>Select a Role</option>
                    <option value='Front End Developer'>Front End Developer</option>
                    <option value='Back End Developer'>Back End Developer</option>
               </select>
            </label>
        </div>

        <div>
            <button onClick={onSubmit}>Submit</button>
        </div>

    </form>
)

}

export default Form;