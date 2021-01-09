import React , {Component} from 'react'
import Names from './Names.js'
import Display from './Display.js'

class App extends Component {

  state = {
    names: ''
  }
  handleNames = (names) => {
    let appendNames = [...this.state.names , names]
    this.setState ({
      names : appendNames
    })
  }
  render() {
    return (
        <div className="App">
          <h1 className="App">Append and Delete names</h1>
          <Names Names = {this.handleNames}/>
          <Display display ={this.state.names}/>
        </div>
    );
  }
}

export default App;