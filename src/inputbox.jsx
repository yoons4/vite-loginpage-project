import React from 'react';
import PropTypes from 'prop-types';
const InputBox = React.forwardRef(({type, id, value, onChange}, ref) => {
    return(
        <input type={type} id={id} value={value} onChange={onChange} ref={ref} />
    );

});

InputBox.displayName = 'InputBox';
InputBox.propTypes = {
    type: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    value: PropTypes.any.isRequired,
    onChange: PropTypes.func.isREquired,
    
}
export default InputBox;
