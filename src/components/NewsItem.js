import React, { Component } from 'react'

export class NewsItem extends Component {


  render() {
    let {title, description, imageUrl, newsUrl} = this.props;
    return (
        <div className='my-3'>
            <div className="card" style={{width: "18rem"}}>
                <img src={!imageUrl?"https://www.thedailybeast.com/resizer/v2/KNCUDVJ67FE3JLADOOPASZTFAA.gif?smart=true&auth=f2d1c18a2bcf16407546f97cb5759b99fa5a9162647d57dbc4793a1b9f1a0047&width=1200&height=630":imageUrl} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{title}...</h5>
                    <p className="card-text">{description}...</p>
                    <a href={newsUrl} target="_blank" className="btn btn-sm btn-primary" rel="noreferrer">Read More</a>
                </div>
            </div>
        </div>
    )
  }
}

export default NewsItem
