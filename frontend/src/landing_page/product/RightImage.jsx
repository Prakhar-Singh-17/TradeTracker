import React from 'react'

export default function RightImage({imageUrl , heading , description, link1}) {
  return (
    <div className="container">
        <div className="row">
            <div className="col-5 p-5 d-flex flex-column gap-3 justify-content-center">
                <h2>{heading}</h2>
                <p>{description}</p>
                  <a className="ui-links" >Learn More <i class="fa-solid fa-arrow-right"></i></a>
            </div>
            <div className="col-7 p-5"><img src={imageUrl}/></div>
        </div>
    </div>
  )
}
