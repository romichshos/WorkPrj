import React from 'react';
import PropTypes from'prop-types';
import { Button } from 'react-bootstrap';

const Link = ({active, children, onClick}) => (
    <Button
        onClick={onClick}
        disabled={active}
        bsStyle="link"
    >
        {children}
    </Button>
)

Link.propTypes = {
    onClick: PropTypes.func.isRequired,
    disabled: PropTypes.bool.isRequired,
    children: PropTypes.node.isRequired
}

export default Link