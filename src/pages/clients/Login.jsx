import React from 'react';
import { Link } from 'react-router-dom';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import Button from '../../components/common/Button';
import InputField from '../../components/common/InputField';

function Login() {
    const formik = useFormik({
        initialValues: { email: '', password: '' },
        validationSchema: Yup.object({
            email: Yup.string().email('Enter a valid email').required('Email is required'),
            password: Yup.string().min(6, 'Password must be at least 6 characters').required('Password is required')
        }),
        onSubmit: (values) => {
            console.log('login form submitted', values);
        }
    });

    return (
        <main className="auth_page">
            <div className="auth_card">
                <p className="auth_eyebrow">Romyk Ice Cream</p>
                <h1>Welcome back</h1>
                <p className="auth_intro">Sign in to continue your order.</p>
                <form onSubmit={formik.handleSubmit} noValidate>
                    <InputField label="Email address" name="email" type="email" placeholder="you@example.com" formik={formik} />
                    <InputField label="Password" name="password" type="password" placeholder="At least 6 characters" formik={formik} />
                    <Button type="submit" className='mt-3'>Sign in</Button>
                </form>
                <p className="auth_switch">
                    Don't have an account? <Link to="/register">Register</Link>
                </p>
            </div>
        </main>
    );
}

export default Login;