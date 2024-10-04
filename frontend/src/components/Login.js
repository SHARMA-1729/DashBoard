
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setUser } from '../utils/userSlice';
import img from '../assets/login.jpg';
import Header from './header'

// import Header1 from './header1'

const LoginForm = () => {
    const [formData, setFormData] = useState({
        email: '',
        username: '',
        password: '',
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

        try {
            const response = await axios.post('/api/v1/users/login', formData, {
                withCredentials: true, // to include cookies
            });

            dispatch(setUser(response.data)); // Store user data in Redux
            setSuccess(response.data.message);
            console.log(response.data);

            navigate('/account'); // Navigate after successful login
        } catch (err) {
            setError(err.response?.data?.message || 'Something went wrong');
        }
    };

    return (
      
     <>
    <Header/>
        <div style={styles.pageContainer}>
           
            <div style={styles.formContainer}>
               
                <h2 style={{fontWeight: 'bold', color: '#662d91'}}>Login</h2>
                <form onSubmit={handleSubmit}>
                    <div style={styles.inputGroup}>
                        <label style={{fontWeight: 'bold', color: 'white'}}>Email:</label>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            disabled={formData.username !== ''}
                            style={styles.input}
                            placeholder='Email'
                        />
                    </div>
                    
                    <div style={styles.inputGroup}>
                        <label style={{fontWeight: 'bold', color: 'white'}}>Password:</label>
                        <input
                            type="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            required
                            style={styles.input}
                            placeholder='Password'
                        />
                    </div>
                    <button type="submit" style={styles.button}>Login</button>
                    <p>Don't Have An Account? <button onClick={() => navigate('/register')} style={styles.linkButton}>Register Yourself</button></p>
                </form>
                {error && <p style={styles.errorText}>{error}</p>}
                {success && <p style={styles.successText}>{success}</p>}
            </div>
            <div style={styles.imageContainer}>
             
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
        backgroundSize: 'cover', // Ensure the image covers the entire container
        backgroundPosition: 'center', // Center the image
        padding: '20px',
        backgroundColor: 'rgba(0, 0, 0, 0.5)', // Add black overlay with 50% opacity
        backdropFilter: 'blur(5px)', // Apply blur effect
        zIndex: 1, // Ensure the overlay is on top
        with:'100%',
        height: '100%',
    },
    formContainer: {
        position: 'relative', // Added this to position the logo
        background: '',
        padding: '40px',
        borderRadius: '8px',
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.9)',
        width: '300px',
        color: 'white',
    },
    logo: {
        position: 'absolute', // Position the logo absolutely
        top: '-110px', // Adjust the position according to your design
        right: '380px',
        width: '200px', // Adjust size according to your design
        height: '200px',
        text:'bold'
    },
    inputGroup: {
        marginBottom: '20px',
         text:'bold'
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
    linkButton: {
        background: 'none',
        border: 'none',
        color: '#662d91',
        cursor: 'pointer',
        textDecoration: 'underline',
    },
    errorText: {
        color: 'red',
        marginTop: '10px',
    },
    successText: {
        color: 'green',
        marginTop: '10px',
         text:'bold'
    },
    imageContainer: {
        marginLeft: '40px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    image: {
        width: '400px',
        height: 'auto',
    },
};

export default LoginForm;
