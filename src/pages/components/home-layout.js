import React from 'react';
import '../css/homeLayout.css';
function HomeLayout(props){
  return(
    <section className="homeLayout">
      {props.children}
    </section>
  )
}
export default HomeLayout;
