import React from 'react'

const People = ({ people }) => {
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