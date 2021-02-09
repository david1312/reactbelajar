import React from 'react';
// import logo from './logo.svg';
import './App.css';
import {CardList} from './component/card-list/card-list.component';   
import {SearchBox} from './component/search-box/search-box.component'

class App extends React.Component{
  //menset default value
  constructor(){
    super();

    this.state ={
      monsters: [],
      searchField: ''
    };

    // this.handleChange = this.handleChange.bind(this); //bind adalah method in any function that return new function where the context of this is set to whatever we passed to it. 
  }
  
  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({monsters : users}))
    .catch(error => console.log(error));
  }

  handleChange = (e) => {
    this.setState({ searchField:  e.target.value });
  }

  render(){
    const {monsters, searchField} = this.state;
    const filteredMonster = monsters.filter(monster =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
      );
    return( 
      <div className="App">
        <SearchBox
          placeholder='cari monster cuy'
          handleChange={this.handleChange}
        />
        <CardList monsters={filteredMonster}/>
      </div>
    )
  }
}


export default App;
