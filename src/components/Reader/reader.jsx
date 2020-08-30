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
                        <a href="https://www.meistertask.com/app/project/bGD7VdLD/basic">MeisterTask</a>
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
