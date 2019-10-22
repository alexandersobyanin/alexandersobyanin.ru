import React, {Component} from 'react';

class Articles extends Component {
    render() {
        const {articles} = this.props;
        let articles_list = articles.map((article) =>
            <div key={article.id}>
                <h3>
                    {article.title}&nbsp;
                </h3>
                <p>{article.text}</p>
                <p>At {(new Date(article.date)).toDateString()}</p>
            </div>
        );
        return (
            <div>
                <h2>Wall</h2>
                {articles_list}
            </div>
        )
    }
}

export default Articles;
