import React, {Fragment} from 'react';

import Articles from "../Articles";
import Portfolio from "../Portfolio";
import data from '../../assets/stubData';

const HomePage = () => (
    <Fragment>
        <h1>Home</h1>
        <Portfolio/>
        <Articles articles={data.articles}/>
    </Fragment>
);

export default HomePage;
