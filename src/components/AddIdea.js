import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addIdea } from '../actions/ideaActions';

class AddIdea extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      body: ''
    }
  }

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    })
  }

  handleSubmit = event => { 
    event.preventDefault();
    const idea = this.state;
    this.props.addIdea(idea)
    this.setState({
        title: '',
        body: ''
    })
  }

render() {
    return (
       <form onSubmit={this.handleSubmit}>

         <label htmlFor="idea_title"></label>
          <input
           type="text"
           name="title"
           value={this.state.title}
           onChange={this.handleChange}
           placeholder="brainstorm title"
         />

         <label htmlFor="idea_body"></label>
          <input
           type="text"
           name="body"
           value={this.state.body}
           onChange={this.handleChange}
           placeholder="describe it"
         />
        <br/>
         <button>Submit Brainstorm!</button>
       </form>
    )
  }
}

export default connect(null, { addIdea })(AddIdea);
  




