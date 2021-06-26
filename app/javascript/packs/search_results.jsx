import React from 'react'

class SearchResults extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div>
        {this.props.results.map(result => (
          <div key={result.upc}>
            <a href={'http://localhost:3000/products/' + result.upc}>
              {result.name}
            </a>
            <img src={result.image} />
          </div>
        ))}
      </div>
    )
  }
}

export default SearchResults;
