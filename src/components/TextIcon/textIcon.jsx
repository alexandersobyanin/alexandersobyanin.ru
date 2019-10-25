import React, {Fragment} from 'react';

const TextIcon = ({IconComponent, title, titleClassName}) => (
    <Fragment>
        <IconComponent title={title}/><span className={titleClassName}> {title}</span>
    </Fragment>
);
export default TextIcon;
