import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setUser } from '../utils/userSlice';
import img from '../assets/login.jpg';
import Header from './header';


const RegisterForm = () => {
    
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        password: '',
        phoneNumber:'',
        avatar: null,
    });

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleChange = (e) => {
        if (e.target.name === 'avatar') {
            setFormData({
                ...formData,
                [e.target.name]: e.target.files[0],
            });
        } else {
            setFormData({
                ...formData,
                [e.target.name]: e.target.value,
            });
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const { fullName, email, phoneNumber, password, avatar} = formData;

        try {
            const formDataToSend = new FormData();
            formDataToSend.append('fullName', fullName);
            formDataToSend.append('email', email);
         
            formDataToSend.append('password', password);
            formDataToSend.append('avatar', avatar);
            formDataToSend.append('phoneNumber', phoneNumber);
          

            const response = await axios.post('/api/v1/users/register', formDataToSend, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
            console.log('hello')
            console.log(response);
            console.log(response.data);
            dispatch(setUser(response.data));
            navigate('/account');
        } catch (error) {
            console.error('Registration error:', error);
        }
    };

    return (
        <>
        <Header/>
        <div style={styles.pageContainer}>
            <div style={styles.formContainer}>
            
                <h2 style={{fontWeight: 'bold', color: '#662d91'}}>Register</h2>
                <form onSubmit={handleSubmit}>
                    <div style={styles.inputGroup}>
                        <label style={{fontWeight: 'bold', color: 'white'}}>Full Name</label>
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
                        <label style={{fontWeight: 'bold', color: 'white'}}>Email</label>
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
                    
                    <div style={styles.inputGroup}>
                        <label style={{fontWeight: 'bold', color: 'white'}}>Password</label>
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
                    <div style={styles.inputGroup}>
                        <label style={{fontWeight: 'bold', color: 'white'}}>phone Number</label>
                        <input
                             type="tel"
                            name="phoneNumber"
                            value={formData.phoneNumber}
                            onChange={handleChange}
                            required
                            style={styles.input}
                            placeholder='Phone Number'
                        />
                    </div>
                    <div style={styles.inputGroup}>
                        <label style={{fontWeight: 'bold', color: 'white'}}>Avatar</label>
                        <input
                            type="file"
                            name="avatar"
                            accept="image/*"
                            onChange={handleChange}
                            required
                            style={styles.input}
                        />
                    </div>
                    
                    <button type="submit" style={styles.button}>Register</button>
                </form>
                <p>Already Have An Account? <button onClick={() => navigate('/login')} style={styles.linkButton}>Go to Login</button></p>
            </div>
            <div style={styles.imageContainer}>
                {/* <img src={LOGO} alt="Vector" style={styles.image}/> */}
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
      
        padding: '40px',
        borderRadius: '8px',
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.9)',
        width: '300px',
        color: 'white',
    },
    logo: {
        position: 'absolute',
        top: '-100px',
        left:'10px',
    
        right: '280px',
        width: '200px',
        height: '110px',
        
    },
    inputGroup: {
        marginBottom: '20px',
    },
    input: {
        width: '100%',
        padding: '10px',
        
        margin: '2px 0',
        border: '1px solid #ddd',
        borderRadius: '4px',
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
    imageContainer: {
        marginLeft: '40px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        border: '2px solid back',
    },
    image: {
        width: '600px',
        height: 'auto',
        border: '2px solid back',
    },
};

export default RegisterForm;
