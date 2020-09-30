import React, { useEffect, useContext } from 'react'
import peopleContext from '../context/peopleContext'
import PeopleCount from './PeopleCount'

const NewestPerson = () => {
  const { people } = useContext(peopleContext)
  const newestPerson = people[people.length - 1]

  useEffect(() => {
    const newestPersonName = `${newestPerson.firstName} ${newestPerson.lastName}`
    document.title = newestPersonName
    console.log('useEffect')
    return () => console.log('unmount')
  }, [newestPerson.firstName, newestPerson.lastName, people])

  return (
    <div className="col col-sm-12">
      <h2 className="mt-4 text-center">
        Newest Person: {`${newestPerson.firstName} ${newestPerson.lastName}`}
      </h2>
      <PeopleCount />
    </div>
  )
}

export default NewestPerson