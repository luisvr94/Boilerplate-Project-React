import React, {Component} from 'react';
import HomeLayout from '../components/home-layout.js';
import Categories from '../../categories/components/categories';
import Related from '../components/related';
import ModalContainer from './modal/modalContainer.js';
import Modal from '../components/modal/modal.js';
import Error from '../../errores/components/error';
class Home extends Component {
  // constructor() {
  //
  // }
  state = {
    modalVisible: false,
    handleError: false
  }
  openModal = (event) => {
    this.setState({modalVisible: true});
  }
  cerrarModal = (event) => {
    this.setState({modalVisible: false});
  }
  componentDidCatch(error, info) {
    this.setState({handleError: true});
  }
  render() {
    return (<Error>
      <HomeLayout>
        <Related/>
        <Categories openModal={this.openModal} categories={this.props.data.categories}/> {
          this.state.modalVisible && <ModalContainer>
              <Modal cerrarModal={this.cerrarModal}>
                <h1>Modal</h1>
              </Modal>
            </ModalContainer>
        }

      </HomeLayout>
    </Error>)
  }
}
export default Home;
