import React, {Fragment} from "react";
import {Link} from "react-router-dom";
import {Button} from "reactstrap";

import * as ROUTES from "../../constants/routes";

const FourOhFour = () => (
    <Fragment>
        <h1>404</h1>
        <h2>Page or file not found</h2>
        <p>
            We're sorry but the page you're looking for is unavailable, was renamed or no longer exists.
            Also, please be sure that you're using the correct URL.
        </p>
        <Button tag={Link} to={ROUTES.HOME}>Return</Button>
    </Fragment>
);

export default FourOhFour;
