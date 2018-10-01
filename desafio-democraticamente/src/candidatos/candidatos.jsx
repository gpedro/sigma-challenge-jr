import React, {Component} from 'react'
import Loader from 'react-loader-spinner'
import SearchInput, {createFilter} from 'react-search-input'

import CandidatosList from './candidatosList'

const KEYS_TO_FILTERS = ['nomeUrna', 'numero', 'nomeCompleto', 'cargo.nome', 'descricaoSituacao', 'partido.sigla']

export default class Candidatos extends Component{
    constructor(props){
        super(props)
        this.state = {
            list:[], 
            isLoading: false, 
            error: null,
            searchTerm: ''
        }
        this.searchUpdated = this.searchUpdated.bind(this)
    }

    componentDidMount() {        
        this.setState({ ...this.state, isLoading: true })

        Promise.all([
            fetch('http://divulgacandcontas.tse.jus.br/divulga/rest/v1/candidatura/listar/2018/BR/2022802018/1/candidatos'),
            fetch('http://divulgacandcontas.tse.jus.br/divulga/rest/v1/candidatura/listar/2018/MT/2022802018/3/candidatos'),
            fetch('http://divulgacandcontas.tse.jus.br/divulga/rest/v1/candidatura/listar/2018/MT/2022802018/5/candidatos'),
            fetch('http://divulgacandcontas.tse.jus.br/divulga/rest/v1/candidatura/listar/2018/MT/2022802018/6/candidatos'),
            fetch('http://divulgacandcontas.tse.jus.br/divulga/rest/v1/candidatura/listar/2018/MT/2022802018/7/candidatos')
        ]).then(response => {
                response.forEach(e => {
                    if (e.ok) {
                    e.json()
                        .then(data => {
                            this.setState({ ...this.state, list: [...this.state.list, data], isLoading: false})
                        })
                    }else{
                        throw new Error("Alguma coisa deu errado...")
                    }
                })
        }).catch(error => this.setState({...this.state, error}))
    }

    render(){
        const {isLoading, error} = this.state;
        const candidatos = [];
        
        this.state.list.filter(x => x.candidatos.filter(b => {
            candidatos.push(b)
        }))
        const filteredCandidatos = candidatos.filter(createFilter(this.state.searchTerm, KEYS_TO_FILTERS))

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
        <div>
            <SearchInput className='search-input' onChange={this.searchUpdated} placeholder='Pesquisar' />
            <CandidatosList list={this.state.list} candidatos={filteredCandidatos}/>
        </div>
        )
    }

    searchUpdated (term) {
        this.setState({searchTerm: term})
      }
}