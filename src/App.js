import React, { useState } from 'react';
import Form from './components/Form';
import NewestPerson from './components/NewestPerson';
import People from './components/People';

const App = (props) => {
  const [people, setPeople] = useState([
    {
      firstName: 'patrick',
      lastName: 'karl'
    },
    {
      firstName: 'robert',
      lastName: 'silva'
    }
  ])

  const addPerson = (newPerson) => {
    setPeople([...people, newPerson])
  }

  return (
    <div className="container mt-4">
      <div className="row">
        <Form addPerson={addPerson} />
        <People people={people} />
        <NewestPerson newestPerson={people[people.length - 1]} />
      </div>
    </div>
  );
}

export default App;
