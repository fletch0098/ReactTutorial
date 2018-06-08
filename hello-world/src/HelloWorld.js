import React, { Component } from 'react';
import './HelloWorld.css';

class HelloWorld extends Component {

  constructor(props) {
    super(props);
    this.state = { greeting: 'Hello' };
    this.frenchify = this.frenchify.bind(this);
    this.spanishify = this.spanishify.bind(this);
    this.englishify = this.englishify.bind(this);
    this.removeGreeting = this.removeGreeting.bind(this);
  }

  render() {
    return (
      <div className="HelloWorld">{this.state.greeting} {this.props.name}!
      <br/>
      <button onClick={this.frenchify}>Frenchify!</button><button onClick={this.englishify}>Englishify!</button><button onClick={this.spanishify}>Spanishify!</button>
      <br/>
            <button onClick={this.removeGreeting}>Remove Me!</button>
      </div>
    );
  }

  frenchify() {
    this.setState({ greeting: 'Bonjour' });
  }
  spanishify() {
    this.setState({ greeting: 'Hola' });
  }
  englishify() {
    this.setState({ greeting: 'Hello' });
  }

  removeGreeting() {
  this.props.removeGreeting(this.props.name);
}

}

export default HelloWorld;
