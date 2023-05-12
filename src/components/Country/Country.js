import React from 'react';
import './Country.css'

const Country = (props) => {
    console.log(props.country);
    const {name, area,population}=props.country;
    return (
        <div className='country' >
            <h2>Country Name:{name.common} </h2>
            <h3>Population: {population} </h3>
            <h3>Area: {area}</h3>
        </div>
    );
};

export default Country;