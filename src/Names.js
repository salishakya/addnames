import React, {Component} from 'react'

class Names extends Component {    

handleChange = (e) => {
    console.log(e);
    this.setState ({
        names : e.target.value
    })
}
handleSubmit = (e) => {
    e.preventDefault();
    this.props.Names(this.state);
    console.log(this.state);
    this.setState ({
        names : ''
    });
} 
  render () {
      return (
      <div>
          <form className="App" >
              <label>Add Names</label>
              <input type="text" onChange = {this.handleChange}/>
              <button className="App circle " onClick = {this.handleSubmit}>Submit</button>
          </form>
          </div>
      )
  }
}

export default Names;