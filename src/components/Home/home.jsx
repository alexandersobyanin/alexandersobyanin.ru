import React, {Fragment} from 'react';

import Articles from "../Articles";
import Notifications from "../Notifications";
import SocialLinkCategory from "../OnlineProfiles";
import Portfolio from "../Portfolio";
import data from '../../assets/stubData';

const HomePage = () => (
    <Fragment>
        <h1>Home</h1>
        <Portfolio/>
        <SocialLinkCategory SocialLinkCategories={data.socialLinks}/>
        <Articles articles={data.articles}/>
        <Notifications/>
    </Fragment>
);

export default HomePage;
