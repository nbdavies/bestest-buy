import React from 'react'

class SearchResults extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div className='row mt-5'>
        {this.props.results.map(result => (
          <div key={result.upc} className='card col-md-6 col-lg-4'>
            <img src={result.image} className='card-img-top img-thumbnail' style={{ maxHeight: '10em', width: 'auto', objectFit: 'contain' }}/>
            <div className="card-body">
              <h5 className="card-title">{result.name}</h5>
              <a href={'http://localhost:3000/products/' + result.upc} className='btn btn-primary'>
                View details
              </a>
            </div>
          </div>
        ))}
      </div>
    )
  }
}

export default SearchResults;
