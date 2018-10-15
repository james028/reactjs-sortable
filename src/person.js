import React, { Component } from 'react'

class Person extends Component {
  render() {

    const input = this.props.categories; // array from the bottom of this script
    const output = input.map((item)=>{
      return <div key={item.id}><small className={ this.props.orderBy === item ? "active" : null }>{item}:</small> {this.props.data[item] }</div>
    });


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
                    {output}
                </div>
            </div>
        </div>
      </div>
    )
  }
}
export default Person;
