import React, {Component} from 'react';
import './App.css';
import {YMInitializer} from 'react-yandex-metrika';
import ReactGA from 'react-ga';
import ErrorBoundary from './ErrorBoundary'
import SocialLinkCategory from "./social-links/SocialLinks";
import Notifications from "./notifications/Notifications";
import Articles from './article/Article'
import data from '../assets/StubData'

ReactGA.initialize(process.env.REACT_APP_GOOGLE_ANALYTICS);
ReactGA.pageview(window.location.pathname + window.location.search);

class App extends Component {
    render() {
        return (
            <ErrorBoundary>
                <div className="App">
                    <header>
                        <h2>Alexander Sobyanin</h2>
                        <h3>Personal Page</h3>
                    </header>
                    <main>
                        <SocialLinkCategory SocialLinkCategories={data.socialLinks}/>
                        <div id="block-home-page">
                            <h3>Home Page</h3>
                            <p>
                                <a href="//b1oki.herokuapp.com" target="_blank" rel="noopener noreferrer">
                                    Link to my Home Page with projects
                                </a>
                            </p>
                        </div>
                        <h3>Wall</h3>
                        <Articles articles={data.articles}/>
                        <h3>Test Firebase</h3>
                        <Notifications/>
                    </main>
                    <footer>
                        <p>
                            &copy;&nbsp;2019&nbsp;by&nbsp;
                            <a href="//about.me/sobyanin" target="_blank" rel="noopener noreferrer">
                                Alexander&nbsp;Sobyanin
                            </a>
                        </p>
                        <p className="App-copyrights">
                            Some icons made by <a href="http://www.freepik.com" title="Freepik">Freepik</a>
                            {' '}from{' '}
                            <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a>
                            {' '}is licensed by{' '}
                            <a href="http://creativecommons.org/licenses/by/3.0/" title="Creative Commons BY 3.0">
                                CC 3.0 BY
                            </a>
                        </p>
                        <YMInitializer
                            accounts={[process.env.REACT_APP_YANDEX_METRIKA]}
                            options={{
                                clickmap: true,
                                trackLinks: true,
                                accurateTrackBounce: true,
                                webvisor: true,
                                trackHash: true,
                            }}
                        />
                    </footer>
                </div>
            </ErrorBoundary>
        );
    }
}

export default App;
