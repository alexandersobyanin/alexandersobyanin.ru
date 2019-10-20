import React, {Fragment} from 'react';

import SocialLinkCategory from "../SocialLinks";
import Notifications from "../Notifications";
import Articles from '../Articles'
import data from '../../assets/StubData'

const Portfolio = () => (
    <Fragment>
        <SocialLinkCategory SocialLinkCategories={data.socialLinks}/>
        <Articles articles={data.articles}/>
        <Notifications/>
    </Fragment>
);

export default Portfolio;
