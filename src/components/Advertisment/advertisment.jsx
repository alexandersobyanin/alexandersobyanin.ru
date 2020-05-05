import React, {Component, Fragment} from 'react';

class Advertisment extends Component {
    componentDidMount() {
        (window.adsbygoogle = window.adsbygoogle || []).push({});
    }

    render() {
        return (
            <Fragment>
                <h1>Advertisment</h1>
                <p>Page with banner</p>
                <div className='ad' align={'center'}>
                    <ins className='adsbygoogle'
                         style={{display: 'block'}}
                         data-ad-client="ca-pub-8901069185828760"
                         data-ad-slot="8516842864"
                         data-ad-format='auto'
                         data-full-width-responsive="true"/>
                </div>
            </Fragment>
        );
    }
}

export default Advertisment;
