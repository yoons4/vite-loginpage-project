import React from 'react';
import PropTypes from 'prop-types';
import style from './InputText.module.css';
const InputText = React.forwardRef(({type, id, value, onChange}, ref) => {
    return(
        <>
            <input type={type} id={id} value={value} ref={ref} onChange={onChange} className={style.section} />
        </>
    );

});

InputText.displayName = 'InputText';
InputText.propTypes = {
    type: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    value: PropTypes.any.isRequired,
    onChange: PropTypes.func.isRequired,
}
export default InputText;
