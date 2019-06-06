import React, {Component} from 'react'
import './Article.css';

class Articles extends Component {
    render() {
        const {articles} = this.props;
        let articles_list = articles.map((article) =>
            <div key={article.id}>
                <h4>
                    {article.title}&nbsp;
                </h4>
                <p>{article.text}</p>
                <p>At {(new Date(article.date)).toDateString()}</p>
            </div>
        );
        return (
            <div>
                {articles_list}
            </div>
        )
    }
}

export default Articles