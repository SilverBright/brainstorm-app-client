import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchIdeas, deleteIdea } from '../actions/ideas';
import { Target } from '../targets.jpg';

class Ideas extends Component {

  componentDidMount() {
    this.props.fetchIdeas()
  }


render() {
  const renderIdeas = this.props.ideas.map(idea =>
    <div className="brainstorm card" key={idea.id}>
      <img src={ Target } alt="target"/>
      <div className="card-content">
        {/* <Link to={'/' + idea.id}> */}
        <span className="card-title purple-text">{ idea.title }</span>
        <span onClick={() => this.props.deleteIdea(idea.id)}>Delete Idea</span>
        {/* </Link> */}
        <p>{ idea.body }</p>
      </div>
    </div>
  )

    return (
      <div>
        { renderIdeas }
      </div>
    )
  }
}

  
export default connect(
  state => ({
    ideas: state.ideas}), 
    { fetchIdeas, deleteIdea }
    )(Ideas);