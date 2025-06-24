import React from 'react'

export default function LeftImage({imageUrl , heading , description, link1 , link2 }) {
  return (
    <div className="container">
        <div className="row">
            <div className="col-7 p-5"><img src={imageUrl}/></div>
            <div className="col-5 p-5 d-flex flex-column gap-3 justify-content-center">
                <h2>{heading}</h2>
                <p>{description}</p>
                <div className="row">
                    <div className="col d-flex flex-column gap-3">
                        {link1?<a href={link1}>Try Demo <i class="fa-solid fa-arrow-right"></i></a>:null}
                        <img src='assets/googlePlayBadge.svg' width={"60%"}/>
                    </div>
                    <div className="col d-flex flex-column gap-3">
                        {link2?<a href={link2}>Learn More <i class="fa-solid fa-arrow-right"></i></a>:<p></p>}
                         <img src='assets/appstoreBadge.svg' width={"60%"}/>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
