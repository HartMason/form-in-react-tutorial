import "./App.css";
import React, { Component } from "react";
import axios from 'axios'

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      firstName: "",
      lastName: ""
    };
  }

  handleChange = (e) => {
    console.log(e.target.name)
    this.setState({                            
      firstName: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()                           //prevents page reload
    console.log(this.state.firstName)

    //Where we send data off to a server
    axios.post('/user', {
      firstName: this.state.firstName,
      lastName: this.state.lastName
    })
    .then(function (response) {
      console.log(response)
    })
    .catch(function (error) {
      console.log(error)
    })

    this.setState({
      firstName: "",
      lastName: ""
    })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p>My 2nd form in React</p>
          <form onSubmit={(e) => {this.handleSubmit(e)}}>
            <input name="firstName" type="text" value={this.state.firstName} onChange={e => {this.handleChange(e)}}></input>
            <input name="lastName" type="text" value={this.state.lastName} onChange={e => {this.handleChange(e)}}></input>
            <input type="submit"></input>
           

          </form>
        </header>
      </div>
    );
  }
}
export default App;
