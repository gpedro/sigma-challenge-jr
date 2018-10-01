import React, {Component} from 'react'
import Loader from 'react-loader-spinner'

import CandidatoHeader from './candidatoHeader'
import CandidatoList from './candidatoList';

export default class Candidato extends Component{
    constructor(props){
        super(props)
        this.state = {
            foto:'', 
            nomeUrna: '',
            nomeCompleto: '', 
            cargo: '', 
            candidatura: '', 
            partido: '', 
            numero: '',
            ocupacao: '', 
            viceCanditado: '',
            isLoading: false,
            error: ''}
    }

    componentDidMount(){
        this.setState({ ...this.state, isLoading: true })

        if(this.props.params.codigo == 1){
            fetch(`http://divulgacandcontas.tse.jus.br/divulga/rest/v1/candidatura/buscar/2018/BR/2022802018/candidato/${this.props.params.id}`)
            .then(response => {
                return response.json()
            }).then(candidato => {
                this.setState({...this.state, ocupacao: candidato.ocupacao, foto: candidato.fotoUrl, nomeCompleto: candidato.nomeCompleto, nomeUrna: candidato.nomeUrna, cargo: candidato.cargo.nome, candidatura: candidato.descricaoSituacao, partido: candidato.partido.sigla, numero: candidato.numero, viceCanditado: candidato.vices ? candidato.vices[0].nm_CANDIDATO : 'Não possui', isLoading: false})
            })
        }else{
            fetch(`http://divulgacandcontas.tse.jus.br/divulga/rest/v1/candidatura/buscar/2018/MT/2022802018/candidato/${this.props.params.id}`)
            .then(response => {
                return response.json()
            }).then(candidato => {
                this.setState({...this.state, ocupacao: candidato.ocupacao, foto: candidato.fotoUrl, nomeCompleto: candidato.nomeCompleto, nomeUrna: candidato.nomeUrna, cargo: candidato.cargo.nome, candidatura: candidato.descricaoSituacao, partido: candidato.partido.sigla, numero: candidato.numero, viceCanditado: candidato.vices ? candidato.vices[0].nm_CANDIDATO : 'Não possui', isLoading: false})
            })
        }
    }

    render(){
        const {isLoading, error} = this.state;

        if(error){
            return <p>{error.message}</p>
        }
        
        if(isLoading){
            return (<div className='override'><Loader
                type="Puff"
                color="#00BFFF"
                height="100"	
                width="100"
             /></div>)
        }

        return (
        <div className='candidato'>
            <CandidatoHeader 
            img={this.state.foto} 
            nomeUrna={this.state.nomeUrna} 
            numero={this.state.numero} 
            partido={this.state.partido} 
            ocupacao={this.state.ocupacao}>
            </CandidatoHeader>
            <CandidatoList
            nomeUrna={this.state.nomeUrna}
            nomeCompleto={this.state.nomeCompleto}
            numero={this.state.numero}
            partido={this.state.partido}
            cargo={this.state.cargo}
            candidatura={this.state.candidatura}
            viceCandidato={this.state.viceCanditado}
            >
            </CandidatoList>
        </div>
        )
    }
}
