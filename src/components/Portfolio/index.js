import React from 'react';
import SocialLinkCategory from "../SocialLinks";
import Notifications from "../Notifications";
import Articles from '../Articles'
import data from '../../assets/StubData'

const Index = () => (
    <div>
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
    </div>
);

export default Index;
