import React, { Component } from 'react'
import axios from 'axios'

import './App.css';
import Gallery from './Components/Gallery/Gallery'
import SearchBar from './Components/SearchBar';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      gallery: [],
      currentQuery: '',
      searchedQuery: '',
      page: 1,
      selectedImage: {
        description: '',
        src: '',
        username: '',
        page: '',
      },
    }
  }
  ROOT = `https://api.unsplash.com/`
  KEY ="?client_id=Ec1n2AKEb00jiprb4C_6LFncc57yZHxst8TYXNPvp7s"
  PERPAGE = `&per_page=30`

  fetchInitialImages = () => {
    this.setState({ searchedQuery: 'Curated Collection'})
    axios.get(`${this.ROOT}photos${this.KEY}${this.PERPAGE}&page=1`)
      .then(res => {
        let results = res.data
        console.log('results = ', results)
        this.setState((prevState) => {
          return { gallery: [...results] }
        })
      })
  }

  loadMore = () => {
    this.setState((prevState) => {
      return {page: prevState.page + 1}
    }, () => {
      if (this.state.searchedQuery === 'Curated Collection') {
        axios.get(`${this.ROOT}photos${this.KEY}${this.PERPAGE}&page=${this.state.page}`)
          .then(res => {
            let results = res.data
            console.log('results = ', results)
            this.setState((prevState) => {
              return { gallery: [...prevState.gallery, ...results] }
            })
          })
      } else {
        axios.get(`${this.ROOT}search/photos${this.KEY}&query=${this.state.currentQuery}${this.PERPAGE}&page=${this.state.page}`)
          .then(res => {
            let results = res.data.results
            console.log('results = ', results)
            this.setState((prevState) => {
              return { gallery: [...prevState.gallery, ...results] }
            })
          })
      }
    })
  }

  componentDidMount() {
    this.fetchInitialImages(1)
  }
  
  launchModal = (index) => {
    this.setState((prevState) => {
      return { 
        selectedImage: {
          description: prevState.gallery[index].description,
          src: prevState.gallery[index].urls.regular,
          username: prevState.gallery[index].user.username,
          page: prevState.gallery[index].user.links.html,
        }
      }
    })
  }

  currentItem
  handleChangeInitialized = false
  isCurrentItemInitialized = true
  handleChange = (e) => {
    this.handleChangeInitialized = true
    this.isCurrentItemInitialized = true
    this.currentItem = this.state.currentQuery
    this.setState({
      currentQuery: e.target.value
    })
  }
  handleSubmit = (e) => {
    e.preventDefault()
    this.setState((prevState) => {
      return {searchedQuery: prevState.currentQuery}
    })
    axios.get(`${this.ROOT}search/photos${this.KEY}&query=${this.state.currentQuery}${this.PERPAGE}`)
      .then(res => {
        let results = res.data.results
        console.log('results = ', results)
        this.setState({
          gallery: [...results]
        })
      })
  }


  render() {
    return (
      <div className="App">
      <SearchBar fetchInitialImages={this.fetchInitialImages} handleChange={this.handleChange} handleSubmit={this.handleSubmit} />
        <div className="container">
          <h1 className="text-center">{this.state.searchedQuery}</h1>
          <Gallery gallery={this.state.gallery} loadMore={this.loadMore} launchModal={this.launchModal} selectedImage={this.state.selectedImage} />
        </div>
      </div>
    );
  }
}

export default App