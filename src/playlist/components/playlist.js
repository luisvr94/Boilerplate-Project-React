// import React, {Component} from 'react';
import React from 'react';
import Media from './media';
import Play from './play.js';
import '../css/playlist.css';
// class Playlist extends Component{
//   render(){
//     console.log(this.props.data);
//     const playlist=this.props.data.categories[0].playlist;
//     return(
//       <div>
//         {
//           playlist.map((media)=>{
//               return <Media {...media} key={media.id}/>
//           })
//         }
//       </div>
//     )
//   }
// }

//COMPONENTE FUNCIONAL
function Playlist(props) {
  // const playlist = props.data.categories[0].playlist;
    /* <Play size={50} color = "red"/> */
  return (<div className="Playlist">
    {
      props.playlist.map((media) => {
        return <Media  {...media} key={media.id}/>
      })
    }
  </div>)
}

export default Playlist;
