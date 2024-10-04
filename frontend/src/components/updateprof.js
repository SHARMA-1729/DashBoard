import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setUser } from '../utils/userSlice';
import img from '../assets/login.jpg';

const UpdateProfileForm = () => {
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
    });

    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(null);

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(null);
        setSuccess(null);
        console.log('hello from update profile')

        try {
            const response = await axios.patch('/api/v1/users/update-account', formData, {
                withCredentials: true, // to include cookies
            });
            console.log(response)

            dispatch(setUser(response.data)); // Update user data in Redux
            setSuccess('Profile updated successfully!');
            console.log(response.data);

            navigate('/'); // Navigate after successful profile update
        } catch (err) {
            setError(err.response?.data?.message || 'Something went wrong');
        }
    };

    return (
        <>
            <div style={styles.pageContainer}>
                <div style={styles.formContainer}>
                    <h2 style={{ fontWeight: 'bold', color: '#662d91' }}>Update Profile</h2>
                    <form onSubmit={handleSubmit}>
                        <div style={styles.inputGroup}>
                            <label style={{ fontWeight: 'bold', color: 'white' }}>Full Name:</label>
                            <input
                                type="text"
                                name="fullName"
                                value={formData.fullName}
                                onChange={handleChange}
                                required
                                style={styles.input}
                                placeholder='Full Name'
                            />
                        </div>
                        <div style={styles.inputGroup}>
                            <label style={{ fontWeight: 'bold', color: 'white' }}>Email:</label>
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                style={styles.input}
                                placeholder='Email'
                            />
                        </div>
                        <button type="submit" style={styles.button}>Update Profile</button>
                    </form>
                    {error && <p style={styles.errorText}>{error}</p>}
                    {success && <p style={styles.successText}>{success}</p>}
                </div>
            </div>
        </>
    );
};

const styles = {
    pageContainer: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
        backgroundImage: `url(${img})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        padding: '20px',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        backdropFilter: 'blur(5px)',
        zIndex: 1,
        width: '100%',
        height: '100%',
    },
    formContainer: {
        position: 'relative',
       
        padding: '40px',
        borderRadius: '8px',
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.9)',
        width: '300px',
        color: 'white',
    },
    inputGroup: {
        marginBottom: '20px',
    },
    input: {
        width: '100%',
        padding: '10px',
        margin: '8px 0',
        border: '1px solid #ddd',
        borderRadius: '4px',
        color: 'black',
    },
    button: {
        background: '#ff9900',
        color: '#fff',
        padding: '10px 20px',
        border: 'none',
        borderRadius: '4px',
        cursor: 'pointer',
        width: '100%',
    },
    errorText: {
        color: 'red',
        marginTop: '10px',
    },
    successText: {
        color: 'green',
        marginTop: '10px',
    },
};

export default UpdateProfileForm;
