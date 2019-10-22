import React, {Component, Fragment} from 'react';
import styled from 'styled-components';

const SocialLinkIcon = styled.span`
    svg {
        fill: #303030;
        height: 64px;
        width: 64px;
    }
`;

class SocialLinkCategory extends Component {
    render() {
        const {SocialLinkCategories} = this.props;
        return (
            <Fragment>
                <h2>Online Profiles</h2>
                <div className="d-flex flex-row mb-2">
                    {
                        Object.keys(SocialLinkCategories).map((key, index) => (
                            <div key={index} className="flex-fill p-2">
                                <h3>{key}</h3>
                                <SocialLinks SocialLinks={SocialLinkCategories[key]}/>
                            </div>
                        ))
                    }
                </div>
            </Fragment>
        )
    }
}

class SocialLinks extends Component {
    render() {
        const {SocialLinks} = this.props;
        let links = SocialLinks.map(link =>
            <a key={link.id} title={link.title} href={link.url}
               target="_blank" rel="noopener noreferrer" className="pr-2 pb-2">
                <SocialLinkIcon dangerouslySetInnerHTML={{__html: link.svg}}/>
            </a>
        );
        return (
            <div className="d-flex flex-row flex-wrap">
                {links}
            </div>
        )
    }
}

export default SocialLinkCategory;
