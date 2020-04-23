import React, { useState } from 'react';
// import logo from './logo.svg';
import './App.css';
import TeamForm from './Form.js';
import Member from './Member.js';

const initialFormValues = [
  {
    name:'',
    email:'',
    role:''
}
]

const initialMemberList = [
  {
      name: 'Joe Idelson',
      email: 'joeidelson@gmail.com',
      role: 'Web Developer' 
},

{
  name: "Danny Fischer",
  email: 'danfish@gmail.com',
  role: 'Backend Engineer'
}
];

function App() {
const [teamList, setTeamList] = useState(initialMemberList);

const [formValues, setFormValues] = useState(initialFormValues);

const onInputChange = evt => {
  const name = evt.target.name
  const value = evt.target.value

  setFormValues({
    ...formValues,
    [name]:value
  })
}
 
const onSubmit = evt => {

  evt.preventDefault()

  const newTeamMember = {
    name: formValues.name,
    email: formValues.email,
    role: formValues.role
  }

setTeamList([...teamList, newTeamMember])

setFormValues(initialFormValues)

}

  return (
    <div className="App">
    <header>
    <h1>Team Member Form</h1>
    </header>
{
  teamList.map(teamList => {
    return(
      <Member key={teamList.id} details={teamList} />
    )
  })
}
        <TeamForm
        values = {formValues}
        onInputChange = {onInputChange}
        onSubmit = {onSubmit}
        />
      
    </div>
  );
}
 
export default App;
