import React, { Component } from 'react';
import './About.css';

/**
 * Class to handle the rendering of the Home page.
 * @extends React.Component
 */
export default class Home extends Component {
  render() {
    return (
      <div className="About container">
        <h1>About</h1>
        <p>
          This is a TensorFlow.js web application where users can classify images selected locally
          or taken with their device's camera. The app uses a neural network, which can be changed according to your needs to solve your problem. If you're interested in making this to benefit your business, please contact me on https://www.linkedin.com/in/tuomasjalonen/.
        </p>
      </div>
    );
  }
}
