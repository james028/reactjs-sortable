import React, { Component } from 'react'

class Dropdown extends Component {
  render() {
    const output = this.props.names.map((e) => {
        return <li key={e}>
                    <a href="#">
                        {e[1]}
                    </a>
                </li>
    });
    return (
      <div className={this.props.dropdownActive ? "dropdown pull-right open" : "dropdown pull-right" }>
        <div className="sort-items" onClick={this.props.toggle}>
            Sort items by
            <span className="caret"></span>
        </div>
        <ul className="dropdown-menu">
            {output}
            <hr/>
            
        </ul>
      </div>
    )
  }
}
export default Dropdown;