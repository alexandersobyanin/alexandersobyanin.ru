import React, {Component} from 'react';
import {Row, Card, CardBody, CardTitle, CardText, CardSubtitle, Button} from 'reactstrap';
import ReactMarkdown from 'react-markdown';
import {withFirebase} from "../Firebase";

class Articles extends Component {
    constructor(props) {
        super(props);

        this.state = {
            loading: false,
            articles: [],
            limit: 5,
        };
    }

    componentDidMount() {
        this.onListenForArticles();
    }

    onListenForArticles = () => {
        this.setState({loading: true});

        this.props.firebase
            .articles()
            .orderByChild('createdAt')
            .limitToLast(this.state.limit)
            .on('value', snapshot => {
                const articleObject = snapshot.val();

                if(articleObject) {
                    const articlesList = Object.keys(articleObject).map(key =>({
                        ...articleObject[key],
                    }));

                    this.setState({
                        articles: articlesList,
                        loading: false,
                    });
                } else {
                    this.state({articles: null, loading: false});
                }
            });
    };

    componentWillUnmount() {
        this.props.firebase.articles().off();
    }

    onNextPage = () => {
        this.setState(
            state => ({limit: state.limit + 5}),
            this.onListenForArticles,
        );
    };

    render() {
        const {articles, loading} = this.state;
        let articles_list = articles.map((article) =>
            <Card key={article.uid}>
                <CardBody>
                    <CardTitle>
                        {article.title}
                    </CardTitle>
                    <CardSubtitle className="small text-muted font-italic font-weight-lighter">
                        {(new Date(article.createdAt)).toLocaleDateString()}
                    </CardSubtitle>
                    <ReactMarkdown source={article.text} renderers={{root: CardText, paragraph: 'span'}} />
                </CardBody>
            </Card>
        );
        return (
            <Row>
                <h2>Articles</h2>

                {loading && <div>Loading ...</div>}

                {!articles && <div>There are no articles ...</div>}

                {articles && <div>{articles_list.reverse()}</div>}

                {!loading && articles && (
                    <Button onClick={this.onNextPage}>
                        More
                    </Button>
                )}
            </Row>
        )
    }
}

export default withFirebase(Articles);
