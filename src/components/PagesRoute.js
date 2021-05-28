import React from 'react'
import {BrowserRouter as Route, Router} from 'react-router-dom'
import Bodynew from './Bodynew'
import Body from './Body'
import Connect from './Connect'
import Blog from './Blog'

const PagesRoute = () => {
    return(
        <>
            <Route exact path="/" component = {Bodynew} />
            <Route exact path="/body" component = {Body} />
            <Route exact path="/connect" component = {Connect} />
            <Route exact path="/blog" component = {Blog} />
        </>
    )
}

export default PagesRoute