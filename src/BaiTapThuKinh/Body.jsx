import React, { Component } from 'react'
import dataGlasses from './dataGlasses.json'

export default class Body extends Component {
  state = {
    id: 1,
    price: 30,
    name: "GUCCI G8850U",
    url: "./BTGlasses/glassesImage/v1.png",
    desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
  }

  changeGlass = (glass) => {
    this.setState({
      id: glass.id,
      price: glass.price,
      name: glass.name,
      url: glass.url,
      desc: glass.desc
    })
    
    document.querySelector("#glass").style.display = 'block';
  }

  render() {
    return (
      <div>
        <div className="container">
          <div className="row mt-2">
            <div className="col-lg-6 d-flex justify-content-center">
              <div className="card justify-content-center w-50">
                <img src="./BTGlasses/glassesImage/model.jpg" className="card-img-top" alt="#" />
                <img style={{position: 'absolute', top: '86px', left: '69px'}} className='img-fluid w-50' src="./BTGlasses/glassesImage/v1.png" alt="" />
                <div className="card-body bg-info">
                  <h1 className='h3'>GUCCI G8850U</h1>
                  <p className='h6'>Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. </p>
                </div>
              </div>
            </div>
            <div className="col-lg-6 d-flex justify-content-center">
            <div className="card justify-content-center w-50">
                <img src="./BTGlasses/glassesImage/model.jpg" className="card-img-top" alt="#" />
                <img id='glass' style={{position: 'absolute', top: '86px', left: '69px', display: 'none'}} className='img-fluid w-50' src={this.state.url} alt="" />
                <div className="card-body bg-info">
                  <h1 className='h3'>{this.state.name}</h1>
                  <p className='h6'>{this.state.desc}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-4 bg-dark">
            <div className="row m-2">
              {dataGlasses.map((glass, index) => {
                return <div key={index} className="col-lg-2 p-1">
                        <button onClick={() => this.changeGlass(glass)}><img className='img-fluid' src={glass.url} alt="#" /></button>
                       </div>
              })}
            </div>
          </div>
        </div>
      </div>
    )
  }
}
