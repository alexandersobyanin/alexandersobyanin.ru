import React, {Component} from 'react';
import {Row, Card, CardBody, CardTitle, CardText, CardSubtitle} from 'reactstrap';

class Articles extends Component {
    render() {
        const {articles} = this.props;
        let articles_list = articles.map((article) =>
            <Card key={article.id}>
                <CardBody>
                    <CardTitle>
                        {article.title}
                    </CardTitle>
                    <CardSubtitle className="small text-muted font-italic font-weight-lighter">
                        {(new Date(article.date)).toLocaleDateString()}
                    </CardSubtitle>
                    <CardText>{article.text}</CardText>
                </CardBody>
            </Card>
        );
        return (
            <Row>
                <h2>Articles</h2>
                {articles_list}
            </Row>
        )
    }
}

export default Articles;
