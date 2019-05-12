import React from 'react';
import PropTypes from 'prop-types';

const Options = ({options}) => {
    return (
        options && options.map((type, id) => {
            return <option key={id} value={type.display_name}>{type.display_name}</option>
        })
    )
}

Options.propTypes = {
    options: PropTypes.array
};

Options.defaultProps = {
    options: []
}

export default Options;
