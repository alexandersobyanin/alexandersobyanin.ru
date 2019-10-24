import React, {Fragment} from "react";

import './footer.scss';

const Footer = () => (
    <Fragment>
        <footer className="text-center">
            <span className="small text-muted">
                &copy;&nbsp;{new Date().getFullYear()}&nbsp;by&nbsp;
            </span>
            <a href="https://about.me/sobyanin" target="_blank" rel="noopener noreferrer"
               className="small text-muted">
                Alexander&nbsp;Sobyanin
            </a>
        </footer>
    </Fragment>
);

export default Footer;
