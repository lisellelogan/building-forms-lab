import React, { Component } from 'react';
import BandInput from '../components/BandInput';
import Bands from '../components/Bands';
import {connect } from 'react-redux';

class BandsContainer extends Component {
  render() {
    return(
      <div>
        <BandInput addBand={this.props.addBand}/>
        <Bands bands={this.props.bands}/>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  bands: state.bands
})

const mapDispatchToProps = dispatch => ({
  addBand: (band) => dispatch({type: 'ADD_BAND', payload: band})
})

export default connect(mapStateToProps, mapDispatchToProps)(BandsContainer)
