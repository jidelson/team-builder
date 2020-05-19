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
                <input 
                type='text'
                placeholder='Type your role here'
                maxLength='20'
                name='role'
                value={values.role}
                onInputChange={onInputChange}
                />
            </label>

        </div>

    </form>
)

}

export default Form;