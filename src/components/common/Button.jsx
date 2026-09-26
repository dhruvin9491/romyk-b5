import React from 'react';

function Button({ children, type = 'button', disabled = false, className = '', unstyled = false, ...props }) {
    return (
        <button className={`${unstyled ? '' : 'button btn btn-block text-uppercase font-weight-bold'} ${className}`.trim()} type={type} disabled={disabled} {...props}>
            {children}
        </button>
    );
}

export default Button;