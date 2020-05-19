import React, {useState} from 'react';
import './App.css';
import Form from './Form';
import Member from './Member';

const initialTeamList = [
  {
  name: 'Joe Idelson',
  email: 'joeidelson@gmail.com',
  role: 'Front End Developer'
 },
 {
  name: 'Kenny Linares',
  email: 'klinares@yahoo.com',
  role: 'Back End Developer'
 }
]


const initialFormValues = {
  name: '',
  email: '',
  role:''
}

function App() {
  const [member, setMember] = useState(initialTeamList)  
  const [formValues, setFormValues] = useState(initialFormValues)
  const [memberToEdit, setMemberToEdit] = useState(formValues)

  const onEdit = evt => {
    
  }

  const onInputChange = evt => {
    const name = evt.target.name
    const value = evt.target.value
    setFormValues({...formValues, [name]:value})
  }
 

  const onSubmit = evt => {
    evt.preventDefault()

    const newMember = {
      name: formValues.name,
      email: formValues.email,
      role: formValues.role
    }
    setMember([...member, newMember])
    setFormValues(initialFormValues)
  }

  return (
    <div className="App">
      <Form
      values={formValues}
      onInputChange={onInputChange}
      onSubmit={onSubmit}
      onEdit={onEdit}
      />

      <h1>Team List</h1>
      {
        member.map(member => {
          return (
            <Member key={member.name} details={member} />
          )
        })
      }
    </div>
  );
}

export default App;
