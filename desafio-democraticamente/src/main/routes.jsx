import React from 'react'
import { Router, Route, Redirect, hashHistory } from 'react-router'

import Candidatos from '../candidatos/candidatos'
import Candidato from '../candidatos/candidato'

export default () => (
    <Router history={hashHistory}>
        <Route path='/candidatos' component={Candidatos} />
        <Route path='/candidatos/:id/:codigo' component={Candidato} />
        <Redirect from='*' to='/candidatos' />
    </Router>
)