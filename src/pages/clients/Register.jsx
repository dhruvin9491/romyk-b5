import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import Button from '../../components/common/Button';
import InputField from '../../components/common/InputField';
import { toast } from 'react-toastify';

function Register() {
    const navigate = useNavigate();

    const formik = useFormik({
        initialValues: { firstName: '', lastName: '', email: '', password: '', confirmPassword: '' },
        validationSchema: Yup.object({
            firstName: Yup.string().trim().min(2, 'First name must be at least 2 characters').required('First name is required'),
            lastName: Yup.string().trim().min(2, 'Last name must be at least 2 characters').required('Last name is required'),
            email: Yup.string().email('Enter a valid email').required('Email is required'),
            password: Yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
            confirmPassword: Yup.string().oneOf([Yup.ref('password')], 'Passwords must match').required('Please confirm your password')
        }),
        onSubmit: (values) => {
            const users = JSON.parse(localStorage.getItem("users") || "[]");
            
            const index = users.findIndex((user) => user.email === values.email);

            if(index !== -1) return toast.error("Email already in user");

            const newUser = {
                ...values,
                id: crypto.randomUUID(),
                isDeleted: false,
                isActive: false,
                createdAt: new Date().toLocaleString(),
                updatedAt: new Date().toLocaleString(),
                deletedAt: new Date().toLocaleString()
            }

            users.push(newUser);

            localStorage.setItem("users", JSON.stringify(users));
            
            toast.success("Registration successfully");
            navigate("/login");
        }
    });

    return (
        <main className="auth_page">
            <div className="auth_card">
                <p className="auth_eyebrow">Romyk Ice Cream</p>
                <h1>Create your account</h1>
                <p className="auth_intro">Join us for something sweet.</p>
                <form onSubmit={formik.handleSubmit} noValidate>
                    <div className='row'>
                        <div className='col-6'>
                            <InputField label="First name" name="firstName" placeholder="Your first name" formik={formik} />
                        </div>
                        <div className='col-6'>
                            <InputField label="Last name" name="lastName" placeholder="Your last name" formik={formik} />
                        </div>
                        <div className='col-12'>
                            <InputField label="Email address" name="email" type="email" placeholder="you@example.com" formik={formik} />
                        </div>
                        <div className='col-6'>
                            <InputField label="Password" name="password" type="password" placeholder="At least 6 characters" formik={formik} />
                        </div>
                        <div className='col-6'>
                            <InputField label="Confirm password" name="confirmPassword" type="password" placeholder="Repeat your password" formik={formik} />
                        </div>
                        <div className='col-12'>
                            <Button className='mt-3' type="submit">Create account</Button>
                        </div>
                    </div>
                </form>
                <p className="auth_switch ">
                    Already have an account? <Link to="/login">Sign in</Link>
                </p>
            </div>
        </main>
    );
}

export default Register;