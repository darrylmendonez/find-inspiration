import React from 'react'

const SearchBar = (props) => {
  const { fetchInitialImages, handleChange, handleSubmit, currentQuery } = props
  return(
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <span className="navbar-brand" onClick={fetchInitialImages} style={{cursor: 'pointer'}}>Find Inspiration</span>
        <form className="form-inline my-2 my-lg-0 ml-auto" onSubmit={handleSubmit}>
          <input className="form-control mr-sm-2" type="search" aria-label="Search" value={currentQuery} onChange={handleChange} autoFocus/>
          <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
        </form>
      </div>
    </nav>
  )
}

export default SearchBar