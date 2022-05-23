const Total = ({total}) => {
    return ( 
        <h3>Total number of excercises: {total.reduce((x,y) => x+y)}</h3>
     );
}
 
export default Total;