const Header = (props) => {
return(
  <h1>Title: {props.course}</h1>

)}
const Part = (props) => {
  return(
    <div>
    <h1>{props.name}: {props.num}</h1>
  </div>
  )
}
const Total = (props) => {
  return(
    <h1>Total: {props.num1 + props.num2 + props.num3}</h1>
  )
}


const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  return (
    <div>
      <Header course={course.name}/>
      <Part name={course.parts[0].name} num={course.parts[0].exercises}/>
      <Part name={course.parts[1].name} num={course.parts[1].exercises}/>
      <Part name={course.parts[2].name} num={course.parts[2].exercises}/>
      <Total num1={course.parts[0].exercises} num2={course.parts[1].exercises} num3={course.parts[2].exercises}/>
    </div>
  )
}

export default App;
