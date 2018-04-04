import React ,{Component} from 'react';
import ErrorRegular from './error-regular';
class Error extends Component{
  state = {
    handleError:false
  }
  componentDidCatch(error, info) {
    this.setState({
      handleError:true
    });
  }
  render(){
    if(this.state.handleError){
      return(
      <ErrorRegular/>
      )
    }else{
      return this.props.children;
    }

  }
}
export default Error;
