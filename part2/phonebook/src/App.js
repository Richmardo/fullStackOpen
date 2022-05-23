import { useState, useEffect } from 'react'
import Persons from './Persons'
import Form from './Form'
import Search from './Search'
import serverFunctions from './serverFunctions'
import axios from 'axios'

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [search, setSearch] = useState('')

  useEffect(() => {
    serverFunctions
      .getAll()
      .then(initialPersons => setPersons(initialPersons))
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
    const newPerson = {
      name: newName,
      number: newNumber
    }
    if (persons.some(person => person.name === newName)) {
      let person = persons.find(person => person.name === newName)
      let changedPerson = { ...person, number: newNumber }

      serverFunctions
        .update(changedPerson.id, changedPerson)
         .then(() => {
          setPersons(persons.map(person => person.id !== changedPerson.id ? person : newPerson))
        })
    }
    else {
      serverFunctions
        .create(newPerson)
        .then(returnedPerson => {
          setPersons(persons.concat(returnedPerson))
        })
    }
    setNewNumber('')
    setNewName('')
  }

  const deletePerson = (id, name) => {
    serverFunctions
      .deletePerson(id, name)
      .then(() => {
        setPersons([...persons].filter(person => person.id !== id))
      })
  }


  return (
    <div>
      <h2>Phonebook</h2>
      <Form newName={newName} newNumber={newNumber} setNewName={setNewName} setNewNumber={setNewNumber} handleSubmit={handleSubmit} />
      <hr />
      <Search search={search} setSearch={setSearch} />
      <Persons deletePerson={(id, name) => deletePerson(id, name)} persons={persons.filter(person => person.name.toLowerCase().includes(search.toLowerCase()))} />
    </div>
  )
}

export default App