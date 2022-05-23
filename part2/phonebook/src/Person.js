const Person = ({name, number, id, deletePerson}) => {
    return ( 
        <div >
            <h1>Name: {name}</h1>
            <h1>Number: {number}</h1>
            <button onClick={() => deletePerson(id, name)}>DELETE</button>
            <hr />
        </div>
     );
}
 
export default Person;