import React, {Component, Fragment} from 'react';
import {Col, Row} from "reactstrap";
import {compose} from "recompose";
import {withAuthorization, withEmailVerification} from "../Session";


class Reader extends Component {
    render() {
        return (
            <Fragment>
                <h1>Reader</h1>
                <Row>
                    <Col>
                        <a href="https://www.notion.so/b1oki/c41ab00c62e44e1d8ae851bdfb83b06b?v=f2982d3ae7bb44b1888f9c396364e30c">Notion Tasks</a>
                    </Col>
                    <Col>
                        <a href="https://www.notion.so/b1oki/">Notion</a>
                    </Col>
                    <Col>
                        <a href="https://github.com/b1oki">GitHub</a>
                    </Col>
                    <Col>
                        <a href="https://github.com/users/b1oki/projects/8">GitHub Project</a>
                    </Col>
                    <Col>
                        <a href="https://wika.carbonsoft.ru/блоги_и_отзывы:александр_собянин:start">Wika</a>
                    </Col>
                </Row>
            </Fragment>
        )
    }
}

const condition = authUser => !!authUser;

export default compose(
    withEmailVerification,
    withAuthorization(condition),
)(Reader);
