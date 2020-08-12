import React from 'react'

import './styles.css'

const Gallery = (props) => {
  const { gallery, loadMore, launchModal, selectedImage, searchedQuery } = props
  console.log('gallery = ', gallery)
  return (
    <div className="content">
      <section className="grid">
        {gallery.length ? gallery.map( (image, index) => (
          <div
            key={image.id}
            className={`item item-${Math.ceil(
              image.height / image.width,
            )}`}
          >
            <img
              src={image.urls.small}
              alt={image.description}
              data-toggle="modal" data-target="#selected-img-modal"
              onClick={() => launchModal(index)}
            />
          </div>
        )) : (
          <div className="error card text-danger mb-3 mx-auto" style={{maxWidth: '18rem',}}>
            <div className="card-body bg-pink">
              {searchedQuery === '' ? (
              <p className="card-text">Your entry is not valid. Please try again.</p>
              ) : (
                <p className="card-text">An error has occured or this app has reached its rate limit allowed by <a href="https://unsplash.com/documentation" target="_blank" rel="noopener noreferrer">Unsplash</a>. Please try again in a few minutes.</p>
              )}
            </div>
          </div>
        )}
      </section>
      <button type="button" className="btn btn-outline-primary" onClick={loadMore}>Load more...</button>
      {/* modal */}
      <div className="modal fade" id="selected-img-modal" tabIndex="-1" role="dialog" aria-labelledby="selected-img-modal-Label" aria-hidden="true">
        <div className="modal-dialog modal-lg" role="document">
          <div className="modal-content">
            <div className="modal-body">
              <div className="img-container">
                <img src={selectedImage.src} alt={selectedImage.description} className="mx-auto d-block img-fluid high-res-img"/>
              </div>
              <hr/>
              <p>{selectedImage.description}</p>
              <p>Photo by <a href={selectedImage.page + `?utm_source=find-inspiration`} target="_blank" rel="noopener noreferrer">{selectedImage.username}</a> on <a href="https://unsplash.com/?utm_source=find-inspiration`" target="_blank" rel="noopener noreferrer">Unsplash</a></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Gallery