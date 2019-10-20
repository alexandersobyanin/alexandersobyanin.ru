import React, {Fragment} from "react";
import styled, {createGlobalStyle} from 'styled-components';

const GlobalStyleStickyFooterWithNavbar = createGlobalStyle`
    html {
        position: relative;
        min-height: 100%;
    }
    body {
        margin-bottom: 60px; /* Margin bottom by footer height */
    }
`;

const StickyFooter = styled.footer`
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 48px; /* Set the fixed height of the footer here */
    line-height: 48px; /* Vertically center the text there */
`;

const Footer = () => (
    <Fragment>
        <GlobalStyleStickyFooterWithNavbar/>
        <StickyFooter className="text-center">
            <span className="small text-muted">
                &copy;&nbsp;{new Date().getFullYear()}&nbsp;by&nbsp;
            </span>
            <a href="https://about.me/sobyanin" target="_blank" rel="noopener noreferrer"
               className="small text-muted">
                Alexander&nbsp;Sobyanin
            </a>
        </StickyFooter>
    </Fragment>
);

export default Footer;
