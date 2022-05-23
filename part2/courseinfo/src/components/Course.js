import Header from './Header'
import Content from './Content'
import Total from './Total'

const Course = ({header, parts}) => {
    return ( 
        <div>
            <Header header={header}/>
            <Content parts={parts}/>
            <Total total={parts.map(part => part.exercises)}/>
            <hr />
        </div>
     );
}
 
export default Course;