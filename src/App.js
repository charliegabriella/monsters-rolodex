import React, {Component} from "react";
import "./App.css";
import {CardList} from "./components/CardList/CardList";
import {SearchBox} from "./components/SearchBox/SearchBox.jsx";

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchField: "",
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => this.setState({monsters: users}));
  }

  render() {
    const {monsters, searchField} = this.state;
    const filteredMonsters = monsters.filter((monster) =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    );

    return (
      <div className='App'>
        <SearchBox
          placeholder='search monsters'
          handleChange={(e) => {
            this.setState({searchField: e.target.value}, () =>
              console.log(this.state)
            );
          }}
        />
        <CardList monsters={this.state.monsters} />
      </div>
    );
  }
}

export default App;

//Events: synthetic event is
