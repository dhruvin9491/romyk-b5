import React from 'react';

function InputField({ label, name, type = 'text', placeholder, formik, value, onChange, onBlur, error, touched, className = '', inputClassName = '', unstyled = false, ...props }) {

    const fieldProps = formik ? formik.getFieldProps(name) : { name, value, onChange, onBlur };
    const fieldError = formik ? formik.errors[name] : error;
    const hasError = formik ? formik.touched[name] && fieldError : touched && fieldError;
    const inputId = props.id || name;
    const errorId = `${inputId}-error`;

    return (
        <div className={`${unstyled ? '' : 'input_field'} ${className}`.trim()}>
            {
                label &&
                <label htmlFor={inputId}>{label}</label>
            }
            <input id={inputId} className={`${unstyled ? '' : 'form-control'} ${inputClassName}`.trim()} type={type} placeholder={placeholder} {...fieldProps} {...props} aria-invalid={Boolean(hasError)} aria-describedby={errorId} />
            {
                hasError &&
                <span id={errorId} className={`field_error${hasError ? ' field_error_visible' : ''}`} role="alert">
                    {fieldError || '\u00a0'}
                </span>
            }
        </div>
    );
}

export default InputField;