import Person from './Person'
const Persons = ({persons, deletePerson}) => {
    return ( 
        <div>
            {persons.map(person => (
                <Person key={person.name} name={person.name} number={person.number} id={person.id} deletePerson={(id, name) => deletePerson(id, name)}/>
            ))}
        </div>
     );
}
 
export default Persons;