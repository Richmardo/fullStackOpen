import { useState } from 'react'
import Details from './Details'

const Country = ({ name, capital, flag }) => {
    const [button, setButton] = useState(false)
    return (
        <div>
            <h1>{name}</h1>
            <button onClick={() => setButton(!button)}>SHOW DETAILS</button>
            {button && <Details capital={capital} flag={flag} />}
        </div>
    );
}

export default Country;