import React, {Component, Fragment} from 'react';

import './onlineProfiles.scss';

class OnlineProfiles extends Component {
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
                                <OnlineProfilesCategory SocialLinks={SocialLinkCategories[key]}/>
                            </div>
                        ))
                    }
                </div>
            </Fragment>
        )
    }
}

class OnlineProfilesCategory extends Component {
    render() {
        const {SocialLinks} = this.props;
        let links = SocialLinks.map(link =>
            <a key={link.id} title={link.title} href={link.url}
               target="_blank" rel="noopener noreferrer" className="pr-2 pb-2">
                <span dangerouslySetInnerHTML={{__html: link.svg}} className="SVGInline"/>
            </a>
        );
        return (
            <div className="d-flex flex-row flex-wrap">
                {links}
            </div>
        )
    }
}

export default OnlineProfiles;
