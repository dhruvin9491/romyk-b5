import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import Button from '../../components/common/Button';
import InputField from '../../components/common/InputField';
import { toast } from 'react-toastify';
import { ROLE } from '../../constants/commonConstants';

function Login() {
    const navigate = useNavigate();

    const formik = useFormik({
        initialValues: { email: '', password: '' },
        validationSchema: Yup.object({
            email: Yup.string().email('Enter a valid email').required('Email is required'),
            password: Yup.string().required('Password is required')
        }),
        onSubmit: (values) => {
            const users = JSON.parse(localStorage.getItem("users") || "[]");

            const index = users.findIndex((user) => user.email === values.email);

            if (index === -1 || users[index].password !== values.password) return toast.error("Invalid email or password");

            if(users[index].isDeleted) return toast.info("You account has been deleted. Contact to romyk.support@gmail.com");

            localStorage.setItem("login_credential", JSON.stringify(users[index]));

            toast.success("Login successfully");
            navigate(users[index].role === ROLE.ADMIN ? "/admin/dashboard" : "/");
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