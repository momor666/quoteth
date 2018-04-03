import React, { Component } from 'react';
import Modal from 'react-modal';
import Box from './components/Box'
import './App.css'

const modalStyles = {
  content : {
    width: '40%',
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)'
  }
};

class App extends Component {
  state = {
    modalIsOpen: true
  }
  closeModal = () => {
    this.setState(() =>({
      modalIsOpen: false
    }))
  }
  render() {
    return (
      <div className="App">
        <Box/>
        <Modal 
          isOpen={this.state.modalIsOpen}
          onRequestClose={this.closeModal}
          style={modalStyles}
        >
          Need some inspiration or perhaps just a laugh? Check out some quotes that'll (hopefully) put a smile on your face.
        </Modal>
      </div>
    );
  }
}

export default App;