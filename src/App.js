import React, { Component } from 'react';
import './App.css';
import Dropdown from './dropdown'
import Person from './person'

class App extends Component {
  constructor() {
    super();

    this.state = {
      dataArray: data,
      dropdownActive : true,
      names: names,
      orderBy: 'first_name',
      order: 'asc'
    };
  }

  toggleDropdown = (e) => {
    e.preventDefault();
    this.setState({
      dropdownActive: !this.state.dropdownActive
    })
  }

  doOrderBy = (e) => {
    e.preventDefault();
      const newOrderBy = e.target.getAttribute('data-value');
      this.setState({
          orderBy: newOrderBy
      })
  }

  doOrder = (e) => {
    e.preventDefault();
    const newOrder = e.target.getAttribute('data-value');
    this.setState({
      order: newOrder
    })
  }


  render() {

    let sorted = this.state.data;

    sorted = [](sorted, (e) => {
      return e[this.state.orderBy]
    }, this.state.order);

    const items = sorted.map((e) => {
        return <Person 
                  key={e.id} 
                  data={e} 
                  orderBy={this.state.orderBy}/>
    });

    return (
      <div className="App">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h3>React - sortable list</h3>
              <Dropdown 
                dropdownActive={this.state.dropdownActive}
                toggle={this.toggleDropdown}
                names={this.state.names}
                order={this.state.order}
                doOrder={this.doOrder}
                orderBy={this.state.orderBy}
                doOrderBy={this.doOrderBy}/>
                  {items}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;


const names = [["first_name", "first name"],["last_name", "last name"],["company","company"],["job","job"],["city","city"],["gender","gender"]]
const categories = ["company","job","city","gender"]
const data = [{"id":1,"first_name":"Robin","last_name":"Wheeler","email":"rwheeler0@wsj.com","gender":"Female","about":"Suspendisse potenti nullam porttitor lacus at turpis donec posuere metus vitae ipsum aliquam non mauris morbi non lectus","img":"https://randomuser.me/api/portraits/women/1.jpg","city":"Humen","job":"Junior Executive","company":"Babbleopia"},
{"id":2,"first_name":"Kathy","last_name":"Berry","email":"kberry1@ameblo.jp","gender":"Female","about":"Dapibus dolor vel est donec odio justo sollicitudin ut suscipit a feugiat et eros vestibulum ac est lacinia nisi venenatis","img":"https://randomuser.me/api/portraits/women/2.jpg","city":"Babakanbungur","job":"Compensation Analyst","company":"Thoughtstorm"},
{"id":3,"first_name":"Nicholas","last_name":"Armstrong","email":"narmstrong2@blog.com","gender":"Male","about":"Sapien dignissim vestibulum vestibulum ante ipsum primis in faucibus orci luctus et","img":"https://randomuser.me/api/portraits/men/2.jpg","city":"Mopti","job":"Account Executive","company":"Thoughtsphere"},
{"id":4,"first_name":"Wanda","last_name":"Morris","email":"wmorris3@spiegel.de","gender":"Female","about":"A nibh in quis justo maecenas rhoncus aliquam lacus morbi quis tortor id nulla ultrices aliquet maecenas leo odio","img":"https://randomuser.me/api/portraits/women/3.jpg","city":"Peñarrubia","job":"Sales Associate","company":"Jabbersphere"},
{"id":5,"first_name":"Mary","last_name":"Griffin","email":"mgriffin4@flickr.com","gender":"Female","about":"Congue vivamus metus arcu adipiscing molestie hendrerit at vulputate vitae nisl aenean","img":"https://randomuser.me/api/portraits/women/4.jpg","city":"Opuwo","job":"Staff Accountant I","company":"Digitube"},
{"id":6,"first_name":"Paul","last_name":"Gomez","email":"pgomez5@wunderground.com","gender":"Male","about":"Nam congue risus semper porta volutpat quam pede lobortis ligula sit amet eleifend","img":"https://randomuser.me/api/portraits/men/3.jpg","city":"Dumalneg","job":"Software Consultant","company":"Devpoint"},
{"id":7,"first_name":"Carlos","last_name":"Hayes","email":"chayes6@about.me","gender":"Male","about":"Vestibulum sit amet cursus id turpis integer aliquet massa id lobortis","img":"https://randomuser.me/api/portraits/men/4.jpg","city":"Caparrapí","job":"Staff Scientist","company":"Yacero"},
{"id":8,"first_name":"Paula","last_name":"Coleman","email":"pcoleman7@hatena.ne.jp","gender":"Female","about":"Est risus auctor sed tristique in tempus sit amet sem fusce consequat","img":"https://randomuser.me/api/portraits/women/5.jpg","city":"Asan-Maina Village","job":"Structural Engineer","company":"Rhycero"},
{"id":9,"first_name":"Teresa","last_name":"Vasquez","email":"tvasquez8@phpbb.com","gender":"Female","about":"Diam neque vestibulum eget vulputate ut ultrices vel augue vestibulum ante","img":"https://randomuser.me/api/portraits/women/6.jpg","city":"Khombole","job":"VP Marketing","company":"Realpoint"},
{"id":10,"first_name":"Alice","last_name":"Campbell","email":"acampbell9@multiply.com","gender":"Female","about":"Pede justo lacinia eget tincidunt eget tempus vel pede morbi porttitor lorem id ligula suspendisse","img":"https://randomuser.me/api/portraits/women/7.jpg","city":"Cagliari","job":"Internal Auditor","company":"Yoveo"}];
