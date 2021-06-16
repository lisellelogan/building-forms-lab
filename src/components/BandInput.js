// Add BandInput component
import React, { Component } from 'react';

class BandInput extends Component {

  state = {
    name: ""
  }

  handleOnChange = event => {
    this.setState({
      name: event.target.value
    })
  }

  handleOnSubmit = event => {
    event.preventDefault()
    this.props.addBand(this.state)
    this.setState({
      name: ""
    })
  }

  render() {
    return(
      <div>
        <form onSubmit={this.handleOnSubmit}>
          <input onChange={this.handleOnChange} type="text" value={this.state.name}/>
          <input type="submit"/>
        </form>
      </div>
    )
  }
}

// const mapDispatchToProps = dispatch => ({
//   addBand: (band) => dispatch({type: 'ADD_BAND', payload: band})
// })

export default BandInput
