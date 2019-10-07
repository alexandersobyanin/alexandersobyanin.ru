import React, {Component} from 'react'
import './style.css';

class SocialLinkCategory extends Component {
    render() {
        const {SocialLinkCategories} = this.props;
        return (
            <div className="SocialLinks">
                <h3>
                    <a href="https://about.me/sobyanin" target="_blank" rel="noopener noreferrer">
                        About.me
                    </a>
                </h3>
                {
                    Object.keys(SocialLinkCategories).map((key, index) => (
                        <div key={index}>
                            <div className="social-link-column-left">
                                <p className="icon-group-title">{key}</p>
                            </div>
                            <div className="social-link-column-right">
                                <SocialLinks SocialLinks={SocialLinkCategories[key]}/>
                            </div>
                        </div>
                    ))
                }
            </div>
        )
    }
}

class SocialLinks extends Component {
    render() {
        const {SocialLinks} = this.props;
        let links = SocialLinks.map(link =>
            <a key={link.id} title={link.title} href={link.url}
               target="_blank" rel="noopener noreferrer" className="social-link">
                <span dangerouslySetInnerHTML={{__html: link.svg}} className="SVGInline"/>
            </a>
        );
        return (
            <p>
                {links}
            </p>
        )
    }
}

export default SocialLinkCategory
