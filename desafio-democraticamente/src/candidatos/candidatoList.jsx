import React from 'react'
import Grid from '../template/grid'

export default props => {
    return(<div className='container'>
    <div className='row'>
        <Grid cols='12'>
        <h3>Dados do Candidato</h3>
        <hr></hr>
        </Grid>
        <Grid cols='12'>
        <h4><strong>Nome Completo:</strong> {props.nomeCompleto}</h4>
        </Grid>
        <Grid cols='12'>
        <h4><strong>Nome da Urna:</strong> {props.nomeUrna}</h4>
        </Grid>
        <Grid cols='12'>
        <h4><strong>Número:</strong> {props.numero}</h4>
        </Grid>
        <Grid cols='12'>
        <h4><strong>Cargo:</strong> {props.cargo}</h4>
        </Grid>
        <Grid cols='12'>
        <h4><strong>Candidatura:</strong> {props.candidatura}</h4>
        </Grid>
        <Grid cols='12'>
        <h4><strong>Partido:</strong> {props.partido}</h4>
        </Grid>
        <Grid cols='12'>
        <h4><strong>Vice Canditado:</strong> {props.viceCandidato}</h4>
        </Grid>
        <Grid cols='12'class="linkVoltar">
            <a href="">
                <i className='fa fa-arrow-left'>
            </i> Voltar</a>
        </Grid>
    </div>
</div>)
}