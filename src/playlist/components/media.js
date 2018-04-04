// import React, {Component} from 'react';
import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import '../css/media.css';
//COMPONENTE PURO ===>PureComponent
class Media extends PureComponent {
  //BINDEAR VARAIBLES DENTRO DE FUNCIONES
  // constructor(props){
  //   super(props);
  //   this.pruebaClick=this.pruebaClick.bind(this);
  // }

  //FORMA CAMBIAR ESTADOS ESE 6
  // constructor(props){
  //   super(props);
  //   this.state={
  //     autor:props.autor
  //   };
  // }

  //FORMA ES7 CAMBIAR ESTADOS
  state={
    author:this.props.author
  }
pruebaClick=(event) =>{
    console.log("event",this.props.title);
    this.setState({author:"Gaby"});
  }
  render() {
    const styles = {
      container: {
        fontSize: 28,
        backgroundColor: '#ffeef',
        cursor: 'pointer',
        width: 50,
        border: '1px solid red'
      }
    }

    return (
    // style={styles.container} -->css inline
    <div className="Media" onClick={this.props.openModal}>
      <div >
        <img className="Media-image" src={this.props.cover} width={50} height={50}/>
        <h3>Hola Mundo
        </h3>
        <h3 className="Media-title">{this.props.title}</h3>
        <h3 className="Media-author">{this.state.author}</h3>
      </div>
    </div>)
  }
}

Media.propTypes = {
  cover: PropTypes.string,
  title: PropTypes.string,
  autor: PropTypes.string,
  type: PropTypes.oneOf(['video', 'audio'])
};

export default Media;
