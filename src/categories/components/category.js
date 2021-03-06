import React from 'react';
import Playlist from '../../playlist/components/playlist';
import '../css/categorias.css';
function Category(props){
  return(
    <div>
      <p className="descriptionCategory">{props.description}</p>
      <h2>{props.title}</h2>
      {
          <Playlist openModal={props.openModal} playlist={props.playlist}/>
      }
    </div>
  )
}

export default Category;
