import React from 'react';

const Options = ({options}) => {
    return (
        options && options.map((type, id) => {
            return <option key={id} value={type.display_name}>{type.display_name}</option>
        })
    )
}

Options.defaultProps = {
    options: []
}

export default Options;
