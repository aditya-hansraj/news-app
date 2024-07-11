import React from 'react'

const NewsItem = ({title, description, src, url}) => {
    return (
        title !== '[Removed]' &&
        <div className="card bg-dark text-light mb-3 d-inline-block my-3 mx-3 px-2 py-2" style={{maxWidth: "345px"}}>
            <img src={src?src:"https://placehold.jp/a6a6a6/ffffff/330x200.png?text=Image%20Unavialable"} style={{height: "200px", maxWidth: "330px"}} className="card-img-top" alt="Article_img" />
                <div className="card-body">
                    <h5 className="card-title">{title.slice(0, 50)}</h5>
                    <p className="card-text">{description}</p>
                    <a href={url} target='_blank' className="btn btn-primary">Read More</a>
                </div>
        </div>
    )
}

export default NewsItem
