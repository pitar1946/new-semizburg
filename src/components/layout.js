import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

import PropTypes from 'prop-types'
import Header from './header'
import Footer from './footer'

const Layout = ({ children }) => (
       <div>
        <Header/>
        <div>
          {children}
        </div>
        <Footer/>
       </div>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
