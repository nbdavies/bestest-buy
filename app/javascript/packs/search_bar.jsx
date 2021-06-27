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
      <div className='row gy-4'>
        <div className='col'>
          <form onSubmit={this.handleSubmit}>
            <div className='input-group'>
              <input type='text' name='term' onChange={this.handleChange} value={this.state.term} className='form-control'/>
              <input type='submit' value='Search' className='btn btn-primary'/>
            </div>
          </form>
        </div>
      </div>
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
