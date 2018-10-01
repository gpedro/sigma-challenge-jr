import React from 'react'

import CandidatoCard from './candidatoCard'

export default props => {

    const renderRows = () =>{
        const list = props.list || []
        const candidatos = props.candidatos || []

        return list.map(lista => (
            <div className='row' key={lista.cargo.codigo}>
                    <h3 className='tituloLista'><strong>Candidatos à {lista.cargo.nome}</strong></h3>
                    {candidatos.map(candidato => (
                        <CandidatoCard candidato={candidato} key={candidato.id} />
                    ))}
            </div>
        ))
    }

    return(
        <div className='container'>{renderRows()}</div>
    )
}