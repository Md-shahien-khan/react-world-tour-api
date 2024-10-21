// step 9 added css file
import { useState } from 'react';
import './Country.css'

// step 23 now we can destructure handleVisitedCountry prop here
const Country = ({country, handleVisitedCountry, handleVisitedFlags}) => {
    // console.log(country);
    // step 7 destructure country
    const {name, flags, area, population, region} = country;




    // Step 12 adding states to show if we visit that country, default value will be false.
    const [visited, setVisited] = useState(false);


    // Step 13 set up onlclick for button visit.
    const handleVisited = () =>{
        // step 14 you change the value once you press the button
        setVisited(!visited);
    }


    return (
        <div className={`country ${visited ? 'visited' : 'none-visited'}`}>
            {/* step 8 you can dynamically add here*/}
            <h3 style={{color : visited ? 'purple' : 'wheat'}}>Name : {name?.common}</h3>
            <img src={flags.png} alt="" />
            <p>Area : {area}</p>
            <p>Region : {region}</p>
            <p>Population : {population}</p>

            {/* step 18 mark button*/}
            {/* step 24 pass parameter to onlClick */}
            <button onClick={() => handleVisitedCountry(country)}>Mark Visited</button> <br />
            {/* step 31 add flag button */}
            <button onClick={() => handleVisitedFlags(country.flags.png)}>Add Flag</button>
            {/* step 11 Adding visited button */}
            {/* step 15 adding handleVisited to button visited */}
            <button onClick={handleVisited}>{visited ? 'Visited' : 'Going'}</button><br/>
            {/* step 16 if visited is true it will show something */}
            {visited ? ' I have visited this country' : 'I want to visit this country'}
        </div>
    );
};

export default Country;