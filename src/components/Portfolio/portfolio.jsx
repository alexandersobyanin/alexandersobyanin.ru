import React, {Fragment} from 'react';

import SocialLinkCategory from "../SocialLinks/socialLinks";
import Notifications from "../Notifications/notifications";
import Articles from '../Articles';
import data from '../../assets/stubData';

const Portfolio = () => (
    <Fragment>
        <SocialLinkCategory SocialLinkCategories={data.socialLinks}/>
        <Articles articles={data.articles}/>
        <Notifications/>
    </Fragment>
);

export default Portfolio;
