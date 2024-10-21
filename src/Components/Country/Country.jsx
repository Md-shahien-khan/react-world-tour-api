// step 9 added css file
import './Country.css'
const Country = ({country}) => {
    console.log(country);
    // step 7 destructure country
    const {name, flags, language, area, population, region} = country;
    return (
        <div className='country'>
            {/* step 8 you can dynamically add here*/}
            <h3>Name : {name?.common}</h3>
            <img src={flags.png} alt="" />
            <p>Area : {area}</p>
            <p>Region : {region}</p>
            <p>Population : {population}</p>
        </div>
    );
};

export default Country;