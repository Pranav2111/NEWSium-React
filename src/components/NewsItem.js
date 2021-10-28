import React, { Component } from 'react'

export class NewsItem extends Component {
    render() {
    
        let { title, description, imageUrl ,newsUrl} = this.props;
        return (
            <div className="my-3 mx-4 shadow-lg p-3 mb-5 bg-body rounded">
                <div className="card">
                    <img src={!imageUrl?"https://images.news18.com/ibnlive/uploads/2021/10/ruby-163515649416x9.png":imageUrl} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{description}</p>
                        <a href={newsUrl} className="btn btn-sm btn-primary">Read More</a>
                    </div>
                </div>
            </div>
        )
    }
}

export default NewsItem
