

import {PING,PONG  } from "./../types";
export const pingReducer = (state = { 
  showText: 'click button to change me' ,
  showColor : 'black'
  }, action) => {
  switch (action.type) {
    case PING:
      console.log("reduce to dispatch ping foo");
      return {
         showText: 'reduce to dispatch ping foo ' ,
         showColor :'red'
         };

    case PONG:
       console.log("epic to dispatch pong foo");
      return { 
         showText: 'epic to dispatch pong foo' ,
         showColor: 'blue'
        };

    default:
      return state;
  }
};