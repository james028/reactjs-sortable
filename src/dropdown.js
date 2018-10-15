import React, { Component } from 'react'
import './App.css';

class Dropdown extends Component {
    state = {
        nam: this.props.namesy
    };
  render() {
    const checked = <span className="click-dropdown"></span>;
    const output = this.props.names.map((e) => {
        return <li key={e} className={ this.props.orderBy === e[0] ? "active" : null }>
                    <a href="#" onClick={this.props.doOrderBy} data-value={e[0]} >
                        {e[1]}{ this.props.orderBy === e[0] ? checked : null }
                    </a>
                </li>
    });
    return (
          <div className={this.props.dropdownActive ? "dropdown pull-right open" : "dropdown pull-right" }>
            <div className="sort-items" onClick={this.props.toggle}>
                Sort items by
            </div>
            <ul className="dropdown-menu">
                {output}
                <hr/>
                <li><a href="#" onClick={this.props.doOrder}>ascending</a></li>
                <li><a href="#" onClick={this.props.doOrder}>descending</a></li>
                <hr/>
                {this.state.nam}
            </ul>
          </div>
    )
  }
}
export default Dropdown;