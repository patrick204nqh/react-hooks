import React, { useState } from 'react';

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

  const [person, setPerson] = useState({ firstName: '', lastName: '' })

  const onSubmit = (e) => {
    e.preventDefault()

    if (person.firstName.trim() === '' || person.lastName.trim() === '') return

    const newPerson = {
      firstName: person.firstName.trim(),
      lastName: person.lastName.trim()
    }

    setPeople([...people, newPerson])
    setPerson({ firstName: '', lastName: '' })
  }

  const onChange = (e) => {
    setPerson({ ...person, [e.target.name]: e.target.value })
  }

  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <h2>Add a person</h2>
          <hr />
          <form onSubmit={onSubmit}>
            <div className="form-group">
              <input type="text" className="form-control"
                name="firstName"
                placeholder="First Name.."
                value={person.firstName}
                onChange={onChange} />
            </div>
            <div className="form-group">
              <input type="text" className="form-control"
                name="lastName"
                placeholder="Last Name.."
                value={person.lastName}
                onChange={onChange} />
            </div>
            <button className="btn btn-success" type="submit">Add person</button>
          </form>
        </div>
        <div className="col">
          <h2>People: </h2>
          <hr />
          {people.map((p, index) => (
            <div key={index}>
              <p>{p.firstName} {p.lastName}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
