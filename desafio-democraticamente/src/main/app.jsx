import 'modules/bootstrap/dist/css/bootstrap.min.css'
import 'modules/font-awesome/css/font-awesome.min.css'
import 'modules/hover.css/css/hover-min.css'
import '../template/custom.css'

import React from 'react'
import Header from '../template/header'
import Routes from './routes'

export default () => (
    <div className="container">
        <Header />
        <Routes />
    </div>
)