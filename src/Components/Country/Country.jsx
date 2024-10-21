const Country = ({country}) => {
    // step 7 destructure country
    const {name} = country;
    return (
        <div>
            {/* step 8 you can dynamically add here*/}
            <h3>Name : {name.common}</h3>
        </div>
    );
};

export default Country;