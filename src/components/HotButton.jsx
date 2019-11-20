import React from 'react';


function HotButton(props){
 return(
  <div>
   <button onClick ={props.onHotClick} type="button" className="btn btn-default btn-lg material-icons" aria-label="Left Align"><i class="material-icons">thumb_up</i></button>

   <button onClick ={props.onNotClick} type="button" className="btn btn-default btn-lg material-icons">thumb_down</button>
  </div>
 );
}
export default HotButton;