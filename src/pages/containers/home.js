import React, {Component} from 'react';
import HomeLayout from '../components/home-layout.js';
import Categories from '../../categories/components/categories';
import Related from '../components/related';
import ModalContainer from './modal/modalContainer.js';
import Modal from '../components/modal/modal.js';
class Home extends Component {
  // constructor() {
  //
  // }
  state = {
    modalVisible: false
  };
  openModal=(event)=>{
    this.setState({modalVisible:true});
  }
  cerrarModal = (event) => {
    this.setState({modalVisible: false});
  }
  render() {
    return (<HomeLayout>
      <Related/>
      <Categories openModal={this.openModal} categories={this.props.data.categories}/>
      {
        this.state.modalVisible &&
        <ModalContainer>
          <Modal cerrarModal={this.cerrarModal}>
            <h1>Modal</h1>
          </Modal>
        </ModalContainer>
      }

    </HomeLayout>)
  }
}
export default Home;
