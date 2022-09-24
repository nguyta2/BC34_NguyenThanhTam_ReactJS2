import React, { Component } from 'react'
import Header from './Header'
import Body from './Body';

let mainStyle = {
  width: "100%",
  height: "100vh",
  backgroundImage: `url("./BTGlasses/glassesImage/background.jpg")`,
  backgroundPosition: "center",
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat"
};

export default class Main extends Component {
  render() {
    return (
      <div style= { mainStyle }>
        <Header/>
        <Body/>
      </div>
    )
  }
}
