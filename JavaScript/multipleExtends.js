/**
 * Make this extend function and attributes (Optional) from another Object
 * @param obj The object to extend from
 * @param context Optional, the object that will expend from first param, this by default
 * @param onlyF Optional, only extend functions if true, false by default
 */
export const extendFrom = (obj,context=this,onlyF=false) => {
  let getType = {};
  for(let i in obj){
    if(!context.hasOwnProperty(i)){
      if(!onlyF || (obj[i] && getType.toString.call(obj[i]) === '[object Function]')){
        context[i] = obj[i];
      }
    }
  }
}

/*****************************************
******************USAGE*******************
*****************************************/

// Player.js
import React, { Component } from 'react';

class Player extends Component {

  render() {
    return (
      <div className="Player">
        <video ref="player" width="1280" height="720"/>
        <br/>
      </div>
    );
  }

  componentDidMount(){
    this.extendFrom(this.refs.player);
  }

  export const extendFrom = (obj,context=this,onlyF=false) => {
    let getType = {};
    for(let i in obj){
      if(!context.hasOwnProperty(i)){
        if(!onlyF || (obj[i] && getType.toString.call(obj[i]) === '[object Function]')){
          context[i] = obj[i];
        }
      }
    }
  }
}

export default Player;

// App.js
import React, { Component } from 'react';
import Player from './player.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Player ref={customPlayer}/>
      </div>
    );
  }

  componentDidMount(){
    // Use any function of the video Tag
    this.refs.customPlayer.play();
  }
}

export default App;
