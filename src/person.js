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
                    <div>{this.props.data.first_name} {this.props.data.last_name}</div>
                </div>
            </div>
        </div>
      </div>
    )
  }
}
export default Person;
