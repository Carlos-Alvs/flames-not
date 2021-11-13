import React from 'react'
import Land from './paginas/Land'
import Sucos from './paginas/Sucos'
import { BrowserRouter, Route } from 'react-router-dom'

function Routes() {
    return (
        <BrowserRouter>
            <Route path="/" exact component={Land} />
            <Route path="/sucos" exact component={Sucos} />

        </BrowserRouter>
    )
}

export default Routes