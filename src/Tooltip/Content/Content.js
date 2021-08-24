import React, { useEffect } from 'react';
import classNames from 'classnames';
import Styles from './Content.css';

const propTypes = {
    placement: React.PropTypes.string,
    onDisplay: React.PropTypes.func,
    onDismiss: React.PropTypes.func,
    children: React.PropTypes.node.isRequired,
}

const Content = ({ placement, onDisplay, onDismiss, children, ...otherProps }) => {

    return (
        <div role="tooltip"
             data-testid = "tooltip-content"
             {...otherProps}
             className={classNames(Styles.container,Styles[placement])}
        >
            <span className={Styles.arrow}></span>
            {children}
        </div>
    )
}

Content.defaultProps = {
    placement: 'top',
    onDisplay: () => {},
    onDismiss: () => {},
}

Content.propTypes = propTypes;
Content.displayName = 'Content';

export default Content;