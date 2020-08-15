import React from 'react'
import IndicatorForms from './IndicatorForms'

function Selectors () {
    return(
        <div className='selectors-container'>
            <h1> ESTADÍSTICAS </h1>
            <p className='selector-description'> Sin fines de lucro y con <span>motivos informativos</span>, compartimos estadísticas sobre la situación actual en Latinoamérica.
            Solo <span>debes llenar los datos</span> y te saldrán estadísticas actualizadas, puedes filtrar y buscar de forma manual.
            Recuerda, esto es para concientizarnos y proponer más soluciones.</p>
            <IndicatorForms /> 
        </div>
    )
}

export default Selectors