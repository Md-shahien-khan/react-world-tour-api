import { useEffect, useState } from "react";
// step 6 import country 
import Country from "../Country/Country";
// step 10 connect css
import './Countries.css';

const Countries = () => {
    // step 1 to keep the data you have to make a hook  useState.


    // step 2 when u make the state put an empty array because all the data's are inside the array.
    const [countries, setCountries] = useState([]);


    // step 19 will make visited state to display that country we have visited their flag.
    const[visitedCountries, setVisitedCountries] = useState([]);

    // step 28 we want to show the flag of the country that we visit
    const [visitedFlags, setVisitedFlags] = useState([]);


    // Step 20 handleVisitedCountry to handle mark visited country
    const handleVisitedCountry = country =>{
        console.log('Add this to your visited country');
        // step 26 will send the county in visitedCountries
        const newVisitedCountries = [...visitedCountries, country];
        setVisitedCountries(newVisitedCountries);
    };


    // Step 29 handle visited flags
    const handleVisitedFlags = flag =>{
        // step 32
        const newVisitingFlags = [...visitedFlags, flag];
        setVisitedFlags(newVisitingFlags);
    }




    
    // step 3 make useEffect to put the Api information, in use effect there will be two parameter, one is callback function and another one is second parameter
    useEffect(()=>{
        fetch(`https://restcountries.com/v3.1/all`)
        .then(response => response.json())
        // step 4 set the data in state setCountries
        .then(data => setCountries(data));
    }, []);








    return (
        <div>
            <h3>Countries : {countries.length}</h3>
              {/*Step 17 Now we want to add the visited countries h5*/}
            <div>
                {/* step 25 niche */}
                <h3>Visited Countries : {visitedCountries.length}</h3>
                <ul>
                {/* step 27 since we get visited countries lets add here */}
                {
                    visitedCountries.map(eachCountry => 
                    <li key={eachCountry.cca3 }>
                    {eachCountry.name.common}
                    </li>)
                }
                </ul>
            </div>
            {/* showing Flag */}
            <div className="flag-container">
                {
                visitedFlags.map(flag => <img src={flag}></img>)
                }
            </div>
            {/* Display Countries */}
            <div className="country-container">
                {/* step 5 map all the countries and set in another component called country  */}
            {
                // step 21 we can send prop, function, object, boolean here
                countries.map(country => <Country 
                    country ={country} 
                    // 22 we sending handleVisitedCountry as a prop
                    handleVisitedCountry={handleVisitedCountry}
                    // step 30 sending handleVisitedFlags as a prop
                    handleVisitedFlags={handleVisitedFlags}
                    key={country.cca3 }>
                    </Country>)
            }
            </div>
        </div>
    );
};

export default Countries;