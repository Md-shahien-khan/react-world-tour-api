import { useEffect, useState } from "react";
// step 6 import country 
import Country from "../Country/Country";

const Countries = () => {
    // step 1 to keep the data you have to make a hook  useState.


    // step 2 when u make the state put an empty array because all the data's are inside the array.
    const [countries, setCountries] = useState([]);

    
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
            {/* step 5 map all the countries and set in another component called country  */}
            {
                countries.map(country => <Country country ={country} key={country.cca3 }></Country>)
            }
        </div>
    );
};

export default Countries;