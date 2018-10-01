import React from 'react'
import Grid from '../template/grid'

export default props => (
    <div className='container'>
        <div className='row'>
            <Grid cols='6 4 2' class='candidatoHeader'>
                <div className='fotoCircular'>
                    <img src={props.img} alt=""/>
                </div>
            </Grid>
            <Grid cols='6 4 2'>
                <h2>Candidato</h2>
                <h4>{props.nomeUrna}</h4>
                <h4>{props.numero}</h4>
                <h5>{`${props.ocupacao}, ${props.partido}`}</h5>
            </Grid>
        </div>
    </div>
)