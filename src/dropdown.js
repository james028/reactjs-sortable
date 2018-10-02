import React, { Component } from 'react'

class Dropdown extends Component {
  render() {
    return (
      <div className={this.props.dropdownActive ? "dropdown pull-right open" : "dropdown pull-right" }>
        <div className="sort-items" onClick={this.props.toggle}>
            Sort items by
            <span className="caret"></span>
        </div>
        <ul className="dropdown-menu">
                sss<br></br>
                
        </ul>
      </div>
    )
  }
}
export default Dropdown;