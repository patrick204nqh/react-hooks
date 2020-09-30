import React, { useContext } from 'react'
import peopleContext from '../context/peopleContext'

const People = () => {
  const { people } = useContext(peopleContext)
  return (
    <div className="col">
      <h2>People: </h2>
      <hr />
      {people.map((p, index) => (
        <div key={index}>
          <p>{p.firstName} {p.lastName}</p>
        </div>
      ))}
    </div>
  )
}

export default People