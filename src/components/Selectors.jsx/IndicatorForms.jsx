import React from 'react'
import data from '../../data/worldbank'

const countries = ["Perú", "México", "Chile", "Brasil"] 
const indicators = data.PER.indicators
const indicatorFilters = ["mujer", "mujeres"]

const setCountryOptions = countries.map(country =>{
    return(
        <option key={country} value={country}> {country} </option>
    )
})

function IndicatorForms () {
    return(
        <div className="input-container">   
            <select id="country" name="country">
                <option > </option>
                {setCountryOptions}
            </select>

            <select id="indicator"> 
            </select>
        </div>
    )
}

export default IndicatorForms