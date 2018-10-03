import React, { Component } from 'react'

class Person extends Component {
  render() {
    return (
      <div>
        <div className="container">
            <div className="row">
                <div className="col-md-4">
                    <div>
                        <img src={this.props.data.img} alt=""/>
                    </div>
                </div>
                <div className="col-md-8">
                    <div className={this.props.orderBy === "first_name" ? "active" : null }>{this.props.data.first_name} </div>
                    <div>{this.props.data.last_name}</div>
                </div>
            </div>
        </div>
      </div>
    )
  }
}
export default Person;
