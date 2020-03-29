import React, { Component } from 'react'

//styles
import './directory.styles.scss'

//section data
import data from './sectionsdata'

//components
import MenuItem from '../menu-item/MenuItem'

class DirectoryComponent extends Component {
  state = {
    sections: data
  }
  render() {
    return (
      <div className="directory-menu">
        {this.state.sections.map(({ title, imageUrl, id, size }) => (
          <MenuItem key={id} title={title} imageUrl={imageUrl} size={size} />
        ))}
      </div>
    )
  }
}

export default DirectoryComponent
