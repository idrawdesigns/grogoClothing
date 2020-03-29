import React from 'react'

import './homepage.styles.scss'

//components
import Directory from '../../components/directory/DirectoryComponent'

const HomePage = () => (
  <div className="homepage">
    <h1>Welcome to my Homepage</h1>
    <div className="directory-menu">
      <Directory />
    </div>
  </div>
)

export default HomePage
