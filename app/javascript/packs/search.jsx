import React from 'react'
import ReactDOM from 'react-dom'
import SearchBar from './search_bar'
import SearchResults from './search_results'

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      results: []
    }
    this.handleSearch = this.handleSearch.bind(this);
  }

  render() {
    return(
      <div>
        <h2>Bestest Buy</h2>
        <SearchBar onSearch={this.handleSearch} />
        <SearchResults results={this.state.results} />
      </div>
    )
  }

  handleSearch(term){
    let search_string = new URLSearchParams({ search_term: term }).toString()
    fetch('http://localhost:3000/products?' + search_string, {
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(response => response.json())
      .then(data => { this.setState({ results: data }) })
  }
}

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <Search />,
    document.getElementById('app').appendChild(document.createElement('div')),
  )
})
