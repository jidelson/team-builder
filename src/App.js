import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

import TeamForm from './form.js';
function App() {
const [teamList, setTeamList] = useState();

  const addToTeamList = [
    {
      name:'',
      email:'',
      role:''
  },
  ]

  return (
    <div className="App">
    
       
        <TeamForm />
       
    </div>
  );
}
 
export default App;
