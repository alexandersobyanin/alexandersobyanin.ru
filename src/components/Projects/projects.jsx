import React, {Component, Fragment} from 'react';
import {Col, Row} from "reactstrap";


const githubIcon = <span className="SVGInline">
    <svg className="SVGInline-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1000" style={{height: '1em', width: '1em'}}>
        <path d="M1000 508c0 232-160 429-375 485v-131c0-41-10-98-52-131 134-20 239-99 239-223
        0-51-21-102-58-144 11-47 17-105-4-148-53 5-106 32-145 56-33-8-67-14-105-14s-73
        6-106 14c-39-24-91-51-144-56-21 43-16 101-5 148-37 42-57 93-57 144 0 124 105 203 239 223-20
        15-32 36-40 57-105 2-189-81-190-81-5-4-12-5-16-2-6 3-9 10-7 16 2 5 44 124 201
        172v100c-215-56-375-253-375-485 0-275 223-500 500-500 275 0 500 225 500 500z"/>
    </svg>
</span>;

class Projects extends Component {
    render() {
        return (
            <Fragment>
                <h1>Projects</h1>
                <Row>
                    <Col>
                        Other on <a className="social-link" title="Visit me on GitHub" href="//github.com/b1oki" target="_blank" rel="noopener noreferrer">{githubIcon} GitHub</a>
                    </Col>
                    <Col>
                        Tool <a href="/projects/monospaced_converter.html" target="_blank" rel="noopener noreferrer">Monospaced_converter</a> (jQuery)
                    </Col>
                    <Col>
                        Game <a href="/projects/game_developer_life.html" target="_blank" rel="noopener noreferrer">Game Developer Life</a> (Bitsy)
                    </Col>
                    <Col>
                        Game <a href="/projects/fools_village_clicker.html" target="_blank" rel="noopener noreferrer">Fools Village Clicker</a> (jQuery)
                    </Col>
                    <Col>
                        Game <a href="/projects/hr_task_text_puzzle.html" target="_blank" rel="noopener noreferrer">Text Puzzle</a> from some HR's task (JavaScript)
                    </Col>
                    <Col>
                        Game <a href="/projects/2021_03_geekbrains_logitech/index.html" target="_blank" rel="noopener noreferrer">Logitech Landing</a>
                        from <a href="https://geekbrains.ru/courses/2575" target="_blank" title="GeekBrains курс Стартуй в веб-разработке">GeekBrains</a> (HTML/CSS with Figma)
                    </Col>
                </Row>
            </Fragment>
        )
    }
}

export default Projects;
