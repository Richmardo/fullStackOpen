import Country from './Country'

const Countries = ({matches, name, capital, flag}) => {
    return ( 
        <div>
            {matches.map(country => <Country key={country.name.common} name={country.name.common} capital={country.capital} flag={country.flag}/>)}
        </div>
     );
}
 
export default Countries;