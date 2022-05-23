const Form = ({newName, newNumber, handleSubmit, setNewName, setNewNumber}) => {
    return ( 
        <form action="submit" onSubmit={handleSubmit}>
            <p>Name:</p>
            <input type="text" value={newName} onChange={e => setNewName(e.target.value)}/>
            <p>Number:</p>
            <input type="text" value={newNumber} onChange={e => setNewNumber(e.target.value)}/>
            <button>ADD NEW PERSON</button>
        </form>
     );
}
 
export default Form;