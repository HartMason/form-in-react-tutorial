import "./App.css";
import { Component } from "react";

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <div className="App">
      <header className="App-header">
        <p>My 2nd form in React</p>
        <form>
          <input type="text"></input>
          <input type="submit"></input>

        </form>
      </header>
    </div>;
  }
}
export default App;
