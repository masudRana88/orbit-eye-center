import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth'
import './Login.css'
const Login = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
    const { loginWirhGoogle, setInputPass, setInputEmail, logInwithEmail, loginWithGithub } = useAuth();

    const getEmail = (e) => {
        setInputEmail(e.target.value)
    }
    const getPass = (e) => {
        setInputPass(e.target.value)
    }
    return (
        <div className="container my-container">
            <div className="row">
                <div className="col-lg-5 col-md-5 col-sm-12 mx-auto">
                    <h2 className="text-center mt-5 mb-3">Please Login</h2>
                    <form onSubmit={handleSubmit(onSubmit)}>

                        <input defaultValue="" placeholder="Your Email" type="email" className="form-control mb-3" {...register("email" , { required: true })} onBlur={getEmail}/>
                        
                        <input defaultValue="" placeholder="Your Password" type="password" className="form-control mb-3" {...register("pass", { required: true })} onBlur={getPass}/>
                        
                        {errors.email && <span>Email field is required</span>}
                        {errors.pass && <span>Email field is required</span>}
                        
                        {/* <input type="submit" /> */}
                        <button className="btn w-100 bg-color-reguler text-light" onClick={logInwithEmail}>Login</button>
                        <p className="mt-1 ms-1">New in Orbit ?<Link to="singup" className="nav-link d-inline">Create an Account </Link></p>
                    </form>
                    <p className="text-center mt-2">Login with</p>
                    <div className="text-center mb-3">
                        <button className="me-1 btn-firebase btn-fb"><i class="fab fa-facebook-f"></i></button>
                        <button className="me-1 btn-firebase btn-gh"  onClick={loginWithGithub}><i class="bi bi-github"></i></button>
                        <button className="btn-firebase btn-go" onClick={loginWirhGoogle}><i class="bi bi-google"></i></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;