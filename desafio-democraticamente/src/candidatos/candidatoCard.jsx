import React from 'react'
import {Link} from 'react-router'
import Grid from '../template/grid'

export default props => {
    let candidato = {...props.candidato}
    
    return (
        <Grid cols='6 4 2'>
            <Link to={'/candidatos/' + candidato.id + '/' + candidato.cargo.codigo } className='hrv-grow'>
                <div className='candidatoCard'>
                    <img className='candidatoCardImg' src='http://divulgacandcontas.tse.jus.br/candidaturas/oficial/2018/BR/BR/2022802018/280000602500/foto_1533762258552.jpg' alt={candidato.nomeUrna} />
                    <p className='candidatoCardNome'>{candidato.nomeUrna}</p>
                    <p className='candidatoCardPartido'>{candidato.partido.sigla}</p>
                    <p className='candidatoCardNumero'>{candidato.numero}</p>
                </div>
            </Link>
        </Grid>
    )
}