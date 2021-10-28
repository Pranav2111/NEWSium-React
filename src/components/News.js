import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';


export class News extends Component {

    


    constructor() {
        super();
        this.state = {
            articles: [],
            loading: false,
            page: 1

        }
    }
    
    async updateNews() {
        this.props.setProgress(10);
        const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=d093053d72bc40248998159804e0e67d&page=${this.state.page}&pageSize=${this.props.pageSize}`;
        this.setState({ loading: true });
        let data = await fetch(url);
        this.props.setProgress(30);
        let parsedData = await data.json()
        this.props.setProgress(70);
        this.setState({
            articles: parsedData.articles,
            totalResults: parsedData.totalResults,
            loading: false, 
        })
        this.props.setProgress(100);

    }
    async componentDidMount() {
        this.updateNews();
    }

    handlePreClick = async () => {
        this.setState({ page: this.state.page - 1 });
        this.updateNews();
    }

    handleNxtClick = async () => {
        this.setState({ page: this.state.page + 1 });
        this.updateNews()
    }

    render() {




        return (
            <div className="container my-2">
                <h1 className="text-center bg-dark text-light">TOP BULLETINS - {this.props.heading}</h1>

                {/* spinner */}
                {this.state.loading && <Spinner />}

                <div className="row">
                    {!this.state.loading && this.state.articles.map((element) => {
                        return <div className="col-sm col-md-4" key={element.url}>
                            <NewsItem title={element.title ? element.title : ""} description={element.description ? element.description : ""} imageUrl={element.urlToImage} newsUrl={element.url} />
                        </div>
                    })}
                </div>

                <div className="container mb-20 d-flex justify-content-between">
                    <button disabled={this.state.page <= 1} type="button" className="btn btn-dark" onClick={this.handlePreClick}>&laquo; Previous</button>
                    <button disabled={Math.ceil(this.state.totalResults / this.props.pageSize) < this.state.page + 1} type="button" className="btn btn-dark" onClick={this.handleNxtClick}>Next &raquo;</button>

                </div>
            </div>
        )
    }
}

export default News
