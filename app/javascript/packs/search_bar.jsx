import React from 'react'

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { term: '' }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  
  render() {
    return(
      <form onSubmit={this.handleSubmit}>
        <input type='text' name='term' onChange={this.handleChange} value={this.state.term}/>
        <input type='submit' value='Search'/>
      </form>
    )
  }
  
  handleSubmit(event) {
    event.preventDefault()
    this.props.onSearch(this.state.term)
    this.setState({ term: '' })
    return false;
  }
  
  handleChange(event) {
    this.setState({ term: event.target.value })
  }
}

export default SearchBar;
